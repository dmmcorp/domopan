import { parnasoSmallRegular } from "@/lib/font";
import { ServiceDropdown } from "./service-dropdown";
import { servicesData } from "@/content/services";
import { CompanyFooter } from "@/components/company-footer";

const ServicesPage = () => {
  return (
    <div className="bg-[#dbf8ff] min-h-screen flex flex-col py-32 px-10">
      <div className="flex flex-col lg:flex-row w-full grow">
        <div className="lg:w-[20%]">
          <h1
            className={`text-2xl lg:text-3xl ${parnasoSmallRegular.className}`}
          >
            Services
          </h1>
        </div>

        <div className="lg:w-[80%] space-y-7 mt-7 lg:mt-0 mb-36">
          {servicesData.map((service, i) => (
            <ServiceDropdown service={service} key={i} />
          ))}
        </div>
      </div>

      <CompanyFooter />
    </div>
  );
};

export default ServicesPage;
