import { useEffect } from "react";
import { useRef } from "react";
import rrwebPlayer from "rrweb-player";
import "rrweb-player/dist/style.css";

function RrwebPlayer(props: { stack: any[] }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current != null) {
      (ref.current as unknown as HTMLDivElement).innerHTML = "";
    }
    new rrwebPlayer({
      target: ref.current as any, // 可以自定义 DOM 元素
      // 配置项
      props: {
        events: props.stack,
      },
    });
  });

  return (
    <div
      ref={ref}
      className="  h-full flex justify-center items-center "
      style={{ height: "700px" }}
    ></div>
  );
}

export default RrwebPlayer;
