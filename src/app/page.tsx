import Footer from "@/components/global/footer/Footer";
import Cameradetails from "./home/Cameradetails";
import Explore from "./home/Explore";
import FrequentlyQuestion from "./home/FrequentlyQuestion";
import Header from "./home/Header";
import Testimonial from "./home/Testimonial";
import UpButton from "../components/global/UpButton";
import Reviews from "./home/Reviews";
import Pricing from "./home/Pricing";
import Features from "./home/Features";
import Screenshots from "./home/Screenshots";

export default function Home() {
   return (
      <main>
         <Header />
         <Features />
         <Cameradetails />
         <Explore />
         <Screenshots />
         <Pricing />
         <Reviews />
         <Testimonial />
         <FrequentlyQuestion />
         <Footer />
         <UpButton />
      </main>
   );
}
