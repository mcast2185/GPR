import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Logo from "../../assets/GPRlogo.png";


const Footer = () => {
  const dynamicLink = (route: string, linkText: string) => {
    return (
      <div className='nav-link-wrapper'>
        <Link href={route} className='p-5 no-underline cursor-pointer text-slate-100'>
          {linkText}
        </Link>
      </div>
    );
  };

  return (
    <div className='flex justify-center items-center flex-col h-[240px] w-full'>
      <div className="footer bg-no-repeat bg-cover h-[240px] w-full relative brightness-[25%]" />
      <div className='absolute flex justify-center items-center flex-col'>
        <div className='image-container'>
          <Image alt="gpr-logo" className='h-[150px] w-[160px]' src={Logo}/>
        </div>
        <div className='flex flex-row'>
          <a>{dynamicLink("/", "Home")}</a>
          <a>{dynamicLink("/about", "About")}</a>
          <a>{dynamicLink("/contact", "Contact")}</a>
        </div>
        <div className="text-slate-100">
          <p className="font-extralight mt-10px p-0">&copy; 2022 GPR &#124; all rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;