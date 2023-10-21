import Image from 'next/image';
import React, {useEffect, useRef} from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

import GPReight from "../assets/sudoGPReight.jpg";
import GPRnine from "../assets/sudoGPRnine.jpg";
import Footer from '../components/footer/footer';
import ContactForm from "../components/contactComponent/contactComponent";
import FadeReveal from '@/components/functionality/fadeReveal';
import { Reveal } from '@/components/functionality/reveal';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const mainControlAnimation = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControlAnimation.start("visible");

    }
  }, [isInView, mainControlAnimation])

  

  return (
    <div className='contact-container'>
    <div className='contact-container' style={
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

        <Image alt="" src={GPRnine}
          className='contact-container-bg' 
          style={{
            backgroundImage: `url(${GPRnine})`, 
            background: `url(${"/static/media/sudoGPRnine.97d4b2ec.jpg"})`, 
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
      <div className='contact-header w-full flex flex-col mt-[7rem] mr-[7rem] justify-end items-end pb-[1rem]'>
        <FadeReveal>
          <h1 ref={ref} className='text-[8rem] font-Oswald opacity-40 text-slate-800'> 
            Contact 
          </h1>
        </FadeReveal>

        <motion.div
          className='overflow-hidden px-[1rem] flex flex-col justify-end items-end'
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
      <div className='contact-content-wrapper flex flex-col w-full pt-[8vh] pb-[10vh]'>
        <div className='contact-header pl-[17vw] py-[1rem]'>
          <Reveal transition={{
            duration: 0.7,
            delay: 0.4
          }}>
            <h1 className='font-Oswald opacity-40 text-slate-800'> Contact us </h1>
          </Reveal>
        </div>
        <div className='contact-content-form-wrapper w-full px-[7rem] flex flex-row justify-center'>
          <div className="px-[1rem]">
            <ContactForm/>
          </div>
          <div ref={ref} className="relative px-[2rem]">
            <motion.div
              variants={{
                hidden: {opacity: 0},
                visible: {opacity: 1}
              }}
              initial="hidden"
              animate={mainControlAnimation}
              transition={{
                duration: .5, delay: .4, ease: "easeIn"
              }}
              >
              <Image className="h-[20rem] w-[29rem] rounded shadow" alt="GPR image" src={GPReight}/>         
            </motion.div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact;