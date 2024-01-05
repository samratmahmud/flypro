import CameraCollection from "./home/CameraCollection ";
import Cameradetails from "./home/Cameradetails";
import DetailsCard from "./home/DetailsCard";
import Explore from "./home/Explore";
import Header from "./home/Header";
import People from "./home/People";
import PhotoGallery from "./home/PhotoGallery";

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
    </main>
  );
}
