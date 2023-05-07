import { Button } from "antd";

type Props = {
  id: string; // 避免项目里有多个
  interval: number;
  onClick: () => void;
};
const prefix = "__INTERVAL_BUTTON__";

function handleClick(callback: () => void, id: string) {
  const lastTimeString = localStorage.getItem(prefix + id);
  if(lastTimeString == null)

}

function IntervalDisableButton(props: React.PropsWithChildren<Props>) {
  const { interval, onClick, children } = props;
  return <Button>{children}</Button>;
}
