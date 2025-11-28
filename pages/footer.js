import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-10">
      <div className="max-w-screen-xl mx-auto sm:flex sm:items-center sm:justify-between">
        
        {/* Copyright Text */}
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {currentYear}{" "}
          <a href="https://mtanwar.com/" className="hover:underline hover:text-teal-500 transition-colors">
            Munish Tanwar
          </a>
          . All Rights Reserved.
        </span>

        {/* Social Icons */}
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a
            href="https://github.com/munisht06"
            className="text-gray-500 hover:text-teal-500 dark:hover:text-teal-400 transition-colors text-2xl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <AiFillGithub />
          </a>
          
          <a
            href="https://www.linkedin.com/in/munishtanwar/"
            className="text-gray-500 hover:text-teal-500 dark:hover:text-teal-400 transition-colors text-2xl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin />
          </a>
        </div>
        
      </div>
    </footer>
  );
}