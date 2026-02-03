import { ContractingCoverImage, FabricShadeEngineerCoverImage, LandscapingCoverImage, ManufacturingCoverImage, TradingCoverImage } from "@/components/constants/services-image";
import { StaticImageData } from "next/image";

export type Service = {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3?: string;
    paragraph4?: string;
    image: StaticImageData | string;
}

type Services = Service[]

export const servicesData: Services = [
    {
        title: "Contracting",
        paragraph1:
            "Domopan is capable of undertaking contracting works of any scope or sector. This is made possible due to a unique combination of extensive experience in the region, capable workforce of over 6000 professionals, in-house production capabilities, strong partnerships with industry leaders and a diversified service portfolio.",
        paragraph2:
            "Our fit-outs and finishing divisions further enhance our capabilities, with over 350 personnel dedicated exclusively to these divisions.",
        image: ContractingCoverImage,
    },
    {
        title: "Manufacturing",
        paragraph1: "Domopan’s manufacturing division is built on quality, performance, and practicality, delivering advanced building solutions through its flagship products DomoBlocks and DomoGypsum. Our manufacturing capabilities are designed to support modern construction demands across Qatar and the wider GCC, ensuring consistency, compliance, and long-term durability.",
        paragraph2: "DomoGypsum panels are engineered to perform in challenging environments, offering superior humidity regulation, fire resistance, sound insulation, and thermal efficiency. Manufactured to meet international and local standards, our products are ISO 9001:2015, ISO 14001:2015, and OHSAS 18001:2007 certified, reflecting Domopan’s commitment to quality, environmental responsibility, and occupational safety.",
        paragraph3: "Designed with construction practicality in mind, DomoGypsum panels are tough, flexible, and easy to install, even in space-restricted or complex sites. Their natural gypsum composition makes them environmentally friendly, bacteria resistant, and ideal for applications where safety, hygiene, and comfort are paramount, such as hospitals, schools, and residential developments. With in-house production and a focus on efficiency, Domopan’s manufacturing division consistently delivers reliable materials that support faster construction timelines and long-lasting performance.",
        image: ManufacturingCoverImage,
    },
    {
        title: "Landscaping",
        paragraph1: "DOMOPAN extended and entered into the eternal landscape contracting & maintenance works with the establishment of DAR AL MANARAT contracting & trading WLL in 2013 in Qatar, as a provider of comprehensive landscaping solutions.",
        paragraph2: "Our Operations in landscaping were established to meet the growing demand of landscaping in the construction sector. Over the years, DOMOPAN has built a Niche Position as a one stop shop for all landscaping services.",
        paragraph3: "We offer end-to-end landscaping services from design & development to maintenance services and ranging from fabrication to installation of hard landscape works, planting to the maintenance of soft landscaping & irrigation works, design to build up of Pools & water features.",
        paragraph4: "Our aim is to provide professional landscape services with an eye for safety, quality, integrity and enhancement to the environment. Our Passion in landscape as a holistic approach is what energizes our teams to Create a balanced and beautiful environment that injects both color and life into private, public and commercial spheres of Qatar.",
        image: LandscapingCoverImage,
    },
    {
        title: "Trading",
        paragraph1: "Domopan is one of the regional market leaders today in the specifications / supply of Architectural Ironmongery, Fire Rated Metal & Wooden Door-sets, Complete Door Solutions & many other items to the high profile specification project sector covering the Qatar.",
        paragraph2: "The trading services are conducted through our sister company, Dar Al Manarat Trading. Dar Al Manarat along with their partner companies in Qatar have a team of 20 licensed and experienced Engineers who are knowledgeable and well trained in the industry. We also maintain 10 experienced installers at site.",
        paragraph3: "We are the sole agents of MKS METAL, Manufacturer of Hollow Metal Fire Rated Doors, and acoustic Doors that are compliant with international technical standards ( European Standards). For more information, please visit www.mksmetal.com.tr",
        paragraph4: "We are also in partnership agreement with DORMAKABA to supply the Qatari market with their wide product line for hardware items, and automatic operators to comply with BS, EN, and UL standards. For more information, please visit www.dormakaba.com",
        image: TradingCoverImage,
    },
    {
        title: "Fabric Shade Engineering",
        paragraph1: "DMT Shade Fabric Engineering, Design and Build was formed in early 2006 with a singular vision – excellence in fabric engineering. We are currently the leading manufacturer and installer of large tensile structures, with our production facility (which is the largest in Qatar) in New Industrial Area . DMT’s attention to detail in design and engineering has led to the production of some of the most aesthetically pleasing tensile structures built during the past ten years.",
        paragraph2: "Starting in 2011, DMT built structures primarily using HDPE Fabric. In 2012, DMT expanded to PVC membrane structures. From the year 2013 till 2018, DMT brought about a change in the view of membrane architecture combined with WPC Pergola by doing the construction of Projects such like Al Wajba Residential Compound, where 20,000 sq.m. of PVC and more than 500 tons of wood Plastic Composite Pergolas of which 10,000 sq.m. of PVC Roof Structures combined with 504 numbers of WPC Pergolas were utilized.",
        paragraph3: "In the last 5 years, DMT has worked with many of the leading main contractors who believes in our Tensile Membrane, Retractable, Motorized Awning, Pergola & Roof Building Work.",
        image: FabricShadeEngineerCoverImage,
    },
];
