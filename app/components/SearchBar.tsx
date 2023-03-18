"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center">
      <input
        className="rounded  mr-3 p-2 w-[450px]"
        type="text"
        placeholder="State, city or town"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="rounded bg-red-600 px-9 py-2 text-white"
        onClick={(e) => {
          if (search === "apple") return;
          router.push(`/search`);
        }}
      >
        Let's go
      </button>
    </div>
  );
}
