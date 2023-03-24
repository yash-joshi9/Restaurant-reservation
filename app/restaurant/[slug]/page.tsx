import { PrismaClient } from "@prisma/client";
import Description from "./Components/Description";
import Images from "./Components/Images";
import Rating from "./Components/Rating";
import ReservationCard from "./Components/ReservationCard";
import ResturantNavBar from "./Components/ResturantNavBar";
import Reviews from "./Components/Reviews";
import Title from "./Components/Title";

const prima = new PrismaClient();

const fetchRestaurantBySlug = async (slug: string) => {
  const restaurant = await prima.restaurant.findUnique({
    where: {
      slug,
    },
  });
  return restaurant;
};

export default async function RestaurantDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const restaurant = await fetchRestaurantBySlug(params.slug);
  console.log(restaurant, ">>>>>>>>>>props");
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
