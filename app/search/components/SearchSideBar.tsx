export default function SearchSideBar({
  locations,
  cuisines,
  fetchRestaurantByLocation,
}: {
  locations: { name: string }[];
  cuisines: { name: string }[];
  fetchRestaurantByLocation: Function;
}) {
  return (
    <div className="basis-1/5 font-semibold side-bar-component">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        {locations.map((location, key) => (
          <p key={key}>
            <button
              onClick={() => fetchRestaurantByLocation(location.name)}
              className="font-light text-reg"
            >
              {location.name}
            </button>
          </p>
        ))}
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <p>
            <button className="font-light text-reg">{cuisine.name}</button>
          </p>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <button className="border w-full text-reg font-light rounded-l p-2">
            $
          </button>
          <button className="border-r border-t border-b w-full text-reg font-light p-2">
            $$
          </button>
          <button className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r">
            $$$
          </button>
        </div>
      </div>
    </div>
  );
}
