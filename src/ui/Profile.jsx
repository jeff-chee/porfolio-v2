import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImg from "/jeff.jpg";

function Profile() {
  return (
    <div className="my-8 flex items-start justify-between">
      <div>
        <div className="text-4xl font-semibold tracking-wider">Jeff Chee</div>
        <div className="mb-2 font-light">Front-End Developer</div>
        <div className="flex items-center gap-4">
          <a
            className="opacity-70 hover:opacity-100"
            href="https://github.com/jeff-chee"
            target="_blank"
          >
            <FaGithub size={25} />
          </a>
          <a
            className="opacity-70 hover:opacity-100"
            href="https://www.linkedin.com/in/jeff-chee-7289a7143/"
            target="_blank"
          >
            <FaLinkedin size={25} />
          </a>
        </div>
      </div>

      <img
        className="h-[100px] w-[100px] rounded-full"
        src={profileImg}
        alt="Jeff Chee"
      />
    </div>
  );
}

export default Profile;
