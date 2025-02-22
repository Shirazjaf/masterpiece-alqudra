import React from "react";
import Image from "next/image";

import Cover from '../../../public/images/banner/banner-cover.png'


const SliderTwo = () => {
  return (
    <div className="slider-block style-two  lg:h-[100vh]">
      <Image src={Cover} alt="cover" />
    </div>
  );
};

export default SliderTwo;
