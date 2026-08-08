import Image from "next/image";

interface FeatureItem {
  iconSrc: string;
  title: string;
}

interface AboutFeaturesProps {
  features: FeatureItem[];
}

export default function AboutFeature({ features }: AboutFeaturesProps) {
  return (
    <section>
      <div className="w-full bg-[#f8ba7fca] mt-[120px] py-[83px] px-[250px]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center items-center">
            {features.map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-8 bg-white/30 rounded-[24px]">
            
                <div className="w-12 h-12 relative pb-[15px] flex items-center justify-center">
                  <Image 
                    src={item.iconSrc} 
                    alt={item.title} 
                    width={40} 
                    height={40} 
                    className="object-contain"
                  />
                </div>
             
                <h4 className="text-xs md:text-xl font-[family-name:var(--font-open-sans)] font-semibold leading-snug">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}