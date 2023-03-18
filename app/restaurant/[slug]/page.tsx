import Link from "next/link";
import NavBar from "../../components/Navbar";
import Description from "./Components/Description";
import Header from "./Components/Header";
import Images from "./Components/Images";
import Rating from "./Components/Rating";
import ReservationCard from "./Components/ReservationCard";
import ResturantNavBar from "./Components/ResturantNavBar";
import Reviews from "./Components/Reviews";
import Title from "./Components/Title";

export default function RestaurantDetailsPage() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <Header />
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <ResturantNavBar />
            <Title />
            <Rating />
            <Description />
            <Images />
            <Reviews />
          </div>
          <ReservationCard />
        </div>
      </main>
    </main>
  );
}
