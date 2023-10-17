'use client';
import React from 'react'; 
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 


interface SidebarProps {
  isOpen: boolean,
  toggleSidebar: () => void
};

// Sidebar component
const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const dynamicLink = (route: string, linkText:string) => {
    return (
      <div className=" shadow-2xl underline pb-[5px]">
        <Link href={route} className='text-orange-300 hover:text-gray-300 transition duration-300'>
          {linkText}
        </Link>
      </div>
    )
  };

  const sidebarVariants = {
    initial: { x: '-100%' },
    animate: { x: 0 },
    exit: { x: '-100%' },
  };

  // Handle click outside to close sidebar
  const handleClickOutside = (e: any) => {
    if (e.target.classList.contains('backdrop')) toggleSidebar();
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        // zindex2
        <div className="backdrop fixed inset-0 z-10 bg-black bg-opacity-50" onClick={handleClickOutside}>
          {/* Actual Sidebar */}
          <motion.div
            className="fixed h-screen w-[13.5] bg-white z-40 shadow-lg"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={sidebarVariants}
          >
            <div className="absolute" >
             
            {/* Close Button */}
            <button className="p-4" onClick={toggleSidebar}>
              <FontAwesomeIcon className='text-slate-200 text-xl' icon={faTimes} />
            </button>
            {/* Menu Items */}
            <div className="flex flex-col justify-center h-full space-y-4 pt-[55px] pl-[55px]">
              {dynamicLink("/", "Home")}
              {dynamicLink("/about", "About")}
              {dynamicLink("/services", "Services")}
              {dynamicLink("/contact", "Contact")}
            </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;