"use client"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useEffect, useState } from "react";

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
      <div className="flex flex-col min-h-[100dvh] bg-background text-foreground overflow-visible">
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
      <main className={`font-sans flex-1 w-full container px-2 sm:px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 mx-auto ${animate ? "animate-fade-in" : ""}`}>
        <section id="about" className="mb-12 md:mb-15 lg:mb-16">
          <h1 className="text-7xl font-extrabold tracking-tighter mb-1 leading-normal">
            Miller Ding
          </h1>
          <p className="mt-4 text-xl text-black font-medium font-mono">
            Computer science student in Toronto, Ontario. 2nd year undergraduate at the University of Ottawa.
          </p>
          <p className="mt-4 text-xl text-gray-500 font-medium font-mono">
            Currently working on a{" "}
            <span className="relative inline-block">
              <Link href="https://hololabs.tech" target="_blank" className="relative inline-block z-10 underline underline-offset-8 hover:text-stone-400">
                website frontend
              </Link>
            </span>
          </p>
        </section>
        <section id="education" className="mb-10 md:mb-14 lg:mb-16">
          <h2 className={`text-3xl font-bold tracking-tighter mb-4 `}>Education</h2>
          <div className="grid gap-6">
            <div>
              <h3 className="text-2xl font-bold">Honours B.Sc in Computer Science, Minor in Economics</h3>
              <p className="text-muted-foreground">University of Ottawa, 2023 - 2027</p>
              <p className="text-muted-foreground">CGPA: 9.3/10.0</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">High School Diploma</h3>
              <p className="text-muted-foreground">YCDSB High School, Ontario, 2019 - 2023</p>
              <p className="text-muted-foreground">Honour Roll, A+ average</p>
            </div>
          </div>
        </section>
        <section id="experience" className="mb-10 md:mb-14 lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Experience</h2>
          <div className="grid gap-6">
            <div>
              <h3 className="text-2xl font-bold">Software Engineering and Design Intern</h3>
              <p className="text-muted-foreground">Jinglemobi Technology Co., Summer 2024</p>
              <ul className="mt-2 list-disc pl-4 space-y-1 text-muted-foreground">
                <li>Led the design and implemention of mobile AI apps</li>
                <li>Successfully launched with regional support paying subscribers in 4 continents</li>
                <li>Developed backend infrastructure using Java Spring Boot, Python, and SQL</li>
                <li>Collaborated with front-end development teams to integrate various endpoints into our app</li>
                <li>Implemented an efficient queuing system to scale our servers for improved performance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Computer Assembly Technician</h3>
              <p className="text-muted-foreground">Green Top Tech Inc., Summer 2023</p>
              <ul className="mt-2 list-disc pl-4 space-y-1 text-muted-foreground">
                <li>Assembled refurbished desktop and server computers for businesses and consumers</li>
                <li>Installed and debugged operating systems, ensuring that all computers were plug and play for customers</li>
                <li>Provided exceptional technical support and troubleshooting services</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="projects" className="mb-10 md:mb-14 lg:mb-16 overflow-x-auto">
          <h2 className="text-3xl font-bold tracking-tighter mb-4 flex items-center">
            Projects
            <span className="ml-2 block lg:hidden">
              <ScrollArrow className="w-8 h-8" />
            </span>
          </h2>
          <div className="grid gap-6">
            <div>
              <Link href="https://hololabs.tech" target="_blank">
                <span className="text-2xl font-bold underline underline-offset-4 text-purple-700 hover:text-purple-600">HoloLabs, 2024</span>
              </Link>
              <p className="text-muted-foreground">
                Front-end web app to interact with various AI tools we created. Added support for API access and wrote documentation for commercial users. Designed the UI/UX and implemented this with React, Tailwind, and Next.Js.
              </p>
              <div className="mt-2 flex gap-2">
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
                A mobile app designed for productivity and
                entertainment. Divided into multiple different tools, each with different approaches to AI video generation,
                including image to video generation templates, text to video generation, story-based video generation, and
                short-form content automation.
              </p>
              <div className="mt-2 flex gap-2">
                <Badge>Java</Badge>
                <Badge>Spring</Badge>
                <Badge>MySQL/MyBatis</Badge>
                <Badge>Python</Badge>
                <Badge>Figma</Badge>
              </div>
            </div>
            <div>
              <Link href="https://github.com/mding022/aeapi" target="_blank">
                <span className="text-2xl font-bold underline underline-offset-4 text-purple-700 hover:text-purple-600">After Effects API, 2024</span>
              </Link>
              <p className="text-muted-foreground">
                Developed a REST API in Java Spring that programmatically processes images
                and videos, applying dynamic layering to After Effects project file templates. This system enables automated
                rendering of our preset AE animations. </p>
              <div className="mt-2 flex gap-2">
                <Badge>Java</Badge>
                <Badge>Spring</Badge>
                <Badge>Python</Badge>
                <Badge>After Effects</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Stock Market Screener Project, 2021 </h3>
              <p className="text-muted-foreground">
                Utilized market data APIs to screen for stocks that had favourable technical
                indicators.
              </p>
              <div className="mt-2 flex gap-2">
                <Badge>JavaScript</Badge>
                <Badge>Html/Css</Badge>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="mb-10 md:mb-14 lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Contact</h2>
          <div className="grid gap-6">
            <div>
              <p className="text-muted-foreground">My contact information and links:</p>
              <ul className="mt-2 list-disc pl-4 space-y-1 text-muted-foreground">
                <li>Email: mding022@uottawa.ca</li>
                <li>
                  LinkedIn:{" "}
                  <Link href="https://linkedin.com/in/millerding" target="_blank" className="underline" prefetch={false}>
                    linkedin.com/in/millerding
                  </Link>
                </li>
                <li>
                  GitHub:{" "}
                  <Link href="https://github.com/mding022" target="_blank" className="underline" prefetch={false}>
                    github.com/mding022
                  </Link>
                </li>
              </ul>
              <div className="mt-4">
                <Button variant="outlined" color="inherit" endIcon={<OpenInNewIcon />} href="/resume.pdf" target="_blank">
                  View Resume
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ScrollArrow() {
  return (<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.65698 9.17157L4.24276 7.75735L0.00012207 12L4.24276 16.2426L5.65698 14.8284L3.82858 13H10.0001V11H3.82851L5.65698 9.17157Z"
      fill="currentColor"
    />
    <path
      d="M14.0001 11V13H20.1716L18.3432 14.8284L19.7574 16.2426L24.0001 12L19.7574 7.75735L18.3432 9.17157L20.1717 11H14.0001Z"
      fill="currentColor"
    />
  </svg>);
}
