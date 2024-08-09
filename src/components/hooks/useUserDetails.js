import { useState, useEffect } from 'react';
import { getUserDetails } from '../../api';

const cache = {};

const useUserDetails = (id) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (cache[id]) {
        setUser(cache[id]);
      } else {
        try {
          const response = await getUserDetails(id);
          cache[id] = response.data;
          setUser(response.data);
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      }
    };

    fetchUser();
  }, [id]);

  return user;
};

export default useUserDetails;
