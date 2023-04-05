import { useLocation } from "react-router-dom";
import { queryErrorDetail, queryIssueData } from "@/api/error";
import { useQuery } from "react-query";
import QueryOuter from "@/wrapper/QueryOuter";

import ErrorStack from "./components/stack-card";
import ActionManager from "./components/actionManager";
import IssueDetail from "./components/issueDetail";
import { globalFilterStore } from "@/store";
import RrwebPlayer from "./components/rrwebPlayer";
import Modal from "antd/es/modal/Modal";
import useModal from "@/hooks/useModal";
function query2Object(search: string) {
  const obj: any = {};
  search.split("=").forEach((_, index, array) => {
    if (index % 2 !== 0) return;
    obj[array[index]] = array[index + 1];
  });
  return obj;
}

function JsErrorPanel() {
  const issueId = query2Object(useLocation().search.substr(1)).issueId;
  const [visible, open, close] = useModal();
  const issueQuery = useQuery({
    queryKey: "issue-info",
    queryFn: () => queryErrorDetail(issueId),
    initialData: {
      data: {
        message: "",
        resolveTime: 0,
        stack: "",
        status: 0,
        _id: "",
      },
    },
  });

  const issueDetailQuery = useQuery({
    queryKey: [
      "issue-detail",
      {
        issueId: issueId,
        startDate: globalFilterStore.startDate,
        endDate: globalFilterStore.endDate,
      },
    ],
    queryFn: ({ queryKey }) => {
      const { startDate, endDate, issueId } = queryKey[1] as any;
      return queryIssueData(issueId, startDate, endDate);
    },
    initialData: {
      occurrences_count: 0,
      impacts_count: 0,
      trendData: [],
      paths: [],
    },
  });

  return (
    <div className="flex ">
      <div
        style={{ flexGrow: "3", flexBasis: "1" }}
        className="flex-1 border-r-primary-100 border-solid border-r-1 border-y-0 border-l-0  pr-5 "
      >
        <ActionManager
          issueId={issueQuery.data?.data._id || ""}
          name={issueQuery.data?.data.message || "unknown"}
          status={issueQuery.data?.data.status || 0}
          resolvedTime={issueQuery.data?.data.resolveTime || 0}
          handleWatchVideo={() => {
            open();
          }}
        ></ActionManager>
        <QueryOuter
          isSuccess={issueQuery.isSuccess}
          isFetching={issueQuery.isFetching}
          isError={issueQuery.isError}
        >
          <ErrorStack stack={issueQuery.data?.data.stack ?? ""}></ErrorStack>
        </QueryOuter>
      </div>

      <div style={{ flexGrow: "2", flexBasis: "1" }} className="ml-5 flex-1">
        <IssueDetail {...issueDetailQuery.data}></IssueDetail>
      </div>

      <Modal
        open={visible}
        onCancel={close}
        width={"1200px"}
        title="错误录屏"
        footer={null}
      >
        <RrwebPlayer></RrwebPlayer>
      </Modal>
    </div>
  );
}
export default JsErrorPanel;
