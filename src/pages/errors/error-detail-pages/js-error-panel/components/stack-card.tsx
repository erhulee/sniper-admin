import Stacktracey from "stacktracey";
// import sourceMap from "source-map";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import CodeEditor from "@/components/code-editor";
import { Collapse } from "antd";
const sourceMap = (window as any).sourceMap;
const { Panel } = Collapse;
function ErrorStackItem(props: {
  file: string;
  fileName: string;
  callee: string;
  line?: number;
  column?: number;
  shouldParse: boolean;
  index: number;
}) {
  const [loading, setLoading] = useState(false);
  const [originCode, setOriginCode] = useState("");
  const [errorLine, setErrorLine] = useState(-1);
  const { file, fileName, callee, line = 0, column = 0 } = props;

  async function getHTTPFile() {
    const data = await axios.get(
      `https://bdul0j-files.oss.laf.dev/${fileName}.map`
    );
    return data;
  }
  useEffect(() => {
    if (props.shouldParse) {
      parse();
    }
  }, []);

  async function parse() {
    setLoading(true);
    const data: any = await getHTTPFile();
    const consumer = await new sourceMap.SourceMapConsumer(data);
    const originalPosition: any = consumer.originalPositionFor({
      line: line,
      column: column,
    });
    consumer.computeColumnSpans();
    const sourceContent = consumer.sourceContentFor(originalPosition.source);
    setOriginCode(sourceContent);
    setErrorLine(originalPosition.line);
    setLoading(false);
  }

  return (
    <div className={"bg-gray-100 mt-2 p-2 px-4"}>
      <div className=" flex flex-row items-center py-1 bg-gray-300">
        <div className=" ml-2 text-sm">错误信息:{callee}</div>
        {props.shouldParse && (
          <div className=" ml-2 text-sm">错误行:{errorLine}</div>
        )}
      </div>

      {props.shouldParse && <CodeEditor readonly={true} value={originCode} />}
    </div>
  );
}
function ErrorStack(props: { stack: string }) {
  const tracey = new Stacktracey(props.stack);
  console.log(tracey);
  return (
    <div className="mt-7">
      <div className="font-semibold text-indigo-900">错误堆栈</div>
      <div className="mt-4 font-medium text-sm ">
        <Collapse>
          {tracey.items.map((item, index) => {
            return (
              <Panel header={item.beforeParse} key={index}>
                <ErrorStackItem
                  shouldParse={index <= 3}
                  {...item}
                  index={index}
                ></ErrorStackItem>
              </Panel>
            );
          })}
        </Collapse>
      </div>
    </div>
  );
}

export default ErrorStack;
