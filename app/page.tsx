import { useRouter } from "next/navigation";

import Link from "next/link";
import styles from "./page.module.css";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import ResturantCard from "./components/RestaurantCard";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        <ResturantCard />
      </div>
    </main>
  );
}
