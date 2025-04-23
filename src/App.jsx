import { useState } from 'react';
import { Button, message } from 'antd';
import UserTable from './components/UserTable';
import UserFormModal from './components/UserFormModal';

const App = () => {
  const [users, setUsers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const openCreateModal = () => {
    setEditingUser(null);
    setModalVisible(true);
  };

  const openEditModal = (user) => {
    setEditingUser(user);
    setModalVisible(true);
  };

  const handleDelete = (id) => {
    setUsers(prev => prev.filter(user => user.id !== id));
    message.success("O‘chirildi");
  };

  const handleSubmit = (values) => {
    if (editingUser) {
      setUsers(prev =>
        prev.map(user =>
          user.id === editingUser.id ? { ...user, ...values } : user
        )
      );
      message.success("Yangilandi");
    } else {
      const newUser = {
        id: Date.now(),
        ...values,
      };
      setUsers(prev => [...prev, newUser]);
      message.success("Qoshildi");
    }
    setModalVisible(false);
  };

  return (
    <div style={{ padding: 24 }}>
      <Button
        onClick={openCreateModal}
        style={{
          marginBottom: 16,
          backgroundColor: '#008080',
          color: '#fff',
          borderColor: '#008080',
        }}
      >
        Foydalanuvchi qoshish
      </Button>

      <UserTable
        users={users}
        onEdit={openEditModal}
        onDelete={handleDelete}
      />

      <UserFormModal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onSubmit={handleSubmit}
        initialValues={editingUser}
      />
    </div>
  );
};

export default App;
