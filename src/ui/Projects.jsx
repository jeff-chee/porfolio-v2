import Skills from "./Skills";

function Projects({ project }) {
  const { link, name, img, desc, techStack } = project;

  const imgBgCss =
    "max-h-[200px] min-h-[200px] w-full overflow-hidden rounded-md flex justify-center items-center";

  const imgBgColor = {
    "Sub Caponi": `${imgBgCss} bg-gradient-to-b from-[#e4134a] to-[#b7134a]`,
    "Web Order": `${imgBgCss} bg-orange-400`,
    "Monolith Nutrition": `${imgBgCss} bg-black`,
    MedicAlert: `${imgBgCss} bg-white`,
    "BNI Malaysia Event App": `${imgBgCss} bg-white`,
    "Bijak Web": `${imgBgCss} bg-[#A14ABA]`,
    Foxland: `${imgBgCss} bg-[#1a1f36]`,
    "Old Portfolio": imgBgCss,
  };

  const imgSizes = {
    "Sub Caponi": "max-w-[120px]",
    "Web Order": "max-w-[200px]",
    "Monolith Nutrition": "max-w-[200px]",
    MedicAlert: "max-w-[250px]",
    "BNI Malaysia Event App": "max-w-[150px]",
    "Bijak Web": "max-w-[200px]",
    Foxland: "max-w-[200px]",
    "Old Portfolio": "w-full h-full object-cover",
  };

  return (
    <a className="flex flex-col gap-2" href={link} target="_blank">
      <div className={imgBgColor[name]}>
        <img className={imgSizes[name]} src={img} alt="dummy" />
      </div>

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
