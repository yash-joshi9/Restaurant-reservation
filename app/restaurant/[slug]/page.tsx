import Description from "./Components/Description";
import Images from "./Components/Images";
import Rating from "./Components/Rating";
import ReservationCard from "./Components/ReservationCard";
import ResturantNavBar from "./Components/ResturantNavBar";
import Reviews from "./Components/Reviews";
import Title from "./Components/Title";

export default function RestaurantDetailsPage() {
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <ResturantNavBar />
        <Title />
        <Rating />
        <Description />
        <Images />
        <Reviews />
      </div>
      <ReservationCard />
    </>
  );
}
