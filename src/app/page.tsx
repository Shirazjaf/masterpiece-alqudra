import MenuTwo from "@/components/Header/Menu/MenuTwo";
import TopNavTwo from "@/components/Header/TopNav/TopNavTwo";
import PartnerOne from "@/components/Section/Partner/PartnerOne";
import ProjectTwo from "@/components/Section/Project/ProjectTwo";
import SliderTwo from "@/components/Slider/SliderTwo";
import serviceData from "@/data/service.json";
import ServiceTwo from "@/components/Section/Service/ServiceTwo";
// import Footer from "@/components/Footer/Footer";
import PaymentGatewayOneFirst from "@/components/Section/PaymentGateway/PaymentGatewayOneFirst";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Footer from "@/components/Footer/Footer";

export default function HomeTwo() {
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
      <div className="overflow-x-hidden">
        <header id="header">
          <TopNavTwo />
          <MenuTwo />
        </header>
        <main className="content">
          <SliderTwo />
          <PartnerOne classname="bg-white mt-10" />
          <ProjectTwo />
          <ServiceTwo data={serviceData} />
          <PaymentGatewayOneFirst/>

          <div className="mt-10 flex items-center justify-center p-4 lg:p-0 bg-surface ">
          <div className="desc lg:pl-10 lg:pr-3 my-8">
      <div className="heading3 text-center">OUR FIELD OF EXPERTISE</div>

      <div className="list-feature gap-y-3 flex flex-col mt-6">
        {expertiseList.map((item, index) => (
          <div key={index} className="item  flex items-center gap-3">
            <Icon.CheckCircle weight="fill" className="text-xl text-blue" />
            <div className="text-button">{item}</div>
          </div>
        ))}
      </div>
    </div>
                </div>
          
          <div className="pb-[100px]"></div>
          
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}
