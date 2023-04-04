import { IssueStatus } from "@/api/error";
import { Button, Select, Tag } from "antd";
import dayjs from "dayjs";
type Props = {
  status: IssueStatus;
  name: string;
  resolvedTime: number;
  lastHappenedTime?: number;
};
function ActionManager(props: Props) {
  const { status, name, resolvedTime, lastHappenedTime } = props;
  const isResolved = Boolean(status);
  return (
    <div className="flex justify-between">
      <div className=" flex flex-row justify-between w-full">
        <div className="flex-1">
          <div className=" text-indigo-900 font-semibold">
            {isResolved && <Tag>已经解决</Tag>}
            {name}
          </div>
          <div className=" flex mt-1 flex-col text-sm ">
            <div className="mb-1">
              <span className=" inline-block w-20"> 上一次发生:</span>
              {dayjs(lastHappenedTime).format("YYYY-MM-DD HH:mm:ss")}
            </div>
            {isResolved && (
              <div>
                <span className=" inline-block w-20"> 解决时间:</span>
                {dayjs(resolvedTime).format("YYYY-MM-DD HH:mm:ss")}
              </div>
            )}
          </div>
        </div>

        <div className="mt-2">
          <Select
            className=" w-32"
            defaultValue={status}
            options={[
              {
                label: "解决",
                value: IssueStatus.RESOLVED,
              },
              {
                label: "未解决",
                value: IssueStatus.UNRESOLVE,
              },
            ]}
          ></Select>

          <Button
            type="link"
            className=" text-indigo-400 hover:text-indigo-300"
          >
            查看录屏
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ActionManager;
