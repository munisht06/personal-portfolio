import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import profilePic from "./../public/munish.jpg";

export default function Hero() {
  return (
    <>
      <div className="lg:flex gap-5 md:mt-40">
        <div className="text-center p-10 md:p-20">
          <h2 className="text-5xl py-2 text-gray-800 font-medium dark:text-gray-200 md:text-6xl">
            Hi I&apos;m{" "}
            <span className="text-5xl py-2 text-teal-500 font-medium dark:text-teal-400 md:text-6xl">
              Munish Tanwar
            </span>
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
            Software Engineer at Publix
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-gray-200 max-w-lg mx-auto">
            Software Engineer at Publix with 2.5 years building distributed systems and event-driven architectures.
            I specialize in React, TypeScript, Azure Functions, and .NET—delivering 30% deployment error reduction
            and 99.9% uptime in production. Currently seeking SDE opportunities.
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a
              href="https://github.com/munisht06"
              className="hover:text-teal-500"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/munishtanwar/"
              className="hover:text-teal-500"
            >
              <AiFillLinkedin />
            </a>
          </div>
        </div>

        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96">
          <Image src={profilePic} fill style={{ objectFit: 'cover' }} alt="Munish" />
        </div>
      </div>
    </>
  );
}
