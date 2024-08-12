import React, { useEffect, useState } from 'react';
import { getAllUsers, createUser, updateUser, deleteUser } from '../api/ApiService';

function App() {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', email: '', password: '' });

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const data = await getAllUsers();
        setUsers(data.payload);
    };

    const handleCreateUser = async () => {
        await createUser(newUser);
        setNewUser({ name: '', email: '', password: '' });
        loadUsers(); // Reload users after creating
    };

    const handleDeleteUser = async (id) => {
        await deleteUser(id);
        loadUsers(); // Reload users after deleting
    };

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                        <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>

            <h2>Create User</h2>
            <input
                type="text"
                placeholder="Name"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            />
            <button onClick={handleCreateUser}>Create User</button>
        </div>
    );
}

export default App;
