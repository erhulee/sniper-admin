import { useQuery } from "react-query";
import { useSnapshot } from "valtio";
import { globalFilterStore } from "../../store";
import WebVitalChart from "./components/WebVitalChart";
import { getWebVitals } from "@/api/performance";
import dayjs from "dayjs";
import Loading from "@/components/loading";
import { GlobalMemoWrap } from "@/components/global-filter";
import { subscribeKey } from "valtio/utils";
import { tooltipsMap } from "./constant";

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
    // enabled: false,
  });

  // subscribeKey(globalFilterStore, "selectedProject", () => {
  //   query.refetch();
  //   console.log("refetch");
  // });

  const { isSuccess, data, isFetching } = query;

  if (isSuccess) {
    const webVitals: any[] = data?.data;
    cardsData = webVitals.map((webvital) => {
      const { category, trendData, path_performance } = webvital;
      return {
        title: category,
        tooltip: tooltipsMap[category],
        trendData: trendData.map((data: any) => ({
          ...data,
          date: dayjs(data.date).format("YYYY-MM-DD HH时"),
        })),
        proportion: computeProportion(trendData),
        path_performance: path_performance,
      };
    });
  }

  return (
    <div className="flex flex-col h-full">
      <div className=" text-xl font-semibold mb-4">Web Vital 概览</div>

      {isFetching && <Loading></Loading>}
      {!isFetching && isSuccess && (
        <div className=" flex flex-col gap-4">
          {cardsData.map((cardData: any) => {
            return (
              <WebVitalChart
                key={cardData.title}
                title={cardData.title}
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

export default function Performance() {
  return (
    <GlobalMemoWrap keys={["startDate", "endDate"]}>
      <PerformanceInner />
    </GlobalMemoWrap>
  );
}
