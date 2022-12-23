import { Modal,Form,Input, Select } from "antd";
import styles from "./index.module.scss"
type Props = {
    visible: boolean,
    open:   ()=>void,
    close:  ()=>void,
}
const {TextArea} = Input
export default function ProjectFormModal(props: Props){
    const {visible,  close} = props;
    const [form] = Form.useForm(); 
    const handleSave = ()=>{
        close()
    }
    const handleCancel = ()=>{
        form.resetFields();
        close();
    }
    return(
        <Modal open={visible} title={"添加项目"} okType="primary" okText="保存" cancelText="取消" className={styles.modal} onOk={handleSave} onCancel={handleCancel} >
            <div style={{padding:"5px", marginTop:"10px"}} >
                <Form labelCol={{span:4}} labelAlign="left" form={form} >
                    <Form.Item label="名称" >
                        <Input></Input>
                    </Form.Item>
                    <Form.Item label="类型" >
                        <Select options={[
                            {
                                label:"网站",
                                value:"web-site"
                            },
                            {
                                label:"微信小程序",
                                value:"wx-app"
                            }
                        ]} ></Select>
                    </Form.Item>
                    <Form.Item label="描述" >
                        <TextArea rows={2} placeholder="100字内简短描述" maxLength={100} />    
                    </Form.Item>
                </Form>
            </div>

        </Modal>
    )
}