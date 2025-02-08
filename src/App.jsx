import { DarkModeProvider } from "./context/DarkModeContext";
import Topbar from "./ui/Topbar";
import Footer from "./ui/Footer";
import Profile from "./ui/Profile";
import Typewriter from "./ui/Typewriter";

const workingExperience = [
  {
    duration: "Dec 2023 - Present",
    jobTitle: "Senior Front-End Developer",
    company: "Bye Bug IT Consulting",
    summary:
      "Build, style, and ship high-quality websites, and digital experiences for a diverse array of projects for clients including 4fingers, BNI Malaysia, MedicAlert and more. Working closely with Back-End developer in building seamless, dynamic user interfaces that enhance user experiences",
    techStack: ["JavaScript", "React", "Vue.js"],
  },
  {
    duration: "Sep - Nov 2023",
    jobTitle: "Front-End Developer",
    company: "UP Devlabs",
    summary:
      "Assisted in development on complex web applications using Vue.js, while mentoring junior developers in UI libraries and component-based architectures.",
    techStack: ["Vue.js"],
  },
  {
    duration: "Jun 2021 - Aug 2023",
    jobTitle: "Senior Front-End Developer",
    prevJobTitle: "Junior Front-End Developer",
    company: "GHERO",
    summary:
      "Progressed from Junior to Senior Front-End Developer, leading the front-end team in delivering optimized, high-performance web applications. Collaborated closely with designers, back-end developers and implemented performance improvements to enhance website speed and efficiency.",
    techStack: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
];

const projects = [
  {
    name: "Sub Caponi",
    desc: "A web application that enables users to make payments to earn points, upgrade their membership, and manage their referrals",
    link: "https://www.subcaponi.com",
    img: "/projects/subcaponi.png",
    techStack: ["React", "TanStack Query", "Ant Design", "Tailwind CSS"],
  },
  {
    name: "Web Order",
    desc: "A web-based food ordering platform inspired by FeedMe, allowing users to browse restaurant menus, add food and drinks to their cart, and place orders seamlessly.",
    link: "https://weborder.byebug.io/?uuid=fef180ea-1e23-405d-98c2-b513491b7814&t=aeb0c665-36c9-4b28-bc9a-3ea33caabe58",
    img: "/projects/web-order.png",
    techStack: ["React", "Redux", "Ant Design", "Tailwind CSS"],
  },
  {
    name: "Monolith Nutrition",
    desc: "An e-commerce website with a seamless user experience, allowing customers to register accounts, browse products, add items to their cart, and complete orders securely.",
    link: "https://www.monolithnutrition.com",
    img: "/projects/monolith-nutrition.png",
    techStack: ["React", "Redux", "Ant Design"],
  },
  {
    name: "MedicAlert",
    desc: "Collaborated with a Full-Stack Developer to build a responsive website that allows users to register, update medical information, and renew memberships",
    link: "https://www.medicalert.org.my",
    img: "/projects/medicalert.png",
    techStack: ["React", "Redux", "Bootstrap"],
  },
  {
    name: "BNI Malaysia Event App",
    desc: "An Event App that allows users to update their business profile, view and register to join events and conferences",
    link: "https://nc24.bnimalaysia.com",
    img: "/projects/bni.png",
    techStack: ["React", "Redux"],
  },
  {
    name: "Bijak Web",
    desc: "An in-house marketing company website that provide HR and POS Solutions.",
    link: "https://www.bijak.app",
    img: "/projects/bijak.png",
    techStack: ["React", "Tailwind CSS"],
  },
  {
    name: "Foxland",
    desc: "A fully functional online gaming platform featuring a variety of interactive games, secure payment integrations, and a seamless user experience.",
    link: "https://elephanttechsolutions.com",
    img: "/projects/foxland.png",
    techStack: ["Vue.js", "Pinia"],
  },
  {
    name: "Old Portfolio",
    desc: "An old portfolio site built with Bootstrap and jQuery",
    link: "https://superlative-creponne-4b3cf0.netlify.app",
    img: "/projects/old-portfolio.webp",
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
  },
];

function App() {
  return (
    <DarkModeProvider>
      <Topbar />

      <div className="mx-auto max-w-screen-md px-4">
        <Profile />

        <Typewriter />

        <div className="mb-8 flex flex-col items-start gap-4">
          <span className="border-b-4 border-neutral-500 pb-1 text-lg">
            About
          </span>

          <div className="font-light">
            {
              "Hi, I am a Front-End Developer with a strong background in building high-performance web applications, dashboards, and e-commerce platforms. With experience in React and Vue.js, I specialize in crafting seamless, scalable, and user-friendly interfaces."
            }
          </div>
        </div>

        <div className="mb-8 flex flex-col items-start gap-4">
          <span className="border-b-4 border-neutral-500 pb-1 text-lg">
            Experience
          </span>
          <div className="flex flex-col items-start gap-8">
            {workingExperience.map((work) => (
              <div
                className="flex flex-col items-start gap-4 md:flex-row md:gap-8"
                key={work.company}
              >
                <div className="min-w-[150px] text-sm">{work.duration}</div>

                <div className="flex flex-col items-start gap-2">
                  <div>
                    <div className="text-lg font-semibold leading-5">
                      {work.jobTitle} - {work.company}
                    </div>
                    {work.prevJobTitle && (
                      <div className="text-slate-500">{work.prevJobTitle}</div>
                    )}
                  </div>
                  <div className="text-sm font-light">{work.summary}</div>

                  <div className="flex items-center gap-2">
                    {work.techStack.map((tech) => (
                      <span
                        className="rounded-full bg-teal-600 px-3 py-1 text-sm text-teal-50 dark:bg-teal-400/10 dark:text-teal-300"
                        key={`${work.company}-${tech}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 flex flex-col items-start gap-4">
          <span className="border-b-4 border-neutral-500 pb-1 text-lg">
            Projects
          </span>

          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <a
                className="flex flex-col gap-2"
                href={project.link}
                target="_blank"
                key={project.name}
              >
                <img
                  className="max-h-[200px] min-h-[200px] w-full object-cover object-top"
                  src={project.img}
                  alt="dummy"
                />

                <div className="text-center">
                  <div className="mb-2 text-lg">{project.name}</div>
                  <div className="text-sm font-light">{project.desc}</div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      className="rounded-full bg-teal-600 px-3 py-1 text-sm text-teal-50 dark:bg-teal-400/10 dark:text-teal-300"
                      key={`${project.name}-${tech}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;
