import getBehavior, {
  BehaviorCategory,
  BehaviorData,
  Trend,
} from "@/api/behavior";
import Loading from "@/components/loading";
import useRegisterGlobalFilter from "@/hooks/useRegisterGlobalFilter";
import { globalFilterStore } from "@/store";
import dayjs from "dayjs";
import { useQuery } from "react-query";
import DigitalRatioCard from "../../components/digital-ratio-card";
import TrendCard from "../../components/trend-card";
import StackBar from "./bar-chart";

function generateCoreData(data?: BehaviorData) {
  if (data == null) return [];
  const core = data.core;
  const keys = Object.keys(core) as unknown as [
    "PV" | "UV" | "BounceRate" | "New"
  ];
  const titleMap: {
    [key in BehaviorCategory]: string;
  } = {
    PV: "浏览量(PV)",
    BounceRate: "跳出率",
    UV: "访客数(UV)",
    New: "新用户",
  };

  return keys.map((key: "PV" | "UV" | "BounceRate" | "New") => {
    const { rate, value, impact } = core[key].value;
    const ratio_number = Number.parseInt(rate);
    return {
      title: titleMap[key],
      value: core[key].value.value,
      des: "较上个周期",
      ratio: core[key].value.rate,
      trend: ratio_number > 0 ? Trend.More : Trend.Less,
      impact,
    };
  });
}

function UserBehavior() {
  const { data, isFetching, refetch } = useQuery({
    queryKey: [
      "behavior",
      globalFilterStore.startDate,
      globalFilterStore.endDate,
    ],
    queryFn: ({ queryKey }) => {
      const startDate = dayjs(queryKey[1]).valueOf();
      const endDate = dayjs(queryKey[2]).valueOf();
      return getBehavior(startDate, endDate);
    },
  });
  useRegisterGlobalFilter(refetch);

  if (isFetching) return <Loading></Loading>;
  return (
    <div>
      <div className=" flex justify-around bg-white py-8">
        {generateCoreData(data?.data).map((d) => (
          <DigitalRatioCard {...d}></DigitalRatioCard>
        ))}
      </div>

      <div className="my-4 bg-white p-8">
        <div className="font-semibold text-lg mb-4">页面浏览量(PV)分布图</div>
        <StackBar data={data?.data.barData || []}></StackBar>
      </div>

      <div className="my-4 bg-white p-8">
        <div className="font-semibold text-lg mb-4">页面跳出率分布图</div>
        <div className=" grid grid-cols-3 gap-4 mt-4 ">
          {data?.data.trendData.map((data) => (
            <TrendCard data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserBehavior;
