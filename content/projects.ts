import { AlthurayaTowerMainImage, AlwajbaMainImage, DohaMainImage, LakhwiyaStadiumImage3, LakhwiyaStadiumMainImage, ShazaMainImage, UmsalalMainImage } from "@/components/constants/projects-image";

export const PROJECTFILTERS = [
    "contracting",
    "manufacturing",
    "trading",
    "landscaping",
    "fabric shade engineering",
] as const;

const TAGS = [
    "contracting",
    "hospitality",
    "manufacturing",
    "healthcare",
    "landscaping",
    "commercial",
    "fabric shade engineering",
    "residential",
    "trading",
] as const;

export type ProjectFilter = typeof PROJECTFILTERS[number]

type ProjectTag = typeof TAGS[number];
type ProjectTagItem = {
    label: ProjectTag;
    className: string;
};

export const PROJECTS = [
    {
        image: ShazaMainImage,
        name: "Shaza Kempinski",
        tags: [
            { label: "contracting", className: "bg-[#b2dde6]" },
            { label: "hospitality", className: "bg-white border-[#b2dde6]" },
        ] satisfies ProjectTagItem[]
    },
    {
        image: UmsalalMainImage,
        name: "Umm Salal Health Center",
        tags: [
            { label: "manufacturing", className: "bg-(--soft-pistachio)" },
            { label: "healthcare", className: "bg-white border-(--soft-pistachio)" },
        ] satisfies ProjectTagItem[]
    },
    {
        image: LakhwiyaStadiumMainImage,
        name: "Lekhwiya Sports Stadium",
        tags: [
            { label: "landscaping", className: "bg-(--coastal-teal) text-white font-normal" },
            { label: "commercial", className: "bg-transparent border-(--coastal-teal)" },
        ] satisfies ProjectTagItem[]
    },
    {
        image: AlthurayaTowerMainImage,
        name: "Al Thuraya Tower",
        tags: [
            { label: "fabric shade engineering", className: "bg-(--desert-olive) text-white font-normal" },
            { label: "commercial", className: "bg-transparent border-(--desert-olive)" },
        ] satisfies ProjectTagItem[]
    },
    {
        image: AlwajbaMainImage,
        name: "Al Wajba Compound",
        tags: [
            { label: "manufacturing", className: "bg-(--soft-pistachio)" },
            { label: "residential", className: "bg-white border-(--soft-pistachio)" },
        ] satisfies ProjectTagItem[]
    },
    {
        image: DohaMainImage,
        name: "Doha College Campus",
        tags: [
            { label: "trading", className: "bg-(--gulf-blue) text-white font-normal" },
            { label: "hospitality", className: "bg-white border-(--gulf-blue)" },
        ] satisfies ProjectTagItem[]
    },
];