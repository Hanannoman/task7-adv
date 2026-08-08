
import Image from 'next/image';
import { BookNowSectionProps } from './types';



export default function BookNowSection({
  sectionTitle,
  submitButtonText,
  bikeImageSrc,
  fields,
}: BookNowSectionProps) {
  return (
    <section>
      
     <div  className="w-full  bg-[#f8ba7fca] mt-[60px]  py-[60px] pb-12 px-4 md:px-8 relative overflow-visible">
        <h2 className="text-[32px] font-extrabold pl-[424px] pb-[36px]  font-[family-name:var(--font-open-sans)]">
            {sectionTitle}
          </h2>
    
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between relative pb-12">

        <div className="bg-white/30 rounded-[24px] py-[30px] px-[34px] shadow-sm w-full lg:w-[734px] flex flex-col gap-[30px] z-10">
          
        

          <form className="flex flex-col gap-[30px]">
           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
              {fields.map((field) => (
                <div key={field.id} className="flex flex-col gap-2">
                  <label className="text-xs font-semibold  font-[family-name:var(--font-open-sans)] ">{field.label}</label>
                  
                  {field.type === 'select' ? (
                    <select
                      className="w-full h-[50px] px-5 bg-white border border-gray-200 rounded-[8px] text-xs text-gray-400 focus:outline-none focus:border-[#FA8B02]"
                    >
                      {field.options?.map((option, idx) => (
                        <option key={idx} className="text-gray-800">{option}</option>
                      ))}
                    </select>
                  ) : (
                    <div className="relative w-full">
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full h-[50px] px-6 py-[14px] bg-white border border-gray-200 rounded-[8px] text-xs text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#FA8B02]"
                      />
                      {field.icon && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none">
                          <Image
                            src={field.icon}
                            alt=""
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

         
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-[212px] h-[47px] bg-[#FA8B02] hover:bg-[#e07d02] text-white font-semibold   font-[family-name:var(--font-open-sans)]text-xl rounded-[50px] transition duration-300 shadow-sm"
              >
                {submitButtonText}
              </button>
            </div>
          </form>
        </div>

      
        <div className="relative w-full h-[350px] mt-10 lg:mt-0 lg:absolute lg:right-[10px] lg:bottom-[-80px] lg:w-[680px] lg:h-[480px] pointer-events-none z-20">
          <Image
            src={bikeImageSrc}
            alt="Bike Picture"
            fill
            className="object-contain"
            priority
          />
        </div>

      </div>
     </div>
    </section>
  );
}