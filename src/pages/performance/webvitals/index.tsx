import { useQuery } from "react-query";
import { useSnapshot } from "valtio";
import { getWebVitals } from "@/api/performance";
import { tooltipsMap } from "./constant";
import { globalFilterStore } from "@/store";
import WebVitalChart from "./components/webvital-chart";
import { useState } from "react";
import { Select } from "antd";
import QueryOuter from "@/wrapper/QueryOuter";
import { dateFormat, digitalFormat } from "@/utils";
const webvitalCategory = ["TTFB", "CLS", "FID", "LCP", "FCP"];

function PerformanceInner() {
  const globalFilterSnap = useSnapshot(globalFilterStore);
  const [displayFilter, setDisplayFilter] = useState(webvitalCategory);
  const startDate = globalFilterStore.startDate.valueOf();
  const endDate = globalFilterStore.endDate.valueOf();
  const query = useQuery({
    queryKey: ["webvital", globalFilterSnap, startDate, endDate],
    queryFn: () => getWebVitals(startDate, endDate),
    select: (response) =>
      response?.data
        ?.map((webvital) => {
          const { trendData, category: title, path_performance } = webvital;
          const countAll = trendData.reduce((p, c) => p + c.count, 0);
          const countByDegree = trendData.reduce(
            (p, c) => {
              p[c.degree] += c.count;
              return p;
            },
            {
              good: 0,
              ["needs-improvement"]: 0,
              bad: 0,
            }
          );
          const proportionEntry = Object.entries(countByDegree);
          return {
            title,
            name: tooltipsMap[title].name,
            tooltip: tooltipsMap[title].detail,
            trendData: trendData.map((data) => ({
              ...data,
              date: dateFormat(data.date),
            })),
            proportion: proportionEntry.reduce(
              (pre, [degree, count]) => ({
                ...pre,
                [degree]: digitalFormat(count / countAll),
              }),
              {}
            ),
            path_performance,
          };
        })
        .filter((i: any) => displayFilter.includes(i.title)),
  });

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
          options={webvitalCategory.map((item) => ({
            label: item,
            value: item,
          }))}
          onChange={(e) => {
            setDisplayFilter(e);
          }}
        />
      </div>
      <QueryOuter queryClient={query}>
        <div className=" grid grid-cols-2 gap-4">
          {query.data?.map((cardData: any) => {
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
      </QueryOuter>
    </div>
  );
}

export default function WebVitalPerformance() {
  return <PerformanceInner />;
}
