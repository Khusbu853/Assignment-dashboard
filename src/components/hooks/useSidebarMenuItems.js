import { useEffect, useState } from 'react';
import { getMenuItems } from '../../api';

const useSidebarMenuItems = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await getMenuItems();
        setMenuItems(response.data);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchMenuItems();
  }, []);

  return { menuItems};
};

export default useSidebarMenuItems;
