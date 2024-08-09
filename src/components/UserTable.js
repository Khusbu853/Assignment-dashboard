import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useUsersTable from './hooks/useUserTable';

const UserTable = () => {
  const { users} = useUsersTable()
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();
  const tableRef = useRef(null);

  const showDetails = () => {
    if (selectedUser) {
      navigate(`/user/${selectedUser.userId}`);
    } else {
      toast.error('Select user to see details', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tableRef.current && !tableRef.current.contains(event.target)) {
        setSelectedUser(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full">
      <div ref={tableRef} className="p-4 mx-4 bg-[#F2F2F2] shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">All Users</h2>
        <table className="min-w-full divide-y divide-gray-400">
          <thead className="bg-gray-200 border-bottom-0">
            <tr>
              <th className="px-6 py-3 text-left text-md font-bold text-black tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-md font-bold text-black tracking-wider">First Name</th>
              <th className="px-6 py-3 text-left text-md font-bold text-black tracking-wider">Middle Name</th>
              <th className="px-6 py-3 text-left text-md font-bold text-black tracking-wider">Last Name</th>
            </tr>
          </thead>
          <tbody className="bg-[#F2F2F2] divide-y divide-gray-400">
            {users.map(user => (
              <tr
                key={user.userId}
                onClick={() => setSelectedUser(user)}
                className={selectedUser && selectedUser.userId === user.userId ? 'bg-gray-300 cursor-pointer' : 'cursor-pointer'}
              >
                <td className="px-6 py-4 whitespace-nowrap">{user.userId}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.firstName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.middleName || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.lastName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4 mx-4">
        <button onClick={showDetails} className="px-4 py-2 bg-[#324268] text-white rounded-lg">
          Show Details
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UserTable;









