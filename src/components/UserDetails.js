import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useUserDetails from './hooks/useUserDetails';

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useUserDetails(id);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="flex-1 p-8">
      <button onClick={() => navigate('/')} className="px-4 py-2 bg-[#324268] text-white rounded-lg mb-4">
        ← All Users
      </button>
      <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3">
        <div className="mb-4 flex">
          <h2 className="text-md mb-2 flex-1">User ID</h2>
          <p className="flex-1">{user.userId}</p>
        </div>
        <div className="mb-4 flex">
          <h2 className="text-md mb-2 flex-1">Salutation</h2>
          <p className="flex-1">{user.salutation}</p>
        </div>
        <div className="mb-4 flex">
          <h2 className="text-md mb-2 flex-1">Full Name</h2>
          <p className="flex-1">{`${user.firstName} ${user.middleName || ''} ${user.lastName}`}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;



