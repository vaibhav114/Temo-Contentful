import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="ml-52 pt-32 ">
        <div className="">
          <h1 className="text-[60px] font-semibold tracking-widest ">Contentful CMS</h1>
        </div>
        <div>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            deserunt rem aut ipsam, <br></br> soluta voluptate. Perspiciatis,
            reprehenderit ut. Illo, officia!
          </p>
        </div>
      </div>
      <div className="">
        <div className="absolute right-20 top-20">
          <img src="./hero.svg" alt="" srcset="" className="w-96" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
