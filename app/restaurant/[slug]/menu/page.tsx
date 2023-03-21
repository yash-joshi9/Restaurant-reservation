import Link from "next/link";
import NavBar from "../../../components/Navbar";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import ResturantNavBar from "../Components/ResturantNavBar";

export default function RestaurantMenuPage() {
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <ResturantNavBar />
        <Menu />
      </div>
    </>
  );
}
