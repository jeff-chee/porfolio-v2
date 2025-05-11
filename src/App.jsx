import { Analytics } from "@vercel/analytics/react";

import { DarkModeProvider } from "./context/DarkModeContext";
import Topbar from "./ui/Topbar";
import Footer from "./ui/Footer";
import Profile from "./ui/Profile";
import Typewriter from "./ui/Typewriter";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import WorkingExperience from "./ui/WorkingExperience";
import Projects from "./ui/Projects";

import { workingExperience, projects } from "./constant";

function App() {
  return (
    <DarkModeProvider>
      <Topbar />

      <div className="mx-auto max-w-screen-md px-4">
        <Profile />

        <Typewriter />

        <Section>
          <SectionTitle title={"About"} />

          <div className="font-light">
            {
              "Hi, I'm a web developer with a passion for front end development and design. As a software engineer, I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for design to create a beautiful product. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences."
            }
          </div>
        </Section>

        <Section>
          <SectionTitle title={"Experience"} />

          <div className="flex flex-col items-start gap-8">
            {workingExperience.map((work) => (
              <WorkingExperience work={work} key={work.company} />
            ))}
          </div>
        </Section>

        <Section>
          <SectionTitle title={"Projects"} />

          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <Projects project={project} key={project.name} />
            ))}
          </div>
        </Section>

        <Footer />

        <Analytics />
      </div>
    </DarkModeProvider>
  );
}

export default App;
