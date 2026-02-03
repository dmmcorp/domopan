import { CompanyStory } from "./_components/company-story";
import { InfoContent } from "./_components/info-content";
import { companyMission, companyVision } from "@/content/company";
import Contact from "./_components/contact";
import InfoImage from "@/public/assets/images/info-image.png";
import Image from "next/image";

const InfoPage = () => {
  return (
    <div className="bg-(--soft-pistachio) min-h-screen flex flex-col py-8 lg:py-32 px-5 lg:px-10 ">
      <CompanyStory />

      <InfoContent title="Vision" content={companyVision} />
      <InfoContent title="Mission" content={companyMission} />

      <Contact />
      <div className="h-[30vh] lg:h-[80vh] w-full pointer-events-none">
        <Image src={InfoImage} alt="info-image" className="size-full" />
      </div>
    </div>
  );
};

export default InfoPage;
