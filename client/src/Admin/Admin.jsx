import React from 'react';
import { useState, useEffect } from 'react';

const Admin = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      // fetch users from backend
    }, []);
  
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">User Management</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Username</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Role</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* map user data */}
          </tbody>
        </table>
      </div>
    );
  };

  export default Admin;
  