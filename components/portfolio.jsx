"use client";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Button from "@mui/material/Button";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useEffect, useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Component() {
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
      setLoading(false);
    }, 1000);
  }, []);

  const Skeleton = ({ width, height }) => (
    <div
      className="animate-pulse bg-gray-200 rounded"
      style={{ width, height }}
    ></div>
  );

  if (loading) {
    return (
      <div className="flex flex-col min-h-[100dvh] text-foreground overflow-visible bg-background">
        <main className="flex-1 container px-4 md:px-6 py-12 md:py-16 lg:py-20">
          <section id="about" className="mb-12 md:mb-15 lg:mb-16">
            <Skeleton width="300px" height="40px" />
            <Skeleton width="500px" height="20px" className="mt-4" />
          </section>
          <section id="education" className="mb-10 md:mb-14 lg:mb-16">
            <Skeleton width="200px" height="30px" />
            <Skeleton width="600px" height="100px" className="mt-4" />
          </section>
          <section id="experience" className="mb-10 md:mb-14 lg:mb-16">
            <Skeleton width="200px" height="30px" />
            <Skeleton width="600px" height="200px" className="mt-4" />
          </section>
          <section id="projects" className="mb-10 md:mb-14 lg:mb-16">
            <Skeleton width="200px" height="30px" />
            <Skeleton width="600px" height="200px" className="mt-4" />
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-[100dvh] max-w-full bg-background text-foreground overflow-x-hidden overflow-y-auto">
      <div className="fixed inset-0 z-0 bg-[radial-gradient(#c1c3c7_1px,transparent_1px)] [background-size:16px_16px] animate-fade-in"></div>
      <main
        className={`relative z-10 font-sans flex-1 w-full container px-2 sm:px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 mx-auto ${animate ? "animate-fade-in" : ""}`}
      >
        <section id="about" className="mb-12 md:mb-13 lg:mb-16">
          <div className="relative cursor-pointer">
            {/* Pinging text */}
            <h1 className="absolute text-7xl font-black text-red-400 opacity-30 tracking-tighter mb-0 leading-normal animate-ping-once">
              Miller Ding
            </h1>
            {/* Solid text */}
            <h1 className="relative text-7xl font-black tracking-tighter mb-0 leading-normal transform transition-transform ease-in-out duration-300 hover:-translate-y-1 hover:translate-x-1">
              Miller Ding
            </h1>
          </div>
          <div className="flex items-center mt-2"> {/* Adjust margin-top here */}
            <Link
              href="https://github.com/mding022"
              target="_blank"
            >
              <Github size={32} color="#383838" className="mr-2 hover:stroke-zinc-600 hover:cursor-pointer transform transition-transform ease-in-out duration-300 hover:-translate-y-0.5" />
            </Link>
            <Link
              href="https://linkedin.com/in/millerding"
              target="_blank"
            >
              <Linkedin size={32} color="#383838" className="hover:stroke-zinc-600 hover:cursor-pointer transform transition-transform ease-in-out duration-300 hover:-translate-y-0.5" />
            </Link>
          </div>
          <p className="mt-2 text-xl text-gray-600 font-semibold font-mono hover:cursor-default transform transition-transform ease-in-out duration-300 hover:-translate-y-0.5">
            Computer science student in Toronto, Ontario.<br /><span className="underline-offset-4 underline">2nd year</span>&nbsp;undergraduate
            at the University of Ottawa.
          </p>
        </section>

        <section id="education" className="mb-10 md:mb-14 lg:mb-16 ">
          <h2 className={`text-3xl font-extrabold tracking-tighter mb-4 hover:cursor-default transform transition-transform ease-in-out duration-300 hover:-translate-y-0.5`}>
            Education
          </h2>
          <div className="grid gap-6">
            <div className="hover:cursor-default transform transition-transform ease-in-out duration-300 hover:-translate-y-0.5">
              <h3 className="text-2xl font-bold">
                Honours B.Sc in Computer Science, Minor in Economics
              </h3>
              <p className="text-muted-foreground">
                University of Ottawa, 2023 - 2027
              </p>
              <p className="text-muted-foreground">CGPA: 9.3/10.0</p>
            </div>
            <div className="hover:cursor-default transform transition-transform ease-in-out duration-300 hover:-translate-y-0.5">
              <h3 className="text-2xl font-bold">High School Diploma</h3>
              <p className="text-muted-foreground">
                YCDSB High School, Ontario, 2019 - 2023
              </p>
              <p className="text-muted-foreground">Honour Roll, A+ average</p>
            </div>
          </div>
        </section>
        <section id="experience" className="mb-10 md:mb-14 lg:mb-16">
          <h2 className="text-3xl font-extrabold tracking-tighter mb-4 hover:cursor-default transform transition-transform ease-in-out duration-300 hover:-translate-y-0.5">
            Experience
          </h2>
          <div className="grid gap-6">
            <div className="hover:cursor-default transform transition-transform ease-in-out duration-300 hover:-translate-y-0.5">
              <h3 className="text-2xl font-bold">
                Software Engineering and Design Intern
              </h3>
              <p className="text-muted-foreground">
                Jinglemobi Technology Co., Summer 2024
              </p>
              <ul className="mt-2 list-disc pl-4 space-y-1 text-muted-foreground">
                <li>Led the design and implemention of mobile AI apps</li>
                <li>
                  Successfully launched with regional support paying subscribers
                  in 4 continents
                </li>
                <li>
                  Developed backend infrastructure using Java Spring Boot,
                  Python, and SQL
                </li>
                <li>
                  Collaborated with front-end development teams to integrate
                  various endpoints into our app
                </li>
                <li>
                  Implemented an efficient queuing system to scale our servers
                  for improved performance
                </li>
              </ul>
            </div>
            <div className="hover:cursor-default transform transition-transform ease-in-out duration-300 hover:-translate-y-0.5">
              <h3 className="text-2xl font-bold">
                Computer Assembly Technician
              </h3>
              <p className="text-muted-foreground">
                Green Top Tech Inc., Summer 2023
              </p>
              <ul className="mt-2 list-disc pl-4 space-y-1 text-muted-foreground">
                <li>
                  Assembled refurbished desktop and server computers for
                  businesses and consumers
                </li>
                <li>
                  Installed and debugged operating systems, ensuring that all
                  computers were plug and play for customers
                </li>
                <li>
                  Provided exceptional technical support and troubleshooting
                  services
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="mb-10 md:mb-14 lg:mb-16 overflow-x-auto"
        >
          <h2 className="text-3xl font-extrabold tracking-tighter mb-4 flex items-center hover:cursor-default transform transition-transform ease-in-out duration-300 hover:-translate-y-0.5">
            Projects
            <span className="ml-2 block lg:hidden">
              <ScrollArrow className="w-8 h-8" />
            </span>
          </h2>
          <div className="grid gap-6">
            <div>
              <Link href="https://thetimepiece.ca" target="_blank" className="flex items-center">
                <div className="relative">
                  {/* Pinging lightning bolt */}
                  <svg
                    className="absolute animate-ping"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="#e3b13b" />
                  </svg>

                  {/* Solid lightning bolt */}
                  <svg
                    className="relative"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="#e3b13b" />
                  </svg>
                </div>

                <span className="text-2xl font-bold underline-offset-4 text-purple-700 hover:text-purple-600">
                  <span className="underline ml-1">TheTimepiece, 2024</span><span className="font-normal text-gray-400 no-underline">&nbsp;&nbsp;Work in Progress</span>
                </span>
              </Link>
              <p className="text-muted-foreground">
                Landing page for a e-commerce business selling our custom handcrafted automatic watches. Fully designed the UI, UX, and CMS. Built with Next.js, React, Tailwind, and Framer Motion for component animations. Order processing done using Shopify.
              </p>
              <div className="mt-2 flex gap-2 hover:cursor-default">
                <Badge>Next.js</Badge>
                <Badge>React</Badge>
                <Badge>TailwindCSS</Badge>
                <Badge>Framer Motion</Badge>
                <Badge>Shopify</Badge>
                <Badge>SEO</Badge>
              </div>
            </div>
            <div>
              <Link href="https://hololabs.pages.dev" target="_blank">
                <span className="text-2xl font-bold underline underline-offset-4 text-purple-700 hover:text-purple-600">
                  HoloLabs, 2024
                </span>
              </Link>
              <p className="text-muted-foreground">
                Front-end web app to interact with various AI tools we created.
                Added support for API access and wrote documentation for
                commercial users. Designed the UI/UX and implemented this with
                React, Tailwind, and Next.Js.
              </p>
              <div className="mt-2 flex gap-2 hover:cursor-default">
                <Badge>JavaScript</Badge>
                <Badge>React</Badge>
                <Badge>TailwindCSS</Badge>
                <Badge>Next.js</Badge>
                <Badge>Cloudflare Pages</Badge>
                <Badge>Figma</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Holo AI, 2024</h3>
              <p className="text-muted-foreground">
                A mobile app designed for productivity and entertainment.
                Divided into multiple different tools, each with different
                approaches to AI video generation, including image to video
                generation templates, text to video generation, story-based
                video generation, and short-form content automation.
              </p>
              <div className="mt-2 flex gap-2 hover:cursor-default">
                <Badge>Java</Badge>
                <Badge>Spring</Badge>
                <Badge>MySQL/MyBatis</Badge>
                <Badge>Python</Badge>
                <Badge>Figma</Badge>
              </div>
            </div>
            <div>
              <Link href="https://github.com/mding022/aeapi" target="_blank">
                <span className="text-2xl font-bold underline underline-offset-4 text-purple-700 hover:text-purple-600">
                  After Effects API, 2024
                </span>
              </Link>
              <p className="text-muted-foreground">
                Developed a REST API in Java Spring that programmatically
                processes images and videos, applying dynamic layering to After
                Effects project file templates. This system enables automated
                rendering of our preset AE animations.{" "}
              </p>
              <div className="mt-2 flex gap-2 hover:cursor-default">
                <Badge>Java</Badge>
                <Badge>Spring</Badge>
                <Badge>Python</Badge>
                <Badge>After Effects</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold">
                Stock Market Screener Project, 2021{" "}
              </h3>
              <p className="text-muted-foreground">
                Utilized market data APIs to screen for stocks that had
                favourable technical indicators.
              </p>
              <div className="mt-2 flex gap-2 hover:cursor-default">
                <Badge>JavaScript</Badge>
                <Badge>Html/Css</Badge>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="mb-10 md:mb-14 lg:mb-16">
          <h2 className="text-3xl font-extrabold tracking-tighter mb-4 hover:cursor-default transform transition-transform ease-in-out duration-300 hover:-translate-y-0.5">Contact</h2>
          <div className="grid gap-6">
            <div>
              <div>
                <div className="flex items-center">
                  <Mail size={18} />
                  <span className="ml-1 mr-2 font-extrabold">Email</span>
                  <span>mding022@uottawa.ca</span>
                </div>
                <div className="flex items-center">
                  <Linkedin size={18} />
                  <span className="ml-1 mr-2 font-extrabold">Linkedin</span>
                  <Link
                    href="https://www.linkedin.com/in/millerding/"
                    target="_blank"
                    className="underline"
                    prefetch={false}
                  >
                    linkedin.com/in/millerding/
                  </Link>
                </div>
                <div className="flex items-center">
                  <Github size={18} />
                  <span className="ml-1 mr-2 font-extrabold">GitHub</span>
                  <Link
                    href="https://github.com/mding022"
                    target="_blank"
                    className="underline"
                    prefetch={false}
                  >
                    github.com/mding022
                  </Link>
                </div>
              </div>
              <div className="mt-5">
                <Link href="/resume.pdf" target="_blank">
                  <button class="relative inline-block font-medium group py-1.5 px-2.5">
                    <span class="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-purple-800 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span class="absolute inset-0 w-full h-full bg-white border border-purple-900 group-hover:bg-indigo-50"></span>
                    <span class="relative text-purple-800 ">View Resume</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ScrollArrow() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.65698 9.17157L4.24276 7.75735L0.00012207 12L4.24276 16.2426L5.65698 14.8284L3.82858 13H10.0001V11H3.82851L5.65698 9.17157Z"
        fill="#D3D3D3"
      />
      <path
        d="M14.0001 11V13H20.1716L18.3432 14.8284L19.7574 16.2426L24.0001 12L19.7574 7.75735L18.3432 9.17157L20.1717 11H14.0001Z"
        fill="#D3D3D3"
      />
    </svg>
  );
}
