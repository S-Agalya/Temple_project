// components/Main.js

import { useState } from 'react';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const slideLeft = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const slideRight = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg'];

  return (
    <>
      <div className="flex justify-end items-center mr-6 h-screen">
        <div className="bg-gray-200 w-80 h-80 p-100 rounded-md relative">

        <div className="absolute left-0  top-0 w-full h-full flex items-right justify-center">
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} className='ml-15 mb-5 mt-5' width={240} height={200} /> 
              </div>
          <div className="absolute bottom-36 left-88 mb-4 ml-4">
            <CiCircleChevLeft className="text-gray-600 text-3xl cursor-pointer" onClick={slideLeft} />
          </div>

          <div className="absolute bottom-36 right-0 mb-4 mr-4">
            <CiCircleChevRight className="text-gray-600 text-3xl cursor-pointer" onClick={slideRight} />
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 h-10 w-full bg-yellow-500'></div>
    </>
  );
};

export default Slider ;
