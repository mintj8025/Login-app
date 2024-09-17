import React, { useState } from 'react';
import '../styles/UserList.css';
import { users } from '../data/mockData';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserList: React.FC = () => {
  const [search, setSearch] = useState('');
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="user-list-container">
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <ul className="user-list">
        {filteredUsers.map(user => (
          <li key={user.id} className="user-item">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
