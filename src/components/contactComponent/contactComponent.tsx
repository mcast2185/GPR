import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


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
      <div className='contact-component'>
        <div className="contact-form-wrapper">
          <div className='form-wrapper'>
            <h1>Contact us</h1>
            <form  
              method="POST"
              onSubmit={sendEmail}
              >

              <div className='name-wrapper'>
                <label>Name:</label>
                <br/>
                <input 
                  className='input-bar'
                  type="text" 
                  placeholder="Full name here" 
                  name="fullName" 
                  required
                  />
              </div>

              <div className='phone-number-wrapper'>  
                <label>Phone Number:</label>
                <br/>
                <input
                  type="number" 
                  className='input-bar'
                  placeholder="Number here" 
                  name="phone" 
                  required
                  />
              </div>
              <div className='email-wrapper'>   
                <label>Email:</label>
                <br/>
                <input 
                  className='input-bar'
                  type="text" 
                  placeholder="Email here" 
                  name="email" 
                  required
                  />
              </div>
              <div className='message-wrapper'>  
                <label>Message:</label>
                <br/>
                <textarea
                
                  value="text" 
                  className='message-bar'
                  placeholder="Enter message here" 
                  name="message" 
                  required
                  />
              </div>
              <div className='btn'>    
                <button>
                  Submit
                </button>
              </div>
              <div className='test'>
                {result ? <Result/> : null}
              </div>
            </form>
          </div>
        </div>
    </div>
  )
};

export default ContactForm;