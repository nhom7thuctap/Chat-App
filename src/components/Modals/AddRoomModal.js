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
        title="Create new room"
        visible={isAddRoomVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item label="Room name" name="name">
            <Input placeholder="Enter room name" />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input.TextArea placeholder="Enter description" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
