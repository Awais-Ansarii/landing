import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Navlinks from "./Navlinks";

const Footer = () => {
  return (
    <footer className="flexCenter mb-20 lg:mb-24 ">
      <div className="padding-container max-container flex w-full justify-center py-5 flex-col gap-6 lg:gap-10 ">
        <div className=" flex flex-row items-center justify-between  ">
          <div>
            <p className="regular-14 w-full text-center text-gray-30">
              @2024 | All rights reserved
            </p>
          </div>

          <div>
            <Link href="/">
              <Image
                src="/Landie.svg"
                alt="logo"
                width={74}
                height={29}
                className="inline-block cursor-pointer"
              />
            </Link>
          </div>

          <div className="lg:flexCenter ">
            <Button type="button" title="Purchase" variant="btn_dark_green" />
          </div>
        </div>

        <div className="border bg-gray-20" />

        <div className=" flex flex-row items-center justify-between  ">
          <Navlinks />

          <ul className="regular-14 flex gap-2 lg:gap-4 text-gray-30">
            {SOCIALS.links.map((link) => (
              <Link href="/" key={link}>
                <Image src={link} alt="logo" width={24} height={24} />
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
