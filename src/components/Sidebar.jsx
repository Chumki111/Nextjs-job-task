"use client";
import Link from 'next/link';
import { useState } from 'react';
import { IoMdArrowDropright } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const menuItems = [
  {
    route: 'Discussion Forum',
    pathname: '/'
  },
  {
    route: 'gf',
    pathname: 'sd'
  }
]
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    
    <div className='flex'>
      <div className=''>
        <div
          className={`fixed inset-y-0 h-full md:sticky left-0 z-50 bg-[#122033] text-white  md:px-0 md:py-0 transition-all duration-300 ${isOpen ? 'visible left-0 w-[250px] opacity-100 md:w-[310px]' : 'invisible -left-4 opacity-0 md:w-0 md:overflow-hidden md:opacity-100'}`}
        >


          <div className='py-5 shadow-md flex justify-between items-start px-7'>
            <div className='flex items-center justify-center gap-2'>
              <FaUser size={24}/>
              <h2 className='font-semibold leading-tight'>Hello, User</h2>
            </div>

            <IoIosNotifications size={26} />

          </div>
          <hr />
          <div className='pt-4 px-7'>
            <ul className="">
              {menuItems.map((item, index) => (
                <li key={index} className="space-y-3 pb-3">
                  <Link href={item.pathname}>
                    <p className="">
                      {item.route}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
      <div className="size-full min-h-screen bg-[#fff]">

        {isOpen ? (
          <button className="fixed top-1/2 left-[260px] py-5 lg:left-[320px] transform -translate-y-1/2 bg-[#122033] text-white" onClick={closeSidebar}>
            <IoMdArrowDropright size={24} />
          </button>
        ) : (
          <button className="fixed bg-[#122033] py-5 top-1/2 left-4 transform -translate-y-1/2 text-[#fff]" onClick={toggleSidebar}>
            <IoMdArrowDropright size={24} />
          </button>
        )}

        {/* outlet - part  */}
        <div className=" p-2 md:p-6">{children}</div>
      </div>
    </div>


  );
};

export default Sidebar;


