import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import profilePic from "./../public/munish.jpg";

export default function Hero() {
  return (
    <section className="lg:py-10">
      <div className="lg:flex gap-10 items-center">

        {/* TEXT CONTENT */}
        <div className="text-center p-10 lg:text-left lg:w-3/5">

          {/* Eyebrow text */}
          <p className="text-sm uppercase tracking-widest text-teal-500 dark:text-teal-400 mb-3 font-semibold">
            MS in CS (Univ. of Florida) • AI & Geospatial Research
          </p>

          {/* Main Headline WITH GRADIENT TEXT */}
          <h2 className="text-4xl py-2 text-gray-800 font-bold dark:text-gray-200 md:text-5xl lg:text-6xl leading-tight">
            Building Scalable{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600 dark:from-teal-300 dark:to-teal-500">
              Distributed Systems
            </span>{" "}
            & Event-Driven Architectures
          </h2>

          {/* Sub-headline / Pitch */}
          <p className="text-lg py-4 leading-relaxed text-gray-700 dark:text-gray-300 md:text-xl max-w-2xl mx-auto lg:mx-0">
            Software Engineer at Publix with 2.5 years specializing in React, .NET, and Azure.
            I build high-availability solutions delivering{" "}
            <span className="font-bold text-teal-600 dark:text-teal-400">99.9% uptime</span> and{" "}
            <span className="font-bold text-teal-600 dark:text-teal-400">30% error reduction</span>.
          </p>

          {/* CTAs (Gradient Buttons) */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
            <a
              href="#Projects"
              className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white dark:text-gray-900 px-8 py-3 rounded-md font-medium transition-all text-center shadow-lg"
            >
              View My Work
            </a>

            <a
              href="/Munish_Tanwar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-teal-500 text-teal-500 dark:text-teal-400 px-8 py-3 rounded-md font-medium hover:bg-teal-50 dark:hover:bg-gray-800 transition-all text-center"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="text-5xl flex justify-center lg:justify-start gap-8 py-8 text-gray-600 dark:text-gray-400">
            <a
              href="https://github.com/munisht06"
              className="hover:text-teal-500 transition-colors transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <AiFillGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/munishtanwar/"
              className="hover:text-teal-500 transition-colors transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <AiFillLinkedin />
            </a>
          </div>
        </div>

        {/* IMAGE SECTION */}

        <div className="relative mx-auto lg:mx-0 w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] flex-shrink-0 mt-10 lg:mt-0">
          {/* Decorative Glow */}
          <div className="absolute inset-0 bg-teal-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-700 shadow-2xl">
            <Image
              src={profilePic}
              fill
              style={{ objectFit: 'cover' }}
              alt="Munish Tanwar - Software Engineer"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  );
}