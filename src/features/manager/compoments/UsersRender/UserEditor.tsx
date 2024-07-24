import { Button, Checkbox, Form, Input, Modal } from 'antd';
import { useDispatch } from 'react-redux';

import { User } from '../../../user/type';
import { useManagerSlice } from '../../store';

type Props = {
  user?: User;
  onCancel: () => void;
};

export const UserEditor = ({ user, onCancel }: Props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { actions } = useManagerSlice();

  const handleSave = async () => {
    try {
      const value = await form.validateFields();
      if (user?.id) {
        dispatch(
          actions.updateUsers({
            action: 'update',
            data: {
              ...user,
              ...value,
            },
          })
        );
      } else {
        dispatch(
          actions.updateUsers({
            action: 'add',
            data: value,
          })
        );
      }
      onCancel();
    } catch {
      /* empty */
    }
  };

  return (
    <Modal
      width={400}
      title={user?.id ? 'Sủa thông tin' : 'Thêm user'}
      open={true}
      onOk={() => {}}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Hủy
        </Button>,
        <Button key="submit" type="primary" onClick={handleSave}>
          Lưu
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical" initialValues={user}>
        <Form.Item label="Tên" name="name">
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Vui lòng nhập email' }]}
        >
          <Input disabled={!!user?.email} />
        </Form.Item>
        <Form.Item label="Role" name="isAdmin" valuePropName="checked">
          <Checkbox>Admin</Checkbox>
        </Form.Item>
      </Form>
    </Modal>
  );
};
