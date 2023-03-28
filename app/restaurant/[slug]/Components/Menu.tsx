import { Item } from "../menu/page";
import React from "react";
import MenuCard from "./MenuCard";

export default function Menu({ menu }: { menu: Item[] }) {
  return (
    <main className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        <div className="flex flex-wrap justify-between">
          {menu?.length ? (
            menu.map((item) => <MenuCard item={item} key={item.id} />)
          ) : (
            <p>This restaurant does not have a menu</p>
          )}
        </div>
      </div>
    </main>
  );
}
