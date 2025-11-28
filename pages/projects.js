import Image from "next/image";

// Import images
import CodeReview from "./../public/code-review.png";
import web5 from "./../public/project1.png";
import web2 from "./../public/project2.png";
import DCRock from "./../public/project3.png";
import Spotify from "./../public/project4.png";
import Social from "./../public/project5.png";
import Covid from "./../public/project6.png";

export default function Projects() {
  
  // 1. DATA: Engineering Projects
  const projectData = [
    {
      title: "Automated Code Review Agent",
      description: "AI-powered PR reviewer with enterprise observability. Processes 100+ daily reviews using Azure AI, OpenAI API, and GitHub Webhooks with distributed tracing via OpenTelemetry.",
      image: CodeReview,
      tags: ["Azure AI", "OpenAI", "GitHub Webhooks", "OpenTelemetry"],
      links: [
        { label: "GitHub", url: "https://github.com/munisht06/automated-code-review-agent" }
      ]
    },
    {
      title: "Fantasy Finance",
      description: "A competitive fantasy stock portfolio app using real-time stock data from IEX Cloud API. Users compete in leagues to verify trading strategies without financial risk.",
      image: web5,
      tags: ["React", "Node.js", "MongoDB", "Firebase", "IEX Cloud"],
      links: [
        { label: "Backend", url: "https://github.com/Vishvak365/Fantasy-Finance-Backend" },
        { label: "Frontend", url: "https://github.com/Vishvak365/Fantasy-Finance-Frontend" }
      ]
    },
    {
      title: "Gator Sublease",
      description: "A centralized marketplace for University of Florida students to post and find apartment subleases. Solved the fragmented housing search problem.",
      image: web2,
      tags: ["Go (Golang)", "Gin", "React", "MongoDB"],
      links: [
        { label: "GitHub", url: "https://github.com/wurew34/Gator-SubleasingSESPR22" }
      ]
    },
    {
      title: "DC Rock Fitness",
      description: "Workout tracking application allowing users to create custom splits, log progress, and share routines socially with other gym-goers.",
      image: DCRock,
      tags: ["MERN Stack", "Express", "Node.js", "JWT Auth"],
      links: [
        { label: "GitLab", url: "https://gitlab.com/run-escape/dc-rock-fitness-app" }
      ]
    },
    {
      title: "Spotify Song Recommender",
      description: "Recommendation engine using content-based filtering and cosine similarity metrics to suggest songs based on user listening history via the Spotipy library.",
      image: Spotify,
      tags: ["Python", "Pandas", "Scikit-Learn", "Spotipy API"],
      links: [
        { label: "GitHub", url: "https://github.com/munisht06/Spotify-Song-Recommendation" }
      ]
    },
    {
      title: "Social Media Sentiment",
      description: "NLP pipeline analyzing product sentiment on Twitter and Reddit. Uses deep learning neural networks to classify public opinion on specific topics.",
      image: Social,
      tags: ["NLP", "Deep Learning", "Twitter API", "Python"],
      links: [
        { label: "GitHub", url: "https://github.com/Vishvak365/NLP-Tweet-Analysis" }
      ]
    },
    {
      title: "Covid-19 Tracker Bot",
      description: "Dialogflow chatbot providing real-time stats on confirmed cases and recoveries by region. Integrated with global coronavirus-tracker APIs.",
      image: Covid,
      tags: ["Dialogflow", "REST APIs", "JavaScript"],
      links: [
        { label: "GitHub", url: "https://github.com/munisht06" } // Fixed link (was duplicate of Gator)
      ]
    }
  ];

  // 2. DATA: Research Papers
  const researchData = [
    {
      title: "Generative AI Model Analysis",
      description: "Comparative study of GANs and VAEs on MNIST dataset. Designed and trained models from scratch using TensorFlow. Achieved optimal performance with VAE using 4D latent space.",
      tags: ["Python", "TensorFlow", "GANs", "VAEs", "Computer Vision"],
      link: "/GAN_VAE_Analysis.pdf"
    },
    {
      title: "Environmental Impact on Vegetation",
      description: "Decision tree regression model analyzing relationships between NDVI, land temperature, and rainfall. Achieved R² of 0.64 identifying seasonal patterns in vegetation health.",
      tags: ["Python", "Decision Trees", "Geospatial Analysis", "Remote Sensing"],
      link: "/Vegetation_Analysis.pdf"
    }
  ];

  return (
    <section className="py-10 md:py-20" id="projects">
      
      {/* --- PROJECTS HEADER --- */}
      <div className="text-center mb-10">
        <h3 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-100">
          Featured <span className="text-teal-500">Projects</span>
        </h3>
        <p className="text-md py-2 text-gray-600 dark:text-gray-400">
          Building scalable solutions from cloud architecture to front-end UX.
        </p>
      </div>

      {/* --- PROJECTS GRID --- */}
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden">
            
            {/* Image Area */}
            <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-700">
              <Image
                src={project.image}
                fill
                style={{ objectFit: 'cover' }}
                alt={project.title}
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 text-xs font-medium bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300 rounded-md border border-teal-100 dark:border-teal-800">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links Footer */}
              <div className="flex gap-3 mt-auto">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white dark:text-gray-900 bg-teal-500 rounded-lg hover:bg-teal-600 transition-colors shadow-md hover:shadow-lg"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- RESEARCH HEADER --- */}
      <div className="text-center mt-24 mb-10">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
          Research <span className="text-teal-500">Publications</span>
        </h3>
        <p className="text-md py-2 text-gray-600 dark:text-gray-400">
          Academic research in Machine Learning and Geospatial Analysis.
        </p>
      </div>

      {/* --- RESEARCH GRID --- */}
      <div className="max-w-4xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-8">
        {researchData.map((paper, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {paper.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
              {paper.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {paper.tags.map((tag, i) => (
                <span key={i} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded border border-gray-200 dark:border-gray-600">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-medium text-teal-500 hover:text-teal-600 transition-colors"
            >
              Read Paper <span className="ml-1">→</span>
            </a>
          </div>
        ))}
      </div>

    </section>
  );
}