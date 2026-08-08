
import { HeroProps } from './types'
import Image from 'next/image'

const Hero = ({ title, subtitle, bgImage, children }: HeroProps) => {
   return (
    <section className="relative w-full h-[100vh] md:h-[80vh] flex items-center justify-center text-center text-white">
   
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src={bgImage} 
          alt="Hero Background" 
           fill
          className="object-cover "
          priority
        />
      </div>

      <div className="max-w-[1383px]  flex flex-col items-center">
        <h1 className="text-4xl md:text-7xl font-normal mb-4 drop-shadow-md font-[family-name:var(--font-podcast)]">
          {title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-xl drop-shadow  font-[family-name:var(--font-open-sans)]">
          {subtitle}
        </p>

        
        {children}
      </div>
    </section>
  )
}
export default Hero;