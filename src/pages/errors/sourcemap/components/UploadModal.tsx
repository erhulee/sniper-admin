import { Modal, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { uploadSourceMap } from "@/api/error";
import { globalFilterStore } from "@/store";
import { useRef } from "react";
import { useState } from "react";

const Dragger = Upload.Dragger;

function UploadModal(props: {
  visible: boolean;
  close: () => void;
  refetch: () => void;
}) {
  const { visible, close, refetch } = props;
  const fileRef = useRef<any[]>([]);
  const [loading, setLoading] = useState(false);
  const handleSave = async () => {
    setLoading(true);
    await Promise.all(
      fileRef.current.map((i: any) =>
        uploadSourceMap(i, globalFilterStore.selectedProject?._id || "")
      )
    );
    setLoading(false);
    close();
    refetch();
  };
  return (
    <Modal
      open={visible}
      onCancel={close}
      title="文件上传"
      onOk={handleSave}
      okText="上传"
      cancelText="取消"
    >
      <Dragger
        beforeUpload={(file) => {
          fileRef.current.push(file);
          return false;
        }}
        onRemove={(file) => {
          const index = fileRef.current.indexOf(file);
          const newFileList = fileRef.current.slice();
          newFileList.splice(index, 1);
        }}
        multiple={true}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">点击或拖动文件到此区域进行上传</p>
        <p className="ant-upload-hint">支持单一或批量上传</p>
      </Dragger>
    </Modal>
  );
}

export default UploadModal;
