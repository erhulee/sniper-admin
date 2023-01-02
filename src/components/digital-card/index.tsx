type Props = {
  icon?: JSX.Element;
  value: number;
  specific: string;
  direction: "vertical" | "horizontal";
  unit?: string;
  className?: string;
};
function DigitalCard(props: Props) {
  const { icon, value, specific, direction, className, unit } = props;
  return (
    <div className={`${className} flex flex-col justify-center items-center `}>
      <div>
        <span className=" text-2xl font-semibold ">{value}</span>
        <span className=" text-sm ml-1">{unit} </span>
      </div>
      <div>
        <span> {icon}</span>
        <span className=" text-sm ml-1 text-gray-600" >{specific}</span>
      </div>
    </div>
  );
}
export default DigitalCard;
