import { parnasoSmallRegular } from "@/lib/font";
import { companyInfo } from "@/content/company";
import Link from "next/link";

export const CompanyFooter = () => {
  return (
    <div
      className={`${parnasoSmallRegular.className} grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 space-y-5 md:space-y-10`}
    >
      <div className="flex flex-col gap-2">
        <h1 className="uppercase font-semibold">Address</h1>
        <div className="-space-y-1 text-black/90">
          <p className="text-[19px]">{companyInfo.address.line1}</p>
          <p className="text-[19px]">{companyInfo.address.line2}</p>
          <p className="text-[19px]">{companyInfo.address.line3}</p>
          <p className="text-[19px]">{companyInfo.address.line4}</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="space-y-1">
          <h1 className="uppercase font-semibold">Phone</h1>
          <p className="text-[19px] text-black/90">{companyInfo.phone}</p>
        </div>
        <div className="space-y-1">
          <h1 className="uppercase font-semibold">Email</h1>
          <p className="text-[19px] text-black/90">{companyInfo.email}</p>
        </div>
      </div>
      <div className="flex flex-col space-y-1 text-[19px]">
        <Link href="/projects">Projects</Link>
        <Link href="/services">Services</Link>
        <Link href="/info">Info</Link>

        <p className="mt-4">Copyright Domopan 2024</p>
      </div>
    </div>
  );
};
