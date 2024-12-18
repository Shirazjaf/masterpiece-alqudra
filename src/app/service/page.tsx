import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import ServiceFive from "@/components/Section/Service/ServiceFive";
import serviceData from "@/data/service.json";
import Partner from "@/components/Section/Partner/PartnerAbout";
import CtaOne from "@/components/Section/CTA/CtaOne";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import TopNavTwo from "@/components/Header/TopNav/TopNavTwo";
import MenuTwo from "@/components/Header/Menu/MenuTwo";

export default function ServiceStyleOne() {
  return (
    <>
      <div className="overflow-x-hidden">
        <header id="header">
          <TopNavTwo />
          <MenuTwo />
        </header>
        <main className="content">
          <BreadcrumbItem
            link="Our Services"
            img="/images/banner/1920x400.png"
            title="Our Services"
            desc="Expand your knowledge and skills in cryptocurrency trading through our educational resources."
          />
          <div className="mt-[100px]">
            <div className="container">
              <div className="flex gap-8 max-lg:flex-col-reverse">
                <div className="w-full lg:w-1/2 flex flex-col justify-between gap-5 pr-10">
                  <div className="heading3">
                    Comprehensive Fire Safety and Protection Solutions
                  </div>
                  <div className="body2 text-secondary">
                    We provide comprehensive Fire Safety Solutions to safeguard
                    lives and property, ensuring compliance with international
                    standards and local regulations. Our expertise includes the
                    installation and maintenance of fire protection systems,
                    alarm systems, LP gas systems, and certified fire-rated
                    doors, tailored to meet diverse safety needs.
                  </div>
                  <div className="button-block">
                    <a
                      className="button-main hover:bg-black text-white bg-blue text-button inline-block py-3 px-9 rounded-full"
                      href="/service-detail">
                      Discovery
                    </a>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="bg-img w-full overflow-hidden rounded-xl">
                    <Image
                      width={5000}
                      height={5000}
                      className="w-full h-full block"
                      src="/images/component/bottom-slider-three.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ServiceFive data={serviceData} title="" />
          <Partner />
          <CtaOne />
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}
