
'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  comment: string;
  imageSrc: string;
}

interface TestimonialsSectionProps {
  sectionTitle?: string;
  testimonials?: Testimonial[];
}

export default function Testonomial({
  sectionTitle = "Happy Customers Says",
  testimonials = [
    {
      name: "Lyod Gomez",
      comment: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
      imageSrc: "assets/loudy.png"
    },
    {
      name: "Lyod Gomez",
      comment: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
      imageSrc: "assets/loudy.png"
    },
    {
      name: "Sarah Smith",
      comment: "This is a third testimonial added to test the slider functionality when clicking the arrows to navigate smoothly between items without changing any other structure.",
      imageSrc: "assets/loudy.png"
    }
  ]
}: TestimonialsSectionProps) {


  const [currentIndex, setCurrentIndex] = useState(0);


  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };


  const firstIndex = currentIndex;
  const secondIndex = (currentIndex + 1) % testimonials.length;
  const visibleTestimonials = [testimonials[firstIndex], testimonials[secondIndex]];

  return (
    <section className="w-full pt-[120px] bg-white pb-[160px]">
      <div className="max-w-7xl mx-auto ">


        <div className="flex items-center justify-between pb-[60px]">
          <h2 className="text-[32px] md:text-3xl font-extrabold">
            {sectionTitle}
          </h2>

          <div className="flex items-center gap-2">

            <button
              onClick={handlePrev}
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 cursor-pointer transition relative overflow-hidden"
            >
              <Image src="assets/left.png" alt="Prev" width={12} height={12} className="object-contain" />
            </button>

            <button
              onClick={handleNext}
              className="w-8 h-8 rounded-full bg-[#F18A00] flex items-center justify-center text-white cursor-pointer shadow-sm hover:bg-[#d97900] transition relative overflow-hidden"
            >
              <Image src="assets/right.png" alt="Next" width={12} height={12} className="object-contain" />
            </button>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleTestimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#FFFFFF] rounded-[24px] p-[32px] pt-10 pb-12 flex flex-col items-center text-center shadow-sm relative overflow-hidden"
            >

              <div className="absolute top-[120px] left-8 opacity-20 text-[#FA8B02] pointer-events-none">
                <svg width="35" height="25" viewBox="0 0 40 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 28H10L16 14V0H0V14H8L0 28ZM24 28H34L40 14V0H24V14H32L24 28Z" />
                </svg>
              </div>


              <div className="relative w-16 h-16 rounded-full overflow-hidden mb-3 shadow-inner border border-white z-10">
                <Image
                  src={item.imageSrc}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>


              <h4 className="text-lg font-normal pb-[38px] z-10">
                {item.name}
              </h4>

              <p className="text-[#333333] text-sm md:text-lg leading-relaxed z-10 px-4">
                {item.comment}
              </p>

              <div className="absolute bottom-4 right-8 text-[#FA8B02] pointer-events-none">
                <svg width="35" height="25" viewBox="0 0 40 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 28H10L16 14V0H0V14H8L0 28ZM24 28H34L40 14V0H24V14H32L24 28Z" />
                </svg>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}