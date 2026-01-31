import {
    AlthurayaTowerImage1,
    AlthurayaTowerMainImage,
    AlthurayaTowerrImage2,
    AlwajbaImage1,
    AlwajbaImage10,
    AlwajbaImage2,
    AlwajbaImage3,
    AlwajbaImage4,
    AlwajbaImage5,
    AlwajbaImage6,
    AlwajbaImage7,
    AlwajbaImage8,
    AlwajbaImage9,
    AlwajbaMainImage,
    DohaImage1,
    DohaImage2,
    DohaMainImage,
    LakhwiyaStadiumImage1,
    LakhwiyaStadiumImage2,
    LakhwiyaStadiumImage3,
    LakhwiyaStadiumImage4,
    LakhwiyaStadiumImage5,
    LakhwiyaStadiumMainImage,
    ShazaImage1,
    ShazaImage2,
    ShazaImage3,
    ShazaImage4,
    ShazaImage5,
    ShazaImage6,
    ShazaMainImage,
    UmsalalImage1,
    UmsalalImage10,
    UmsalalImage2,
    UmsalalImage3,
    UmsalalImage4,
    UmsalalImage5,
    UmsalalImage6,
    UmsalalImage7,
    UmsalalImage8,
    UmsalalImage9,
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
export const PROJECTS = [
    {
        slug: "shaza-kempinski",
        image: ShazaMainImage,
        name: "Shaza Kempinski",
        client: "ABA & Partners",
        consultant: "Faithful & Gould CEG Int'l",
        builtUpArea: "25,700 M²",
        description: "The works comprises of the Design, Construction, Completion and Maintenance of 5-star Hotel Building including FF & E & External Works. Managing a full team of international designers (SOMA, Pascall + Watson, WSP, etc.) the project calls for the completion of a Doha landmark in the cultural center of the capital. The hotel is composed of 171 rooms, 5 nos. F & B outlets, and has a total built-up area of 25,700m².",
        gallery: [ShazaImage1, ShazaImage2, ShazaImage3, ShazaImage4, ShazaImage5, ShazaImage6],
        tags: [
            { label: "Contracting", className: "bg-[#b2dde6]" },
            { label: "Hospitality", className: "bg-white border-[#b2dde6]" },
        ] satisfies ProjectTagItem[],
    },
    {
        slug: "umm-salal-health-center",
        image: UmsalalMainImage,
        name: "Umm Salal Health Center",
        gallery: [UmsalalImage1, UmsalalImage2, UmsalalImage3, UmsalalImage4, UmsalalImage5, UmsalalImage6, UmsalalImage7, UmsalalImage8, UmsalalImage9, UmsalalImage10],
        tags: [
            { label: "Manufacturing", className: "bg-(--soft-pistachio)" },
            { label: "Healthcare", className: "bg-white border-(--soft-pistachio)" },
        ] satisfies ProjectTagItem[],
    },
    {
        slug: "lekhwiya-sports-stadium",
        image: LakhwiyaStadiumMainImage,
        name: "Lekhwiya Sports Stadium",
        gallery: [LakhwiyaStadiumImage1, LakhwiyaStadiumImage2, LakhwiyaStadiumImage3, LakhwiyaStadiumImage4, LakhwiyaStadiumImage5],
        tags: [
            { label: "Landscaping", className: "bg-(--coastal-teal) text-white font-normal" },
            { label: "Commercial", className: "bg-transparent border-(--coastal-teal)" },
        ] satisfies ProjectTagItem[]
    },
    {
        slug: "al-thuraya-tower",
        image: AlthurayaTowerMainImage,
        name: "Al Thuraya Tower",
        gallery: [AlthurayaTowerImage1, AlthurayaTowerrImage2],
        tags: [
            { label: "Fabric Shade Engineering", className: "bg-(--desert-olive) text-white font-normal" },
            { label: "Commercial", className: "bg-transparent border-(--desert-olive)" },
        ] satisfies ProjectTagItem[]
    },
    {
        slug: "al-wajba-compound",
        image: AlwajbaMainImage,
        name: "Al Wajba Compound",
        gallery: [AlwajbaImage1, AlwajbaImage2, AlwajbaImage3, AlwajbaImage4, AlwajbaImage5, AlwajbaImage6, AlwajbaImage7, AlwajbaImage8, AlwajbaImage9, AlwajbaImage10],
        tags: [
            { label: "Manufacturing", className: "bg-(--soft-pistachio)" },
            { label: "Residential", className: "bg-white border-(--soft-pistachio)" },
        ] satisfies ProjectTagItem[]
    },
    {
        slug: "doha-college-campus",
        image: DohaMainImage,
        name: "Doha College Campus",
        gallery: [DohaImage1, DohaImage2],
        tags: [
            { label: "Trading", className: "bg-(--gulf-blue) text-white font-normal" },
            { label: "Hospitality", className: "bg-white border-(--gulf-blue)" },
        ] satisfies ProjectTagItem[]
    },
];
