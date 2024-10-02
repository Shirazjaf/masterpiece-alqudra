'use client'

import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

const slidesData = [
    {
        title: "Fire pumps",
        description: "UL/FM listed and non-UL listed",
        imgSrc: "/images/products/firepipe.png",
        link: "#",
    },
    {
        title: "Protective Equipments",
        description: "Personal Protective Equipments",
        imgSrc: "/images/products/protective-equipment.png",
        link: "#",
    },
    {
        title: "Fire Extinguishers",
        description: "Fire extinguishers and hose reels.",
        imgSrc: "/images/products/fire-extinguishers.png",
        link: "#",
    },
    {
        title: "HDPE Pipeline Works",
        description: "HDPE pipeline works",
        imgSrc: "/images/products/HDPE-pipeLine.png",
        link: "#",
    },
    {
        title: "Steel Firedoors",
        description: "Steel Firedoors",
        imgSrc: "/images/products/firedoor.png",
        link: "#",
    },
];

const ProjectTwo = () => {
    return (
        <div className="our-project-block lg:mt-[100px] sm:mt-16 mt-10">
            <div className="container">
                <div className="heading3 text-[#C4030A] text-center">Our Products</div>
                <div className="body2 text-secondary mt-3 text-center">Defend Against Flames with Confidence.</div>
            </div>
            <div className="list-project md:mt-10 mt-7">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    speed={400}
                    modules={[Pagination, Autoplay]}
                    className='h-full relative'
                    autoplay={{
                        delay: 4000,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        }
                    }}
                >
                    

                    {slidesData.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="item">
                        <div className="bg-img overflow-hidden">
                            <Image width={5000} height={5000} className="w-full h-full" src={slide.imgSrc} alt="" />
                        </div>
                        <Link className="text" href={slide.link}>
                            <div className="heading5 text-white">{slide.title}</div>
                            <div className="body3 text-white mt-1">{slide.description}</div>
                        </Link>
                        <Link className="arrow w-[52px] h-[52px] flex items-center justify-center bg-white rounded-full hover:text-white" href={slide.link}>
                            <Icon.ArrowRight className="text-3xl" />
                        </Link>
                    </div>
                </SwiperSlide>
            ))}
                    


                </Swiper>
            </div>
        </div>
    )
}
export default ProjectTwo