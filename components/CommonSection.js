import React from "react";
import Details from "./Details";
import Image from "next/image";
const CommonSection = ({}) => {
  return (
    <section className="flex flex-row justify-center items-center max-container lg:mx-auto padding-container  gap-5 lg:gap-10 pb-5 lg:pb-9">
      <div className=" mx-auto">
        <Image
          src="/undraw_social_influencer_sgsv.png"
          alt="phone"
          width={700}
          height={1000}
          className=""
        />
      </div>

      <div className=" py-5 lg:py-8  lg:px-14 lg:w-6/12">
        
          <Details
            title={"Light, Fast & Powerful"}
            desc={{
              p1: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
              p2: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
            }}
          />
        
      </div>
    </section>
  );
};

export default CommonSection;
