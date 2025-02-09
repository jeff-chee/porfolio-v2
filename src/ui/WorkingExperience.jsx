import Skills from "./Skills";

function WorkingExperience({ work }) {
  const { company, duration, jobTitle, prevJobTitle, summary, techStack } =
    work;

  return (
    <div className="flex flex-col items-start gap-4 md:flex-row md:gap-8">
      <div className="min-w-[150px] text-sm">{duration}</div>

      <div className="flex flex-col items-start gap-2">
        <div>
          <div className="text-lg font-semibold leading-5">
            {jobTitle} - {company}
          </div>
          {prevJobTitle && <div className="text-slate-500">{prevJobTitle}</div>}
        </div>
        <div className="text-sm font-light">{summary}</div>

        <div className="flex items-center gap-2">
          {techStack.map((tech) => (
            <Skills skill={tech} key={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkingExperience;
