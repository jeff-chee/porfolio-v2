import { useDarkMode } from "../context/DarkModeContext";
import logo from "/topbar-logo.png";
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";
import { motion } from "motion/react";

function Topbar() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="sticky top-0 z-10 bg-amber-50 dark:bg-neutral-700">
      <div className="mx-auto flex max-w-screen-md items-center justify-between px-4 py-3">
        <div className="group flex items-center gap-2">
          <img
            className="max-w-8 transition-all group-hover:rotate-6"
            src={logo}
            alt="logo"
          />
          <div className="text-xl">Jeff Chee</div>
        </div>

        <motion.div
          className="cursor-pointer rounded-lg bg-violet-500 p-3 text-white hover:bg-violet-600 dark:bg-amber-100 dark:text-black dark:hover:bg-amber-200"
          onClick={toggleDarkMode}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div layout transition={{ type: "spring" }}>
            {isDarkMode ? (
              <AiOutlineMoon size={20} />
            ) : (
              <AiOutlineSun size={20} />
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Topbar;
