import BookNowSection from "@/components/BookNewSection";
import CardText from "@/components/CardText";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import PackagesSection from "@/components/PackageSection";
import Search from "@/components/Search";
import Service from "@/components/Service";
import SpecialOffers from "@/components/SpecialOffers";
import Testonomial from "@/components/Testonomial";
import { bookNowData } from "@/components/types";




export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <Hero
        title="Enjoy in the best way!"
        subtitle="Enjoy our services for your trip anytime"
        bgImage="assets/herohome.png"
      >
        <Search
          publ="Public Tours"
          priv="Private Tours"
          logobottom="assets/arrowbottom.png"
          search="assets/search.png" />
      </Hero>

      <Explore title="Explore Our Popular Destinantions " />
      <CardText
        imageSrc="assets/locationcard.png"
        imageAlt="We are the best company"
        isCustomShape={true}
        topTitle="WELCOME TO OUR SITE!"
        mainTitle="We are the best company for your visit"
        description="After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!"
        stats={[
          { number: '20+', label: 'Years Experience' },
          { number: '100+', label: 'Happy Customer' },
          { number: '15+', label: 'Choice of Services' },
          { number: '10+', label: 'Professional Guides' },
        ]}

      />
      <SpecialOffers
        title="Get Special Offers for Organizations"
        description="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s."
        buttonText="Contact Us"
        imageAlt="Traveler Tourist Woman"

        imageSrc="assets/stock.png"

      />
      <Service />
      <BookNowSection {...bookNowData} />
      <PackagesSection title="The Most Popular Packages" />
      <Testonomial />



    </main>
  );
}