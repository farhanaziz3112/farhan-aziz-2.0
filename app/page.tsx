/* eslint-disable react/no-unescaped-entities */
"use client";

import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { PinContainer } from "@/components/ui/3d-pin";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { CardStack } from "@/components/ui/card-stack";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { CardWithMovingBorder } from "@/components/ui/moving-border";
import { SparklesCore } from "@/components/ui/sparkles";
import { Tabs } from "@/components/ui/tabs";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Timeline } from "@/components/ui/timeline";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { WavyBackground } from "@/components/ui/wavy-background";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Link } from "lucide-react";
import { useTheme } from "next-themes";
import { Roboto_Mono } from "next/font/google";
import Image from "next/image";
import { features } from "process";
import { useState } from "react";
import { AiOutlineConsoleSql } from "react-icons/ai";
import {
  FaAngular,
  FaCaretRight,
  FaChevronCircleRight,
  FaEllipsisV,
} from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import {
  HiHome,
  HiUser,
  HiCog,
  HiInformationCircle,
  HiOutlineIdentification,
  HiOutlineBriefcase,
  HiAcademicCap,
  HiOutlineCode,
  HiOutlineDesktopComputer,
} from "react-icons/hi";
import { IoIosApps } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import {
  MdDarkMode,
  MdEmail,
  MdMenuOpen,
  MdOutlineLocalPhone,
} from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { RiReactjsLine, RiNextjsFill } from "react-icons/ri";
import {
  SiFacebook,
  SiFlutter,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiMongodb,
  SiPhonepe,
} from "react-icons/si";
import { VscSymbolInterface } from "react-icons/vsc";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

const words =
  "Hi everyone!👋🏻\r\r I am Farhan, a dedicated Software Engineer currently working at Metabit Sdn Bhd in Johor, Malaysia. I hold a Bachelor's degree in Computer Science (Software Engineering) from the University of Malaya.\r\rWith my skills, I am committed to keep improving and adapting to evolving technologies nowadays. Down to connect? Let’s make something dope together!";
// const words2 = [
//   {
//     text: "Hi everyone! I am Farhan, a dedicated Software Engineer currently working at Metabit Sdn Bhd in Johor, Malaysia. I hold a Bachelor's degree in Computer Science (Software Engineering) from the University of Malaya.\r\rWith my existing skills, I am committed to keep improving and adapting to evolving technologies nowadays. Looking forward to connecting with you and sharing our journey of learning and growth!"
//   },
//   {
//     text: "Let’s vibe and create something cool together!",
//     className: "text-blue-500 dark:text-blue-500",
//   }
// ]

const images = ["coding.jpg", "coding2.png", "email.png"];

const skills = [
  {
    id: 0,
    name: "Flutter",
    skillpoint: 3,
    type: "mobile",
    logo: (
      <SiFlutter className="text-sky-400 sm:text-slate-400 sm:group-hover:text-sky-400" />
    ),
  },
  {
    id: 1,
    name: "MySQL,PostgreSQL",
    skillpoint: 4,
    type: "database",
    logo: (
      <AiOutlineConsoleSql className="text-orange-500 sm:text-slate-400 sm:group-hover:text-orange-500" />
    ),
  },
  {
    id: 2,
    name: "ReactJS",
    skillpoint: 3,
    type: "web",
    logo: (
      <RiReactjsLine className="text-cyan-500 sm:text-slate-400 sm:group-hover:text-cyan-500" />
    ),
  },
  {
    id: 3,
    name: "HTML,CSS,JavaScript",
    skillpoint: 4,
    type: "web",
    logo: (
      <HiOutlineDesktopComputer className="text-pink-700 sm:text-slate-400 sm:group-hover:text-pink-700" />
    ),
  },
  {
    id: 4,
    name: "Java,Python",
    skillpoint: 5,
    type: "code",
    logo: <FaCode className="text-green-500 sm:text-slate-400 sm:group-hover:text-green-500" />,
  },
  {
    id: 5,
    name: "NextJS",
    skillpoint: 3,
    type: "web",
    logo: (
      <RiNextjsFill className="text-yellow-500 sm:text-slate-400 sm:group-hover:text-yellow-500" />
    ),
  },
  {
    id: 6,
    name: "Firebase",
    skillpoint: 3,
    type: "database",
    logo: (
      <IoLogoFirebase className="text-orange-500 sm:text-slate-400 sm:group-hover:text-orange-500" />
    ),
  },
  {
    id: 7,
    name: "Angular",
    skillpoint: 3,
    type: "web",
    logo: <FaAngular className="text-red-500 sm:text-slate-400 sm:group-hover:text-red-500" />,
  },
  {
    id: 8,
    name: "MongoDB",
    skillpoint: 3,
    type: "database",
    logo: <SiMongodb className="text-green-600 sm:text-slate-400 sm:group-hover:text-green-600" />,
  },
];

