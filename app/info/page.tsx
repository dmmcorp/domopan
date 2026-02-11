import { CompanyStory } from "./_components/company-story";
import { InfoContent } from "./_components/info-content";
import { companyMission, companyVision } from "@/content/company";
import Contact from "./_components/contact";
import InfoImage from "@/public/assets/images/info-image.png";
import Image from "next/image";
import LegalCompliance from "./_components/legal-compliance";
import { Separator } from "@/components/ui/separator";

const InfoPage = () => {
  return (
    <div className="bg-(--soft-pistachio) min-h-screen flex flex-col py-8 lg:py-32 px-5 lg:px-10 ">
      <CompanyStory />

      <InfoContent title="Vision" content={companyVision} />
      <InfoContent title="Mission" content={companyMission} />
      <div className="">
        <Contact />
      </div>
      <Separator className="mb-20 border-black border-2" />
      <div className="">
        <LegalCompliance />
      </div>
      <Separator className="my-20 border-black border-2" />

      <div className="h-[30vh] lg:h-[80vh] w-full pointer-events-none">
        <Image src={InfoImage} alt="info-image" className="size-full" />
      </div>
    </div>
  );
};

export default InfoPage;
