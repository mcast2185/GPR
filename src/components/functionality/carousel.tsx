import React, { useState, useEffect } from 'react';

import GPRone from "../../assets/sudoGPRone.jpg";
import GPRtwo from "../../assets/sudoGPRtwo.jpg";
import GPRthree from "../../assets/sudoGPRthree.jpg";
import GPRfour from "../../assets/sudoGPRfour.jpg";
import Image from 'next/image';


interface CarouselProps {
  autoSlide?: boolean;
  hideIndicators?: boolean;
};

const Carousel: React.FC<CarouselProps> = ({ autoSlide = false, hideIndicators = false }) => {
  const [current, setCurrent] = useState(0);
  const images = [
    GPRone, 
    GPRtwo, 
    GPRthree, 
    GPRfour
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (autoSlide) {
      timer = setInterval(() => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 5500);
    };
    return () => {
      if (timer) {
        clearInterval(timer);
      };
    };
  }, [autoSlide, images.length]);

  return (
    //zindex
    <div className="w-full relative h-[600px]">
      {images.map((image, index) => (
        // zindex
        <div key={index} className="flex relative">
          <Image
            key={index}
            src={image}
            alt={`carousel-${index}`}
            // zindex
            className={`absolute w-full h-[600px] transition-opacity 
            duration-500 ${current === index ? 'opacity-100' : 'opacity-0'} brightness-[40%]`}
          />
        </div>
      ))}
      {!hideIndicators && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 bg-gray-400 rounded-full cursor-pointer
              ${current === index ? 'bg-blue-500' : ''}`}
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;