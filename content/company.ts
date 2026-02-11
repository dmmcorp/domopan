import { CompanyStoryImage1 } from "@/components/constants/info-image";

export type Legal = {
  heading: string;
  paragraph1: string;
  paragraph2?: string;
  list?: string[];
};

export type Legals = Legal[];

export const companyInfo = {
  address: {
    line1: "Salwa Road (Interchange No.17),",
    line2: "Main Street 33 (New Industrial Area)",
    line3: "Street No.6, Building No.73,",
    line4: "Ar-Rayyan, P.O.Box 24023",
  },
  phone: "(974) 4409-9999",
  email: "info@domoqatar.com",
};

export const companyStory = {
  heading:
    "Domopan was launched in 2007 with an extensive portfolio of activities in response to the market needs of a booming real estate sector and economic development.",
  moreStory:
    "Although general construction is our core strength, our finishing credentials are also boosted by the success of our in-house divisions including gypsum works, doors and hardware, and tensile fabrics / roof structures divisions. Our divisions have proven to be a reliable partner to supplement our own main contracting activities and have become an integral part of the supply-chain of some of the most reputable contractors in Qatar.",
  image: CompanyStoryImage1,
};

export const companyVision =
  "Our vision is to be nothing short of the best. We envision ourselves to be a leader and partner in providing quality projects to both public and private sector clients.";
export const companyMission =
  "To provide innovative and cutting edge construction practices to address the unique demands of Qatar's environment, construction climate, and client preferences, executed to the highest levels of professionalism to secure client loyalty.";

export const legalContent: Legals = [
  {
    heading: "General Information",
    paragraph1:
      "Do Mopan Contracting & Trading W.L.L. (“Domopan”, “we”, “our”, or “us”) is committed to protecting the privacy and personal data of its stakeholders. This Privacy Policy explains how we collect, use, store, and protect personal data in accordance with applicable data protection laws and regulations in Qatar, as well as internationally recognized data protection principles.",
    paragraph2:
      "Domopan processes personal data solely for legitimate business purposes and ensures that such processing is conducted lawfully, transparently, and securely.",
  },
  {
    heading: "Personal Data We Process",
    paragraph1:
      "Domopan may process personal data relating to the following categories of stakeholders:",
    paragraph2:
      "Personal data may include identification details, contact information, employment data, contractual information, and any other data necessary to carry out our business activities.",
    list: [
      "Employees and job applicants",
      "Clients and end-users",
      "Suppliers and subcontractors",
      "Visitors to our offices, camps, and project sites",
      "Business partners and consultants",
      "Legal representatives and authorized contacts",
      "Users of our Ethical or Whistleblowing Channel",
    ],
  },
  {
    heading: "Purpose of Data Processing",
    paragraph1:
      "Personal data is processed for purposes including, but not limited to:",
    paragraph2:
      "Data is processed only to the extent necessary and for clearly defined purposes.",
    list: [
      "Recruitment, employment, and human resources management",
      "Contract administration and project execution",
      "Health, safety, and security management",
      "Legal and regulatory compliance",
      "Stakeholder communication and relationship management",
      "Ethical reporting and compliance investigations",
    ],
  },
  {
    heading: "Data Protection and Confidentiality",
    paragraph1:
      "Domopan implements appropriate technical and organizational measures to protect personal data against unauthorized access, loss, misuse, or disclosure.",
    paragraph2:
      "All personal data is handled confidentially and retained only for as long as required by law or business necessity. Access to personal data is restricted to authorized personnel only.",
  },
  {
    heading: "Ethical Channel and Whistleblowing",
    paragraph1:
      "Domopan provides a confidential Ethical Channel that allows employees and third parties to report concerns related to misconduct, legal breaches, or violations of the Code of Conduct.",
    paragraph2:
      "All reports are handled with strict confidentiality. Personal data related to such reports is processed in compliance with applicable data protection regulations, and retaliation against individuals reporting in good faith is strictly prohibited.",
  },
  {
    heading: "Your Rights",
    paragraph1: "Where applicable, individuals have the right to:",
    paragraph2:
      "Requests related to personal data protection may be submitted through Domopan’s official communication channels.",
    list: [
      "Access their personal data",
      "Request correction or updating inaccurate data",
      "Request deletion or restriction of processing, subject to legal obligations",
    ],
  },
  {
    heading: "Policy Updates",
    paragraph1:
      "Domopan reserves the right to update this Privacy Policy periodically to reflect changes in legal requirements or business practices. Updates will be published on the company website.",
  },
];

export const governanceContent = {
  paragraph1:
    "At Domopan, strong governance is fundamental to sustainable success. We believe that long-term value can only be achieved through ethical, transparent, and accountable management, aligned with industry best practices.",
  paragraph2:
    "Our governance framework is built on internal regulations, compliance systems, and clear decision-making structures that ensure responsible conduct across our operations and value chain.",
};

export const businessConductContent = {
  paragraph1:
    "Domopan promotes a corporate culture based on integrity, respect, accountability, and ethical behavior. Clear internal policies guide conduct at all levels of the organization.",
  paragraph2:
    "We actively work to prevent corruption, fraud, and unethical practices, while promoting transparency and responsible business behavior. Continuous stakeholder engagement enables us to identify risks early and strengthen our governance systems.",
};

export const environmentContent = {
  paragraph1:
    "Domopan integrates environmental responsibility and efficient resource management into its business operations. We operate under principles of precaution and conservation, aiming to minimize environmental impact while delivering high-quality construction and engineering solutions.",
  paragraph2:
    "Environmental challenges are viewed not only as risks, but as opportunities to innovate, improve efficiency, and create shared value for society. Our environmental management systems provide a structured yet flexible framework applicable across all business units and projects.",
};
