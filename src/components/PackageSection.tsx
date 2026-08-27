import React from 'react';
import PackageCard from './PackageCard';
interface PackageProps {
  title: string
}
const packagesData = [
  {
    title: "BIKE / RICKSHAW",
    price: 10,
    image: "assets/rickshaw.png",
    features: [
      { icon: "assets/iconone day.png", text: "Your bike for a day" },
      { icon: "assets/iconmap.png", text: "City App" },
      { icon: "assets/icondiscount.png", text: "Discount on Rickshaw" },
      { icon: "assets/supporticon.png", text: "Guaranteed Support" },
    ]
  },
  {
    title: "BIKE TOURS",
    price: 30,
    image: "assets/biketour.png",
    features: [
      { icon: "assets/iconmountainbike.png", text: "A Mountain Bike Included" },
      { icon: "assets/expert.png", text: "A Guide For You" },
      { icon: "assets/iconwater.png", text: "Bottle of water" },
      { icon: "assets/supporticon.png", text: "Guaranteed Support" },
    ]
  },
  {
    title: "BUS TRIPS",
    price: 45,
    image: "assets/trip.png",
    features: [
      { icon: "assets/ticket.png", text: "Park ticket" },
      { icon: "assets/returnbus.png", text: "Return bus" },
      { icon: "assets/compain.png", text: "Companion" },
      { icon: "assets/supporticon.png", text: "Guaranteed Support" },
    ]
  },
  {
    title: "TRANSFER",
    price: 10,
    image: "assets/taxincc.png",
    features: [
      { icon: "assets/driver.png", text: "Personal Driver" },
      { icon: "assets/location.png", text: "Wherever You Want" },
      { icon: "assets/bestprice.png", text: "At the best price" },
      { icon: "assets/supporticon.png", text: "Guaranteed Support" },
    ]
  },
];

export default function PackagesSection({ title }: PackageProps) {
  return (
    <section className="w-full pt-[120px]  md:px-8 bg-white">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[60px]">


        <h2 className="text-2xl lg:text-[32px] lg:font-extrabold font-[family-name:var(--font-open-sans)]
 md:text-3xl text-gray-900">
          {title}
        </h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] justify-items-center">
          {packagesData.map((pkg, index) => (
            <PackageCard
              key={index}
              title={pkg.title}
              price={pkg.price}
              image={pkg.image}
              features={pkg.features}
            />
          ))}
        </div>

      </div>
    </section>
  );
}