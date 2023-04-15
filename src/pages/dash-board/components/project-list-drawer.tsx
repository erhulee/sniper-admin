import { Button, Drawer } from "antd";
import { List } from "antd";
type DataType = { id: string; content: string };
type Props = {
  list: Array<DataType>;
  onDelete: (id: string) => void;
  onAdd: () => void;
  visible: boolean;
  close: () => void;
};
function ProjectListDrawer(props: Props) {
  const { list, onDelete, visible, onAdd } = props;
  return (
    <Drawer open={visible} title="站点管理" onClose={props.close}>
      <List
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                size="small"
                type="primary"
                className="bg-red-800"
                onClick={() => onDelete(item.id)}
              >
                删除
              </Button>,
            ]}
          >
            {item.content}
          </List.Item>
        )}
      ></List>
      <Button type="primary" className="w-full mt-4" onClick={onAdd}>
        添加站点
      </Button>
    </Drawer>
  );
}
export default ProjectListDrawer;
