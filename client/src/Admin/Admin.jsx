import React, { useEffect, useState } from "react";

function AdminPanel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/get/users");
        const data = await res.json();
        console.log("hello", data);
        setUsers(data);
      } catch (error) {
        console.error("Error in fetching users: ", error);
      }
    };
    fetchUsers();
  }, []);

  const handleChange = (e, id, field) => {
    const updatedUsers = users.map((user) => {
      if (user.Id === id) {
        return { ...user, [field]: e.target.value };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Admin Panel</h2>
      <div className="overflow-x-auto shadow rounded-lg bg-white">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-200 text-xs uppercase font-semibold text-gray-700">
            <tr>
              <th className="px-6 py-3">Username</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.Id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">
                  <input
                    className="w-full p-2 border rounded-md"
                    value={user.userName}
                    onChange={(e) => handleChange(e, user.Id, "username")}
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    className="w-full p-2 border rounded-md"
                    value={user.email}
                    onChange={(e) => handleChange(e, user.Id, "email")}
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    className="w-full p-2 border rounded-md"
                    value={user.role}
                    onChange={(e) => handleChange(e, user.Id, "role")}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPanel;