const experiences = [
  {
    time: "July 2024 to Current",
    type: "exp",
    title: "Software Engineer",
    place: "Metabit Sdn Bhd, Iskandar Puteri, Johor",
    content:
      "Involved in development of web application with touch of Blockchain technology. Use technology stack and frameworks such as Flutter, Golang, Angular, NextJS and ReactJS.",
  },
  {
    time: "Jun 2024 to July 2024",
    type: "exp",
    title: "Graduate Development Program (Internship)",
    place: "TIME dotcom Sdn Bhd, Shah Alam, Selangor",
    content:
      "Transformative 3-week graduate program organized by TIME dotCom Berhad, in collaboration with the University of Sussex. Get to experience a lot of things including site visit, departmental exposure and hands-on experience.",
  },
  {
    time: "July 2023 to September 2023",
    type: "exp",
    title: "Assistant (Civic Internship)",
    place: "Society of Deaf Johor, Johor Bahru, Johor",
    content:
      "Organizing events and programs for deaf people of Johor. This included creating documentation, reports and designing poster and videos. Lastly, I had the chance to engage and communicate with deaf people, which was the most challenging aspect during this internship.",
  },
  {
    time: "July 2022 to December 2022",
    type: "exp",
    title: "Web Developer (Intern)",
    place: "Cyber Village Sdn Bhd, Petaling Jaya, Selangor",
    content:
      "Assigned to be part of EPF team. Gained a lot of knowledge and experience throughout this intern. New skills explored such as Apache Wicket, Spring Boot and Angular. Truly opened my eyes on how software engineering actually works in real industry.",
  },
];

const educations = [
  {
    time: "2020 to 2024",
    type: "edu",
    title: "Bachelor of Computer Science (Software Engineering)",
    place:
      "Faculty of Computer Science and Information Technology, University of Malaya, Kuala Lumpur",
    content: "Final CGPA: 3.77",
  },
  {
    time: "2019 to 2020",
    type: "edu",
    title: "Foundation in Physical Science",
    place:
      "Centre for Foundation Studies in Science, University of Malaya, Kuala Lumpur",
    content: "Final CGPA: 4.00",
  },
  {
    time: "2014 to 2018",
    type: "edu",
    title: "SPM",
    place: "Sekolah Sultan Alam Shah, Putrajaya",
    content: "8A+, 1A",
  },
];

