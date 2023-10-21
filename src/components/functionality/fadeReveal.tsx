import React, { useEffect, useRef} from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface Props {
  children: JSX.Element
}

const FadeReveal = ({children}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const mainControlAnimation = useAnimation();

  const aboutVariants = {
    visible: {
      transform: "translate(scale(1))",
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: "easeIn", 
        animationDirection: "normal" 
      },
    },
    hidden: {
      transform: "translate(scale(.7))",
      opacity: 0.2,
      y: -50,
      transition: { 
        duration: 0.7, 
        ease: "easeIn", 
        animationDirection: "normal" 
      },
    },
  };
  
  return (
    <div ref={ref} className="flex px-[1.5rem]">
      <motion.div
        className='fade-component'
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

export default FadeReveal;