/* eslint-disable react/no-unescaped-entities */
"use client";

import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { CardStack } from "@/components/ui/card-stack";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
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
import { MdDarkMode, MdMenuOpen } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { RiReactjsLine, RiNextjsFill } from "react-icons/ri";
import { SiFlutter, SiMongodb } from "react-icons/si";
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

const skills = [
  {
    id: 0,
    name: "Flutter",
    skillpoint: 3,
    type: "mobile",
    logo: (
      <SiFlutter className="text-5xl text-slate-400 group-hover:text-sky-400" />
    ),
  },
  {
    id: 1,
    name: "MySQL,PostgreSQL",
    skillpoint: 4,
    type: "database",
    logo: (
      <AiOutlineConsoleSql className="text-5xl text-slate-400 group-hover:text-orange-500" />
    ),
  },
  {
    id: 2,
    name: "ReactJS",
    skillpoint: 3,
    type: "web",
    logo: (
      <RiReactjsLine className="text-5xl text-slate-400 group-hover:text-cyan-500" />
    ),
  },
  {
    id: 3,
    name: "HTML,CSS,JavaScript",
    skillpoint: 4,
    type: "web",
    logo: (
      <HiOutlineDesktopComputer className="text-5xl text-slate-400 group-hover:text-pink-700" />
    ),
  },
  {
    id: 4,
    name: "Java,Python",
    skillpoint: 5,
    type: "code",
    logo: (
      <FaCode className="text-5xl text-slate-400 group-hover:text-green-500" />
    ),
  },
  {
    id: 5,
    name: "NextJS",
    skillpoint: 3,
    type: "web",
    logo: (
      <RiNextjsFill className="text-5xl text-slate-400 group-hover:text-yellow-500" />
    ),
  },
  {
    id: 6,
    name: "Firebase",
    skillpoint: 3,
    type: "database",
    logo: (
      <IoLogoFirebase className="text-5xl text-slate-400 group-hover:text-orange-500" />
    ),
  },
  {
    id: 7,
    name: "Angular",
    skillpoint: 3,
    type: "web",
    logo: (
      <FaAngular className="text-5xl text-slate-400 group-hover:text-red-500" />
    ),
  },
  {
    id: 8,
    name: "MongoDB",
    skillpoint: 3,
    type: "database",
    logo: (
      <SiMongodb className="text-5xl text-slate-400 group-hover:text-green-600" />
    ),
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

const temp = 'coding2.png'

const tabs = [
  {
    tag: 'Final Year Project',
    title: "UmmiCare: Child Care App",
    value: "ummicare",
    content: 'UmmiCare: Child Care App',
    images: [
      'coding2.png'
    ],
    skills: [
      'Flutter'
    ]
  },
  {
    tag: 'E-Commerce Site',
    title: "Electronic Store E-Commerce Website",
    value: "electronic",
    content: 'Electronic Store E-Commerce Website',
    images: [
      'coding2.png'
    ],
    skills: [
      'Flutter'
    ]
  },
  {
    tag: 'Maps Clone',
    title: "Maps Clone Apps",
    value: "maps",
    content: 'Maps Clone Apps',
    images: [
      'coding2.png'
    ],
    skills: [
      'Flutter'
    ]
  },
  {
    tag: 'Robotic Simulation',
    title: "Webots: Robotic Garbage Truck",
    value: "robot",
    content: 'Webots: Robotic Garbage Truck',
    images: [
      'coding2.png'
    ],
    skills: [
      'Flutter'
    ]
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
    <main className="flex min-h-screen flex-col justify-between dark:bg-black">
      <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-start flex flex-col">
        <div className="flex w-full pt-20 px-20 relative z-30 justify-between">
          <p className="decoration-gray-50 roboto-mono text-m sm:text-xl">
            farhan-aziz
          </p>
          <button
            onClick={toggleTheme}
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-2xl font-medium text-white backdrop-blur-3xl">
              {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
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
              className="h-60 w-60 object-cover rounded-3xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </CardContainer>
        <p className="text-xl sm:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400">
          Muhammad Farhan Bin Abd Aziz
        </p>
        <p className="text-l sm:text-1xl relative z-20 bg-clip-text mt-3">
          Software Engineer | Full Stack Developer
        </p>
      </div>
      <section id="intro">
        <WavyBackground className="px-40">
          <div className="grid grid-cols-3 gap-x-64 items-center justify-center">
            <div className="col-span-1 flex h-full items-center justify-center">
              <CardStack items={skills} />
            </div>
            <div className="col-span-2">
              <div className="flex flex-col" style={{ whiteSpace: "pre-line" }}>
                <TextGenerateEffect words={words} />
                {/* <TextGenerateEffect words={words2} /> */}
                {/* <TypewriterEffectSmooth words={words2} /> */}
              </div>
            </div>
          </div>
        </WavyBackground>
      </section>
      <div className="w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-start flex flex-col">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:linear-gradient(to_top,transparent_50%,black)]"></div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:linear-gradient(to_bottom,transparent_50%,black)]"></div>
        <section id="about" className="py-32 px-40 w-full">
          <div className="flex flex-col w-full relative items-start justify-center">
            <CardWithMovingBorder
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              containerClassName="w-64"
            >
              <div className="flex flex-row items-center justify-center gap-2">
                <span className="text-2xl">
                  <FaCaretRight />
                </span>
                <h1 className="text-2xl font-semibold">About Me</h1>
              </div>
            </CardWithMovingBorder>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto w-full mt-8">
            <WobbleCard
              containerClassName="col-span-1 lg:col-span-1 h-full bg-slate-900 min-h-[500px] lg:min-h-[300px]"
              className=""
            >
              <div className="flex items-center justify-center">
                <Image
                  src="/farhan2.jpg"
                  width={200}
                  height={200}
                  alt="linear demo image"
                  className="rounded-2xl"
                />
              </div>
              <div className="max-w-xs">
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  Full name is Muhammad Farhan Bin Abd Aziz,
                </p>
                <h2 className="text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
                  but you can call me Farhan!
                </h2>
              </div>
            </WobbleCard>
            <div className="col-span-1 lg:col-span-2">
              <div className="grid grid-cols-2 gap-4">
                <WobbleCard containerClassName="col-span-1 min-h-[100px] bg-teal-950">
                  <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    018-2026040
                  </h2>
                  <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    Hit me up!
                  </p>
                  <Image
                    src="/iphone.jpeg"
                    width={120}
                    height={120}
                    alt="linear demo image"
                    className="absolute -right-1 md:-right-1 lg:-right-1 top-14 object-contain rounded-2xl"
                  />
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 min-h-[100px] bg-cyan-950">
                  <p className="max-w-80 text-left text-balance text-base md:text-l lg:text-l font-semibold tracking-[-0.015em] text-white">
                    farhanaziz3112@gmail.com
                  </p>
                  <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    Let's connect!
                  </p>
                  <Image
                    src="/email.png"
                    width={500}
                    height={500}
                    alt="linear demo image"
                    className="absolute -right-1 md:-right-1 lg:-right-[70%] top-14 object-contain rounded-2xl"
                  />
                </WobbleCard>
                <WobbleCard containerClassName="col-span-2 bg-indigo-950 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                  <div className="max-w-sm">
                    <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                      Full Stack Developer
                    </h2>
                    <p className="mt-4 text-left text-neutral-200">
                      Turning ideas into functional and beautiful applications!
                      Do check my skills below for more details.
                    </p>
                    <Image
                      src="/coding2.png"
                      width={500}
                      height={500}
                      alt="linear demo image"
                      className="absolute -right-5 md:-right-[10%] lg:-right-[20%] top-16 object-contain rounded-2xl"
                    />
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
        <section id="experiences" className="pt-20 px-40 w-full">
          <div className="flex flex-col w-full relative items-start justify-center z-10">
            <CardWithMovingBorder
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              containerClassName="w-64"
            >
              <div className="flex flex-row items-center justify-center gap-2">
                <span className="text-2xl">
                  <FaCaretRight />
                </span>
                <h1 className="text-2xl font-semibold">Experiences</h1>
              </div>
            </CardWithMovingBorder>
          </div>
          <div className="flex flex-row w-full mt-8 items-center">
            <div className="flex-1 z-10">
              <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white z-10">
                Journey of my career
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                Explore my professional journey where each experience has shaped
                my skills and vision.
              </p>
            </div>
            <div className="flex flex-1 justify-center items-center z-10">
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
        <section id="education" className="pt-20 px-40 w-full">
          <div className="flex flex-col w-full relative items-start justify-center z-10">
            <CardWithMovingBorder
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              containerClassName="w-64"
            >
              <div className="flex flex-row items-center justify-center gap-2">
                <span className="text-2xl">
                  <FaCaretRight />
                </span>
                <h1 className="text-2xl font-semibold">Educations</h1>
              </div>
            </CardWithMovingBorder>
          </div>
          <div className="flex flex-row w-full mt-8 items-center">
            <div className="flex-1 z-10">
              <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white z-10">
                Journey of my educations
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                Here’s an overview of my academic journey that have paved the
                way for my career
              </p>
            </div>
            <div className="flex flex-1 justify-center items-center z-10">
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
      <div className="mt-20 w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative items-center justify-start flex flex-col overflow-hidden">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:linear-gradient(to_top,transparent_50%,black)]"></div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:linear-gradient(to_bottom,transparent_50%,black)]"></div>
        <section id="skills" className="py-20">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-semibold text-black dark:text-white">
                  Let's look into my <br />
                  <span className="text-3xl md:text-[6rem] font-bold mt-1 leading-none">
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
        <div className="flex flex-col w-full relative items-start justify-center z-10 pt-10 px-40">
          <CardWithMovingBorder
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            containerClassName="w-64"
          >
            <div className="flex flex-row items-center justify-center gap-2">
              <span className="text-2xl">
                <FaCaretRight />
              </span>
              <h1 className="text-2xl font-semibold">Skills</h1>
            </div>
          </CardWithMovingBorder>
          <div className="md:px-20 w-full">
            <HoverEffect items={skills} />
          </div>
        </div>
      </div>
      <div className="mt-20 w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative items-center justify-start flex flex-col">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:linear-gradient(to_top,transparent_50%,black)]"></div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:linear-gradient(to_bottom,transparent_50%,black)]"></div>
        <section id="skills" className="pt-20 px-40 w-full">
          <div className="flex flex-col w-full relative items-start justify-center z-10">
            <CardWithMovingBorder
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              containerClassName="w-64"
            >
              <div className="flex flex-row items-center justify-center gap-2">
                <span className="text-2xl">
                  <FaCaretRight />
                </span>
                <h1 className="text-2xl font-semibold">Projects</h1>
              </div>
            </CardWithMovingBorder>
            <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start pt-10">
              <Tabs tabs={tabs} />
            </div>
          </div>
        </section>
      </div>
      <section id="projects" className="py-20">
        <h1 className="text-4xl font-bold">Projects</h1>
      </section>
      <section id="contact" className="py-20">
        <h1 className="text-4xl font-bold">Contact</h1>
      </section>

      <div
        className={`fixed top-0 right-0 h-full w-16 bg-gradient-to-l from-indigo-950 to-transparent flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
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
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 hover:scale-105 transition-transform duration-300"
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
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 hover:scale-105 transition-transform duration-300"
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
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 hover:scale-105 transition-transform duration-300"
          >
            <HiAcademicCap className="text-xl" />
            <span
              className={`whitespace-nowrap ${!hover ? "hidden" : "block"}`}
            >
              Education
            </span>
          </a>
          <a
            href="#skills"
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 hover:scale-105 transition-transform duration-300"
          >
            <HiOutlineCode className="text-xl" />
            <span
              className={`whitespace-nowrap ${!hover ? "hidden" : "block"}`}
            >
              Skills
            </span>
          </a>
          <a
            href="#projects"
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 hover:scale-105 transition-transform duration-300"
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
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 hover:scale-105 transition-transform duration-300"
          >
            <HiInformationCircle className="text-xl" />
            <span
              className={`whitespace-nowrap ${!hover ? "hidden" : "block"}`}
            >
              Contact
            </span>
          </a>
        </nav>
      </div>
    </main>
  );
}
