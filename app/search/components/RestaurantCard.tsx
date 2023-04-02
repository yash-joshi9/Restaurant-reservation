import { Restaurant } from "@prisma/client";
import Link from "next/link";
import { restaurantSearchCard } from "../page";

export default function RestaurantCard({
  restaurant,
}: {
  restaurant: restaurantSearchCard;
}) {
  const { main_image, name, location, price, cuisine } = restaurant;
  return (
    <div className="border-b flex pb-5">
      <img src={main_image} alt="" className="w-44 rounded" />
      <div className="pl-5">
        <h2 className="text-3xl">{name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            {price === "CHEAP" ? (
              <>
                <span>$$ </span> <span className="text-gray-400 mr-4">$$</span>
              </>
            ) : price == "REGULAR" ? (
              <>
                <span>$$$ </span> <span className="text-gray-400 mr-4">$</span>
              </>
            ) : (
              <>
                <span className="mr-4">$$$$ </span>
              </>
            )}{" "}
            <p className="mr-4">{cuisine.name}</p>
            <p className="mr-4">{location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href="/restaurant/milestone-stones">View more information</Link>
        </div>
      </div>
    </div>
  );
}
