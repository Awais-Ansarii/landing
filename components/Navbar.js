import { NAV_LINKS } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <ul className="hidden h-full gap-12 lg:flex">
        <Navlinks />
      </ul>

      <Link href="/">
        <Image src="/Landie.svg" alt="logo" width={74} height={29} />
      </Link>

      <div className="lg:flexCenter hidden">
        <Button type="button" title="Login" variant="btn_dark_green" />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
