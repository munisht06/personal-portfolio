import { Icon } from "@iconify/react";

export default function Contact() {
  return (
    <>
      <div className="py-10 md:mt-20">
        <h3 className="text-3xl dark:text-white"> Contact</h3>
        <div className=" flex flex-wrap gap-10 justify-center">
          <div className="bg-white text-center w-72 m-5 lg:m-20 flex justify-center flex-col box-shadow p-20 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <i className="flex text-4xl mb-2 justify-center hover:-translate-y-1">
              <Icon
                icon="mdi:envelope"
                inline={true}
                width="80"
                height="80"
                color="#3b82f6"
              />
            </i>
            <h3 className=" text-blue-10 mb-2 text-3xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
              Email
            </h3>
            <p className="flex justify-center font-normal text-center text-gray-700 dark:text-gray-400">
              munishtanwar77@gmail.com
            </p>
          </div>
          <div className="bg-white w-72 m-5 lg:m-20 flex justify-center flex-col box-shadow p-20 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <i className="flex text-4xl mb-2 justify-center hover:-translate-y-1">
              <Icon
                icon="mdi:linkedin"
                inline={true}
                width="80"
                height="80"
                color="#3b82f6"
              />
            </i>
            <h3 className="mb-2 text-3xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
              Linkedin
            </h3>
            <p className=" font-normal text-center text-blue-700 dark:text-blue-400 underline">
              <a
                href="https://www.linkedin.com/in/munishtanwar/"
                target={"_blank"}  rel="noopener noreferrer"
              >
                munishtanwar
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
