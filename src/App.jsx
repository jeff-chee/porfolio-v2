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

      <div className="mx-auto max-w-screen-sm px-4">
        <Profile />

        <Typewriter />

        <Section>
          <SectionTitle title={"About"} />

          <div className="font-light">
            {
              "Hi, I am a Front-End Developer with a passion for with a passion for creating visually appealing and user-friendly websites. Seeking a challenging role to contribute my expertise in front-end development and collaborate with a talented team to deliver outstanding user experiences."
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
      </div>
    </DarkModeProvider>
  );
}

export default App;
