'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from "../../assets/GPRlogo.png";
import Sidebar from './sidebar';


const NavComponent: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();
  const dynamicLink = (route: string, linkText:string) => {
    return (
      <div className="">
        <Link href={route} className='text-gray-300 hover:text-orange-300 
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
    <div className={`fixed top-0 left-0 w-full h-[40px] z-[30] transition-all duration-300
      ${scrolling ? 'bg-slate-600 bg-opacity-30' : 'bg-slate-800 bg-opacity-60'} ease-in-out`}>
      <div className="z-[30] mx-auto px-7 py-1 flex justify-between items-center">
        {scrolling ? (
          <div className="flex justify-center items-center h-[33.5px] w-[35px] rounded">
            <FontAwesomeIcon onClick={toggleSidebar} 
              icon={faBars} className="text-orange-300 text-2xl"/>
             <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
          </div>
        ) : (
          <div className="flex w-full justify-center items-center content-center">
            <div className="flex justify-start pl-1">
             <Image src={Logo} className='h-[35px] w-[35px]' alt="gpr logo"/>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={controls} 
              className="flex justify-center items-center content-center space-x-4">
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