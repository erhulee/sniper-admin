
import { QuestionCircleOutlined } from "@ant-design/icons";
import {Checkbox, Radio, Tooltip} from "antd";
import BluteChart from "./BluteChart";
import IconBad from "./icons/IconBad";
import IconNormal from "./icons/IconNormal";
import IconSmile from "./icons/IconSmile";
import TrendChart from "./TrendChart";

type WebVitalChartProps = {
    title:string,
    tooltip:string,
    proportion:{
        good: number,
        general: number,
        bad: number
    }
    trendData?:any,
    routeList?:any,
    className?: string
}

function SelectItem(){
    return(
        <div className="flex border-t border-t-gray-light py-4" >
            <Radio className="mr-4"  />
            <div className="flex-row flex justify-between w-full  " >
                <span className=" hover:text-primary cursor-pointer font-semibold" >/prodecution/sda</span>
                <BluteChart data={{
                    good:12,
                    normal:23,
                    bad:9,
                }} className=" w-60" ></BluteChart>
            </div>
        </div>
    )
}

function WebVitalChart(props:WebVitalChartProps){
    const {title, tooltip, className, proportion} = props;
    const good = (proportion.good * 100).toFixed(0);
    const general = (proportion.general * 100).toFixed(0);
    const bad = (proportion.bad * 100).toFixed(0);
    return (
        <div className={`${className} border  border-gray-light rounded-lg px-8 py-4`}  >
            <div className="" >
            <div className="text-gray-default flex flex-row items-center" >
                <span className="font-semibold text-gray-dark mr-4" >{title}</span>
                <Tooltip title={tooltip} >
                <QuestionCircleOutlined></QuestionCircleOutlined>
                </Tooltip>
      
            </div>
            <div className="flex flex-row items-center" >
                <span className="flex flex-row items-center mr-8" >
                    <IconSmile></IconSmile>
                    <span className="ml-1" > 良好 {good}%</span>
                </span>
                <span className="flex flex-row items-center mr-8" >
                    <IconNormal ></IconNormal>
                    <span className="ml-2" > 一般 {general}%</span>
                </span>
                <span className="flex flex-row items-center mr-8" >
                    <IconBad></IconBad>
                    <span className="ml-2"> 较差 {bad}%</span>
                </span>
            </div>
            <div className="my-4" >
                <TrendChart></TrendChart>
           
            </div>

            <SelectItem></SelectItem>
            
            </div>
        </div>
    )
}
export default WebVitalChart