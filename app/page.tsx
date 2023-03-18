import { useRouter } from "next/navigation";

import Link from "next/link";
import styles from "./page.module.css";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import ResturantCard from "./components/RestaurantCard";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <main>
          <Header />
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            <ResturantCard />
          </div>
        </main>
      </main>
    </main>
  );
}
