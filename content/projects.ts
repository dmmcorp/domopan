import { AlthurayaTowerMainImage, AlwajbaMainImage, DohaMainImage, LakhwiyaStadiumImage3, LakhwiyaStadiumMainImage, ShazaMainImage, UmsalalMainImage } from "@/components/constants/projects-image";

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

type ProjectTag = typeof TAGS[number];

type ProjectTagItem = {
    label: ProjectTag;
    className: string;
};

export const Projects = [
    {
        image: ShazaMainImage,
        name: "Shaza Kempinski",
        tags: [
            { label: "Contracting", className: "bg-[#b2dde6]" },
            { label: "Hospitality", className: "bg-white border-[#b2dde6]" },
        ] satisfies ProjectTagItem[]
    },
    {
        image: UmsalalMainImage,
        name: "Umm Salal Health Center",
        tags: [
            { label: "Manufacturing", className: "bg-(--soft-pistachio)" },
            { label: "Healthcare", className: "bg-white border-(--soft-pistachio)" },
        ] satisfies ProjectTagItem[]
    },
    {
        image: LakhwiyaStadiumMainImage,
        name: "Lekhwiya Sports Stadium",
        tags: [
            { label: "Landscaping", className: "bg-(--coastal-teal) text-white font-normal" },
            { label: "Commercial", className: "bg-transparent border-(--coastal-teal)" },
        ] satisfies ProjectTagItem[]
    },
    {
        image: AlthurayaTowerMainImage,
        name: "Al Thuraya Tower",
        tags: [
            { label: "Fabric Shade Engineering", className: "bg-(--desert-olive) text-white font-normal" },
            { label: "Commercial", className: "bg-transparent border-(--desert-olive)" },
        ] satisfies ProjectTagItem[]
    },
    {
        image: AlwajbaMainImage,
        name: "Al Wajba Compound",
        tags: [
            { label: "Manufacturing", className: "bg-(--soft-pistachio)" },
            { label: "Residential", className: "bg-white border-(--soft-pistachio)" },
        ] satisfies ProjectTagItem[]
    },
    {
        image: DohaMainImage,
        name: "Doha College Campus",
        tags: [
            { label: "Trading", className: "bg-(--gulf-blue) text-white font-normal" },
            { label: "Hospitality", className: "bg-white border-(--gulf-blue)" },
        ] satisfies ProjectTagItem[]
    },
];