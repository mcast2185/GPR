import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';


const Result = () => {
  return (
    <p className='font-Oswald'>
      Your message was sent. Thanks.
    </p>
  );
};

const ContactForm = () => {
  const [result, showResult] = useState(false)
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_3s90rcr', 'template_d6w25ho', e.target, 'OZTTUDEJQcLGrsGa3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
    showResult(true);
  };

  return (
    <div className='contact-component flex justify-center w-[19rem] h-[22rem] bg-slate-600 bg-opacity-30 p-5 shadow-2xl rounded-md'>
      <div className="contact-form-wrapper flex justify-center items-center ">
        <form  
          method="POST"
          onSubmit={sendEmail}
          >

          <div className='name-wrapper font-Anton w-[18rem]'>
            <label className="pt-2 border-b-[1px] text-slate-800 text-opacity-70 border-b-[#e9a106] border-solid">Name:</label>
            <br/>
            <input 
              className='input-bar w-[90%] pt-1'
              type="text" 
              placeholder="Full name here" 
              name="fullName" 
              required
              />
          </div>

          <div className='phone-number-wrapper font-Anton w-[18rem]'>  
            <label className=" border-b-[1px] text-slate-800 text-opacity-70 border-b-[#e9a106] border-solid">Phone Number:</label>
            <br/>
            <input
              type="number" 
              className='input-bar w-[90%] pt-1'
              placeholder="Number here" 
              name="phone" 
              required
              />
          </div>
          <div className='email-wrapper font-Anton w-[18rem]'>   
            <label className=" border-b-[1px] text-slate-800 text-opacity-70 border-b-[#e9a106] border-solid">Email:</label>
            <br/>
            <input 
              className='input-bar w-[90%] pt-1'
              type="text" 
              placeholder="Email here" 
              name="email" 
              required
              />
          </div>
          <div className='message-wrapper font-Anton w-[18rem]'>  
            <label className=" border-b-[1px] text-slate-800 text-opacity-70 border-b-[#e9a106] border-solid">Message:</label>
            <br/>
            <textarea
              className='message-bar font-Anton overflow-scroll w-[90%] pt-1'
              placeholder="Enter message here" 
              name="message" 
              required
              />
          </div>
          <div className="w-full flex justify-center items-center pt-2 pb-2">
            <motion.button className='btn hover:bg-slate-800 hover:bg-opacity-40 font-Oswald font-bold' 
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 17 
              }}>
              {/* <button> */}
                Submit
              {/* </button> */}
            </motion.button>
          </div>
          <div className='test'>
            {result ? <Result/> : null}
          </div>
        </form>
      </div>
    </div>
  )
};

export default ContactForm;