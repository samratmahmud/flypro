import Footer from "@/components/global/footer/Footer";
import CameraCollection from "./home/CameraCollection ";
import Cameradetails from "./home/Cameradetails";
import DetailsCard from "./home/DetailsCard";
import Explore from "./home/Explore";
import FrequentlyQuestion from "./home/FrequentlyQuestion";
import Header from "./home/Header";
import People from "./home/People";
import PhotoGallery from "./home/PhotoGallery";
import Testimonial from "./home/Testimonial";

export default function Home() {
  return (
    <main>
      <Header />
      <DetailsCard />
      <Cameradetails />
      <Explore />
      <PhotoGallery />
      <CameraCollection />
      <People />
      <Testimonial />
      <FrequentlyQuestion />
      <Footer />
    </main>
  );
}
