import Skills from "./Skills";

function Projects({ project }) {
  const { link, name, img, desc, techStack } = project;
  return (
    <a className="flex flex-col gap-2" href={link} target="_blank">
      <img
        className="max-h-[200px] min-h-[200px] w-full object-cover object-top"
        src={img}
        alt="dummy"
      />

      <div className="text-center">
        <div className="mb-2 text-lg">{name}</div>
        <div className="text-sm font-light">{desc}</div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {techStack.map((tech) => (
          <Skills skill={tech} key={tech} />
        ))}
      </div>
    </a>
  );
}

export default Projects;
