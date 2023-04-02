import { Cuisine, Location, PrismaClient } from "@prisma/client";
import NavBar from "../components/Navbar";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

const prisma = new PrismaClient();

export interface restaurantSearchCard {
  name: string;
  main_image: string;
  location: Location;
  price: string;
  cuisine: Cuisine;
}

const fetchRestaurantByLocation = async (
  location: string
): Promise<restaurantSearchCard[]> => {
  if (!location)
    return prisma.restaurant.findMany({
      select: {
        name: true,
        main_image: true,
        location: true,
        price: true,
        cuisine: true,
      },
    });

  const restaurantByLocation = prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: location.toLowerCase(),
        },
      },
    },
    select: {
      name: true,
      main_image: true,
      location: true,
      price: true,
      cuisine: true,
    },
  });

  return restaurantByLocation;
};
export default async function SearchPage({
  searchParams,
}: {
  searchParams: { city: string };
}) {
  const restaurants = await fetchRestaurantByLocation(searchParams.city);

  return (
    <main>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <div className="w-5/6">
          {restaurants.length
            ? restaurants.map((restaurant) => (
                <RestaurantCard restaurant={restaurant} />
              ))
            : ""}
        </div>
      </div>
    </main>
  );
}
