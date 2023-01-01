import Head from "next/head";
import Navbar from "./navbar.js";
import Skills from "./skills.js";
import Hero from "./hero.js";
import Projects from "./projects.js";
import Contact from "./contact.js";
import Footer from "./footer.js";
import { BsFillMoonStarsFill } from "react-icons/bs";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Munish Tanwar</title>
        <meta
          name="description"
          content="I am Munish Tanwar, this is my website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Nfavicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 dark:bg-gray-900 lg:px-40">
        <section className="min-h-screen ">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-3xl font-burtons dark:text-white ">MT</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className=" cursor-pointer text-2xl"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r  from-teal-400 to-teal-500 hover:bg-gradient-to-l font-medium text-white dark:text-gray-900 px-4 py-2 rounded-md ml-8"
                  href="Munish_Tanwar_Resume.pdf"
                  target={"_blank"} rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="Projects">
          <Projects />
        </section>
        <section id="Contact">
          <Contact />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </div>
  );
}
