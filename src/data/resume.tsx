import { Icons } from "@/components/icons";
import { FolderKanban, HomeIcon, ImagesIcon, MailIcon, NotebookIcon, RefreshCw } from "lucide-react";
import {
  HTMLIcon, CSSIcon, JavascriptIcon, TailwindIcon, BootstrapIcon,
  PHPIcon, LaravelIcon, JsonIcon,
  AWSIcon, Mysql, UbuntuIcon, FirebaseIcon, SupabaseIcon, PrismaIcon,
} from "@/components/ui/svgs/skillIcons";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Java } from "@/components/ui/svgs/java";
import { Python } from "@/components/ui/svgs/python";

export const DATA = {
  name: "Hsu Myat Moe",
  initials: "Rain",
  url: "https://www.facebook.com/jv230",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Junior Fullstack Developer. I love building things and helping people.",
  summary:
    "I earned my diploma in August 2026 and now work as a volunteer backend developer at PrimIcon. I also build the RFU page and websites to help people. I've participated in three hackathons and am always learning, improving my technical skills, and working on areas where I can grow.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Typescript", icon: ReactLight },
    { name: "HTML", icon: HTMLIcon },
    { name: "CSS", icon: CSSIcon },
    { name: "Javascript", icon: JavascriptIcon },
    { name: "Tailwind", icon: TailwindIcon },
    { name: "Bootstrap", icon: BootstrapIcon },
    { name: "Postgres", icon: Postgresql },
    { name: "MySQL", icon: Mysql },
    { name: "PHP", icon: PHPIcon },
    { name: "Laravel", icon: LaravelIcon },
    { name: "Java", icon: Java },
    { name: "Express.js", icon: Java },
    { name: "AJAX", icon: RefreshCw },
    { name: "JSON", icon: JsonIcon },
    { name: "Ubuntu (Basic)", icon: UbuntuIcon },
    { name: "Firebase", icon: FirebaseIcon },
    { name: "Supabase", icon: SupabaseIcon },
    { name: "Prisma", icon: PrismaIcon },
    { name: "Python (Learning)", icon: Python },
    { name: "AWS (Learning)", icon: AWSIcon },

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: FolderKanban, label: "Projects" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/gallery", icon: ImagesIcon, label: "Gallery" },
    { href: "/#contact", icon: MailIcon, label: "Contact" },
  ],
  contact: {
    email: "hsumyatm7308@gmail.com",
    tel: "+959450483795",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hsumyatm7308",
        icon: Icons.github,
        contact: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hsumyatmoe04/",
        icon: Icons.linkedin,

        contact: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/jv230",
        icon: Icons.facebook,

        contact: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        contact: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        contact: false,
      },
    },
  },

  work: [
    {
      company: "PrimeIcon",
      href: "",
      badges: [],
      location: "Remote",
      title: "Backend Developer",
      logoUrl: "/pi.jpg",
      start: "Nov 2026",
      end: "Present",
      description:
        "Designed an entity-relationship diagram and created database tables in PostgreSQL",
    },

    {
      company: "RFU",
      href: "https://resources-for-you.vercel.app/",
      badges: [],
      location: "Yangon",
      title: "Founder & Developer",
      logoUrl: "/rfu.svg",
      start: "Oct 2026",
      end: "Present",
      description:
        "Built and launched the MVP version of RFU to help people find useful resources. Manage the facebook page independently and continue to update and improve the website.",
    },

  ],
  education: [
    {
      school: "Metro IT & Japanese Language Centre",
      href: "",
      degree: "Diploma in System Creator",
      logoUrl: "/buildspace.jpg",
      start: "2024",
      end: "2026",
    }
    
  ],
  certification: [

    {
      certificated: "Fundamentals of Engineering (FE)",
      href: "",
      org: "Metro IT & Japanese Language Centre",
      logoUrl: "fe.jpeg",
      start: "2024",
      end: "2025",
    },
    {
      certificated: "Fullstack Development",
      href: "https://uwaterloo.ca",
      org: "Data Land Technology",
      logoUrl: "/dlt.jpg",
      start: "2021",
      end: "Present", 
    },
    {
      certificated: "Professional UI/UX Designer",
      href: "https://wlu.ca",
      org: "Fairway Technology",
      logoUrl: "/fairway.jpeg",
      start: "Jan 2026",
      end: "March 2026",
    },

  ],
  projects: [
    {
      slug: "golden-promise",
      detailTitle: "",
      category: "",
      role: "Project lead & developer",
      status: "Completed · August 2026",
      mediaCaption: "",
      title: "Golden Promise",
      href: "https://github.com/metroschoolproject/GP",
      dates: "March 2026 - August 2026",
      active: true,
      description:
          "Wedding marketplace for couples, suppliers, and administrators.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "AJAX",
        "TailwindCSS",
        "PHP",
        "MySql",
        "Google Analytis",
        "PHPMailer",
        "Google API OAuth",
        "Claude"
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/metroschoolproject/GP",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/gp-optimized.mp4",
    },
    {
      slug: "rfu",
      detailTitle: "Resources For You",
      category: "Personal project",
      role: "Creator & developer",
      status: "Launched · Ongoing updates",
      mediaCaption: "A look at the first version of RFU.",
      title: "RFU",
      href: "https://resources-for-you.vercel.app/",
      dates: "Oct 2026 - Present",
      active: true,
      description:
        "A place to discover useful resources, from hackathons and webinars to courses.",
      technologies: [
        "React.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "SQLite",
      ],
      links: [
        {
          type: "Website",
          href: "https://resources-for-you.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/hsumyatm7308/resources-for-you",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "rfu.mov",
    },

    {
      slug: "taxi-meik-swe",
      detailTitle: "Taxi Meik Swe",
      category: "",
      role: "Developer",
      status: "Built · May 2026",
      mediaCaption: "",
      title: "Taxi Meik Swe",
      href: "https://taxi-meik-swe.vercel.app/",
      dates: "May 2026 - May 2026",
      active: true,
      description:
        "A car rental marketplace that connects taxi drivers in Myanmar with owners of available taxi-ready cars. The company supports the rental process through verification, deposits, payments, inspections, and dispute management.",
      technologies: [
        "React.js",
        "Express.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Neon",
        "AI Integrated"
      ],
      links: [
        {
          type: "Website",
          href: "https://taxi-meik-swe.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "tms.mov",
    },
    {
      slug: "Vbot",
      imageFit:"contain",
      detailTitle: "VBot",
      category: "",
      role: "Creator & developer",
      status: "Built · October 2026",
      mediaCaption: "",
      title: "VBot(@v_dlpbot)",
      href: "@v_dlpbot",
      dates: "Oct 2026",
      active: true,
      description:
        "A Telegram bot that downloads high-resolution videos without watermarks from Pinterest, YouTube, TikTok, X, and Instagram. Paste a link to download videos up to 10 minutes long.",
      technologies: [
        "Python",
        "python-telegram-bot",
        "yt-dlp",
        "FFmpeg",
        "SQLite",
        "VPS"
      ],
      links: [
        {
          type: "Bot",
          href: "@v_dlpbot",
          icon: <Icons.telegrambot className="size-3" />,
        },

        {
          type: "Source",
          href: "https://github.com/hsumyatm7308/VBot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "vbot.jpeg",
      video: "",
    },
    {
      slug: "perum-dej-ecommerce",
      detailTitle: "",
      category: "",
      role: "Fullstack Developer",
      status: "Built · January 2023 – July 2024",
      mediaCaption: "",
      title: "Perum Dej E-commerce",
      href: "https://github.com/hsumyatm7308/ecommerce-small-shopping",
      dates: "January 2023 - July 2024",
      active: true,
      description:
        "An e-commerce website for a perfume shop where customers can browse and shop for fragrances.",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Tailwind",
        "Javascript",
        "AJAX",
        "PHP",
        "MySQL",
        "AI Assistant",
        "Git"
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },

        {
          type: "Source",
          href: "https://github.com/anthtooaung/IPP-System",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "perumdej.mp4",
    },
    {
      slug: "zay-list",
      detailTitle: "",
      category: "",
      role: "Developer",
      status: "Built · March 2026",
      mediaCaption: "",
      title: "ZayList",
      href: "https://github.com/hsumyatm7308/ZayList",
      dates: "March 2026 - March 2026",
      active: true,
      description:
        "A shared grocery app for households. Add items by voice, organize the list, shop together, and track spending with monthly and category insights.",
      technologies: [
        "React 18",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Zustand",
        "Recharts",
        "Capacitor",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/hsumyatm7308/ZayList",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "zaylist/zaylist-cover.webp",
      video: "",
    },
    {
      slug: "aura-ai",
      detailTitle: "",
      category: "",
      role: "Developer",
      status: "Built · July 17th 2025",
      mediaCaption: "",
      title: "Aura AI",
      href: "https://github.com/hsumyatm7308/AURA_AI",
      dates: "July 2026 - July 2026",
      active: true,
      description:
        "An AI-powered interview and selection operations platform featuring automated candidate screening, a live AI interview assistant, and explainable evaluations.",
      technologies: [
        "React",
        "Typescript",
        "PostgreSQL",
        "Python",
        "Tailwind",
      ],
      links: [
        {
          type: "website",
          href: "error page",
          icon: <Icons.desktop className="size-3" />,
        },

        {
          type: "Source",
          href: "https://github.com/hsumyatm7308/AURA_AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/auraai/aura.mp4",
    },
    {
      slug: "IPP",
      detailTitle: "",
      category: "",
      role: "Developer",
      status: "Built · December 2025 – February 2026",
      mediaCaption: "",
      title: "IPP",
      href: "https://github.com/anthtooaung/IPP-System",
      dates: "Dec 2025 - Feb 2026",
      active: true,
      description:
        "Integraded Project Planning System for Engineer",
      technologies: [
        "Java",
        "JavaFX",
        "MySQL",
        "SceneBuilder",
        "CSS",
        "IntelliJ IDEA",
        "Git"
      ],
      links: [
        {
          type: "Desktop",
          href: "",
          icon: <Icons.desktop className="size-3" />,
        },

        {
          type: "Source",
          href: "https://github.com/anthtooaung/IPP-System",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "ipp.jpg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "One Project One Week",
      dates: "May 25 to May 31, 2026",
      location: "Technortal Campus, Times City, Yangon",
      description:
        "Built a car rental marketplace that connects taxi drivers in Myanmar with owners of available taxi-ready cars. The platform supports verification, deposits, payments, inspections, and dispute management.",
      icon: "public",
      image:
        "technotal.jpeg",
      links: [
          {
            title: "Github",
            icon: <Icons.github className="h-4 w-4" />,
            href: "https://github.com/hsumyatm7308/taxi_meik_swe_hackthon",
          },
          {
            title: "Site",
            icon: <Icons.globe className="h-4 w-4" />,
            href: "taxi-meik-swe.vercel.app",
          }
      ],
    },
    {
      title: "Let's Tech Hackathon",
      dates: "July 17th–19th, 2026",
      location: "Yangon, Myanmar ",
      description:
        "Built AURA, an AI-assisted platform for managing applications and interviews for jobs, hackathons, and volunteer roles. It helps reduce repetitive tasks while keeping final selection decisions in human hands.",
      image:
        "letstechcb.jpeg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://youtu.be/6qqYb-DYaTw",
        },
        {
          title: "Slide",
          icon: <Icons.framermotion className="h-4 w-4" />,
          href: "https://canva.link/3nboc4n5jno0w5y",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Htunht/AURA_AI",
        },
      ],
    },
    {
      title: "Cursor AI Hackathon",
      dates: "August 29, 2026",
      location: "uab Tower @ Times City, Yangon",
      description:
        "Built a loan website for SMEs and banks in four hours.",
      image:
        "cursor.jpeg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [

      ],
    },

  ],
} as const;
