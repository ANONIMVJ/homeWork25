import { Table, Button, Popconfirm, Space } from 'antd';

const UserTable = ({ users, onEdit, onDelete, loading }) => {
  const columns = [
    { title: 'Ism', dataIndex: 'name', key: 'name' },
    { title: 'Yosh', dataIndex: 'age', key: 'age' },
    { title: 'Gmail', dataIndex: 'gmail', key: 'gmail' },
    { title: 'Parol', dataIndex: 'password', key: 'password' },
    {
      title: 'Amallar',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button onClick={() => onEdit(record)}>Tahrirlash</Button>
          <Popconfirm
            title="Haqiqatan o‘chirmoqchimisiz?"
            onConfirm={() => onDelete(record.id)}
          >
            <Button danger>O‘chirish</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Table
      dataSource={users}
      columns={columns}
      rowKey="id"
      loading={loading}
      pagination={false}
      locale={{ emptyText: "Foydalanuvchilar mavjud emas" }}
    />
  );
};

export default UserTable;
