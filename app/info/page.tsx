import { parnasoSmallRegular } from "@/lib/font";
import { CompanyStory } from "./_components/company-story";
import { InfoContent } from "./_components/info-content";
import { companyInfo, companyMission, companyVision } from "@/content/company";
import { CompanyFooter } from "@/components/company-footer";

const InfoPage = () => {
  return (
    <div className="bg-(--soft-pistachio) min-h-screen flex flex-col py-32 px-10 z-50">
      <div className="flex flex-col lg:flex-row w-full">
        <div className="lg:w-[20%]">
          <h1
            className={`text-2xl lg:text-3xl ${parnasoSmallRegular.className}`}
          >
            Our Story
          </h1>
        </div>

        <div className="lg:w-[80%] mt-7 lg:mt-0 mb-36">
          <CompanyStory />
        </div>
      </div>

      <InfoContent title="Vision" content={companyVision} />
      <InfoContent title="Mission" content={companyMission} />

      <div className="flex flex-col lg:flex-row w-full">
        <div className="lg:w-[20%]">
          <h1
            className={`text-2xl lg:text-3xl ${parnasoSmallRegular.className}`}
          >
            Contact
          </h1>
        </div>

        <div className="lg:w-[80%] mt-7 lg:mt-0 mb-36 space-y-12">
          <div className={`${parnasoSmallRegular.className} space-y-1`}>
            <h1>ADDRESS</h1>
            <div className="text-2xl md:text-3xl lg:text-5xl">
              <p>{companyInfo.address.line1}</p>
              <p>{companyInfo.address.line2}</p>
              <p>{companyInfo.address.line3}</p>
              <p>{companyInfo.address.line4}</p>
            </div>
          </div>

          <div className={`${parnasoSmallRegular.className} space-y-1`}>
            <h1>PHONE</h1>
            <div className="text-2xl md:text-3xl lg:text-5xl">
              {companyInfo.phone}
            </div>
          </div>

          <div className={`${parnasoSmallRegular.className} space-y-1`}>
            <h1>EMAIL</h1>
            <div className="text-2xl md:text-3xl lg:text-5xl">
              {companyInfo.email}
            </div>
          </div>
        </div>
      </div>

      <CompanyFooter classValue="mt-32" />
    </div>
  );
};

export default InfoPage;
