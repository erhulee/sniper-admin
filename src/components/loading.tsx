function Loading(props: { content?: string }) {
  const { content = "数据正在加载中" } = props;

  return (
    <div
      className="w-full min-h-full flex-1 flex justify-center items-center flex-col bg-white  p-8"
      title="5"
    >
      <svg
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        width="24px"
        height="30px"
        viewBox="0 0 24 30"
      >
        <rect x="0" y="13" width="4" height="5" fill="#333">
          <animate
            attributeName="height"
            attributeType="XML"
            values="5;21;5"
            begin="0s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="13; 5; 13"
            begin="0s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="10" y="13" width="4" height="5" fill="#333">
          <animate
            attributeName="height"
            attributeType="XML"
            values="5;21;5"
            begin="0.15s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="13; 5; 13"
            begin="0.15s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="20" y="13" width="4" height="5" fill="#333">
          <animate
            attributeName="height"
            attributeType="XML"
            values="5;21;5"
            begin="0.3s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="13; 5; 13"
            begin="0.3s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>

      <div className="  text-lg mt-4 text-gray-500 "> {content}</div>
    </div>
  );
}

export default Loading;
