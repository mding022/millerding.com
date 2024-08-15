import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <main className="flex-1 container px-4 md:px-6 py-12 md:py-16 lg:py-20">
        <section id="about" className="mb-10 md:mb-14 lg:mb-16">
          <h1 className="text-5xl font-bold tracking-tighter">Miller Ding</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Computer science student in Toronto, Ontario. Currently pursuing a <br />
            bachelor&apos;s degree from the University of Ottawa
          </p>
        </section>
        <section id="education" className="mb-10 md:mb-14 lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Education</h2>
          <div className="grid gap-6">
            <div>
              <h3 className="text-2xl font-bold">Honours Bachelor of Science in Computer Science, Minor in Economics</h3>
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
        <section id="projects" className="mb-10 md:mb-14 lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Projects</h2>
          <div className="grid gap-6">
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
              </div>
            </div>
            <div>
            <a href="https://github.com/mding022/aeapi" className="text-2xl font-bold">
              <h3>After Effects API, 2024</h3>
            </a>
              <p className="text-muted-foreground">
              Developed a REST API in Java Spring that programmatically processes images
and videos, applying dynamic layering to After Effects project file templates. This system enables automated
rendering of our preset AE animations. </p>
              <div className="mt-2 flex gap-2">
                <Badge>Java</Badge>
                <Badge>Spring</Badge>
                <Badge>Python</Badge>
                <Badge>Shell</Badge>
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
        <section id="skills" className="mb-10 md:mb-14 lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="col-span-2 sm:col-span-3 md:col-span-4">
              <h3 className="text-2xl font-bold mb-2">Languages and Frameworks</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <div>Java</div>
                <div>Python</div>
                <div>Spring Boot</div>
                <div>HTML</div>
                <div>JavaScript</div>
                <div>MySQL</div>
                <div>MyBatis</div>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-3 md:col-span-4">
              <h3 className="text-2xl font-bold mb-2">Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <div>Git</div>
                <div>GitLab</div>
                <div>Postman</div>
                <div>Maven</div>
                <div>DBeaver</div>
                <div>Adobe After Effects</div>
                <div>Adobe Photoshop</div>
                <div>Adobe Illustrator</div>
                <div>Adobe XD</div>
                <div>Figma</div>
                <div>Linux</div>
                <div>FFmpeg</div>
                <div>Cloud Infrastructure Deployment</div>
                <div>Elastic Compute Service (ECS)</div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="mb-10 md:mb-14 lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Contact</h2>
          <div className="grid gap-6">
            <div>
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              <p className="text-muted-foreground">Feel free to reach out to me at the following:</p>
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
                <Button
                  as="a"
                  target="_blank"
                  href="https://drive.google.com/file/d/18hyVdAqEOmCaAM39aeFVzDW1PpFVW3hr/view?usp=sharing"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  View Resume
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}