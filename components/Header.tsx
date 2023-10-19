import Image from "next/image";
import Navbar from "./Navbar";
import "../app/globals.css";

const Header = () => {
  return (
    <header
      className="flex items-center justify-between absolute top-0 left-0 w-full pt-6 px-20"
      style={{ paddingLeft: "104px", paddingRight: "101px" }}
    >
      <Image
        src="/carp_travel_logo.svg"
        alt="Carp Travel Logo"
        width={61}
        height={34}
        priority
      />
      <Navbar></Navbar>
    </header>
  );
};

export default Header;
