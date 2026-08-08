
import Link from 'next/link';
import Hero from '@/components/Hero';
import CardText from '@/components/CardText';
import Testonomial from '@/components/Testonomial';

import AboutFeature from '@/components/AboutFeauture';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      {/* استدعاء مكون الهيرو المشترك مع تمرير بيانات صفحة About */}
      <Hero 
        title="Our team cares about your full relax" 
        subtitle="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
        bgImage="/assets/heroabout.png" // ضعي صورة الهيرو الخاصة بالأبوت في مجلد public/images/
      >
        {/* الزر الخاص بصفحة الأبوت المطابق لتصميم فيغما */}
        <Link 
          href="/tour-packages"
          className="mt-4 border-2 border-white text-white hover:bg-white hover:text-black font-medium px-8 py-3 rounded-full transition-all duration-300 backdrop-blur-sm text-sm"
        >
          View our Tour Packages
        </Link>
      </Hero>
            <CardText 
              imageSrc="/assets/imageabout.png" // صورة الفتاة مع الخريطة الخاصة بالهوم
              imageAlt="We are the center"
              isCustomShape={true}
              topTitle="WELCOME TO OUR SITE!"
              mainTitle="We Are The Center Of Lucca
To Offer You The Best"
              description="We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!"
              stats={[
                { number: '20+', label: 'Years Experience' },
                { number: '100+', label: 'Happy Customer' },
                { number: '15+', label: 'Choice of Services' },
                { number: '10+', label: 'Professional Guides' },
              ]}
            />
              <AboutFeature 
        features={[
          { iconSrc: "/assets/map.png", title: "Complete Packages For All Your Wishes" },
          { iconSrc: "/assets/experience.png", title: "Over 30 Years Of Experience" },
          { iconSrc: "/assets/expert.png", title: "Expert Guides For You" },
          { iconSrc: "/assets/bestprice.png", title: "Guaranteed fun at the best price!" }
        ]}
      />
            <Testonomial />
         

      {/* يمكنك إكمال باقي أقسام صفحة الأبوت هنا تحت الهيرو */}
    </main>
  );
}