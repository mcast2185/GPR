'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Sidebar from './sidebar';


const NavComponent: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();
  const dynamicLink = (route: string, linkText:string) => {
    return (
      <div className="">
        <Link href={route} className='text-orange-300 hover:text-gray-300 
          decoration-transparent hover:scale-110 transition ease-in-out duration-500'>
          {linkText}
        </Link>
      </div>
    )
  };
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    controls.start({ opacity: scrolling ? 0 : 1 });
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolling, controls]);

  return (
    <div className={`fixed top-0 left-0 w-full bg-opacity-50 transition-all duration-300 ease-in-out ${scrolling ? 'bg-none' : 'bg-slate-500'}`}>
      <div className="z-[30] mx-auto px-7 py-2 flex justify-between items-center">
        {scrolling ? (
          <div className="flex items-center">
            <FontAwesomeIcon icon={faBars} className="text-orange-300 text-2xl" onClick={toggleSidebar}/>
             <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
          </div>
        ) : (
          <div className="flex w-full justify-center items-center content-center">
            <motion.div initial={{ opacity: 0 }} animate={controls} className="flex justify-center items-center content-center space-x-4">
              {dynamicLink("/", "Home")}
              {dynamicLink("/about", "About")}
              {dynamicLink("/services", "Services")}
              {dynamicLink("/contact", "Contact")}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavComponent;



// 'use client'
// import React from 'react';

// import Navigation from './Nav-bar-menu';
// import logo from "../../assets/GPRlogo.png"
// import Link from 'next/link';
// import Image from 'next/image';



// const NavComponent = (props: any) => {
//   const dynamicLink = (route: string, linkText:string) => {
//     return (
//       <div className='nav-link-wrapper'>
//         <Link href={route} className='nav-link-active'>
//           {linkText}
//         </Link>
//       </div>
//     )
//   };
//   const onClickMenu = () => {
//     return (
//       <div className='onClick-menu'>
//         <Navigation/>
//       </div>
//     )
//   }

//   return (
//     <React.StrictMode>
//       <div className='nav-bar'>
//         <div className='nav-bar-logo'>
//           <a href="/"><Image alt="gpr logo" src={logo} /></a>
//         </div>
     
//         <div className='nav-bar-wrapper'>

//           {dynamicLink("/", "Home")}
//           {dynamicLink("/about", "About")}
//           {dynamicLink("/contact", "Contact")}

//         </div>
//         <div className='nav-bar-popup'>
//           {onClickMenu()}
//         </div>
//       </div>
//     </React.StrictMode>  
//   )
// };

// export default NavComponent;