const tabs = [
  {
    tag: "E-Commerce Site",
    title: "Electronic Store E-Commerce Website",
    value: "electronic",
    content:
      "E-commerce site for a electronic store, which include three main system, Customer, Admin and API. Angular is used for the frontend part while NestJS is applied in the development of the RESTful API. Also, I used Auth0 as authentication and implemented NgRX state management to manage the users and products state. Lastly, MongoDB is used as our NoSQL database.",
    features: [
      "Admin: Manage and monitor all items including add, delete and view purchases",
      "Customer: View and purchase items",
    ],
    images: [
      "es/es-1.png",
      "es/es-2.png",
      "es/es-3.png",
      "es/es-4.png",
      "es/es-5.png",
      "es/es-6.png",
      "es/es-7.png",
      "es/es-8.png",
      "es/es-9.png",
      "es/es-10.png",
      "es/es-11.png",
    ],
    skills: [
      "Angular",
      "NgRX",
      "PrimeNG",
      "PrimeFlex",
      "MongoDB",
      "Auth0",
      "NestJS",
      "Github",
    ],
    github: "https://github.com/farhanaziz3112/electronic-store",
  },
  {
    tag: "Final Year Project: Web App",
    title: "UmmiCare: Child Care App (Web App)",
    value: "ummicare-web",
    content:
      "A project assigned for my final year project. It is a web application designed to assist the staffs and admins to manage all the children data and progress. Consists of four types of staff which are 'Admin', 'Teacher', 'Medical Staff' and 'Advisor'. Developed entirely with Flutter for the frontend, with authentication, data storage, database management, and deployment all handled by Firebase.",
    features: [
      "Admin: Manage all the staff evaluation and registration",
      "Advisor: Supervise the growth and development of children assigned to them",
      "Teacher: Manage all education details like examination and attendance",
      "Medical staff: Manage all health details like clinic appointment and vaccination",
    ],
    images: [
      "ummicareweb/ummicareweb-1.png",
      "ummicareweb/ummicareweb-2.png",
      "ummicareweb/ummicareweb-3.png",
      "ummicareweb/ummicareweb-5.png",
      "ummicareweb/ummicareweb-6.png",
      "ummicareweb/ummicareweb-7.png",
    ],
    skills: ["Flutter", "Android Studio", "Firebase", "Github"],
    github: "https://github.com/farhanaziz3112/UmmiCare-web",
  },
  {
    tag: "Final Year Project: Mobile App",
    title: "UmmiCare: Child Care App (Mobile App)",
    value: "ummicare-mobile",
    content:
      "This project is aimed to develop a child care guide application for parents to manage their children. It would give them a way to manage their children in various aspects which are health, education and profile. This designated application would help the parent user to keep track of everything. Developed entirely with Flutter for the frontend, with authentication, data storage, database management, and deployment all handled by Firebase.",
    features: [
      "Manage and monitor all the details about growth and development of the children",
      "Manage all children health details such as vaccination and appointment information",
      "View and supervise academic progress in school",
    ],
    images: [
      "ummicaremobile/ummicaremobile-1.png",
      "ummicaremobile/ummicaremobile-2.png",
      "ummicaremobile/ummicaremobile-3.jpg",
      "ummicaremobile/ummicaremobile-4.png",
      "ummicaremobile/ummicaremobile-5.png",
      "ummicaremobile/ummicaremobile-6.png",
      "ummicaremobile/ummicaremobile-7.jpg",
      "ummicaremobile/ummicaremobile-8.jpg",
    ],
    skills: ["Flutter", "Android Studio", "Firebase", "Github"],
    github: "https://github.com/farhanaziz3112/UmmiCare-mobile",
  },
  {
    tag: "Portfolio Website v1.0",
    title: "Farhan-Aziz Portfolio Website v1.0",
    value: "portfolio1",
    content:
      "My first ever portfolio website! This site showcases my projects, skills, and experiences as a software developer. The design is not really that fancy, but it does the work. This website is built using Angular for dynamic and responsive user interfaces, combined with basic CSS to create a clean and professional design. The site is fully responsive and aims to provide an engaging experience for visitors on both desktop and mobile devices.",
    features: [],
    images: [
      "pf/pf-1.png",
      "pf/pf-2.png",
      "pf/pf-3.png",
      "pf/pf-4.png",
      "pf/pf-5.png",
      "pf/pf-6.png",
    ],
    skills: ["Angular", "CSS", "Firebase", "Github"],
    github: "https://github.com/farhanaziz3112/farhan-aziz-1.0",
  },
  {
    tag: "AR Project",
    title: "GreenCity AR iPad Challenge 2024",
    value: "greencity",
    content:
      "In January 2024, I joined a competition focused on designing a green city using Augmented Reality. In this project, we were using 3D modelling and AR software on iPad, such as Shapr3D and Reality Composer, together with others software like iMovie and Freeform which were used for presentation and discussion purpose. This was totally a new experience to me, as this is something I am not really familiar with. But at the end, I really enjoyed learning new things, including 3D modelling, augmented reality and how to design and construct a green and sustainable city. And not forget to mention, we got 4th place out of 64 teams!",
    features: [],
    images: [
      "ar/ar-1.PNG",
      "ar/ar-2.png",
      "ar/ar-3.png",
      "ar/ar-4.png",
      "ar/ar-5.png",
      "ar/ar-6.PNG",
      "ar/ar-7.PNG",
      "ar/ar-8.PNG",
      "ar/ar-9.PNG",
    ],
    skills: [
      "3D Modelling",
      "Augmented Reality",
      "Shapr3D",
      "Reality Composer",
    ],
    github: "",
  },
  {
    tag: "Robotic Simulation",
    title: "Webots: Robotic Garbage Truck",
    value: "robot",
    content:
      "This project was actually for a subject called Real Time System, during my 3rd year. We analysed, designed and coded a real-time computer program using Python and Webots to automate the process of garbage collection in neighbourhoods. The simulation program is called Garbage Truck Robot (GTR), which includes a neighbourhood with three houses, a wheeled robot and a cuboid to represent the trash. What the robot will do is follow the black line using infrared sensor, stop by at each of the houses, pick up the cube using its robotic arms and lastly, return to the designated final station.",
    features: [],
    images: [
      "gtr/gtr-1.png",
      "gtr/gtr-2.png",
      "gtr/gtr-3.png",
      "gtr/gtr-4.png",
      "gtr/gtr-5.png",
      "gtr/gtr-6.png",
    ],
    skills: ["Webots", "Python", "3D Modelling"],
    github: "",
  },
  {
    tag: "The Sociopath",
    title: "Data Structure Project: The Sociopath",
    value: "sociopath",
    content:
      "One of my project during first year. We were assigned to create a project called The Sociopath that acts as a friendship monitoring system. The program is a one-point-of-view system where you also register as one of the students in the friendship monitoring system. Fully developed using Java, which also included a little bit of GUI by JavaFX.",
    features: [
      "Teaching a stranger to solve questions",
      "Chit chat among all the students",
      "Meeting with your crush",
    ],
    images: ["sp/sp-1.png", "sp/sp-2.png", "sp/sp-3.png", "sp/sp-4.png"],
    skills: ["Java", "JavaFX"],
    github: "https://github.com/marshmirullo/projectichi?tab=readme-ov-file",
  },
  // {
  //   tag: "Maps Clone",
  //   title: "Maps Clone Apps",
  //   value: "maps2",
  //   content: "Maps Clone Apps",
  //   features: [
  //     "Admin: Manage all the staff evaluation and registration",
  //     "Advisor: Supervise the growth and development of children assigned to them",
  //     "Teacher: Manage all education details like examination and attendance",
  //     "Medical staff: Manage all health details like clinic appointment and vaccination",
  //   ],
  //   images: ["coding2.png"],
  //   skills: ["Flutter"],
  //   github: "",
  // },
];

