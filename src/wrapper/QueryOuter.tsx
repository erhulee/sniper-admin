import Loading from "@/components/loading";
import { UseQueryResult } from "react-query";

type Props = {
  isSuccess?: boolean;
  isFetching?: boolean;
  isError?: boolean;
  queryClient?: UseQueryResult[] | UseQueryResult;
};
function QueryOuter(props: React.PropsWithChildren<Props>) {
  const { isFetching, isSuccess, children, isError, queryClient } = props;
  if (queryClient) {
    const arr = Array.isArray(queryClient) ? queryClient : [queryClient];
    const isFetching = arr.some((query) => query?.isFetching);
    const isError = arr.some((query) => query?.isError);
    const isSuccess = arr.every((query) => query?.isSuccess);
    if (isFetching) return <Loading></Loading>;
    if (isError) return <div>Some Error</div>;
    if (isSuccess) return <>{children}</>;
    return <div>Fallback</div>;
  }
  if (isFetching) return <Loading></Loading>;
  if (isError) return <div>Some Error</div>;
  if (isSuccess) return <>{children}</>;
  return <div>Fallback</div>;
}

export default QueryOuter;
