import {
  AlthurayaTowerMainImage,
  AlwajbaMainImage,
  DohaMainImage,
  LakhwiyaStadiumMainImage,
  ShazaMainImage,
  UmsalalMainImage,
} from "@/components/constants/projects-image";

const TAGS = [
  "Contracting",
  "Hospitality",
  "Manufacturing",
  "Healthcare",
  "Landscaping",
  "Commercial",
  "Fabric Shade Engineering",
  "Residential",
  "Trading",
] as const;

export type ProjectFilter = (typeof PROJECTFILTERS)[number];

type ProjectTag = (typeof TAGS)[number];

type ProjectTagItem = {
  label: ProjectTag;
  className: string;
};

export const Projects = [
  {
    image: ShazaMainImage,
    name: "Shaza Kempinski",
    tags: [
      {
        label: "Contracting",
        className:
          "bg-[#b2dde6] font-bold text-[1rem] tracking-wider rounded-lg",
      },
      {
        label: "Hospitality",
        className:
          "bg-white border-[#b2dde6] font-bold text-[1rem] tracking-wider rounded-lg",
      },
    ] satisfies ProjectTagItem[],
  },
  {
    image: UmsalalMainImage,
    name: "Umm Salal Health Center",
    tags: [
      {
        label: "Manufacturing",
        className:
          "bg-(--soft-pistachio) font-bold text-[1rem] tracking-wider rounded-lg",
      },
      {
        label: "Healthcare",
        className:
          "bg-white border-(--soft-pistachio) font-bold text-[1rem] tracking-wider rounded-lg",
      },
    ] satisfies ProjectTagItem[],
  },
  {
    image: LakhwiyaStadiumMainImage,
    name: "Lekhwiya Sports Stadium",
    tags: [
      {
        label: "Landscaping",
        className:
          "bg-(--coastal-teal) text-white font-bold text-[1rem] tracking-wider rounded-lg",
      },
      {
        label: "Commercial",
        className:
          "bg-transparent border-(--coastal-teal) font-bold text-[1rem] tracking-wider rounded-lg",
      },
    ] satisfies ProjectTagItem[],
  },
  {
    image: AlthurayaTowerMainImage,
    name: "Al Thuraya Tower",
    tags: [
      {
        label: "Fabric Shade Engineering",
        className:
          "bg-(--desert-olive) text-white font-bold text-[1rem] tracking-wider rounded-lg ",
      },
      {
        label: "Commercial",
        className:
          "bg-transparent border-(--desert-olive) font-bold text-[1rem] tracking-wider rounded-lg",
      },
    ] satisfies ProjectTagItem[],
  },
  {
    image: AlwajbaMainImage,
    name: "Al Wajba Compound",
    tags: [
      {
        label: "Manufacturing",
        className:
          "bg-(--soft-pistachio) font-bold text-[1rem] tracking-wider rounded-lg",
      },
      {
        label: "Residential",
        className:
          "bg-white border-(--soft-pistachio) font-bold text-[1rem] tracking-wider rounded-lg",
      },
    ] satisfies ProjectTagItem[],
  },
  {
    image: DohaMainImage,
    name: "Doha College Campus",
    tags: [
      {
        label: "Trading",
        className:
          "bg-(--gulf-blue) text-white font-bold text-[1rem] tracking-wider rounded-lg",
      },
      {
        label: "Hospitality",
        className:
          "bg-white border-(--gulf-blue) font-bold text-[1rem] tracking-wider rounded-lg",
      },
    ] satisfies ProjectTagItem[],
  },
];
