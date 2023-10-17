'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useScroll } from 'framer-motion';


import HOME from "../../assets/home.png";
import WORKER from "../../assets/worker.png";
import TOOLS from "../../assets/tools.png";


const CardComponent: React.FC = () => {
  // const {scrollYProgress} = useScroll();
  const controls = useAnimation();
  const revealVariantAnimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    }
  };
  
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


  return (
      <div className="flip-card-container flex flex-row justify-between w-full py-[10px] px-[5vw] scale-90">
        <div className="flip-card h-[350px] w-[400px] relative " >
          <motion.div 
            className='flip-card-inner h-[100%] w-[100%] absolute' 
            initial="hidden" 
            animate={controls}  
            variants={cardFlipVariant}
            // whileInView
            whileHover="visible">

            <div className="flip-card-front h-[100%] w-[100%] flex 
              flex-row items-center content-center bg-slate-900">
              <Image alt="" src={TOOLS} className='h-[80px] w-[80px] mx-[1rem]' height={80} width={80}/>
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


        <div className="flip-card h-[350px] w-[400px] relative">
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


        <div className="flip-card h-[350px] w-[400px] relative" >
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
// 'use client';
// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';
// import { motion, useAnimation } from 'framer-motion';

// import HOME from "../../assets/home.png";
// import WORKER from "../../assets/worker.png";
// import TOOLS from "../../assets/tools.png";


// const CardComponent: React.FC = () => {
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);
  
//   const controls = useAnimation();

//   const flipHandler = () => {
//     if(!isAnimating ) {
//       setIsAnimating(!isFlipped)
//       setIsFlipped(true)
//     }
//   };


//   const cardFlipVariant = {
//     visible: { 
//       rotateY: 0,
//       opacity: 1,
//       transition: { duration: 0.6, ease: "easeInOut" },
//     },
//     hidden: { 
//       rotateY: 180,
//       opacity: 0.8,
//       transition: { duration: 0.6, ease: "easeInOut" } 
//     }
//   };

//   return (
//       <div className="flex flex-row justify-between w-full py-[10px] px-[5vw]">
//         <div id="card" className="relative h-[350px] w-[400px]" >
        
//           <motion.div 
//             className='absolute h-[350px] w-[400px] z-10' 
//             initial="visible" 
//             animate={controls} 
//             variants={cardFlipVariant}
//             whileHover="hidden">

//             <div className="h-[350px] w-[400px] flex flex-row items-center content-center bg-slate-900
//               border-2 border-b border-l border-t-0 border-r-0 border-solid border-[#e9a106]">
//               <Image alt="" src={TOOLS} className='h-[80px] w-[80px] mx-[25px]'/>
//               <div className='flex flex-col items-center p-[5px] h-[300px] w-[250px]'>
//                 <h3 className="font-Anton text-slate-200 underline decoration-[#e9a106] text-[22px] py-8">
//                   Experience You Can Trust
//                 </h3>
//                 <p className="w-[200px] font-Oswald text-slate-200">
//                 Our team consists of skilled contractors who have decades of experience in the industry. 
//                 We pride ourselves on superior craftsmanship and customer service that you can rely on.
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div 
//             className='absolute h-[350px] w-[400px] z-0' 
//             initial="visible" 
//             animate={controls} 
//             variants={{
//               hidden: { ...cardFlipVariant.visible, zIndex: 0},
//               visible: { ...cardFlipVariant.hidden, zIndex: 10}
//             }}
//             whileHover="hidden">

//           </motion.div>
//         </div>

//         <div id="card" className="relative h-[350px] w-[400px]" >
//           <motion.div 
//             className='absolute h-[350px] w-[400px] z-10' 
//             initial="hidden" 
//             animate={controls} 
//             variants={cardFlipVariant}
//             whileHover="visible">
            // <div className="h-[350px] w-[400px] flex flex-row items-center content-center bg-slate-900 
            //   border-2 border-b border-l border-t-0 border-r-0 border-solid border-[#e9a106]">
            //   <Image alt="" src={WORKER} className='h-[80px] w-[80px] mx-[25px]'/>
            //   <div className='flex flex-col items-center p-[5px] h-[300px] w-[250px]'>
            //     <h3 className="font-Anton text-slate-200 underline decoration-[#e9a106] text-[22px] py-8">
            //       High-Quality Workmanship
            //     </h3>
            //     <p className="w-[200px] font-Oswald text-slate-200">
            //     We use top-of-the-line materials for all projects to ensure a high-quality end result. 
            //     Our experts will provide you with a detailed quote so that you know exactly what to expect from your project.
            //     </p>
            //   </div>
            // </div>
//           </motion.div>
          
//           <motion.div 
//             className='absolute h-[350px] w-[400px] z-0' 
//             initial="visible" 
//             animate={controls} 
//             variants={{
//               hidden: { ...cardFlipVariant.visible, zIndex: 0},
//               visible: { ...cardFlipVariant.hidden, zIndex: 10}
//             }}
//             whileHover="hidden">

//           </motion.div>
//         </div>

//       <div className="relative h-[350px] w-[400px]" >
//         <motion.div 
//           className='absolute h-[350px] w-[400px] z-10' 
//           initial="hidden" 
//           animate={controls} 
//           variants={cardFlipVariant}
//           whileHover="visible">

//           <div className="h-[350px] w-[400px] flex flex-row items-center content-center bg-slate-900 
//             border-4 border-b border-l border-t-0 border-r-0 border-solid border-[#e9a106]">
//             <Image alt="" src={HOME} className='h-[80px] w-[80px] mx-[25px]'/>
//             <div className='flex flex-col items-center p-[5px] h-[300px] w-[250px]'>
//               <h3 className="font-Anton text-slate-200 underline decoration-[#e9a106] text-[22px] py-8">
//                 Stress-free Remodeling Projects
//               </h3>
//               <p className="w-[200px] font-Oswald text-slate-200">
              // At Peak Builders & Roofers, we understand how stressful remodeling projects can be. 
              // That’s why our team is here to guide you through every step of the process and make sure your project goes off without a hitch!
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         <motion.div 
//           className='absolute h-[350px] w-[400px] z-0' 
//           initial="visible" 
//           animate={controls} 
//           variants={{
//             hidden: { ...cardFlipVariant.visible, zIndex: 0},
//             visible: { ...cardFlipVariant.hidden, zIndex: 10}
//           }}
//           whileHover="hidden">

//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default CardComponent;