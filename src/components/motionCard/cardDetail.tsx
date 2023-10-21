'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useScroll } from 'framer-motion';


import HOME from "../../assets/home.png";
import WORKER from "../../assets/worker.png";
import TOOLS from "../../assets/tools.png";


const CardComponent: React.FC = () => {
  const controls = useAnimation();
  
  const cardFlipVariant = {
    visible: { 
      rotateY: 0,
      transition: { duration: 0.6, ease: "easeInOut", animationDirection: "normal" },
    },
    hidden: { 
      rotateY: 180,
      transition: { duration: 0.6, ease: "easeInOut", animationDirection: "normal" },
    }
  };

  // we will adjust the h and w 300 325 and and adding padding to the outer flip cards
  // add layred reveal components to our p tags

  return (
      <div className="flip-card-container grid grid-cols-3 gap-2 w-full py-[10px] scale-90">
        <div className="flip-card h-[19.5rem] w-[21.5rem] relative " >
          <motion.div 
            className='flip-card-inner h-[100%] w-[100%] absolute' 
            initial="hidden" 
            animate={controls}  
            variants={cardFlipVariant}
            whileHover="visible">

            <div className="flip-card-front h-[100%] w-[100%] flex 
              flex-row items-center content-center bg-slate-900">
              <Image alt="" src={TOOLS} className='h-[5rem] w-[5rem] mx-[1rem]' height={80} width={80}/>
              <div className='flex flex-col items-center p-[.4rem] h-[300px] w-[250px]'>
                <h3 className="font-Anton text-slate-200 underline decoration-[#e9a106] text-[22px] py-8">
                  Experience You Can Trust
                </h3>
                <p className="w-[12.5rem] font-Oswald text-slate-200">
                  Our team consists of skilled contractors who have decades of experience in the industry. 
                  We pride ourselves on superior craftsmanship and customer service that you can rely on.
                </p>
              </div>
            </div>

            <div className="flip-card-back h-[100%] w-[100%] flex 
              flex-row justify-between items-center content-center bg-slate-900">
              <Image alt="" src={TOOLS} className='h-[60%] w-[60%] m-[5rem]'/>
            </div>
          </motion.div>
        </div>


        <div className="flip-card h-[19.5rem] w-[21.5rem] relative">
          <motion.div 
            className='flip-card-inner h-[100%] w-[100%] absolute' 
            initial="hidden" 
            animate={controls} 
            variants={cardFlipVariant}
            whileHover="visible">

            <div className="flip-card-front h-[100%] w-[100%] flex 
              flex-row items-center content-center bg-slate-900">
              <Image alt="" src={WORKER} className='h-[80px] w-[80px] mx-[1rem]' height={80} width={80}/>
              <div className='flex flex-col items-center p-[.4rem] h-[300px] w-[250px]'>
                <h3 className="font-Anton text-slate-200 underline decoration-[#e9a106] text-[22px] py-8">
                  High-Quality Workmanship
                </h3>
                <p className="w-[12.5rem] font-Oswald text-slate-200">
                  We use top-of-the-line materials for all projects to ensure a high-quality end result. 
                  Our experts will provide you with a detailed quote so that you know exactly what to expect from your project.
                </p>
              </div>
            </div>

            <div className="flip-card-back h-[100%] w-[100%] flex 
              flex-row justify-between items-center content-center bg-slate-900">
              <Image alt="" src={WORKER} className='h-[60%] w-[60%] m-[5rem]'/>
            </div>
          </motion.div>
        </div>


        <div className="flip-card h-[19.5rem] w-[21.5rem] relative" >
          <motion.div 
            className='flip-card-inner h-[100%] w-[100%] absolute' 
            initial="hidden" 
            animate={controls} 
            variants={cardFlipVariant}
            whileHover="visible">

            <div className="flip-card-front h-[100%] w-[100%] flex 
              flex-row items-center content-center bg-slate-900">
              <Image alt="" src={HOME} className='h-[80px] w-[80px] mx-[1rem]' height={80} width={80}/>
              <div className='flex flex-col items-center p-[.4rem] h-[300px] w-[250px]'>
                <h3 className="font-Anton text-slate-200 underline decoration-[#e9a106] text-[22px] py-8">
                  Stress-free Remodeling Projects
                </h3>
                <p className="w-[12.5rem] font-Oswald text-slate-200">
                  At Peak Builders & Roofers, we understand how stressful remodeling projects can be. 
                  That’s why our team is here to guide you through every step of the process and make sure your project goes off without a hitch!
                </p>
              </div>
            </div>

            <div className="flip-card-back h-[100%] w-[100%] flex 
              flex-row justify-between items-center content-center bg-slate-900">
              <Image alt="" src={HOME} className='h-[60%] w-[60%] m-[5rem]'/>
            </div>
          </motion.div>
        </div>
      </div>
  );
};

export default CardComponent;