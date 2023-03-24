import { useRouter } from "next/navigation";

import Link from "next/link";
import styles from "./page.module.css";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import ResturantCard from "./components/RestaurantCard";
import { Cuisine, PrismaClient, Location, PRICE } from "@prisma/client";

export interface RestaurantCardTypes {
  id: number;
  name: string;
  main_image: string;
  location: Location;
  cuisine: Cuisine;
  price: PRICE;
  slug: string;
}

const prima = new PrismaClient();

const fetchRestaurants = async (): Promise<RestaurantCardTypes[]> => {
  const restaurants = await prima.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      location: true,
      price: true,
      slug: true,
      cuisine: true,
    },
  });

  return restaurants;
};

export default async function Home() {
  const restaurants = await fetchRestaurants();

  console.log(restaurants, ">>>>>>>>>>>");
  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restaurants.map((restaurant) => (
          <ResturantCard restaurant={restaurant} />
        ))}
        {/* <ResturantCard /> */}
      </div>
    </main>
  );
}
