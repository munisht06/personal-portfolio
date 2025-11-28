import web5 from "./../public/project1.png";
import web2 from "./../public/project2.png";
import DCRock from "./../public/project3.png";
import Spotify from "./../public/project4.png";
import Social from "./../public/project5.png";
import Covid from "./../public/project6.png";
import CodeReview from "./../public/code-review.png";
import Image from "next/image";
export default function Projects() {
  return (
    <>
      <div>
        <h3 className="text-3xl py-10 dark:text-white"> Projects</h3>
      </div>
      <div className="flex flex-wrap gap-10 justify-center max-w-1  relative ">
        <div className="max-w-sm min-w-sm min-h-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="relative w-full h-40">
            <Image
              src={CodeReview}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-t-lg"
              sizes="(max-width: 768px) 100vw, 384px"
              alt="Code Review Agent Project"
            />
          </div>
          <div className="flex flex-col items-center p-10">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
              Automated Code Review Agent
            </h3>
            <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
              AI-powered PR reviewer with enterprise observability and event-driven architecture.
              Processes 100+ daily reviews using Azure AI, OpenAI API, and GitHub Webhooks with
              distributed tracing via OpenTelemetry.
            </p>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <a
                href="https://github.com/munisht06/automated-code-review-agent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white dark:text-gray-900 bg-teal-500 rounded-lg hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300"
              >
                Github
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-sm min-w-sm min-h-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="relative w-full h-40">
            <Image
              src={web5}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-t-lg"
              sizes="(max-width: 768px) 100vw, 384px"
              alt="Fantasy Finance Project"
            />
          </div>
          <div className="flex flex-col items-center p-10">
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
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white dark:text-gray-900 bg-teal-500 rounded-lg hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-800"
              >
                Backend
              </a>
              <a
                href=" https://github.com/Vishvak365/Fantasy-Finance-Frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white dark:text-gray-900 bg-teal-500 rounded-lg hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-800"
              >
                Frontend
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-sm min-w-sm min-h-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="relative w-full h-40">
            <Image
              src={web2}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-t-lg"
              sizes="(max-width: 768px) 100vw, 384px"
              alt="Gator Sublease Project"
            />
          </div>
          <div className="flex flex-col items-center p-10">
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
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white dark:text-gray-900 bg-teal-500 rounded-lg hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-800"
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm min-w-sm min-h-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="relative w-full h-40">
            <Image
              src={DCRock}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-t-lg"
              sizes="(max-width: 768px) 100vw, 384px"
              alt="DC Rock Fitness Project"
            />
          </div>
          <div className="flex flex-col items-center p-10">
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
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white dark:text-gray-900 bg-teal-500 rounded-lg hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-800"
              >
                GitLab
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm min-w-sm min-h-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="relative w-full h-40">
            <Image
              src={Spotify}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-t-lg"
              sizes="(max-width: 768px) 100vw, 384px"
              alt="Spotify Song Recommender Project"
            />
          </div>
          <div className="flex flex-col items-center p-10">
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
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white dark:text-gray-900 bg-teal-500 rounded-lg hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-800"
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm min-w-sm min-h-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="relative w-full h-40">
            <Image
              src={Social}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-t-lg"
              sizes="(max-width: 768px) 100vw, 384px"
              alt="Social Media Sentiment Analysis Project"
            />
          </div>
          <div className="flex flex-col items-center p-10">
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
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white dark:text-gray-900 bg-teal-500 rounded-lg hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-800"
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm min-w-sm min-h-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="relative w-full h-40">
            <Image
              src={Covid}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-t-lg"
              sizes="(max-width: 768px) 100vw, 384px"
              alt="Covid-19 Tracker Bot Project"
            />
          </div>
          <div className="flex flex-col items-center p-10">
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
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white dark:text-gray-900 bg-teal-500 rounded-lg hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-800"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Research Publications Section */}
      <div className="py-10 md:py-20">
        <h3 className="text-3xl dark:text-white">Research Publications</h3>
        <p className="text-md py-3 text-gray-700 dark:text-gray-400">
          Academic research in machine learning and data science from graduate studies at University of Florida
        </p>
      </div>

      <div className="flex flex-wrap gap-10 justify-center max-w-1 relative">
        <div className="max-w-sm min-w-sm min-h-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center p-10">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
              Generative AI Model Analysis
            </h3>
            <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
              Comparative study of GANs and VAEs on MNIST dataset. Designed and trained models from
              scratch using TensorFlow, implementing batch normalization and custom loss functions.
              Achieved optimal performance with VAE using 4D latent space and regularization.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-3">
              <span className="px-2 py-1 text-xs bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded">Python</span>
              <span className="px-2 py-1 text-xs bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded">TensorFlow</span>
              <span className="px-2 py-1 text-xs bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded">GANs</span>
              <span className="px-2 py-1 text-xs bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded">VAEs</span>
            </div>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <a
                href="/GAN_VAE_Analysis.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white dark:text-gray-900 bg-teal-500 rounded-lg hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300"
              >
                Read Paper
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-sm min-w-sm min-h-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center p-10">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
              Environmental Impact on Vegetation
            </h3>
            <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
              Decision tree regression model analyzing relationships between NDVI, land temperature,
              and rainfall using global geospatial data. Achieved R² of 0.64 and identified seasonal
              patterns in environmental factors affecting vegetation health.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-3">
              <span className="px-2 py-1 text-xs bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded">Python</span>
              <span className="px-2 py-1 text-xs bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded">Decision Trees</span>
              <span className="px-2 py-1 text-xs bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded">Geospatial Analysis</span>
              <span className="px-2 py-1 text-xs bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded">Remote Sensing</span>
            </div>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <a
                href="/Vegetation_Analysis.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white dark:text-gray-900 bg-teal-500 rounded-lg hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300"
              >
                Read Paper
              </a>
            </div>
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
