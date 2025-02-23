'use client'

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react";
import { useInView } from "framer-motion";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const PaymentGatewayOneFirst = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id="about" className="payment-gateway-one style-first lg:mt-[100px] sm:mt-16 mt-10 bg-surface relative">
            <div className="bg-img lg:absolute top-0 left-0 lg:w-1/2 w-full h-full flex-shrink-0">
                <Image className="w-full h-full rounded-md object-cover" width={5000} height={5000} src="/images/component/img1.avif" alt="" />
            </div>
            <div className="container w-full lg:py-[150px] pt-14 py-16">
                <div className="w-full flex items-center lg:justify-end" ref={ref}>
                    <div className="payment-infor lg:w-1/2 xl:pl-20 lg:pl-10"
                        style={{
                            transform: isInView ? "none" : "translateX(60px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
                        }}
                    >
                        
                        <div className="text ">
                            <h3 className="heading3">Our Vision</h3>
                            <div className="body3 text-secondary lg:mt-6 mt-4">To become leader in the market by providing complete solutions in Firefighting, Fire alarm and LP gas system adopting latest technology and standard in both national level & international level.</div>
                        </div>
                        <div className="text  mt-10">
                            <h3 className="heading3">Our Mission</h3>
                            <div className="body3 text-secondary lg:mt-6 mt-4">Providing High Quality Products & Services. Adopting Latest Technologies & Standards. Customer Satisfaction. Employee Welfare. Achieving Goals By Effective Team Work.</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PaymentGatewayOneFirst