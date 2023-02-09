import {CopyOutlined} from "@ant-design/icons"
import { message } from "antd";
function CopyContent(props:{content?: string}){
    function copy(content:string){
        navigator.clipboard.writeText(content);
       
    }
    if(props.content){
        return (
            <div className=" bg-white text-black leading-4 p-2 mr-2 rounded" >
                {props.content}

                <CopyOutlined className=" ml-2 hover:opacity-90" onClick={()=>{
                    copy(props.content?? "")
                    message.success("appid 已经复制到粘贴板")
                    
                }} />
            </div>
        )
    }

    return null
}

export default CopyContent