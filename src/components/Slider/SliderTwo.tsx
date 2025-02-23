import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Cover from '../../../public/images/banner/banner-cover.png'


const SliderTwo = () => {
  return (
    <div className="slider-block style-two bg-bg-hero bg-cover bg-center relative">
      <div className="slider-main">
        <div className="slider-item">
          <div className="container">
            <div className="text-content flex flex-col justify-between gap-y-10">
              <div className="title">
                <div className="heading2 animate__animated bg-[#1D2027] p-4 bg-opacity-65 text-white animate__fadeInLeft animate__delay-0-2s">
                  Innovative engineering <br />
                  in advanced fire <br />
                  protection systems
                </div>
                <div className="body2 text-white mt-4 animate__animated animate__fadeInLeft animate__delay-0-8s">
                Receive customized fire safety solutions to protect what matters most.
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderTwo;
