import Image from "next/image";
import { PackageCardProps } from "./types";



export default function PackageCard({
  title,
  price,
  image,
  features,
  onBook
}: PackageCardProps) {
  return (
    <div className="bg-white rounded-[24px] w-[340px] shadow-sm overflow-hidden flex flex-col pb-6 border border-gray-100 shrink-0">
      
   
      <div className="relative w-[340px] h-[340px]">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover rounded-t-[24px]"
        />
      </div>


      <div className="px-6 pt-5 flex flex-col gap-5">
        
      
        <div className="flex flex-col gap-2">
          <h3 className="text-xs font-bold tracking-wider text-gray-900  font-[family-name:var(--font-open-sans)]">
            {title}
          </h3>
          <div className="flex items-baseline gap-1">
            <span className="text-xs text-black/50 font-medium self-start">€</span>
            <span className="text-3xl font-bold text-[#FA8B02] leading-none">{price}</span>
            <span className="text-xs text-gray-400 font-medium">/day</span>
          </div>
        </div>

      
        <ul className="flex flex-col gap-3.5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-xs text-gray-600 ">
              <div className="w-4 h-4 relative flex-shrink-0">
                <Image 
                  src={feature.icon} 
                  alt="icon" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className=" font-[family-name:var(--font-open-sans)]">{feature.text}</span>
            </li>
          ))}
        </ul>

        
        <div className="pt-2">
          <button 
            type="button"
            onClick={onBook}
            className="w-full h-[45px] border border-[#FA8B02] hover:bg-[#FA8B02] text-[#FA8B02] hover:text-white font-semibold   font-[family-name:var(--font-open-sans)]text-xs rounded-[50px] transition duration-300 flex items-center justify-center"
          >
            Book Now
          </button>
        </div>

      </div>
    </div>
  );
}