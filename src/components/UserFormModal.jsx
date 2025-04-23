 import { Modal, Form, Input } from 'antd';
import { useEffect } from 'react';

const UserFormModal = ({ visible, onCancel, onSubmit, initialValues }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    } else {
      form.resetFields();
    }
  }, [initialValues, form]);

  const handleOk = () => {
    form.validateFields().then(values => {
      onSubmit(values);
      form.resetFields();
    });
  };

  return (
    <Modal
      open={visible}
      title={
        <span style={{ color: '#007272' }}>
          {initialValues ? 'Foydalanuvchini tahrirlash' : 'Yangi foydalanuvchi'}
        </span>
      }
      onCancel={onCancel}
      onOk={handleOk}
      okButtonProps={{
        style: {
          backgroundColor: '#007272',
          borderColor: '#007272',
          color: '#fff',
        },
      }}
      cancelButtonProps={{
        style: {
          color: '#007272',
        },
      }}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="name"
          label={<span style={{ color: '#007272' }}>Ism</span>}
          rules={[{ required: true, message: 'Ismni kiriting' }]}
        >
          <Input style={{ borderColor: '#20cfcf' }} />
        </Form.Item>

        <Form.Item
          name="age"
          label={<span style={{ color: '#007272' }}>Yosh</span>}
          rules={[{ required: true, message: 'Yoshni kiriting' }]}
        >
          <Input type="number" style={{ borderColor: '#20cfcf' }} />
        </Form.Item>

        <Form.Item
          name="gmail"
          label={<span style={{ color: '#007272' }}>Gmail</span>}
          rules={[
            { required: true, message: 'Gmailni kiriting' },
            { type: 'email', message: 'To‘g‘ri gmail kiriting' },
          ]}
        >
          <Input style={{ borderColor: '#20cfcf' }} />
        </Form.Item>

        <Form.Item
          name="password"
          label={<span style={{ color: '#007272' }}>Parol</span>}
          rules={[{ required: true, message: 'Parolni kiriting' }]}
        >
          <Input.Password style={{ borderColor: '#20cfcf' }} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserFormModal;