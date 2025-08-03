import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  virtually,
  whizlabs,
  permatech,
  cyberpatron,
  turkcell,
  project1,
  project2,
  project3,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "IAM Administrator",
    icon: web,
  },
  {
    title: "Cloud Security Engineer",
    icon: mobile,
  },
  {
    title: "Monitoring & Analyzing Threat Intelligence",
    icon: backend,
  },
  {
    title: "SIEM & IDS Expert",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Cloud Security Engineer",
    company_name: "Virtually Testing Foundation",
    icon: virtually,
    iconBg: "#ffffff",
    date: "Nov 2022 - Feb 2024",
    points: [
      "Blocked unwanted programs such as spyware and adware. Created, deployed, and managed ePO repositories. Created, equiped and ran reports from the ePolicy Orchestrator reports database, including the creation of custom queries.",
      "Installed, repaired, and removed older Virus Scan versions and updated engine and data files to the latest version.  Performed analysis via the ePO reports database on virus outbreaks and vulnerabilities to develop appropriate responses.",
      "Analyzed and identified threats, vulnerabilities, or changes to the level of risk associated with continued operations. Assess the level of threat associated with the circumstances and provide reporting to CND SP management. ",
      "Performs system administration on HBSS and integrates HBSS data (alerts, logs, data feeds, etc.) to protect, detect, and respond to processes, procedures (intrusion detection analysis, auditing, etc.), and systems.",
    ],
  },
  {
    title: "Cyber Security Engineer",
    company_name: "Whizlabs",
    icon: whizlabs,
    iconBg: "#ffffff",
    date: "Oct 2023 - Jan 2024",
    points: [
      "Spearheaded the implementation of proactive threat detection protocols, reducing incident response time by 30%.",
      "Led a cross-functional team in fortifying cloud environments, achieving a 20% improvement in overall security posture by doing the following technical activities:",
      "1. Explored Microsoft Sentinel. 2. Configured and manager the Network Security Group rules. 3. Configured and managed threat protection by using Microsoft Defender for Cloud. 4. Collected data from an Azure VM with Azure Monitor. 5. Controlled web traffic with Azure Application Gateway using an ARM template. 6. Encrypt a Windows VM with Azure CLI and Powershell ",
      "SKILLS: Threat Analysis · Azure Sentinel · Microsoft Security · Threat & Vulnerability Management · Network Security · Functional Specifications · Risk Assessment and Management · Azure SQL · Sentinel · Azure Active Directory · Identity and Access Management (IAM) · Microsoft Defender · Security Compliance",
    ],
  },
  {
    title: "Customer Technical Support",
    company_name: "Turkcell Global Bilgi",
    icon: turkcell,
    iconBg: "#ffffff",
    date: "Nov 2020 - Sep 2023",
    points: [
      "2nd Line IT Support · Internet of Things (IoT) · Customer Service · Operating Systems ",
      " Information Technology · Communication · Teamwork · Problem Solving",
      "Customer Service Representatives · Help Desk Support · Security Compliance",
      "Collaborating with cross-functional teams",
    ],
  },
  {
    title: "Linux System Administrator",
    company_name: "CyberPatron Network",
    icon: cyberpatron,
    iconBg: "#ffffff",
    date: "Jan 2021 - Aug 2023",
    points: [
      "Network Administration",
      "Internet of Things (IoT)",
      "Network Security",
      "Linux",
      "Help Desk Support",
    ],
  },
  {
    title: "IT Support Technician",
    company_name: "Permatech-Industrie-Service GmbH",
    icon: permatech,
    iconBg: "#ffffff",
    date: "Nov 2017 - Mar 2019",
    points: [
      "Customer Service",
      "Operating Systems",
      "Product Management",
      "Wireless Networking",
      "Communication",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had the pleasure of working with Mr. Ganiyu as my program coordinator in VTF. Mr Ganiyu was kind with his words and criticism. Under his supervision, our team achieved a lot and had remarkable results. I highly recommend him and I am grateful for the opportunity to have worked with him.",
    name: "Janet Oluwatoyin Olabode",
    designation: "Network Perfomance Engineer",
    company: "Huawei",
    image: "https://placehold.co/48x48?text=?" ,
  },
  {
    testimonial:
      "I recommend Ganiyu as an exceptional team lead. As my team lead, Ganiyu has demonstrated a deep understanding of the cybersecurity landscape and the ability to identify innovative solutions to complex challenges. His strategic vision for aligning his team towards goals have been instrumental in driving the company's growth and success.",
    name: "Joshua Karisa",
    designation: "Cyber Security Validation Engineer",
    company: "Texcortech",
    image: "https://placehold.co/48x48?text=?" ,
  },
  {
    testimonial:
      "After working under the guidance of Ganiyu Ogundana as an employee of Virtually Testing Foundation for many weeks i can testify to his ability to work with teams across boards. He indeed was a true team leader of Team Delta which i was a member of throughout my time at VTFoundation. I would recommend him to anyone looking for skills and efficiency in Cybersecurity as i can indeed testify that he has a lot to bring to the table. I wish him success in his career.",
    name: "Michael Otnoku",
    designation: "HR Strategy & Development",
    company: "Clyde & Co . ICS Learn",
    image: "https://placehold.co/48x48?text=?" ,
  },
  {
    testimonial:
      "I had the pleasure of working alongside Ganiyu Ogundana as a Cloud Security Intern. His dedication, quick learning, and strong work ethic significantly contributed to our team's success. I highly recommend him for his expertise and collaborative spirit",
    name: "Santhosh Vardan",
    designation: "Cyber Security Enthusiast",
    company: "GITAM Deemed University",
    image: "https://placehold.co/48x48?text=?" ,
  },
];

const projects = [
  {
    name: "A Practical Guide to Cloud Security",
    description:
      "Offers an in-depth exploration into the multifaceted world of cloud computing protection. We start by demystifying the fundamental principles of cloud security, followed by a detailed analysis of the shared responsibility model. Our guide then covers key topics such as identity and access management, encryption methods, network security protocols, and compliance standards. We provide step-by-step procedures for risk assessment and mitigation alongside best practices for incident response and recovery. The project is enriched with case studies and tools to equip IT professionals, security enthusiasts, and organizations with the knowledge to establish well configured security posture in their cloud environments.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://docs.google.com/file/d/1xj94PZssWP3vbY9foXAvajf4FENDQ3Jj/edit?filetype=mspresentation",
  },
  {
    name: "IAM_Bash_Script",
    description:
      "Built a Bash script to automate auditing of AWS IAM users, roles and access keys. Helps identify permission issues and improve security visibility using simple CLI commands. Lightweight, easy to integrate, and fully documented for real-world DevOps use.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/sortlight/IAM_Bash_Script",
  },
  {
    name: "Solidity For Auditors",
    description:
      "A comprehensive review of your smart contract code to identify potential security vulnerabilities. It's crucial for protecting your project from hacks, financial losses, and reputational damage. This largely depends on the size and complexity of your codebase.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/sortlight/Solidity-For-Auditors",
  },
];

const socialMediaLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ganiyusortput/",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png", // Replace with your LinkedIn icon URL or local path
  },
  {
    name: "GitHub",
    url: "https://github.com/sortlight",
    icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png", // Replace with your GitHub icon URL or local path
  },
  {
    name: "Twitter",
    url: "https://x.com/sortsec?s=21",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733579.png", // Replace with your Twitter icon URL or local path
  },
];

export { services, technologies, experiences, testimonials, projects, socialMediaLinks };

// export { services, technologies, experiences, testimonials, projects };


