// import web5 from "../public/My Project1.png";
// import web2 from "../public/My Project.png";
// import DCRock from "../public/DC Rock.png";
// import Spotify from "../public/Spotify.png";
// import Social from "../public/TwitterReddit.png";
// import Covid from "../public/Covid.png";
import Image from "next/image";
export default function Projects() {
  return (
    <>
      <div>
        <h3 className="text-3xl py-10 dark:text-white"> Projects</h3>
      </div>
      <div className="flex flex-wrap gap-10 justify-center max-w-1  relative ">
        <div className="max-w-sm min-w-sm min-h-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          {/* <div className="  p-10 my-10  dark:bg-white bg-gray-900 flex-1"> */}
          <Image
            src={"/My Project1.png"}
            className="rounded-t-lg object-cover h-40"
            width={500}
            height={100}
            alt="Project 1"
            responsive
          />
          {/* </div> */}
          <div className="flex flex-col items-center p-10">
            {/* <div className="flex flex-col justify-center"> */}
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
              {" "}
              Fantasy Finance
            </h3>
            <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
              Fantasy Finance is a web application that allows users to create
              fantasy stock portfolios and compete with their friends. The app
              uses real-time stock data from the IEX Cloud API. Fantasy Finance
              was created using React, Node.js, Express, MongoDB, and Firebase.
            </p>
            <div className=" flex mt-4 space-x-3 md:mt-6">
              <a
                href="https://github.com/Vishvak365/Fantasy-Finance-Backend"
                target={"_blank"}
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white dark:text-gray-900 bg-teal-500 rounded-lg hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-800"
              >
                Backend
              </a>
              <a
                href=" https://github.com/Vishvak365/Fantasy-Finance-Frontend"
                target={"_blank"}
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white dark:text-gray-900 bg-teal-500 rounded-lg hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-800"
              >
                Frontend
              </a>
              <a
                href="https://fantasyfinance.vishvak.com/"
                target={"_blank"}
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white dark:text-gray-900 bg-teal-500 rounded-lg hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-800"
              >
                Website
              </a>
            </div>
            {/* </div> */}
          </div>
        </div>

        <div className="max-w-sm min-w-sm min-h-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          {/* <div className="dark:bg-white bg-gray-900 flex-1"> */}
          <Image
            src={"/My Project.png"}
            className="rounded-t-lg object-cover h-40"
            width={500}
            height={100}
            responsive
            alt="Project 2"
          />
          {/* </div> */}
          <div className="flex flex-col items-center p-10">
            {/* <div className="flex flex-col justify-center"> */}
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
              {" "}
              Gator Sublease
            </h3>
            <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
              Gator Sublease is a web application that allows students at the
              University of Florida to find subleases for their apartments.
              Users can also post subleases for their apartments. Gator Sublease
              was created using React, Go, Gin, and MongoDB.
            </p>
            <div className=" flex mt-4 space-x-3 md:mt-6">
              <a
                href=" https://github.com/wurew34/Gator-SubleasingSESPR22"
                target={"_blank"}
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white dark:text-gray-900 bg-teal-500 rounded-lg hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-800"
              >
                Github
              </a>
              <a
                href="https://gatorsublease.mtanwar.com/"
                target={"_blank"}
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white dark:text-gray-900 bg-teal-500 rounded-lg hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-800"
              >
                Website
              </a>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="max-w-sm min-w-sm min-h-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          {/* <div className="dark:bg-white bg-gray-900 flex-1"> */}
          <Image
            src={"/DC Rock.png"}
            className="rounded-t-lg object-cover h-40"
            width={500}
            height={100}
            responsive
            alt="Project 3"
          />
          {/* </div> */}
          <div className="flex flex-col items-center p-10">
            {/* <div className="flex flex-col justify-center"> */}
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
              {" "}
              DC Rock Fitness
            </h3>
            <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
              DC Rock Fitness is a web application that allows users to create
              workout plans and track their progress. Users can also view
              workout plans created by other users. DC Rock Fitness was created
              using React, Node.js, Express, and MongoDB.
            </p>
            <div className=" flex mt-4 space-x-3 md:mt-6">
              <a
                href="https://gitlab.com/run-escape/dc-rock-fitness-app"
                target={"_blank"}
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white dark:text-gray-900 bg-teal-500 rounded-lg hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-800"
              >
                GitLab
              </a>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="max-w-sm min-w-sm min-h-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          {/* <div className="dark:bg-white bg-gray-900 flex-1"> */}
          <Image
            src={"/Spotify.png"}
            className="rounded-t-lg object-cover h-40"
            width={500}
            height={100}
            responsive
            alt="Project 4"
          />
          {/* </div> */}
          <div className="flex flex-col items-center p-10">
            {/* <div className="flex flex-col justify-center"> */}
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
              {" "}
              Spotify Song Recommender
            </h3>
            <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
              Spotify Song Recommender is a recommendation system that uses
              content-based filtering and similarity metrics to recommend songs
              to users. The recommender was created using Python and the Spotipy
              library.
            </p>
            <div className=" flex mt-4 space-x-3 md:mt-6">
              <a
                href="https://github.com/munisht06/Spotify-Song-Recommendation"
                target={"_blank"}
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white dark:text-gray-900 bg-teal-500 rounded-lg hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-800"
              >
                Github
              </a>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="max-w-sm min-w-sm min-h-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          {/* <div className="dark:bg-white bg-gray-900 flex-1"> */}
          <Image
            src={"/TwitterReddit.png"}
            className="rounded-t-lg object-cover h-40"
            width={500}
            height={100}
            alt="Project 5"
            responsive
          />
          {/* </div> */}
          <div className="flex flex-col items-center p-10">
            {/* <div className="flex flex-col justify-center"> */}
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
              {" "}
              Social Media Sentiment Analysis
            </h3>
            <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
              Social Media Sentiment Analysis allows users to search for a
              product and view its sentiment on twitter and reddit. The
              sentiment anslysis is implemented using deep learning and neural
              networks. The Twitter and Reddit API is used to gather the data.
            </p>
            <div className=" flex mt-4 space-x-3 md:mt-6">
              <a
                href="https://github.com/Vishvak365/NLP-Tweet-Analysis"
                target={"_blank"}
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white dark:text-gray-900 bg-teal-500 rounded-lg hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-800"
              >
                Github
              </a>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="max-w-sm min-w-sm min-h-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          {/* <div className="dark:bg-white bg-gray-900 flex-1"> */}
          <Image
            src={"/Covid.png"}
            className="rounded-t-lg object-cover h-40"
            width={500}
            height={100}
            responsive
            alt="Project 6"
          />
          {/* </div> */}
          <div className="flex flex-col items-center p-10">
            {/* <div className="flex flex-col justify-center"> */}
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
              {" "}
              Covid-19 Tracker Bot
            </h3>
            <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
              Covid-19 Tracker Bot allows users to look up latest stats about
              COVID-19 which includes confirmed cases, deaths, and number of
              recovered patients. The program can also provides stats for
              certain countries, states, and counties. The bot was created using
              Dialogflow and coronavirus-tracker API.
            </p>
            <div className=" flex mt-4 space-x-3 md:mt-6">
              <a
                href=" https://github.com/wurew34/Gator-SubleasingSESPR22"
                target={"_blank"}
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white dark:text-gray-900 bg-teal-500 rounded-lg hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-800"
              >
                Github
              </a>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

// </div>
// <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200">
//   Feel free to reach out to me at{" "}
//   <span className="text-teal-500">
//     {" "}
//     <b> munishtanwar77@gmail.com </b>
//   </span>
// </p>
// </div>
