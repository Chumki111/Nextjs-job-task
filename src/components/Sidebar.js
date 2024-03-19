"use client";
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Import icons from React Icons

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };
  return (
    <>
     <div className={`fixed inset-y-0 left-0 z-50 bg-gray-900 text-white w-64 px-4 py-6 transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Close icon */}
        <button className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white" onClick={closeSidebar}>
          <AiOutlineClose size={24} />
        </button>
        {/* Sidebar content goes here */}
        <ul className="mt-6">
          <li className="py-2">Link 1</li>
          <li className="py-2">Link 2</li>
          <li className="py-2">Link 3</li>
        </ul>
      </div>
      {/* Menu icon */}
      <button className="fixed top-1/2 left-4 transform -translate-y-1/2 text-gray-900" onClick={toggleSidebar}>
        <AiOutlineMenu size={24} />
      </button>
    </>
  );
};

export default Sidebar;


