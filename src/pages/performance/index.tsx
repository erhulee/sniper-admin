import { useQuery } from "react-query";
import { useSnapshot } from "valtio";
import { globalFilterStore } from "../../store";
import WebVitalChart from "./components/WebVitalChart";
import { getWebVitals } from "@/api/performance";
import dayjs from "dayjs";
import Loading from "@/components/loading";
const tooltipsMap: Record<string, string> = {
  TTFB: "浏览器开始收到服务器响应数据的时间(后台处理时间+重定向时间)",
  LCP: "最大内容绘制，测量加载性能。为了提供良好的用户体验，LCP 应在页面首次开始加载后的2.5 秒内发生。",
  FID: "首次输入延迟，测量交互性。为了提供良好的用户体验，页面的 FID 应为100 毫秒或更短。",
  CLS: "累积布局偏移，测量视觉稳定性。为了提供良好的用户体验，页面的 CLS 应保持在 0.1. 或更少。",
};

function computeProportion(trendData: any[]) {
  const resultCount: any = {
    good: 0,
    ["needs-improvement"]: 0,
    bad: 0,
  };

  let countAll = 0;
  trendData.forEach((data) => {
    const { dgree, count } = data;
    resultCount[dgree] += count;
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
export default function Performance() {
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
  });

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
      <div className=" text-xl font-semibold">Web Vital 概览</div>

      {isFetching && <Loading></Loading>}
      {!isFetching && isSuccess && (
        <div className=" grid grid-cols-3 mt-10 gap-10">
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
