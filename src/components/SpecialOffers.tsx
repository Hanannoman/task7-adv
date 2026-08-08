
import Image from 'next/image';
import { SpecialOffersSectionProps } from './types';


export default function SpecialOffers({
  title,
  description ,
  buttonText,
  imageSrc,
  imageAlt
}: SpecialOffersSectionProps) {
  return (
    <section  >
    <div className=' h-[450px] relative w-full bg-[#f8ba7fca] overflow-visible mt-[217px]'>
        <div className="max-w-7xl mx-auto w-full h-full  flex items-center justify-between relative">
        
   
        <div className="bg-white/30 rounded-[24px] p-[30px] shadow-md max-w-[569px] w-full z-10 flex flex-col items-center justify-center text-center h-[330px] " >
          <h3 className="text-[32px] font-extrabold  font-[family-name:var(--font-open-sans)] pb-8 leading-tight">
            {title}
          </h3>
          <p className=" text-lg leading-relaxed mb-8   font-[family-name:var(--font-open-sans)]">
            {description}
          </p>
 
          <div className=" max-w-[212px] bg-[#F18A00] text-white text-xl font-semibold px-6 py-[10px] rounded-full shadow-sm cursor-default">
            {buttonText}
          </div>
        </div>


        <div className="absolute right-0 bottom-0 w-[427px] h-[600px] pointer-events-none hidden lg:block z-20">
          <Image 
            src={imageSrc} 
            alt={imageAlt} 
            fill 
            className="object-contain object-bottom "
          />
        </div>

      </div>
    </div>
    </section>
  );
}