
import Image from 'next/image';
import { CommonCardProps } from './types';



export default function CommonCard({
  image,
  title,
  price,
  priceUnit = '',
  description,
  schedule,
  groupSize,
  buttonText,
  onBook,
 
  imageHeight = "h-[404px]",
  cardHeight = "h-[592px]"
}: CommonCardProps) {
  return (
    <div 
      className={`bg-white rounded-[24px] shadow-sm overflow-hidden border border-gray-100 flex flex-col shrink-0 w-[330px]  ${cardHeight}`}
    >
    
      <div className={`relative w-full ${imageHeight} rounded-t-[24px] overflow-hidden`}>
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

     
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-bold text-[#333333] text-base mb-1">{title}</h3>
          
          {price && (
            <div className="text-lg font-semibold mb-3  font-[family-name:var(--font-open-sans)]">
              <span className="text-gray-400 font-semibold  font-[family-name:var(--font-open-sans)] text-lg mr-1">from</span>
              <span className="text-[#F18A00] font-extrabold  font-[family-name:var(--font-open-sans)]">{price}</span> <span className="text-xs font-extrabold text-gray-400">{priceUnit}</span>
            </div>
          )}

          {(schedule || groupSize) && (
            <div className="flex items-center justify-between text-4 text-[#FA8B02] mb-2 border-t border-b border-gray-100 py-1.5">
              {schedule && (
                <div className="flex items-center gap-1">
                <Image
                src='/assets/dateexplore.png' alt='logo'
                width={24}
                height={24}/>
                  <span>{schedule}</span>
                </div>
              )}
              {groupSize && (
                <div className="flex items-center gap-1">
                  <Image src='/assets/group.png'
                  alt='group'
                  width={24}
                  height={24}/>
                  <span>{groupSize}</span>
                </div>
              )}
            </div>
          )}

          {description && (
            <p className="text-black text-lg line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {buttonText && (
          <button 
            onClick={onBook}
            className="w-full border border-[#F18A00] text-[#F18A00] hover:bg-[#F18A00] hover:text-white text-xs font-semibold py-2 rounded-xl transition duration-300 text-center  font-[family-name:var(--font-open-sans)]"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}