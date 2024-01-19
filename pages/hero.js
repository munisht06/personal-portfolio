import { AiFillGithub, AiFillLinkedin, AiFillDev } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import profilePic from "./../public/munish.jpg";

export default function Hero() {
  return (
    <>
      {/* // was 40 margine top */}
      <div className="lg:flex gap-5 md:mt-40">
        <div className="text-center p-10 md:p-20">
          <h2 className="text-5xl py-2 text-gray-800 font-medium dark:text-gray-200 md:text-6xl">
            {" "}
            Hi I&apos;m{" "}
            <span className="text-5xl py-2 text-teal-500 font-medium dark:text-teal-400 md:text-6xl">
              Munish Tanwar
            </span>
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl dark:text-white ">
            Graduate CS Student and Developer
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl  dark:text-gray-200 max-w-lg mx-auto">
            I&apos;m a recent Computer Science graduate from the University of
            Florida, skilled in full-stack development. Passionate about
            creating scalable, user-friendly products. Actively seeking
            full-time Software Engineer opportunities
            {/* I am a graduate student at the University of Texas at Dallas
            pursuing a Master&apos;s in Computer Science. I am a full-stack
            developer with a passion for building products that are scalable and
            user-friendly.

            I am a recent Graduate Computer Science student from the University of
            Florida. I am passionate about building things that live on the
            internet, whether that be websites, applications, or anything in
            between. I am currently looking for full-time opportunities as
            a Software Engineer.

            I am a recent graduate in Computer Science from the University of Florida, specializing in full-stack development. My enthusiasm lies in crafting scalable and user-friendly products that seamlessly blend innovation with functionality. Currently on the lookout for full-time opportunities as a Software Engineer, I bring a fresh perspective and a strong foundation in computer science to contribute to impactful projects */}
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

        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80  overflow-hidden md:h-96 md:w-96">
          <Image src={profilePic} objectFit="cover" fill alt="Munish" />
        </div>
      </div>
    </>
  );
}
