import { deleteSourceMap, querySourceMapList } from "@/api/error";
import useModal from "@/hooks/useModal";
import QueryOuter from "@/wrapper/QueryOuter";
import { Button } from "antd";
import { useQuery } from "react-query";
import SourceMapTable from "./components/SourceMapTable";
import UploadModal from "./components/UploadModal";

function SourceMap() {
  const [visible, open, close] = useModal();
  const query = useQuery({
    queryFn: querySourceMapList,
    queryKey: "SourceMapList",
    initialData: {
      data: [],
    },
    cacheTime: Number.MAX_SAFE_INTEGER,
  });

  async function handleDelete(id: string, fileName: string) {
    await deleteSourceMap(id, fileName);
    query.refetch();
  }
  return (
    <div className=" h-full">
      <div className="flex justify-end mb-4">
        <div className="flex-1 font-semibold text-lg">SourceMap管理</div>
        <Button type="primary" onClick={open}>
          手动上传
        </Button>
        <Button type="link">{"插件自动上传>"}</Button>
      </div>

      <div className=" h-full">
        <QueryOuter
          isError={query.isError}
          isFetching={query.isFetching}
          isSuccess={query.isSuccess}
        >
          <SourceMapTable
            data={query.data?.data}
            deleteFile={handleDelete}
          ></SourceMapTable>
        </QueryOuter>
      </div>

      <UploadModal
        visible={visible}
        close={close}
        refetch={query.refetch}
      ></UploadModal>
    </div>
  );
}
export default SourceMap;
