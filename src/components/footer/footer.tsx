import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type * as CSS from 'csstype';


import Logo from "../../assets/GPRlogo.png";

const style: CSS.Properties = {
    backgroundImage: "url(/_next/static/media/stone.56a47ffb.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    height: "240px",
    width: "100%",
    filter: "brightness(25%)",
    zIndex: "-30",
};


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
    <div className="parentDiv flex flex-col justify-center items-center w-full h-[33vh]">
    <div className="footer" style={style}/>
      {/* <div className='flex relative justify-center items-center flex-col h-[240px] w-full'> */}
        <div className='absolute flex justify-center items-center flex-col mt-[1vh]'>
          <div className='image-container'>
            <Image alt="gpr-logo" className='h-[140px] w-[150px]' src={Logo}/>
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
      {/* </div> */}
    </div>
  );
};

export default Footer;