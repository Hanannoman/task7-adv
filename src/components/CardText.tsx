import React from 'react';
import Image from 'next/image';
import { AboutCompanySectionProps } from './types';



export default function CardText({
  imageSrc,
  imageAlt,
  isCustomShape = false,
  topTitle,
  mainTitle,
  description,
  stats,
}: AboutCompanySectionProps) {
  return (
    <section className="pt-[120px] max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
      
        <div className="flex justify-center relative">
          {isCustomShape ? (
          
            <div className="relative w-[450px] h-[650px] flex items-center ">
              <div className="absolute inset-0  rounded-full filter blur-xl "></div>
              <Image 
                src={imageSrc} 
                alt={imageAlt} 
                fill 
                className="object-contain " 
              />
            </div>
          ) : (
           
            <div className="relative w-full max-w-[650px] h-[400px] sm:h-[500px] rounded-[32px] overflow-hidden shadow-lg">
              <Image 
                src={imageSrc} 
                alt={imageAlt} 
                fill 
                className="object-cover" 
              />
            </div>
          )}
        </div>

     
        <div>
          <span className="font-semibold  font-[family-name:var(--font-open-sans)] text-base text-black/60  pb-[6px]">
            {topTitle}
          </span>
          <h2 className="md:text-2xl lg:text-[32px] sm:text-3xl font-extrabold pb-8  font-[family-name:var(--font-open-sans)] ">
            {mainTitle}
          </h2>
          <p className="text-black  lg:text-lg  sm:text-sm  pb-8  font-[family-name:var(--font-open-sans)]">
            {description}
          </p>

       
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-[50px]">
            {stats.map((stat, index) => (
              <div key={index}>
                <h4 className=" lg:text-[32px] text-xl sm:text-2xl font-bold text-[#FA8B02]   font-[family-name:var(--font-open-sans)]">
                  {stat.number}
                </h4>
                <p className="text-base text-black/60 leading-tight  font-[family-name:var(--font-open-sans)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}