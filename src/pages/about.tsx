'use client';
import Image from 'next/image';
import React, { useEffect, useRef} from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

import GPRfive from "../assets/sudoGPRfive.jpg"
import GPRsix from "../assets/sudoGPRsix.jpg"
import Footer from '../components/footer/footer';
import { Reveal } from '../components/functionality/reveal';

interface Props {
  children: JSX.Element
}

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const mainControlAnimation = useAnimation();

  const aboutVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeInOut", 
        animationDirection: "normal" 
      },
    },
    hidden: {
      opacity: 0,
      y: -80,
      transition: { 
        duration: 0.6, 
        ease: "easeInOut", 
        animationDirection: "normal" 
      },
    },
  };

  const AboutFadeComponent = ({children}: Props) => {
    
    return (
      <div className="flex px-[1.5rem]">
        <motion.div
          className='overflow-hidden'
          initial="hidden"
          variants={aboutVariants}
          animate={mainControlAnimation}
          viewport={{once: true}}
          onViewportEnter={() => isInView && mainControlAnimation.start("visible")}
          >
          {children}
        </motion.div>
      </div>
    );
  };

  // useEffect(() => {
  //   if (isInView) {
  //     mainControlAnimation.start("visible");
  //   }
  // }, [isInView, mainControlAnimation]);

  
  return (
    <div className='about-container'>
      <div className='about-container-header' 
        style={{
          backgroundImage: `url(${"/static/media/sudoGPReight.97d4b2ec.jpg"})`, 
          border: "1px solid #99720f", 
          transform: "skewY(-6deg)", 
          transformOrigin: "top left", 
          filter: "brightness(40%)",
          height: "400px",
          width: "100vw"
        }}
      />
      <div ref={ref} className='about-header flex flex-col m-[40px] justify-center items-center'>
        <AboutFadeComponent>
          <h1 className='font-[65px] w-fit border-solid border-b-[1px] border-b-[#e9a106]'> 
            About 
          </h1>
        </AboutFadeComponent>


        <motion.div
          className='overflow-hidden'
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,
              x: -80,
              transition: { 
                duration: 0.8, 
                ease: "easeInOut", 
                animationDirection: "normal" 
              },
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: { 
                duration: 0.8, 
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



      <div className='about-content-wrapper flex flex-col w-full'>
        <div className='w-full'
          style={{display: "grid", gridTemplateColumns: "2fr 1.5fr"}}>
          <div ref={ref} className='flex flex-col justify-center items-center px-[1rem] py-[1rem]t'>
            <motion.div
              variants={{
                hidden: {opacity: 0, y: 55, color: "black", boxShadow: "none"},
                visible: {opacity: 1, y: 0, color: "rgb(119, 136, 153)",  boxShadow: "0px 2px 0px 0px grey"}
              }}
              initial="hidden"
              animate={mainControlAnimation}
              transition={{duration: .5, delay: .4, ease: "easeIn"}}
            >
              <h2 className="hover:decoration-orange-400 ease-in-out 
                transition-transform duration-[1500ms] font-BebasNeue">
                From the Ground up
              </h2>
            </motion.div>
            <Reveal>
              <p className="hover:shadow-[-1px 1px 0px 1px rgb(153, 114, 15)]"
                style={{
                  width: "40vw",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "12.5rem",
                }}
              >
                this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using
                this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using.
                this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using
              </p>
            </Reveal>
          </div>
          <AboutFadeComponent>
            <Image alt="GPR image"  src={GPRfive}/>          
          </AboutFadeComponent>
        </div>
        <div className='service-two  flex flex-col justify-center items-center p-[20px]'>
          <AboutFadeComponent>
            <Image className='h-[40vh] w-[32vw]' 
              style={{transform: "translateZ(0)"}}
              alt="GPR image" src={GPRsix}/>
          </AboutFadeComponent>
          <div className='hover:shadow-[-1px 1px 0px 1px rgb(153, 114, 15)] p-[20px] h-[35vh] w-[25vw]'>
            <motion.div
              variants={{
                hidden: {opacity: 0, y: 55, color: "black", boxShadow: "none"},
                visible: {opacity: 1, y: 0, color: "rgb(119, 136, 153)",  boxShadow: "0px 2px 0px 0px grey"}
              }}
              initial="hidden"
              animate={mainControlAnimation}
              transition={{duration: .5, delay: .4, ease: "easeIn"}}
            >
              <h2>there </h2>
            </motion.div>
            <Reveal>
              <p>
                this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using
                this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using.
                this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using
              </p>
            </Reveal>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About;