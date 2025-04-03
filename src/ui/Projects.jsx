import Skills from "./Skills";

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
  "Portfolio V1": imgBgCss,
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

function Projects({ project }) {
  const { link, name, img, desc, techStack, status, linkUrl } = project;

  return (
    <div className="flex flex-col gap-2">
      <div className={imgBgColor[name]}>
        <img className={imgSizes[name]} src={img} alt={name} />
      </div>

      <div className="text-center">
        <div className="mb-2 text-lg">{name}</div>
        <div className="mb-2 text-sm font-light md:min-h-[70px]">{desc}</div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1 text-left">
            <span className="bg-[#C6F6D5] px-1 text-xs font-semibold uppercase text-[#22543D] dark:bg-green-300/20 dark:text-green-300">
              Link
            </span>
            <a
              className="text-sm text-blue-500 hover:underline dark:text-[#f472b6]"
              href={linkUrl}
              target="_blank"
            >
              {link}
            </a>
          </div>
          <div className="flex items-center gap-1 text-left">
            <span className="bg-[#C6F6D5] px-1 text-xs font-semibold uppercase text-[#22543D] dark:bg-green-300/20 dark:text-green-300">
              Status
            </span>
            <span
              className={`text-sm ${status === "finished" ? "text-[#02a574]" : "text-[#c3423f]"}`}
            >
              {status === "finished" ? "Finished" : "In progress"}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {techStack.map((tech) => (
          <Skills skill={tech} key={tech} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
