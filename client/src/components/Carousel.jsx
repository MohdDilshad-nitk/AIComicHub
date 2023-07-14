import React, { useState } from 'react';
import Card from './Card';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { download } from '../assets';
import { downloadImage } from '../utils';
import { Loader } from '../components';

const Carousel = ({ _id,name,prompt,photos }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [info,setInfo] = useState(false);
    const [downloadingImg, setdownloadingImg] = useState(false)

    const prevSlide = () => {
      const isFirstSlide = currentIndex <= 0;
      if(info && currentIndex === photos.length - 1 ){
        setInfo(false);
      }else{
        const newIndex = isFirstSlide ? 0 : currentIndex - 1 ;
        setCurrentIndex(newIndex);
      }
      
      console.log(currentIndex);
      
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === photos.length - 1;
      if(isLastSlide){
        setInfo(true);
      }else{
        const newIndex = isLastSlide ? currentIndex : currentIndex + 1;
        setCurrentIndex(newIndex);
      }
    
    };
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
  
    return (
      <div className=' h-[512px] lg:w-[452px] md:w-[400px] py-6 px-4 relative group'>

        {info ? 
        
        <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500 group flex flex-col justify-between max-h-[94.5%] bg-[#10131f] p-4 rounded-md">
                        <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>

                        <div className="mt-5 flex justify-between items-center gap-2">
                            <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">{name[0]}</div>
                            <p className="text-white text-sm">{name}</p>
                            </div>
                            <button type="button" 
                                onClick={() => {
                                    setdownloadingImg(true);
                  
                                    downloadImage(_id,photos);
                                    
                                    setTimeout(()=>setdownloadingImg(false),2000)
                                
                                  }}
                               className="outline-none bg-transparent border-none">
                            <img src={download} alt="download" className="w-6 h-6 object-contain invert" />
                            </button>
                        </div>

                        {downloadingImg && (
                          <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                            <Loader />
                          </div>
                        )}
        </div> : 
        <div
          style={{ backgroundImage: `url(${photos[currentIndex]})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        ></div>
        }

        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {photos.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className= 'text-2xl cursor-pointer'       >
              <RxDotFilled size={currentIndex === slideIndex ? 33 : 24} />
              
            </div>
          ))}

         
        </div>
      </div>
    );
};

export default Carousel;
