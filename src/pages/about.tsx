'use client';
import Image from 'next/image';
import React, { useEffect, useRef} from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

import STONE from "../assets/stone.jpg";
import GPReight from "../assets/sudoGPReight.jpg";
import GPRfive from "../assets/sudoGPRfive.jpg";
import GPRsix from "../assets/sudoGPRsix.jpg";
import Footer from '../components/footer/footer';
import { Reveal } from '../components/functionality/reveal';
import FadeReveal from '@/components/functionality/fadeReveal';


const About = () => {
  const ref = useRef(null);
  const mainControlAnimation = useAnimation();
  
  return (
    <div className='about-container'>
    <div className='about-container' style={
        {
          backgroundImage: `url("/_next/static/media/stone.56a47ffb.jpg")`, 
          opacity: ".3",
          position: "fixed",
          top: "0",
          zIndex: "-10",
          objectFit: "contain",
          width: "100vw",
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat", 
          backgroundSize: "cover"}}/>

        <Image alt="" src={GPReight}
          className='about-container-bg' 
          style={{
            backgroundImage: `url(${GPReight})`, 
            background: `url(${"/static/media/sudoGPReight.97d4b2ec.jpg"})`, 
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat", 
            backgroundSize: "cover",
            border: "1px solid #99720f", 
            transform: "skewY(-6deg)", 
            transformOrigin: "top left", 
            filter: "brightness(40%)",
            height: "400px",
            width: "100vw",
            position: "relative",
            zIndex: "0"
          }}
        />
      <div className='about-header flex flex-col mt-[7rem] ml-[5rem] justify-center pb-[2rem]'>
        <FadeReveal>          
          <h1 ref={ref} className='text-[8rem] font-Oswald opacity-40 text-slate-800'> 
            About 
          </h1>
        </FadeReveal>
        <motion.div
          className='overflow-hidden px-[1.5rem]'
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,
              x: -80,
              transition: { 
                duration: 0.9, 
                ease: "easeInOut", 
                animationDirection: "normal" 
              },
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: { 
                duration: 0.9, 
                ease: "easeInOut", 
                animationDirection: "normal" 
              },
            }
          }}
          animate={mainControlAnimation}
          viewport={{once: true}}
          onViewportEnter={() => mainControlAnimation.start("visible")}
        >
          <h2 className="font-Anton bg-slate-200 bg-clip-text text-slate-800 text-opacity-70 p-[1.5px]">
            We are GPR 
          </h2> 
          <h1 className="font-Anton text-[50px] bg-slate-200 bg-clip-text text-slate-800 text-opacity-70 p-[1.5px]">
            Here to Handle Anything Construction
          </h1>
        </motion.div>  
      </div>

      <div className='about-content-wrapper flex flex-col w-full pb-[10vh]'>
        <div className='w-full px-[7rem]' style={{
          display: "grid", 
          gridTemplateColumns: "2fr 1.5fr"
        }}>
          <div ref={ref} className='flex flex-col justify-center items-center px-[1rem] py-[1rem]'>
            <motion.div
              variants={{
                hidden: {opacity: 0, y: 55},
                visible: {opacity: 1, y: 0}
              }}
              initial="hidden"
              animate={mainControlAnimation}
              transition={{duration: .5, delay: .4, ease: "easeIn"}}
            >
              <h2 className="font-Oswald bg-slate-200 bg-clip-text text-slate-800 text-opacity-70 py-2">
                From the Ground up
              </h2>
            </motion.div>
            <div className=" duration-[2000ms] ease-in-out 
              rounded hover:scale-[1.01] transition-transform py-[1rem]">
              <Reveal transition={{duration: .75, delay: 0.2}}>
                <p className="font-Oswald font-light px-[8px] text-slate-600 ease-in-out duration-[1500ms]">
                  <span>G</span>PR Construction has a proven record of excellence in efficiently managing several construction 
                  projects throughout the San Diego county and other surrounding areas as well.
                </p>
              </Reveal>
              <Reveal transition={{duration: .75, delay: 0.45}}>
                <p className="font-Oswald font-light px-[8px] text-slate-600 ease-in-out duration-[1500ms]">
                  Your local crew of experienced professionals here at GPR Construction will plan, design, construct, and maintain your project, just as you invisioned.
                </p>
              </Reveal>
            </div>
          </div>
          <Image ref={ref} alt="GPR image" className='w-[500px] h-[333px] shadow-2xl rounded' src={GPRfive}/>          
        </div>
        <div className='w-full px-[7rem]' style={{display: "grid", gridTemplateColumns: "1.5fr 2fr"}}>
          <Image ref={ref} className='w-[500px] h-[333px] shadow-2xl rounded' alt="GPR image" src={GPRsix}/>
          <div className='flex flex-col justify-center items-center px-[1rem] py-[1rem]'>
            <motion.div
              variants={{
                hidden: {opacity: 0, y: 55},
                visible: {opacity: 1, y: 0}
              }}
              initial="hidden"
              animate={mainControlAnimation}
              transition={{duration: .5, delay: .4, ease: "easeIn"}}
            >
              <h2 className="font-Oswald bg-slate-200 bg-clip-text text-slate-800 text-opacity-70 py-2">
                there 
              </h2>
            </motion.div>
            <div className=" duration-[2000ms] ease-in-out 
              rounded hover:scale-[1.01] transition-transform py-[1rem]">
              <Reveal transition={{duration: .75, delay: 0.2}}>
                <p className="font-Oswald font-light px-[8px] text-slate-600 ease-in-out duration-[1500ms]">
                  <span>G</span>PR Construction has a proven record of excellence in efficiently managing several construction 
                  projects throughout the San Diego county and other surrounding areas as well.
                </p>
              </Reveal>
              <Reveal transition={{duration: .75, delay: 0.45}}>
                <p className="font-Oswald font-light px-[8px] text-slate-600 ease-in-out duration-[1500ms]">
                  Your local crew of experienced professionals here at GPR Construction will plan, design, construct, and maintain your project, just as you invisioned.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About;