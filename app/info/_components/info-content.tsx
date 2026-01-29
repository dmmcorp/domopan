import { parnasoSmallMedium, parnasoSmallRegular } from "@/lib/font";

interface InfoContentProps {
  title: string;
  content: string;
}

export const InfoContent = ({ title, content }: InfoContentProps) => {
  return (
    <div className="flex flex-col lg:flex-row w-full grow">
      <div className="lg:w-[20%]">
        <h1 className={`text-2xl lg:text-3xl ${parnasoSmallRegular.className}`}>
          {title}
        </h1>
      </div>

      <div
        className={`lg:w-[80%] space-y-7 mt-7 lg:mt-0 mb-36 text-2xl md:text-3xl lg:text-5xl ${parnasoSmallMedium.className} font-medium`}
      >
        {content}
      </div>
    </div>
  );
};
