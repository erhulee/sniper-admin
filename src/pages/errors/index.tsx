import ErrorChart from "./error-chart";
import {  Select, Table, TimePicker } from 'antd';
import { DefaultOptionType } from "antd/es/select";
import styles from "./index.module.scss"
import ErrorListTable from "./error-list-table";
const RangePicker = TimePicker.RangePicker
const options:DefaultOptionType[]  = [
    {
        label:"分钟",
        value:"minute"
    },
    {
        label:"小时",
        value:"hour",
    },
    {
        label:"天",
        value:"day",
    },
    {
        label:"月",
        value:"month"
    }
]



function Errors(){
    return (
        <div className={styles.page} >
            <div className={styles.filter} >
                <RangePicker placeholder={['开始时间', "结束时间"]}  />
                <Select options={options} placeholder="时间粒度" style={{marginLeft:"10px"}} />
            </div>
            <ErrorChart></ErrorChart>
            <ErrorListTable></ErrorListTable>
        </div>
    )
}

export default Errors