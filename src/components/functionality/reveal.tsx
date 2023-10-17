import React, {useEffect, useRef} from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width ="fit-content"}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const mainControlAnimation = useAnimation();
  const slideControlAnimation = useAnimation();

  useEffect(() => {
    if (isInView){
    mainControlAnimation.start("visible");
    slideControlAnimation.start("visible");
    }
  }, [isInView, mainControlAnimation, slideControlAnimation])


  return (
    <div ref={ref} style={{position: 'relative', width, overflow: 'hidden'}}>
      <motion.div
        variants={{
          hidden: {opacity: 0, y: 75},
          visible: {opacity: 1, y: 0}
        }}
        initial="hidden"
        animate={mainControlAnimation}
        transition={{duration: .75, delay: .55}}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: {left: 0},
          visible: {left: "100%"}
        }}
        initial="hidden"
        animate={slideControlAnimation}
        transition={{duration: .75, ease: "easeIn"}}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          background: '#e9a106'
        }}
      />

    </div>
  )
}

