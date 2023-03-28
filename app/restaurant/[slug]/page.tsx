import { PrismaClient } from "@prisma/client";
import Description from "./Components/Description";
import Images from "./Components/Images";
import Rating from "./Components/Rating";
import ReservationCard from "./Components/ReservationCard";
import ResturantNavBar from "./Components/ResturantNavBar";
import Reviews from "./Components/Reviews";
import Title from "./Components/Title";

const prima = new PrismaClient();

interface Restaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
}
const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prima.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    },
  });

  if (!restaurant) {
    throw new Error();
  }
  return restaurant;
};

export default async function RestaurantDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const restaurant = await fetchRestaurantBySlug(params.slug);
  const { description, id, images, name, slug } = restaurant;
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <ResturantNavBar slug={slug} />
        <Title name={name} />
        <Rating />
        <Description description={description} />
        <Images images={images} />
        <Reviews />
      </div>
      <ReservationCard />
    </>
  );
}
