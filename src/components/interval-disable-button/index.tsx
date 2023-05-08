import { Button } from "antd";
import { useMemo, useRef, useState } from "react";

type Props = {
  id: string; // 避免项目里有多个
  interval: number;
  onClick: () => void;
};
class Timer {
  static prefix = "__INTERVAL_BUTTON__";
  id: string;
  interval: number; // ms
  onTick: (current: number) => void;
  constructor(interval: number, onTick: (current: number) => void, id: string) {
    this.interval = interval;
    this.id = id;
    this.onTick = onTick;
    this.init();
  }
  get key() {
    return Timer.prefix + this.id;
  }
  get enable() {
    let lastTimeString = localStorage.getItem(this.key);
    console.log("lastTimeString:", lastTimeString);
    if (lastTimeString == null) return true;
    const lastTime = Number(lastTimeString);
    const nowTime = Date.now().valueOf();
    const duration = nowTime - lastTime;
    if (duration >= this.interval) return true;
    return false;
  }
  get diff() {
    let lastTimeString = localStorage.getItem(this.key) || "0";
    const lastTime = Number(lastTimeString);
    const nowTime = Date.now().valueOf();
    return nowTime - lastTime;
  }
  // 检查是否还有没有消耗的时间
  init() {
    let lastTimeString = localStorage.getItem(this.key);
    if (lastTimeString == null) return;
    // 没有数据

    // 如果有数据 & 没有过期
    if (this.diff <= this.interval) {
      this.onTick(this.diff);
      const instance = setInterval(() => {
        this.onTick(this.diff);
        if (this.enable) {
          clearInterval(instance);
        }
      }, 1000);
    }
  }
  // 开始计时
  trigger() {
    if (!this.enable) return;
    // 上一次记录的时间
    localStorage.setItem(this.key, "" + Date.now().valueOf());
    this.onTick(this.diff);
    const instance = setInterval(() => {
      this.onTick(this.diff);
      if (this.enable) {
        clearInterval(instance);
      }
    }, 1000);
  }
}

export default function IntervalDisableButton(
  props: React.PropsWithChildren<Props>
) {
  const { interval, onClick, children } = props;
  const [duration, setDuration] = useState(0);
  const timer = useMemo(
    () =>
      new Timer(
        interval,
        (diff) => {
          setDuration(diff);
        },
        props.id
      ),
    []
  );

  function handleClick() {
    if (timer.enable) {
      timer.trigger();
      onClick();
    }
  }

  return (
    <Button onClick={handleClick} disabled={!timer.enable}>
      {timer.enable
        ? children
        : ((interval - duration) / 1000).toFixed(0) + "s"}
    </Button>
  );
}
