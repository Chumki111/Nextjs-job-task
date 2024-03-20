"use client";
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Import icons from React Icons
import { IoMdArrowDropright } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { RiMenuFoldLine } from "react-icons/ri";
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
    // <div className='flex'>
    //   <div className=''>
    //     <div className={`fixed top-[85px] z-30 h-full md:sticky md:h-[calc(100vh-85px)] ${isOpen ? "visible left-0 w-[250px] opacity-100 md:w-[310px]" : "invisible -left-4 opacity-0 md:w-0 md:overflow-hidden md:opacity-100"} overflow-y-auto border-r border-gray-200/70 bg-[#122033] text-gray-50 px-3 md:px-[0px] duration-300`}>

    //       <div className='pb-5 shadow-md flex justify-between items-start'>
    //         <div>
    //           <FaUser />
    //           <h2>Hello, User</h2>
    //         </div>

    //         <IoIosNotifications size={24} />

    //       </div>
    //       <hr />
    //       <div>
    //       <ul className="">
    //         {menuItems.map((item, index) => (
    //           <li key={index} className="py-2">
    //             <Link href={item.pathname}>
    //               <p  className="">
    //                 {item.route}
    //               </p>
    //             </Link>
    //           </li>
    //         ))}
    //       </ul>
    //       </div>
    //     </div>

    //   </div>
    //   <div className="size-full min-h-screen bg-red-400">
    //       <div
    //         onClick={() => setIsOpen(!isOpen)}
    //         className={`sticky top-1/2 z-20 flex size-[50px] items-center justify-center rounded-br-3xl border-r border-gray-200 bg-white shadow duration-300`}
    //       >
    //         <IoMdArrowDropright
    //           className={`text-[25px] text-gray-600 duration-300 ${isOpen ? "" : "rotate-180"} `}
    //         />
    //       </div>

    //       {/* outlet - part  */}
    //       <div className=" p-2 md:p-6">{children}</div>
    //     </div>
    // </div>
    <div className='flex'>
      <div className=''>
        <div
          className={`fixed inset-y-0 h-full md:sticky left-0 z-50 bg-gray-900 text-white  md:px-0 md:py-0 transition-all duration-300 ${isOpen ? 'visible left-0 w-[250px] opacity-100 md:w-[310px]' : 'invisible -left-4 opacity-0 md:w-0 md:overflow-hidden md:opacity-100'}`}
        >


          <div className='py-5 shadow-md flex justify-between items-start'>
            <div>
              <FaUser />
              <h2>Hello, User</h2>
            </div>

            <IoIosNotifications size={24} />

          </div>
          <hr />
          <div className='pt-4'>
            <ul className="">
              {menuItems.map((item, index) => (
                <li key={index} className="">
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
      <div className="size-full min-h-screen bg-red-400">

        {isOpen ? (
          <button className="fixed top-1/2 left-[260px] lg:left-[320px] transform -translate-y-1/2  text-white" onClick={closeSidebar}>
            <AiOutlineClose size={24} />
          </button>
        ) : (
          <button className="fixed top-1/2 left-4 transform -translate-y-1/2 text-gray-900" onClick={toggleSidebar}>
            <AiOutlineMenu size={24} />
          </button>
        )}

        {/* outlet - part  */}
        <div className=" p-2 md:p-6">{children}</div>
      </div>
    </div>


  );
};

export default Sidebar;