const contacts = [
  {
    title: "Phone",
    content: "018-2026040",
    logo: <MdOutlineLocalPhone />,
    link: "",
  },
  {
    title: "Email",
    content: "farhanaziz3112@gmail.com",
    logo: <MdEmail />,
    link: "mailto:farhanaziz3112@gmail.com",
  },
  {
    title: "Instagram",
    content: "@farhanaziz___",
    logo: <SiInstagram />,
    link: "https://www.instagram.com/farhanaziz___?igsh=aThjYzZ6YzAzOG9n&utm_source=qr",
  },
  {
    title: "Github",
    content: "farhanaziz3112",
    logo: <SiGithub />,
    link: "https://github.com/farhanaziz3112",
  },
  {
    title: "LinkedIn",
    content: "Muhammad Farhan Aziz",
    logo: <SiLinkedin />,
    link: "https://www.linkedin.com/in/muhammad-farhan-aziz-5bb327219/",
  },
  {
    title: "Facebook",
    content: "Muhammad Farhan Aziz",
    logo: <SiFacebook />,
    link: "https://www.facebook.com/muhammad.f.aziz.127?mibextid=LQQJ4d",
  },
];

export default function Home() {
  const { setTheme } = useTheme();
  const [hover, setHover] = useState(false);

  const [isDarkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newTheme = !prev ? "dark" : "light";
      setTheme(newTheme);
      return !prev;
    });
  };

  return (
    <main className="flex min-h-screen w-auto flex-col justify-between dark:bg-black">
      <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-start flex flex-col">
        <div className="flex w-full pt-20 px-8 lg-m:px-10 md:px-20 relative z-30 justify-between">
          <p className="decoration-gray-50 roboto-mono text-xs md-m:text-base lg:text-xl">
            ©farhan-aziz
          </p>
          <button
            onClick={toggleTheme}
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span
              className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-2xl font-medium text-white backdrop-blur-3xl ${
                isDarkMode ? "bg-blue-950" : "bg-slate-950"
              }`}
            >
              {isDarkMode ? (
                <MdLightMode className="text-slate-50" />
              ) : (
                <MdDarkMode className="text-slate-50" />
              )}
            </span>
          </button>
        </div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:linear-gradient(to_top,transparent_50%,black)]"></div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:linear-gradient(to_bottom,transparent_50%,black)]"></div>
        <CardContainer className="inter-var">
          <CardItem translateZ="100" className="w-full">
            <Image
              src="/farhan.jpg"
              height="800"
              width="800"
              className="h-32 w-32 md-m:h-40 md-m:w-40 sm:h-52 sm:w-52 lg:h-60 lg:w-60 object-cover rounded-3xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </CardContainer>
        <p className="text-sm md-m:text-base sm:text-2xl md:text-3xl lg:text-4xl font-bold relative z-20 bg-clip-text text-slate-950 dark:text-white">
          Muhammad Farhan Bin Abd Aziz
        </p>
        <p className="text-[10px] md-m:text-xs sm:text-sm md:text-base lg:text-xl relative z-20 bg-clip-text mt-3">
          Software Engineer | Full Stack Developer
        </p>
      </div>
      <section id="intro">    
        <WavyBackground
          className="px-8 md:px-24 lg:px-40"
          backgroundFill={isDarkMode ? "black" : "white"}
        >
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-40 items-center justify-center">
            <div className="col-span-1 xl:col-span-1 flex h-full w-full items-center justify-center">
              <CardStack items={skills} />
            </div>
            <div className="col-span-1 xl:col-span-2">
              <div className="flex flex-col" style={{ whiteSpace: "pre-line" }}>
                <TextGenerateEffect words={words} />
              </div>
            </div>
          </div>
        </WavyBackground>
      </section>
      <div className="w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-start flex flex-col">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:linear-gradient(to_top,transparent_50%,black)]"></div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:linear-gradient(to_bottom,transparent_50%,black)]"></div>
        <section
          id="about"
          className="py-16 md:py-32 px-8 sm:px-12 md:px-20 lg:px-32 xl:px-40 w-full"
        >
          <div className="flex flex-col w-full relative items-center lg:items-start justify-center">
            <CardWithMovingBorder
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-400 dark:border-slate-800"
              containerClassName="w-40 sm:w-64"
            >
              <div className="flex flex-row items-center justify-center gap-2">
                <span className="text-sm sm:text-base lg:text-2xl">
                  <FaCaretRight />
                </span>
                <h1 className="text-sm sm:text-base lg:text-2xl font-semibold">
                  About Me
                </h1>
              </div>
            </CardWithMovingBorder>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-4 mx-auto w-full mt-8">
            <WobbleCard
              containerClassName="col-span-3 2xl:col-span-1 bg-slate-900 h-auto"
              className=""
            >
              {/* <div className="flex flex-row 2xl:flex-col items-center gap-8 2xl:gap-0">
                <div className="flex items-center justify-center">
                  <Image
                    src="/farhan2.jpg"
                    width={200}
                    height={200}
                    alt="linear demo image"
                    className="rounded-2xl"
                  />
                </div>
                <div className="flex-1">
                  <p className="mt-4 text-left text-thin md:text-sm lg:text-2xl 2xl:text-base/6 text-neutral-200">
                    Full name is Muhammad Farhan Bin Abd Aziz,
                  </p>
                  <h2 className="text-left text-balance md:text-xl lg:text-3xl 2xl:text-2xl font-semibold tracking-[-0.015em] text-white">
                    but you can call me Farhan!
                  </h2>
                </div>
              </div> */}
              <div className="grid grid-cols-3 gap-x-4 sm:gap-x-6 md:gap-x-10">
                <div className="col-span-1 2xl:col-span-3">
                  <div className="flex w-full items-center justify-center">
                    <Image
                      src="/farhan2.jpg"
                      width={200}
                      height={200}
                      alt="linear demo image"
                      className="rounded-2xl"
                    />
                  </div>
                </div>
                <div className="col-span-2 2xl:col-span-3 flex flex-col justify-start sm:justify-center">
                  <p className="mt-4 text-left text-thin text-[8px] sm-m:text-[10px] md-m:text-xs lg-m:text-sm md:text-base lg:text-lg 2xl:text-base/6 text-neutral-200">
                    Full name is Muhammad Farhan Bin Abd Aziz,
                  </p>
                  <h2 className="text-left text-balance text-[8px] sm-m:text-[10px] md-m:text-xs lg-m:text-sm md:text-base lg:text-lg 2xl:text-2xl font-semibold tracking-[-0.015em] text-white">
                    but you can call me Farhan!
                  </h2>
                </div>
              </div>
            </WobbleCard>
            <div className="col-span-3 2xl:col-span-2">
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <WobbleCard containerClassName="col-span-2 sm:col-span-1 h-auto bg-teal-950">
                  <h2 className="max-w-80 text-left text-balance text-sm lg-m:text-base  sm:text-xs md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    018-2026040
                  </h2>
                  <p className="mt-4 max-w-[26rem] text-left text-xs lg-m:text-base sm:text-xs md:text-base/6 text-neutral-200">
                    Hit me up!
                  </p>
                  <div className="absolute xl:h-[150px] xl:w-[150px] 2xl:h-[150px] 2xl:w-[150px] -right-5 sm:-right-5 md:-right-5 xl:-right-10 2xl:-right-10 top-4 sm:top-12 md:top-24 overflow-hidden rounded-2xl">
                    <Image
                      src="/iphone.jpeg"
                      width={120}
                      height={120}
                      alt="linear demo image"
                      className="object-cover"
                    />
                  </div>
                  {/* <Image
                    src="/iphone.jpeg"
                    width={500}
                    height={500}
                    alt="linear demo image"
                    className="absolute -right-1 md:-right-1 lg:-right-[70%] top-14 object-contain rounded-2xl"
                  /> */}
                </WobbleCard>
                <WobbleCard containerClassName="col-span-2 sm:col-span-1 h-auto bg-cyan-950">
                  <p className="max-w-80 text-left text-balance text-sm lg-m:text-base sm:text-xs lg:text-xl font-semibold tracking-[-0.015em] text-white">
                    farhanaziz3112@gmail.com
                  </p>
                  <p className="mt-4 max-w-[26rem] text-left text-xs lg-m:text-base sm:text-xs text-neutral-200">
                    Let's connect!
                  </p>
                  <Image
                    src="/email.png"
                    width={500}
                    height={500}
                    alt="linear demo image"
                    className="absolute -right-[60%] md:-right-[65%] top-12 sm:top-16 md:top-24 object-contain rounded-2xl"
                  />
                </WobbleCard>
                <WobbleCard containerClassName="col-span-2 bg-indigo-950 h-auto">
                  <div className="grid grid-cols-2 h-full w-full gap-2">
                    <div className="col-span-2 lg-m:col-span-1 flex flex-col justify-center">
                      <h2 className="text-left text-balance text-base md:text-base lg:text-2xl font-semibold tracking-[-0.015em] text-white">
                        Full Stack Developer
                      </h2>
                      <p className="mt-4 text-left text-neutral-200 text-[10px] lg-m:text-xs md:text-base lg:text-lg">
                        Turning ideas into functional and beautiful
                        applications! Do check my skills below for more details.
                      </p>
                    </div>
                    <div className="col-span-2 lg-m:col-span-1 flex h-full w-full">
                      <div className="flex max-h-[16rem] w-full items-center justify-center">
                        <Image
                          src="/coding2.png"
                          width={1000}
                          height={1000}
                          alt="linear demo image"
                          className="rounded-lg w-full max-h-[16rem]"
                        />
                      </div>
                    </div>
                  </div>
                </WobbleCard>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="mt-20 w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative items-center justify-start flex flex-col">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:linear-gradient(to_top,transparent_50%,black)]"></div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:linear-gradient(to_bottom,transparent_50%,black)]"></div>
        <section
          id="experiences"
          className="py-16 md:py-32 px-8 sm:px-12 md:px-20 lg:px-32 xl:px-40 w-full"
        >
          <div className="flex flex-col w-full relative items-center lg:items-start justify-center">
            <CardWithMovingBorder
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-400 dark:border-slate-800"
              containerClassName="w-40 sm:w-64"
            >
              <div className="flex flex-row items-center justify-center gap-2">
                <span className="text-sm sm:text-base lg:text-2xl">
                  <FaCaretRight />
                </span>
                <h1 className="text-sm sm:text-base lg:text-2xl font-semibold">
                  Experiences
                </h1>
              </div>
            </CardWithMovingBorder>
          </div>
          <div className="flex flex-col lg:flex-row w-full mt-8 items-center pt-10">
            <div className="flex-1 z-10 p-2">
              <h2 className="text-center sm:text-left mb-4 text-black dark:text-white z-10 text-base sm:text-3xl">
                Journey of my career
              </h2>
              <p className="text-center sm:text-left text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm md:text-base">
                Explore my professional journey where each experience has shaped
                my skills and vision.
              </p>
            </div>
            <div className="hidden md:block flex flex-1 justify-center items-center z-10">
              <CardContainer className="inter-var">
                <CardItem translateZ="100" className="w-full">
                  <Image
                    src="/coding.jpg"
                    height="400"
                    width="400"
                    className="object-cover rounded-3xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardContainer>
            </div>
          </div>
        </section>
      </div>
      <div id="experiencesTimeline" className="w-full">
        <Timeline data={experiences} />
      </div>
      <div className="mt-20 w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative items-center justify-start flex flex-col">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:linear-gradient(to_top,transparent_50%,black)]"></div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:linear-gradient(to_bottom,transparent_50%,black)]"></div>
        <section
          id="education"
          className="py-16 md:py-32 px-8 sm:px-12 md:px-20 lg:px-32 xl:px-40 w-full"
        >
          <div className="flex flex-col w-full relative items-center lg:items-start justify-center">
            <CardWithMovingBorder
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-400 dark:border-slate-800"
              containerClassName="w-40 sm:w-64"
            >
              <div className="flex flex-row items-center justify-center gap-2">
                <span className="text-base lg:text-2xl">
                  <FaCaretRight />
                </span>
                <h1 className="text-base lg:text-2xl font-semibold">
                  Education
                </h1>
              </div>
            </CardWithMovingBorder>
          </div>
          <div className="flex flex-col lg:flex-row w-full mt-8 items-center pt-10">
            <div className="flex-1 z-10 p-2">
              <h2 className="text-center sm:text-left mb-4 text-black dark:text-white z-10 text-base sm:text-3xl">
                Journey of my educations
              </h2>
              <p className="text-center sm:text-left text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm md:text-base">
                Here’s an overview of my academic journey that have paved the
                way for my career.
              </p>
            </div>
            <div className="hidden md:block flex flex-1 justify-center items-center z-10">
              <CardContainer className="inter-var">
                <CardItem translateZ="100" className="w-full">
                  <Image
                    src="/um.jpg"
                    height="400"
                    width="400"
                    className="object-cover rounded-3xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardContainer>
            </div>
          </div>
        </section>
      </div>
      <div id="educationTimeline" className="w-full">
        <Timeline data={educations} />
      </div>
      <div className="mt-2 sm:mt-20 w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative items-center justify-start flex flex-col overflow-hidden">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:linear-gradient(to_top,transparent_50%,black)]"></div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:linear-gradient(to_bottom,transparent_50%,black)]"></div>
        <section id="skills-projects" className="py-4 sm:py-20">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-sm lg-m:text-xl lg:text-5xl font-semibold text-black dark:text-white">
                  Let's look into my <br />
                  <span className="text-base lg-m:text-3xl lg:text-7xl font-bold mt-1 leading-none">
                    Skills & Projects
                  </span>
                </h1>
              </>
            }
          >
            <Image
              src={`/coding2.png`}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </section>
      </div>
      <div className="w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative items-center justify-start flex flex-col">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:linear-gradient(to_top,transparent_50%,black)]"></div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:linear-gradient(to_bottom,transparent_50%,black)]"></div>
        <div className="flex flex-col w-full relative items-start justify-center z-10 pt-10 px-8 sm:px-12 md:px-20 lg:px-32 xl:px-40">
          <div className="flex flex-col w-full relative items-center lg:items-start justify-center">
            <CardWithMovingBorder
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-400 dark:border-slate-800"
              containerClassName="w-40 sm:w-64"
            >
              <div className="flex flex-row items-center justify-center gap-2">
                <span className="text-base lg:text-2xl">
                  <FaCaretRight />
                </span>
                <h1 className="text-base lg:text-2xl font-semibold">Skills</h1>
              </div>
            </CardWithMovingBorder>
          </div>
          <div className="px-0 sm:px-4 lg:px-10 2xl:px-40 w-full">
            <HoverEffect items={skills} />
          </div>
        </div>
      </div>
      <div className="mt-20 w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative items-center justify-start flex flex-col">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:linear-gradient(to_top,transparent_50%,black)]"></div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:linear-gradient(to_bottom,transparent_50%,black)]"></div>
        <section id="" className="pt-20 py-16 md:py-32 px-4 sm:px-12 md:px-20 lg:px-32 xl:px-40 w-full">
          <div className="flex flex-col w-full relative items-start justify-center z-10">
            <div className="flex flex-col w-full relative items-center lg:items-start justify-center">
              <CardWithMovingBorder
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-400 dark:border-slate-800"
                containerClassName="w-40 sm:w-64"
              >
                <div className="flex flex-row items-center justify-center gap-2">
                  <span className="text-base lg:text-2xl">
                    <FaCaretRight />
                  </span>
                  <h1 className="text-base lg:text-2xl font-semibold">
                    Projects
                  </h1>
                </div>
              </CardWithMovingBorder>
            </div>

            <div className="relative flex flex-col min-h-[70rem] w-full items-start justify-start pt-10">
              <Tabs tabs={tabs} />
            </div>
          </div>
        </section>
      </div>
      <div className="mt-20 mb-44 w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative items-center justify-start flex flex-col">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:linear-gradient(to_top,transparent_50%,black)]"></div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:linear-gradient(to_bottom,transparent_50%,black)]"></div>
        <section id="contact" className="pt-20 py-16 md:py-32 px-4 sm:px-12 md:px-20 lg:px-32 xl:px-40 w-full">
          <div className="flex flex-col w-full relative items-start justify-center z-10">
            <div className="flex flex-col w-full relative items-center lg:items-start justify-center">
              <CardWithMovingBorder
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-400 dark:border-slate-800"
                containerClassName="w-40 sm:w-64"
              >
                <div className="flex flex-row items-center justify-center gap-2">
                  <span className="text-base lg:text-2xl">
                    <FaCaretRight />
                  </span>
                  <h1 className="text-base lg:text-2xl font-semibold">
                    Contact
                  </h1>
                </div>
              </CardWithMovingBorder>
            </div>
            <div className="grid grid-cols-1 lg-m:grid-cols-2 md:grid-cols-3 gap-0 md:gap-2 lg:gap-4 mt-10 w-full">
              {contacts.map((contact, idx) => (
                <div
                  key={contact.title}
                  className="w-full flex items-center justify-center"
                  suppressHydrationWarning
                >
                  <PinContainer
                    title={`${contact.title}`}
                    content={`${contact.content}`}
                    href={`${contact.link}`}
                  >
                    <div className="flex w-full flex-col gap-2 p-4 tracking-tight text-black dark:text-slate-100/50">
                      <div className="flex flex-row items-center gap-2">
                        <span className="text-base sm:text-2xl dark:text-natural-300">
                          {contact.logo}
                        </span>
                        <h3 className="font-bold text-xs sm:text-base dark:text-slate-100">
                          {contact.title}
                        </h3>
                      </div>
                      <div className="flex block sm:hidden text-[10px] text-black dark:text-white">
                        {contact.content}
                      </div>
                      {/* <h4 className="text-slate-100 text-l">{contact.content}</h4> */}
                    </div>
                  </PinContainer>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="w-full h-[80px] bottom-0 bg-neutral-200 dark:bg-slate-900 items-center justify-center">
        <div className="flex w-full h-full items-center justify-between px-2 sm:px-10 md:px-20">
          <div className="flex text-[8px] sm:text-sm text-slate-700 dark:text-slate-500">
            farhan-aziz.web.app
          </div>
          <div className="flex text-[8px] sm:text-sm text-slate-700 dark:text-slate-500">
            Built with Next.JS and Tailwind CSS
          </div>
        </div>
      </div>
      {/* <div
        className={`fixed top-0 right-0 h-full w-16 bg-gradient-to-l from-neutral-400 dark:from-indigo-950 to-transparent flex flex-col items-center justify-center transition-all duration-300 ease-in-out z-2000 ${
          hover ? "w-48" : "w-16"
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="text-xl">{hover ? <div></div> : <FaEllipsisV />}</div>
        <nav
          className={`mt-10 pr-5 flex flex-col items-end space-y-4 text-white transition-opacity duration-300 ${
            hover ? "opacity-100" : "opacity-0"
          } absolute top-20 left-0 w-full`}
        >
          <a
            href="#about"
            className="text-gray-700 hover:text-white dark:text-white flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 hover:scale-105 transition-transform duration-300"
          >
            <HiOutlineIdentification className="text-xl" />
            <span
              className={`whitespace-nowrap ${!hover ? "hidden" : "block"}`}
            >
              About Me
            </span>
          </a>
          <a
            href="#experiences"
            className="text-gray-700 hover:text-white dark:text-white flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 hover:scale-105 transition-transform duration-300"
          >
            <HiOutlineBriefcase className="text-xl" />
            <span
              className={`whitespace-nowrap ${!hover ? "hidden" : "block"}`}
            >
              Experiences
            </span>
          </a>
          <a
            href="#education"
            className="text-gray-700 hover:text-white dark:text-white flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 hover:scale-105 transition-transform duration-300"
          >
            <HiAcademicCap className="text-xl" />
            <span
              className={`whitespace-nowrap ${!hover ? "hidden" : "block"}`}
            >
              Education
            </span>
          </a>
          <a
            href="#skills-projects"
            className="text-gray-700 hover:text-white dark:text-white flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 hover:scale-105 transition-transform duration-300"
          >
            <HiOutlineCode className="text-xl" />
            <span
              className={`whitespace-nowrap ${!hover ? "hidden" : "block"}`}
            >
              Skills
            </span>
          </a>
          <a
            href="#skills-projects"
            className="text-gray-700 hover:text-white dark:text-white flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 hover:scale-105 transition-transform duration-300"
          >
            <IoIosApps className="text-xl" />
            <span
              className={`whitespace-nowrap ${!hover ? "hidden" : "block"}`}
            >
              Projects
            </span>
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-white dark:text-white flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 hover:scale-105 transition-transform duration-300"
          >
            <HiInformationCircle className="text-xl" />
            <span
              className={`whitespace-nowrap ${!hover ? "hidden" : "block"}`}
            >
              Contact
            </span>
          </a>
        </nav>
      </div> */}
    </main>
  );
}
