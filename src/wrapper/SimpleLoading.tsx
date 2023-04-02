function SimpleLoading(props: React.PropsWithChildren<{ loading: boolean }>) {
  const { loading, children } = props;
  return (
    <div>
      <div
        className="absolute top-0 bottom-0 right-0 left-0 cursor-not-allowed"
        style={{ background: "gray" }}
      ></div>

      {children}
    </div>
  );
}

export default SimpleLoading;
