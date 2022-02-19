import { Modal, Form, Input, message } from "antd";
import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";
import { AuthContext } from "../../context/AuthProvider";
import { addDocument } from "../../firebase/services";

export default function AddRoomModal() {
  const [form] = Form.useForm();
  const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);
  const {
    user: { uid },
  } = useContext(AuthContext);
  // console.log(isAddRoomVisible);
  const handleOk = () => {
    addDocument("rooms", { ...form.getFieldsValue(), members: [uid] });
    message.success("Create room successfully!");
    form.resetFields();
    // console.log("form data", a);

    setIsAddRoomVisible(false);
  };
  const handleCancel = () => {
    setIsAddRoomVisible(false);
    form.resetFields();
  };
  return (
    <div>
      <Modal
        title="Tạo phòng"
        visible={isAddRoomVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item label="Tên phòng" name="name">
            <Input placeholder="Nhập tên phòng" />
          </Form.Item>
          <Form.Item label="Mô tả" name="description">
            <Input.TextArea placeholder="Nhập mô tả" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
