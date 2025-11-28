import Image from "next/image";
import code from "../public/code.png";
import { Icon } from "@iconify/react";

function Skills() {
  return (
    <>
      <div className=" py-5 md:py-10">
        <h3 className="text-3xl py-1 dark:text-white">Skills</h3>
      </div>
      <div className="p-4 relative overflow-hidden">
        <ui className="flex relative flex-wrap justify-center max-w-1">
          <li className="flex flex-col justify-center text-center align-middle m-4 dark:text-white hover:scale-110">
            <Icon icon="logos:javascript" inline="false" width="90px" height="90px" /> JavaScript
          </li>
          <li className="flex flex-col justify-center text-center align-middle m-4 dark:text-white hover:scale-110">
            <Icon icon="vscode-icons:file-type-typescript" inline="false" width="90px" height="90px" /> Typescript
          </li>
          

          <li className="flex flex-col justify-center text-center align-middle m-4 dark:text-white hover:scale-110">
            <Icon icon="logos:python" inline="false" width="90px" height="90px" /> Python
          </li>
          <li className="flex flex-col justify-center text-center align-middle m-4 dark:text-white hover:scale-110">
            <Icon icon="logos:java" inline="false" width="90px" height="90px" /> Java
          </li>
          <li className="flex flex-col justify-center text-center align-middle m-4 dark:text-white hover:scale-110">
            <Icon icon="logos:dotnet" inline="false" width="90px" height="90px" /> .NET
          </li>
          <li className="flex flex-col justify-center text-center align-middle m-4 dark:text-white hover:scale-110">
            <Icon icon="logos:go" inline="false" width="90px" height="90px" /> Go
          </li>
          <li className="flex flex-col justify-center text-center align-middle m-4 dark:text-white hover:scale-110">
            <Icon icon="vscode-icons:file-type-erlang" inline="false" width="90px" height="90px" /> Erlang
          </li>
          <li className="flex flex-col justify-center text-center  align-middle m-4 dark:text-white hover:scale-110">
            <Icon icon="vscode-icons:file-type-html" inline="false" width="90px" height="90px" /> HTML
          </li>
          <li className="flex flex-col justify-center text-center align-middle m-4 dark:text-white hover:scale-110">
            <Icon icon="vscode-icons:file-type-css" inline="false" width="90px" height="90px" /> CSS
          </li>
          <li className="flex flex-col justify-center text-center align-middle m-4 dark:text-white hover:scale-110">
            <Icon icon="logos:react" inline="false" width="90px" height="90px" /> React
          </li>
          <li className="flex flex-col justify-center text-center align-middle m-4 dark:text-white hover:scale-110">
            <Icon icon="logos:nodejs-icon" inline="false" width="90px" height="90px" /> Node.js
          </li>
          <li className="flex flex-col justify-center text-center align-middle m-4 dark:text-white hover:scale-110">
            <Icon icon="logos:tailwindcss-icon" inline="false" width="90px" height="90px" /> TailwindCSS
          </li>
          <li className="flex flex-col justify-center text-center align-middle m-4 dark:text-white hover:scale-110">
            <Icon icon="logos:mongodb-icon" inline="false" width="90px" height="90px" /> MongoDB
          </li>
          <li className="flex flex-col justify-center text-center align-middle m-4 dark:text-white hover:scale-110">
            <Icon icon="logos:mysql" inline="false" width="90px" height="90px" /> MySQL
          </li>
          <li className="flex flex-col justify-center text-center align-middle m-4 dark:text-white hover:scale-110">
            <Icon icon="logos:git-icon" inline="false" width="90px" height="90px" /> Git
          </li>
          <li className="flex flex-col justify-center text-center align-middle m-4 dark:text-white hover:scale-110">
            <Icon icon="logos:firebase" inline="false" width="90px" height="90px" /> Firebase
          </li>
          <li className="flex flex-col justify-center text-center align-middle m-4 dark:text-white hover:scale-110">
            <Icon icon="logos:tensorflow" inline="false" width="90px" height="90px" /> TensorFlow
          </li>
          <li className="flex flex-col justify-center text-center align-middle m-4 dark:text-white hover:scale-110">
            <Icon icon="logos:docker-icon" inline="false" width="90px" height="90px" /> Docker
          </li>
          <li className="flex flex-col justify-center text-center align-middle m-4 dark:text-white hover:scale-110">
            <Icon icon="logos:kubernetes" inline="false" width="90px" height="90px" /> Kubernetes
          </li>
          <li className="flex flex-col justify-center text-center align-middle m-4 dark:text-white hover:scale-110">
            <Icon icon="logos:terraform-icon" inline="false" width="90px" height="90px" /> Terraform
          </li>
          <li className="flex flex-col justify-center text-center align-middle m-4 dark:text-white hover:scale-110">
            <Icon icon="logos:microsoft-azure" inline="false" width="90px" height="90px" /> Azure
          </li>
          <li className="flex flex-col justify-center text-center align-middle m-4  dark:text-white hover:scale-110">
            <div className="bg-white rounded p-2">
           <Icon icon="logos:aws" inline="false" width="80px" height="80px" />
           </div> AWS
          </li>
          <li className="flex flex-col justify-center text-center align-middle m-4 dark:text-white hover:scale-110">
            <Icon icon="logos:postgresql" inline="false" width="90px" height="90px" /> PostgreSQL
          </li>
          <li className="flex flex-col justify-center text-center align-middle m-4 dark:text-white hover:scale-110">
            <Icon icon="simple-icons:scikitlearn" inline="false" width="90px" height="90px" color="#F7931E" /> Scikit-learn
          </li>
          <li className="flex flex-col justify-center text-center align-middle m-4 dark:text-white hover:scale-110">
            <Icon icon="simple-icons:pandas" inline="false" width="90px" height="90px" color="#150458" /> Pandas
          </li>
          <li className="flex flex-col justify-center text-center align-middle m-4 dark:text-white hover:scale-110">
            <Icon icon="logos:numpy" inline="false" width="90px" height="90px" /> NumPy
          </li>
        </ui>
      </div>
    </>
  );
}

export default Skills;
