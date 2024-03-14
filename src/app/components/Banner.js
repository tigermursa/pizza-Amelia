"use client"

import { MouseParallaxContainer } from "react-parallax-mouse";



const Banner = () => {
  return (
    // working on the banner page
    <section className="bg-primary bg-pattern lg:min-h-[768px] pt-16 lg:pt-16">
      <div className="container mx-auto min-h-[768px] flex items-center ">
        <MouseParallaxContainer></MouseParallaxContainer>
      </div>
    </section>
  );
};

export default Banner;
