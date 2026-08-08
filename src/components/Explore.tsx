

'use client';

import  { useState } from 'react';
import Image from 'next/image';
import CommonCard from './CommonCard';
import { ExploreProps, popularTours } from './types';

export default function Explore({title}:ExploreProps) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % popularTours.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + popularTours.length) % popularTours.length);
  };


  const visibleTours = popularTours.map((_, i) => popularTours[(currentIndex + i) % popularTours.length]);

  return (
    <section className="pt-[132px] max-w-7xl mx-auto ">

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl md:text-2xl  lg:text-[32px] lg:font-extrabold font-bold tracking-tight  font-[family-name:var(--font-open-sans)]">
         {title}
        </h2>
        
        <div className="flex items-center gap-2">
         
          <button 
            onClick={handlePrev}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50 transition relative overflow-hidden"
          >
            <Image src="/assets/left.png" alt="Prev" width={12} height={12} className="object-contain" />
          </button>

          
          <button 
            onClick={handleNext}
            className="w-9 h-9 rounded-full bg-[#F18A00] hover:bg-[#d97c00] flex items-center justify-center text-white cursor-pointer shadow-md transition relative overflow-hidden"
          >
            <Image src="/assets/right.png" alt="Next" width={12} height={12} className="object-contain" />
          </button>
        </div>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[120px]  " >
        {visibleTours.map((tour, index) => (
          <CommonCard 
            key={index}
            image={tour.image}
            title={tour.title}
            price={tour.price}
            schedule={tour.schedule}
            groupSize={tour.groupSize}
            description={tour.description}
          />
        ))}
      </div>
    </section>
  );
}