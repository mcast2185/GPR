'use client';
import Image from 'next/image';
import React, { ReactNode, useEffect } from 'react';
import { motion, useAnimate, useTransform, } from 'framer-motion';


import GPR from "../assets/GPRlabel.png";
import STONE from "../assets/stone.jpg";
import GPRsix from "../assets/sudoGPRsix.jpg";
import GPRfive from "../assets/sudoGPRfive.jpg";
import GPRseven from "../assets/sudoGPRseven.jpg";
import Footer from '../components/footer/footer';
import Carousel from '../components/functionality/carousel';
import { Reveal } from '@/components/functionality/reveal';
import CardComponent from '@/components/motionCard/cardDetail';

const Home: React.FC = () => {
  
  return (
    <div>
      <Image src={STONE} role="img" sizes="100vh 100vw"  style={
        {
          backgroundImage: `url("/_next/static/media/stone.56a47ffb.jpg")`, 
          opacity: ".3",
          position: "fixed",
          zIndex: "-10",
          objectFit: "contain",
          width: "100vw",
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat", 
          backgroundSize: "cover"}} 
          alt="testing" 
        />
      <div className='grid grid-flow-row gap-32'>
        <div>         
          <Carousel autoSlide={true} hideIndicators={true}/>
        </div>
        <div className="h-[auto] w-[100%] absolute flex justify-center  top-[10vh] animate-pulse">
          <Image alt="GPR home page image" className='h-[350px] w-[650px]' src={GPR}/>
        </div>
        <div className="h-[450px] w-[100vw] flex flex-col justify-center items-center content-center xl:px-[10vw] 2xl:px-[10vw] py-[10px] relative">
          <div className="flex flex-col justify-center items-center content-center py-[3.5rem]">
            <h2 className="font-Anton bg-slate-200 bg-clip-text text-slate-800 text-opacity-70 p-[1.5px]">
              We Specialize in full-Service Concrete Contracts
            </h2> 
            <h1 className="font-Anton text-[50px] bg-slate-200 bg-clip-text text-slate-800 text-opacity-70 p-[1.5px]">
              GPR Construction of San Diego
            </h1>
            <h2 className="font-Anton bg-slate-200 bg-clip-text text-slate-800 text-opacity-70 p-[1.5px]">
              We are your go-to for all of your roofing and remodeling needs. 
            </h2> 
            <div className="border border-[#e9a106] rounded-full hover:border-slate-200 font-Anton">
              <button className='text-base text-slate-800 p-[3px] bg-slate-200 hover:bg-[#e9a106] rounded-full
                hover:text-slate-200 ease-in-out duration-[1000ms] hover:scale-[1.02]' type='button' onClick={() => {}}>
                Get Started Here
              </button>
            </div>
          </div>
          <CardComponent/>
        </div>
        <div className='flex flex-col justify-between row-2 mt-[50px]'>
          <div className=' pl-[13vw] pr-[7vw] flex justify-between flex-row items-center'>
            <div className='p-[20px] pl-[10px] h-[250px] w-[40vw] relative'>
              <Reveal transition={{duration: .75, delay: 0}}>
                <h2 className="w-fit text-slate-700 text-2xl font-Anton">
                  Your San Diego GPR Construction
                </h2>
              </Reveal>
              <Reveal transition={{duration: .75, delay: 0.2}}>
                <h3 className="w-fit p-[10px] text-slate-700 font-Anton text-xl">
                  GPR Construction
                </h3>
              </Reveal>
              <div className=" duration-[2000ms] ease-in-out 
                rounded hover:scale-[1.01] transition-transform py-[8px]">
                <Reveal transition={{duration: .75, delay: 0.2}}>
                  <p className="font-Oswald font-light px-[8px] text-slate-600 ease-in-out duration-[1500ms]">
                    <span>G</span>PR Construction has a proven record of excellence in efficiently managing several construction 
                    projects throughout the San Diego county and other surrounding areas as well.
                  </p>
                </Reveal>
                <Reveal transition={{duration: .85, delay: 0.45}}>
                  <p className="font-Oswald font-light px-[8px] text-slate-600 ease-in-out duration-[1500ms]">
                    Your local crew of experienced professionals here at GPR Construction will plan, design, construct, and maintain your project, just as you invisioned.
                  </p>
                </Reveal>
              </div>
            </div>
            <Image alt='gpr image' 
              className='w-[500px] h-[333px] shadow-2xl rounded'
              src={GPRsix}
            />          
          </div>
          <div className='pr-[7vw] pl-[13vw] flex justify-between flex-row items-center'>
            <Image alt='gpr image' 
              className='w-[500px] h-[333px] shadow-2xl rounded' 
              src={GPRseven}
            />
            <div className='p-[20px] pl-[10px] h-[250px] w-[40vw] relative'>
              <Reveal transition={{duration: .75, delay: 0}}>
                <h2 className="w-fit p-[10px] text-slate-700 text-2xl font-Anton">
                  Our Foundation
                </h2>
              </Reveal>
              <div className=" duration-[2000ms] ease-in-out 
                rounded hover:scale-[1.01] transition-transform py-[8px]">
                <Reveal transition={{duration: .75, delay: 0.2}}>
                  <p className="font-Oswald font-light px-[8px] text-slate-600 ease-in-out duration-[1500ms]">
                    <span>T</span>his is some text i just used to fill the void i will be using. 
                    this is some text i just used to fill the void i will be using this is some text i just used to fill the void i will be using.
                  </p>
                </Reveal>
                <Reveal transition={{duration: .85, delay: 0.45}}>
                  <p className="font-Oswald font-light px-[8px] text-slate-600 ease-in-out duration-[1500ms]">
                    this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using
                  </p>
                </Reveal>
              </div>
            </div>
          </div>   
          {/* <div className=' flex justify-center items-center p-[20px]'>
            <div className='p-[20px] h-[250px] w-[30vw] object-contain'> */}
          <div className=' pl-[13vw] pr-[7vw] flex justify-between flex-row items-center'>
            <div className='p-[20px] pl-[10px] h-[250px] w-[40vw] relative'>
              <Reveal transition={{duration: .75, delay: 0}}>
                <h2 className=" p-[10px] w-fit text-slate-700 text-2xl font-Anton">
                  Our Portfolio
                </h2>
              </Reveal>
              <div className=" duration-[2000ms] ease-in-out 
                rounded hover:scale-[1.01] transition-transform py-[8px]">
                <Reveal transition={{duration: .75, delay: 0.2}}>
                  <p className="font-Oswald font-light px-[8px] text-slate-600 ease-in-out duration-[1500ms]">
                    <span>T</span>his is some text i just used to fill the void i will be using. 
                    this is some text i just used to fill the void i will be using this is some text i just used to fill the void i will be using.
                  </p>
                </Reveal>
                <Reveal transition={{duration: .85, delay: 0.45}}>
                  <p className="font-Oswald font-light px-[8px] text-slate-600 ease-in-out duration-[1500ms]">
                    this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using
                  </p>
                </Reveal>
              </div>
            </div>
            <Image alt="gpr image" 
              className='w-[500px] h-[333px] shadow-2xl rounded'
              src={GPRfive}
            />
          </div>
        </div>
        <div className="only:row-3">
          <Footer/>
        </div>      
      </div>
    </div>
  );
};

export default Home;