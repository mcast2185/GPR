import Image from 'next/image';
import React, {useEffect, useRef} from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

import GPRnine from "../assets/sudoGPRnine.jpg";
import Footer from '../components/footer/footer';
import ContactForm from "../components/contactComponent/contactComponent";

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
      <div className='contact-container-header'/>
      <div className='contact-header'>
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
          <h1> Contact </h1>
        </motion.div>
      </div>
      <div className='contact-content-wrapper'>
        <div className='contact-content-form-wrapper'>
          <div>
            <ContactForm/>
          </div>
          <div ref={ref} className="relative">
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
              <Image alt="GPR image" src={GPRnine}/>         
            </motion.div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact;