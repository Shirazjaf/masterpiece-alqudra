import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const SliderTwo = () => {
  return (
    <div className="slider-block style-two">
      <div className="slider-main">
        <div className="slider-item">
          <div className="container">
            <div className="text-content flex flex-col justify-between gap-y-10">
              <div className="title">
                <div className="heading2 animate__animated text-white animate__fadeInLeft animate__delay-0-2s">
                  Innovative engineering <br />
                  in advanced fire <br />
                  protection systems
                </div>
                <div className="body2 text-white mt-4 animate__animated animate__fadeInLeft animate__delay-0-8s">
                Receive customized fire safety solutions to protect what matters most.
                </div>
              </div>
              <div className="button-block animate__animated animate__fadeInLeft animate__delay-0-8s">
                <input
                  className="body3 text-secondary"
                  type="text"
                  placeholder="Email"
                />
                <a
                  className="button-main inline-flex hover:bg-[#C4030A] bg-black text-white text-button px-7 py-3 rounded-full items-center gap-2"
                  href="#">
                  <Icon.ArrowRight className="text-white" />
                  <span>Get started</span>
                </a>
              </div>
            </div>
            <div className="slider-img animate__animated animate__fadeInRight animate__delay-0-2s">
              <div className="bg-main">
                <Image
                  width={5000}
                  height={5000}
                  className="h-full w-full"
                  src="/images/slider/slider2.png"
                  alt=""
                />
              </div>
              <Image
                width={5000}
                height={5000}
                className="box-shadow w-[192px]"
                src="/images/slider/subslider2-1.png"
                alt=""
              />
              <Image
                width={5000}
                height={5000}
                className="box-shadow w-[278px]"
                src="/images/slider/subslider2-2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderTwo;
