import { TypeAnimation } from "react-type-animation";

function Typewriter() {
  return (
    <div className="mb-8 w-full rounded-md bg-amber-50 p-3 text-center text-lg font-light md:text-2xl dark:bg-neutral-700">
      {"Hello , I am a "}
      <TypeAnimation
        sequence={[
          500,
          "Web Developer.",
          1000,
          "Software Engineer.",
          1000,
          "Front-End Developer.",
        ]}
      ></TypeAnimation>
    </div>
  );
}

export default Typewriter;
