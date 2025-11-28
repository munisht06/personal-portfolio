import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";

export default function Contact() {
  return (
    <section className="py-20 lg:py-32" id="contact">
      {/* Header */}
      <div className="text-center mb-14">
        <h3 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-100">
          Get In <span className="text-teal-500">Touch</span>
        </h3>
        <p className="text-md py-2 text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
          I&apos;m actively seeking SDE opportunities. Whether you have a question or just want to say hi, my inbox is always open!
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center px-5">

        {/* EMAIL CARD */}
        <a
          href="mailto:munishtanwar77@gmail.com"
          className="group w-full max-w-sm bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500 hover:shadow-teal-500/20 hover:-translate-y-2 transition-all duration-300 text-center cursor-pointer"
        >
          <div className="flex justify-center mb-6">
            <AiOutlineMail className="text-6xl text-gray-400 group-hover:text-teal-500 transition-colors duration-300" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-teal-500 transition-colors">
            Email
          </h3>
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            munishtanwar77@gmail.com
          </p>
        </a>

        {/* LINKEDIN CARD */}
        <a
          href="https://www.linkedin.com/in/munishtanwar/"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full max-w-sm bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500 hover:shadow-teal-500/20 hover:-translate-y-2 transition-all duration-300 text-center cursor-pointer"
        >
          <div className="flex justify-center mb-6">
            <AiFillLinkedin className="text-6xl text-gray-400 group-hover:text-teal-500 transition-colors duration-300" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-teal-500 transition-colors">
            LinkedIn
          </h3>
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            Connect with me
          </p>
        </a>

      </div>
    </section>
  );
}