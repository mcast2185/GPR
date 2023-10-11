import Image from 'next/image';
import React, {useEffect, useRef} from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

import GPRfive from "../assets/sudoGPRfive.jpg"
import GPRsix from "../assets/sudoGPRsix.jpg"
import Footer from '../components/footer/footer';
import { Reveal } from '../components/functionality/reveal';


const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const mainControlAnimation = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControlAnimation.start("visible");
    }
  }, [isInView, mainControlAnimation]);

  
  return (
    <div className='about-container'>
      <div className='about-container-header'/>
      <div className='about-header'>
        <h1> About </h1>
        <h5>this is some sample text used as a filler.this is some sample text used as a filler.this is some sample text used as a filler.</h5>
      </div>
      <div className='about-content-wrapper'>
        <div className='service-one'>
          <div ref={ref} className='relative w-fit'>
            <motion.div
              variants={{
                hidden: {opacity: 0, y: 55, color: "black", boxShadow: "none"},
                visible: {opacity: 1, y: 0, color: "rgb(119, 136, 153)",  boxShadow: "0px 2px 0px 0px grey"}
              }}
              initial="hidden"
              animate={mainControlAnimation}
              transition={{
                duration: .5, delay: .4, ease: "easeIn"
              }}
              >
              <h2 className=" hover:scale-110 hover:underline font-BebasNeue">From the Ground up</h2>
            </motion.div>
            <Reveal>
              <p className="hover:shadow-[-1px 1px 0px 1px rgb(153, 114, 15)]">
                this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using
                this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using.
                this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using
              </p>
            </Reveal>
          </div>
          <Image alt="GPR image" data-aos="fade-left" src={GPRfive}/>          
        </div>
        <div className='service-two'>
          <Image alt="GPR image" data-aos="fade-right" src={GPRsix}/>
          <div className='text-box'>

            <h2>there </h2>
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