import { PrismaClient } from "@prisma/client";
import Menu from "../Components/Menu";
import ResturantNavBar from "../Components/ResturantNavBar";

const prisma = new PrismaClient();

export interface Item {
  id: number;
  name: string;
  price: string;
  description: string;
}

const fetchItems = async (slug: string): Promise<Item[]> => {
  const fetchedItems = await prisma.restaurant.findUnique({
    where: { slug },
    select: {
      items: true,
    },
  });

  if (!fetchedItems) throw new Error();

  return fetchedItems?.items;
};

export default async function RestaurantMenuPage({
  params,
}: {
  params: { slug: string };
}) {
  const menu = await fetchItems(params.slug);

  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <ResturantNavBar slug={params.slug} />
        <Menu menu={menu} />
      </div>
    </>
  );
}
