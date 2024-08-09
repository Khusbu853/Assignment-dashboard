import React from 'react';
import useSidebarMenuItems from './hooks/useSidebarMenuItems';

const Sidebar = () => {
  const { menuItems } = useSidebarMenuItems();

  // function for grouping same group of menu Items
  const groupedItems = menuItems.reduce((groups, item) => {
    const group = groups[item.menuGroupName] || [];
    group.push(item);
    groups[item.menuGroupName] = group;
    return groups;
  }, {});

  return (
    <div className="bg-[#132332] text-white w-64 py-7 h-screen">
      <h2 className="text-2xl mb-6 px-4">Assignment</h2>
      <hr className="border-white" />
      {Object.keys(groupedItems).map(group => (
        <div key={group} className="my-8 px-6">
          <h3 className="text-md mb-2">Menu {group}</h3>
          <ul className="space-y-1">
            {groupedItems[group].map(item => (
              <li key={item.menuItemId} className="ml-4 text-sm">
                {item.menuItemName}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;




