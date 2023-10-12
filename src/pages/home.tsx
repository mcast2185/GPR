'use client';
import Image from 'next/image';
import React from 'react';

import GPRsix from "../assets/sudoGPRsix.jpg";
import GPRfive from "../assets/sudoGPRfive.jpg";
import Footer from '../components/footer/footer';
import GPRseven from "../assets/sudoGPRseven.jpg";
import { Reveal } from '@/components/functionality/reveal';
import Carousel from '../components/functionality/carousel';


const Home = () => {

  return (
    <div >
      <div className='stone' style={{width: "100%", height: "100%"}}/>
      <div className='grid grid-flow-row gap-4 '>
        <div className="row-1 gap-2" >         
          <Carousel autoSlide={true} hideIndicators={true}/>
        </div>
        <div className='flex flex-col justify-center items-center content-center row-2 mt-[50px]'>
          <div className='z-[10] flex flex-row'>
            <div className='p-[20px] h-[250px] w-[30vw]'>
              <Reveal>
                <h2 className="w-fit p-[10px] text-slate-700 text-2xl font-Anton">
                  Your San Diego GPR Construction
                </h2>
              </Reveal>
                  <Reveal>
                  <h3 className="w-fit p-[10px] text-slate-700 font-Anton text-xl">
                    GPR Construction
                  </h3>
                </Reveal>
              <Reveal>
                <p className="font-Oswald font-light p-[10px] text-slate-100 ease-in-out 
                  duration-700 transition-shadow hover:text-[#99720f] hover:shadow-2xl hover:scale-110">
                  <span>G</span>PR Construction has a proven record of excellence in efficiently managing several construction 
                  projects throughout the San Diego county and other surrounding areas as well. Your local crew of experienced professionals here at 
                  GPR Construction will plan, design, construct, and maintain your project, just as you invisioned.
                </p>
              </Reveal>
            </div>
            <Image alt='gpr image' 
              className=' w-[500px] h-[333px]'
              src={GPRsix}
            />          
          </div>
          
          <div className='z-[-10] flex justify-center items-center p-[20px] '>
            <Image alt='gpr image' 
              className='w-[500px] h-[333px]' 
              src={GPRseven}/>
            <div className='p-[20px] h-[250px] w-[30vw] object-contain'>
              <Reveal>
                <h2 className="w-fit p-[10px] text-slate-700 text-2xl font-Anton">
                  Our Foundation
                </h2>
              </Reveal>
              <Reveal>
                <p className="font-Oswald font-light p-[10px] text-slate-100 ease-in-out 
                  duration-700 transition-shadow hover:text-[#99720f] hover:shadow-2xl hover:scale-110">
                  <span>T</span>his is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using
                    this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using.
                    this is some text i just used to fill the void i will be using.this is some text i just used to fill the void i will be using
                </p>
              </Reveal>
            </div>
          </div>   

          <div className='z-[-10] flex justify-center items-center p-[20px] '>
            <div className='p-[20px] h-[250px] w-[30vw] object-contain'>
              <Reveal>
                <h2 className=" p-[10px] w-fit text-slate-700 text-2xl font-Anton">
                  Our Portfolio
                </h2>
              </Reveal>
              <Reveal>
              <p className=" p-[10px] font-Oswald font-light text-slate-100 ease-in-out 
                duration-700 transition-shadow hover:text-[#99720f] hover:shadow-2xl hover:scale-110">
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
        <div className="only:row-3">
          <Footer/>
        </div>      
      </div>
    </div>
  );
};

export default Home;