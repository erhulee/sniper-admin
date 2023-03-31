import Loading from "@/components/loading";

type Props = {
  isSuccess: boolean;
  isFetching: boolean;
  isError: boolean;
};
function QueryOuter(props: React.PropsWithChildren<Props>) {
  const { isFetching, isSuccess, children, isError } = props;
  if (isFetching) return <Loading></Loading>;
  if (isError) return <div>Some Error</div>;
  if (isSuccess) return <>{children}</>;
  return <div>Fallback</div>;
}

export default QueryOuter;
