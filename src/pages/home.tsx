'use client';
import Image from 'next/image';
import React, {useEffect, useRef} from 'react';
import { motion, useInView, useAnimation  } from 'framer-motion';

import Footer from '../components/footer/footer';
import { Reveal } from '@/components/functionality/reveal';
import GPRfive from "../assets/sudoGPRfive.jpg";
import GPRsix from "../assets/sudoGPRsix.jpg";
import GPRseven from "../assets/sudoGPRseven.jpg";
import Carousel from '../components/functionality/carousel';


const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const mainControlAnimation = useAnimation();
  const slideControlAnimation = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControlAnimation.start("visible");
      slideControlAnimation.start("visible");
    }
  }, [isInView, mainControlAnimation, slideControlAnimation]);

  
  return (
    <div>
      <Carousel autoSlide={true} hideIndicators={true}/>
      <div className='stone flex flex-col justify-center items-center content-center'>
        <div className='service-one z-[-10] flex justify-center items-center p-[20px] h-[400px]'>
          <div className='p-[20px] text- h-[250px] w-[30vw] object-contain'>
            <div ref={ref} className="relative w-fit">
              <motion.div
                variants={{
                  hidden: {opacity: 0, y: 55, color: "black", boxShadow: "none"},
                  visible: {opacity: 1, y: 0, color: "rgb(153, 114, 15)", boxShadow: "0px 4px 10px -4px black"}
                  // visible: {opacity: 1, y: 0, color: "rgb(119, 136, 153)", boxShadow: "0px 4px 10px -4px black"}
                }}
                initial="hidden"
                animate={mainControlAnimation}
                transition={{
                  duration: .75, delay: .4, ease: "easeIn"
                }}
                >
                <h2 className=" hover:scale-110 hover:underline ">Your San Diego GPR Construction</h2>
                <h3 className=" hover:scale-110 hover:underline ">GPR Construction</h3>
              </motion.div>
              <motion.div
                variants={{
                  hidden: {left: 0},
                  visible: {left: "100%"}
                }}
                initial="hidden"
                animate={slideControlAnimation}
                transition={{
                  duration: .5, ease: "easeIn"
                }}
                style={{
                  position: 'absolute',
                  top: 4,
                  bottom: 4,
                  left: 0,
                  right: 0,
                  zIndex: 20,
                  background: 'rgb(153, 114, 15)'
                }}
              />
            </div>

            <Reveal>
              <p className="font-Oswald font-light ">
                <span>G</span>PR Construction has a proven record of excellence in efficiently managing several construction 
                projects throughout the San Diego county and other surrounding areas as well. Your local crew of experienced professionals here at 
                GPR Construction will plan, design, construct, and maintain your project, just as you invisioned.
              </p>
            </Reveal>
          </div>
          <Image alt='gpr image' 
            className=' w-[500px] h-[333px]'
            src={GPRsix}/>          
        </div>
        <div className='service-two z-[-10] flex justify-center items-center p-[20px] h-[400px]'>
          <Image alt='gpr image' 
            className='w-[500px] h-[333px]' 
            src={GPRseven}/>
          <div className=' p-[20px] h-[250px] w-[30vw] object-contain'>
            <Reveal>
              <h2>there </h2>
            </Reveal>
            <Reveal>
              <p>
                <span>T</span>his is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using
                  this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using.
                  this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using
              </p>
            </Reveal>
          </div>
        </div>       
        <div className='service-three z-[-10] flex justify-center items-center p-[20px] h-[400px]'>
          <div className='p-[20px] h-[250px] w-[30vw] object-contain'>
            <Reveal>
              <h2> world</h2>
            </Reveal>
            <Reveal>
            <p>
              <span>T</span>his is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using
                this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using.
                this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using
            </p>
            </Reveal>
          </div>
          <Image alt="gpr image" 
            className='w-[500px] h-[333px]'
            src={GPRfive}/>
        </div>       
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home;