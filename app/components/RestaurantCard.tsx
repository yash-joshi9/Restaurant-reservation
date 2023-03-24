import Link from "next/link";
import { RestaurantCardTypes } from "../page";

type RestaurantProps = {
  restaurant: RestaurantCardTypes;
};

export default function ResturantCard(props: RestaurantProps) {
  const {
    restaurant: { name, cuisine, id, location, main_image, price, slug },
  } = props;
  return (
    <Link href={`/restaurant/${slug}`}>
      <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
        <img src={main_image} alt="" className="w-full h-36" />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2">{name}</h3>
          <div className="flex items-start">
            <div className="flex mb-2">****</div>
            <p className="font-semibold ml-2">77 reviews</p>
          </div>
          <div className="flex text-reg font-semibold capitalize">
            <p className=" mr-3">{cuisine.name}</p>
            <p className="mr-3">
              {price === "CHEAP" ? (
                <>
                  <span>$$</span> <span className="text-gray-400">$$</span>
                </>
              ) : price == "REGULAR" ? (
                <>
                  <span>$$$</span> <span className="text-gray-400">$</span>
                </>
              ) : (
                <>
                  <span>$$$$</span>
                </>
              )}
            </p>
            <p>{location.name}</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </div>
    </Link>
  );
}
