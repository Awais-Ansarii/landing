import { NAV_LINKS } from "@/constants/data";
import Link from "next/link";
import React from "react";

const Navlinks = () => {
  return (
    <div className="flex justify-center items-center gap-5 px-2">
      {NAV_LINKS.map((link) => (
        <Link
          href={link.href}
          key={link.key}
          className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default Navlinks;
