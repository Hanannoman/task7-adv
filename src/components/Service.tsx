
import CommonCard from './CommonCard';

const servicesList = [
  {
    image: '/assets/bycekl.png', 
    title: 'Bike and rickshaw rental',
    description: 'Book your quality vehicle quickly for an hour or all day!'
  },
  {
    image: '/assets/countrside.png',
    title: 'Guided tour of the countryside',
    description: 'Live the real Lucchese experience by visiting the suburbs by bike!'
  },
  {
    image: '/assets/taxincc.png',
    title: 'Taxi and NCC service',
    description: 'Do you need not only a bike but also a driver? Then you have found the right place!'
  },
  {
    image: '/assets/bus.png',
    title: 'Bus Package',
    description: 'Do you need not only a bike but also a driver? Then you have found the right place!'
  }
];

export default function Service() {
  return (
    <section >

     <div className="pt-[120px] max-w-7xl mx-auto ">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-[120px]" >
        {servicesList.map((service, index) => (
          <CommonCard 
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
            imageHeight="h-[302px]"  
            cardHeight="h-[450px]"  
          />
        ))}
      </div>
     </div>
    </section>
  );
}