import Head from "next/head";
import Skills from "./skills.js";
import Hero from "./hero.js";
import Projects from "./projects.js";
import Contact from "./contact.js";
import Footer from "./footer.js";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "../contexts/ThemeContext";

export default function Home() {
  const { darkMode, setDarkMode } = useTheme();
  
  return (
    // FIX 1: Background colors moved HERE so they stretch 100% width
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
        
        <Head>
          <title>Munish Tanwar | Distributed Systems Engineer</title>
          <meta
            name="description"
            content="Software Engineer at Publix specializing in scalable distributed systems, React, .NET, and Azure."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* FIX 2: Main container handles width and centering, but NOT background color */}
        <main className="px-5 md:px-10 lg:px-20 max-w-screen-2xl mx-auto overflow-hidden text-gray-900 dark:text-white">
          
          <section className="min-h-screen flex flex-col">
            <nav className="py-10 mb-2 flex justify-between items-center z-50">
              <h1 className="text-2xl font-burtons cursor-pointer hover:text-teal-500 transition-colors">
                MT
              </h1>
              <ul className="flex items-center">
                <li>
                  <div 
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all cursor-pointer"
                  >
                    {darkMode ? (
                      <BsFillSunFill className="text-2xl text-yellow-400" />
                    ) : (
                      <BsFillMoonStarsFill className="text-2xl text-gray-600" />
                    )}
                  </div>
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 font-medium text-white dark:text-gray-900 px-5 py-2 rounded-lg ml-8 shadow-md transition-all"
                    href="/Munish_Tanwar_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            
            <div className="flex-grow flex items-center">
              <Hero />
            </div>
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
          
          <footer>
            <Footer />
          </footer>
        </main>
      </div>
    </div>
  );
}