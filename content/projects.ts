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
  AlwajbaMainImage,
  DohaImage1,
  DohaImage2,
  DohaImage3,
  DohaImage4,
  DohaImage5,
  DohaImage6,
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
import type { StaticImageData } from "next/image";

// TODO: add a type for PROJECTS
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

// export type ProjectFilter = (typeof PROJECTFILTERS)[number];

type ProjectTag = (typeof TAGS)[number];

type ProjectTagItem = {
  label: ProjectTag;
  className: string;
};
export type Project = {
  slug: string;
  image: StaticImageData | string;
  name: string;
  client: string;
  consultant: string;
  builtUpArea: string;
  description: string;
  gallery: StaticImageData[] | string[];
  tags: ProjectTagItem[];
  category?: string;
  list?: string[];
  supportingDescription?: string;
};

type Projects = Project[];

export const PROJECTS: Projects = [
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
    client: "Ashghal",
    category: "Healthcare",
    consultant: "Gulf Engineering & Industrial Consultants",
    builtUpArea: "12,000 M²",
    description: "The work comprises Construction, Completion & Maintenance of Health & Wellness Care Center. The work consists but not limited to the Main Health & Wellness building equipped with necessary medical equipment, with facilities such as Massage rooms, Gymnasium (Male & Female), Laboratories, consultation rooms, Several Clinics (Dental, Cardio, Gastro, Dermatology etc) and Ante Natals. Doctors & Nurses rooms, administrative offices, Conference room, cafeteria, kitchen & pantries, toilets, changing room, services rooms, Mosque building, Ancillary buildings such as Substation, Water tank yard, Chiller yard and two Guard Rooms. Hard & soft landscaping shaded structures, parking, boundary walls, fence etc…. including external site services infrastructures. The Buildings are reinforced concrete structure with block work infill. The swimming pool is covered with space frame/structural steel structure and roof cladding system.",
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
    client: "Details unavailable.",
    consultant: "Details unavailable.",
    builtUpArea: "Details unavailable.",
    description: "Details unavailable.",
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
    client: "Details unavailable.",
    consultant: "Details unavailable.",
    builtUpArea: "Details unavailable.",
    description: "Details unavailable.",
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
    client: "Al Alfia Holding",
    category: "Residential",
    consultant: "Louis Berger (Project Management), Al Sadd Consulting (Supervision)",
    builtUpArea: "165,000 M²",
    description:
      "At the time of construction, this project was the largest high-end residential compound in Qatar. Covering a plot of 200,000 m2 and a built-up area of 165,000 m2; the compound includes:",
    list: [
      "504 nos. villas",
      "2 nos. Clubhouses",
      "2 nos. Nurseries",
      "2 nos. Mosques",
      "3 nos. Gatehouses",
      "8 km of internal/external precast boundary wall",
      "7 nos. substations with service centers.",
    ],
    supportingDescription:
      "An extreme fast-track approach was adopted by all stakeholders with our manpower reaching a peak workforce of 5,600 onsite. The project was delivered in a span of 18 months along with all associated external infrastructure, hard and soft landscaping.",
    // Alwajba 9 is main image also
    gallery: [AlwajbaImage1, AlwajbaImage2, AlwajbaImage3, AlwajbaImage4, AlwajbaImage5, AlwajbaImage6, AlwajbaImage7, AlwajbaImage8, AlwajbaMainImage, AlwajbaImage10],
    tags: [
      { label: "Manufacturing", className: "bg-(--soft-pistachio)" },
      { label: "Residential", className: "bg-white border-(--soft-pistachio)" },
    ] satisfies ProjectTagItem[]
  },
  {
    slug: "doha-college-campus",
    image: DohaMainImage,
    name: "Doha College Campus",
    client: "Doha College",
    category: "Education",
    consultant: "Quantex (Project Management), Jestico+Whiles /QEA (Design/Supervision)",
    builtUpArea: "90,000 M²",
    description: "Doha College, a leading British Curriculum international school in Qatar, awarded Domopan the construction of a a new pioneering 21st century campus in Al Wajba. The new 90,000m2 state-of-the-art campus composed of 15 nos. unique buildings including sports halls, swimming pools, sports pitches, an extensive network of shaded walkways, and all infrastructure works. Jestico + Whiles designed a world-class facility representing the pinnacle of international school design and will accommodate the most innovative learning methods for 2,500 pupils aged 3 to 18. The architectural solution is based on the notion of a school for all ages ‘under one roof’, with a common entrance and dedicated zones for primary and secondary schools. The design adapts the essence of a ‘British’ school to the sands of the Arabian Peninsula.",
    gallery: [DohaImage1, DohaImage2, DohaImage3, DohaImage4, DohaImage5, DohaImage6],
    tags: [
      { label: "Trading", className: "bg-(--gulf-blue) text-white font-normal" },
      { label: "Hospitality", className: "bg-white border-(--gulf-blue)" },
    ] satisfies ProjectTagItem[]
  },
];
