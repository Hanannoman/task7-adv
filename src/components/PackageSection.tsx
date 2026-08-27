import React from 'react';
import PackageCard from './PackageCard';
interface PackageProps {
  title: string
}
const packagesData = [
  {
    title: "BIKE / RICKSHAW",
    price: 10,
    image: "/task7-adv/assets/rickshaw.png",
    features: [
      { icon: "/task7-adv/assets/iconone day.png", text: "Your bike for a day" },
      { icon: "/task7-adv/assets/iconmap.png", text: "City App" },
      { icon: "/task7-adv/assets/icondiscount.png", text: "Discount on Rickshaw" },
      { icon: "/task7-adv/assets/supporticon.png", text: "Guaranteed Support" },
    ]
  },
  {
    title: "BIKE TOURS",
    price: 30,
    image: "/task7-adv/assets/biketour.png",
    features: [
      { icon: "/task7-adv/assets/iconmountainbike.png", text: "A Mountain Bike Included" },
      { icon: "/task7-adv/assets/expert.png", text: "A Guide For You" },
      { icon: "/task7-adv/assets/iconwater.png", text: "Bottle of water" },
      { icon: "/task7-adv/assets/supporticon.png", text: "Guaranteed Support" },
    ]
  },
  {
    title: "BUS TRIPS",
    price: 45,
    image: "/task7-adv/assets/trip.png",
    features: [
      { icon: "/task7-adv/assets/ticket.png", text: "Park ticket" },
      { icon: "/task7-adv/assets/returnbus.png", text: "Return bus" },
      { icon: "/task7-adv/assets/compain.png", text: "Companion" },
      { icon: "/task7-adv/assets/supporticon.png", text: "Guaranteed Support" },
    ]
  },
  {
    title: "TRANSFER",
    price: 10,
    image: "/task7-adv/assets/taxincc.png",
    features: [
      { icon: "/task7-adv/assets/driver.png", text: "Personal Driver" },
      { icon: "/task7-adv/assets/location.png", text: "Wherever You Want" },
      { icon: "/task7-adv/assets/bestprice.png", text: "At the best price" },
      { icon: "/task7-adv/assets/supporticon.png", text: "Guaranteed Support" },
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