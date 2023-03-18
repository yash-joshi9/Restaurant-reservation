import Link from "next/link";

export default function ResturantNavBar() {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href="/restaurant/MilesstoneGrill" className="mr-7">
        {" "}
        Overview{" "}
      </Link>
      <Link href="/restaurant/MilesstoneGrill/menu" className="mr-7">
        {" "}
        Menu{" "}
      </Link>
    </nav>
  );
}
