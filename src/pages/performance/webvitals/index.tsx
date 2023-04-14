import { useQuery } from "react-query";
import { useSnapshot } from "valtio";
import { getWebVitals } from "@/api/performance";
import dayjs from "dayjs";
import Loading from "@/components/loading";
import { GlobalMemoWrap } from "@/components/global-filter";
import { tooltipsMap } from "./constant";
import { globalFilterStore } from "@/store";
import WebVitalChart from "./components/webvital-chart";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Select } from "antd";
import { useState } from "react";

function computeProportion(trendData: any[]) {
  const resultCount: any = {
    good: 0,
    ["needs-improvement"]: 0,
    bad: 0,
  };

  let countAll = 0;
  trendData.forEach((data) => {
    const { degree, count } = data;
    resultCount[degree] += count;
    countAll += count;
  });

  return {
    good: (resultCount.good / countAll).toFixed(2),
    ["needs-improvement"]: (
      resultCount["needs-improvement"] / countAll
    ).toFixed(2),
    bad: (resultCount.bad / countAll).toFixed(2),
  };
}

function PerformanceInner() {
  const globalFilterSnap = useSnapshot(globalFilterStore);

  const [displayFilter, setDisplayFilter] = useState([
    "TTFB",
    "CLS",
    "FID",
    "LCP",
    "FCP",
  ]);
  let cardsData: any = [];

  const query = useQuery({
    queryKey: ["webvital", globalFilterSnap],
    queryFn: ({ queryKey }) => {
      const snap = queryKey[1];
      if (typeof snap == "string") return;
      const startDate = snap.startDate.valueOf();
      const endDate = snap.endDate.valueOf();
      return getWebVitals(startDate, endDate);
    },
  });

  const { isSuccess, data, isFetching } = query;

  if (isSuccess) {
    const webVitals: any[] = data?.data;
    cardsData = webVitals.map((webvital) => {
      const { category, trendData, path_performance } = webvital;
      return {
        title: category,
        name: tooltipsMap[category].name,
        tooltip: tooltipsMap[category].detail,
        trendData: trendData.map((data: any) => {
          return {
            ...data,
            date: dayjs(data.date).format("MM/DD-HH时"),
          };
        }),
        proportion: computeProportion(trendData),
        path_performance: path_performance,
      };
    });
  }

  return (
    <div className="flex flex-col h-full">
      <div
        className=" text-xl font-semibold mb-4 
       flex justify-between items-center
      bg-white py-4 px-4 border border-solid  rounded-md border-gray-50"
      >
        Web Vital 概览
        <Select
          style={{ width: 250 }}
          mode="multiple"
          maxTagCount="responsive"
          value={displayFilter}
          options={["TTFB", "CLS", "FID", "LCP", "FCP"].map((i) => ({
            label: i,
            value: i,
          }))}
          onChange={(e) => {
            setDisplayFilter(e);
          }}
        />
      </div>
      {isFetching && <Loading></Loading>}
      {!isFetching && isSuccess && (
        <div className=" grid grid-cols-2 gap-4">
          {cardsData
            .filter((i: any) => displayFilter.includes(i.title))
            .map((cardData: any) => {
              return (
                <WebVitalChart
                  key={cardData.title}
                  title={cardData.title}
                  name={cardData.name}
                  tooltip={cardData.tooltip}
                  proportion={cardData.proportion}
                  trendData={cardData.trendData}
                  path_performance={cardData.path_performance}
                ></WebVitalChart>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default function WebVitalPerformance() {
  return (
    <GlobalMemoWrap keys={["startDate", "endDate"]}>
      <PerformanceInner />
    </GlobalMemoWrap>
  );
}
