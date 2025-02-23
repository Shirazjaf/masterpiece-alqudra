"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const TestimonialTwo = () => {
  const expertiseList = [
    "A professionally trained engineering wing for all kinds of solutions in project execution.",
    "Specialist in installation of all types of fire detection system & fire protection system.",
    "Skilled & trained professional team for executing projects.",
    "Providing technical guidance by technical engineers trained from product manufacturer.",
    "Undertake maintenance of firefighting & fire alarm system, providing civil defense certification.",
    "Carry out design, installation, testing, commissioning.",
    "Obtaining final approval from local authority (CDAA).",
    "Specialized in LP Gas installation for residential/commercial projects.",
    "Creation of savings and investment plan.",
    "Management and calculation of monthly expenses.",
  ];
  return (
    <>
      <div className="testimonial-block style-one">
        <div className="container">
          <div className="testimonial-main bg-surface lg:pt-20 sm:pt-16 pt-10 lg:pb-12 pb-8 lg:my-20 sm:my-16 my-10 lg:rounded-[40px] rounded-2xl flex items-center justify-center">
            <div className="content sm:w-2/3 w-[85%]">
              {/* <div className="heading3 text-center">
                Trusted By Professionals
              </div> */}
              <Swiper
                spaceBetween={16}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                speed={900}
                modules={[Pagination, Autoplay, Navigation]}
                className="h-full relative lg:mt-5 mt-7"
                autoplay={{
                  delay: 4000,
                }}
              >
                <SwiperSlide className="lg:pb-24 pb-20">
                  <div className="mt-10 flex items-center justify-center p-4 lg:p-0 bg-surface ">
                    <div className="desc lg:pl-10 lg:pr-3 my-8">
                      <div className="heading3 text-center">
                        OUR FIELD OF EXPERTISE
                      </div>

                      <div className="list-feature gap-y-3 flex flex-col mt-6">
                        {expertiseList.map((item, index) => (
                          <div
                            key={index}
                            className="item  flex items-center gap-3"
                          >
                            <Icon.CheckCircle
                              weight="fill"
                              className="text-xl text-[#C4030A]"
                            />
                            <div className="text-button">{item}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="lg:pb-20 pb-20">
                  <div className="text-[18px] text-center">
                  <div className="heading3 my-2 text-center">
                  QUALITY POLICY
                      </div>
                    <p>
                      The continuing Policy of Masterpieces Al Qudra Trading is
                      to provide a high quality, professional and excellent
                      service to ensure the satisfaction of all the requirements
                      of our clients. This achievement will result in securing
                      efficiency, a strong customer focus and enhancement of
                      long-term sustainability and profitability within the
                      Organizations. The Management Team will show leadership
                      and commitment, and bear the responsibility for
                      establishing, implementing, integrating, and maintaining
                      the Quality Management System. We undertake to ensure
                      sufficient resources are made available within the
                      Organization And in order to achieve this, we ensure
                      through effective communication, engagement, practical
                      example and training to staff that Quality is the aim of
                      all members in the Organizations. As a firm dealing with
                      life safety system, we understand the importance of our
                      involvement in day to day life of public. Thus we make
                      sure works including the equipment manufactured, installed
                      and serviced by us in line with the international
                      standards and local civil defence department standard of
                      fire prevention and life safety. Through our direction and
                      support, each employee will have a proper understanding of
                      the importance of the Quality System function, their
                      responsibility to contribute to its effectiveness, and its
                      direct relevance to the success of the Organization.
                      Equally, every employee is responsible for, and will be
                      trained to perform the duties required by his or her
                      specific role. The Quality System will be monitored,
                      measured, evaluated, and enhanced regularly under the Top
                      management’s ultimate responsibility, with regular
                      reporting and communication of the status and
                      effectiveness of all levels.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialTwo;
