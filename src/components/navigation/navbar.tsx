'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from "../../assets/GPRlogo2.png";
import Sidebar from './sidebar';


const NavComponent: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const dynamicLink = (route: string, linkText:string) => {
    return (
      <div className="">
        <Link href={route} className='text-gray-300 hover:text-orange-300 font-Oswald
          decoration-transparent hover:scale-110 transition ease-in-out duration-500'>
          {linkText}
        </Link>
      </div>
    );
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      };
    };

    controls.start({ opacity: scrolling ? 0 : 1 });
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolling, controls]);

  return (
    // zindex 2s
    <div className={`fixed top-0 left-0 w-full h-[60px] z-[10] transition-all duration-300 pb-[5px] pt-[10px]
      ${scrolling ? 'bg-slate-600 bg-opacity-30' : 'bg-slate-800 bg-opacity-70'} ease-in-out`}>
      <div className="mx-auto px-7 py-1 flex justify-between items-center">
        {scrolling ? (
          <div className="flex justify-center items-center h-[25px] w-[35px] rounded">
            <FontAwesomeIcon onClick={toggleSidebar} 
              icon={faBars} className="text-orange-300 text-[1.7rem] absolute left-[25px] top-[15px]"/>
             <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
          </div>
        ) : (
          <div className="flex w-full justify-center items-center content-center">
            <div className="flex justify-start pl-1">
             <Image src={Logo} className='h-[70px] w-[75px] absolute left-[5px] top-[-8px]' alt="gpr logo"/>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={controls} 
              className="flex justify-center items-center content-center space-x-3">
              {dynamicLink("/", "Home")}
              <p className='text-white pl-1'>|</p>
              {dynamicLink("/about", "About")}
              <p className='text-white pl-1'>|</p>
              {dynamicLink("/services", "Services")}
              <p className='text-white pl-1'>|</p>
              {dynamicLink("/contact", "Contact")}
            </motion.div>
            <div className="flex justify-end  text-slate-200 rounded-full bg-black bg-opacity-30
              hover:text-[#e9a106] ease-in-out duration-[1000ms] font-Anton ">
              <p className='text-xl p-[15px] absolute right-[7px] top-[0px]'>
                (619)-999-888
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavComponent;