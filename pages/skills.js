import { Icon } from "@iconify/react";

export default function Skills() {
  // Data structure for easy maintenance
  const skillCategories = [
    {
      title: "Backend & Databases",
      skills: [
        { name: ".NET Core", icon: "logos:dotnet" },
        { name: "C#", icon: "logos:c-sharp" },
        { name: "Java", icon: "logos:java" },
        { name: "Python", icon: "logos:python" },
        { name: "Node.js", icon: "logos:nodejs-icon" },
        { name: "Go", icon: "devicon:go" },
        { name: "Azure SQL", icon: "devicon:azuresqldatabase" }, // Using Azure icon as generic Azure SQL
        { name: "Cosmos DB", icon: "devicon:cosmosdb" },
        { name: "PostgreSQL", icon: "logos:postgresql" },
        { name: "MongoDB", icon: "logos:mongodb-icon" },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "Azure", icon: "logos:microsoft-azure" },

        { name: "AWS", icon: "logos:aws" },
        { name: "Docker", icon: "logos:docker-icon" },
        { name: "Kubernetes", icon: "logos:kubernetes" },
        { name: "Terraform", icon: "logos:terraform-icon" },
        { name: "Azure DevOps", icon: "devicon:azuredevops" },

        { name: "GitHub Actions", icon: "logos:github-actions" },
      ],
    },
    {
      title: "Frontend & Mobile",
      skills: [
        { name: "React", icon: "logos:react" },
        { name: "React Native", icon: "tabler:brand-react-native", color: "#61DAFB" }, // Specific React Native icon
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "JavaScript", icon: "logos:javascript" },
        { name: "Next.js", icon: "logos:nextjs-icon" },
        { name: "Figma", icon: "logos:figma" },
        { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
        { name: "HTML5", icon: "vscode-icons:file-type-html" },
      ],
    },
    {
      title: "AI & Data Science",
      skills: [
        { name: "TensorFlow", icon: "logos:tensorflow" },
        { name: "Scikit-Learn", icon: "simple-icons:scikitlearn", color: "#F7931E" },
        { name: "Pandas", icon: "simple-icons:pandas", color: "#150458" },
        { name: "NumPy", icon: "logos:numpy" },
      ],
    },
  ];

  return (
    <section className="py-10 md:py-20" id="skills">
      {/* Section Header */}
      <div className="text-center mb-10 md:mb-16">
        <h3 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-100">
          Technical <span className="text-teal-500">Skills</span>
        </h3>
        <p className="text-md py-2 text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
          A full-stack toolbelt with a focus on cloud-native architecture and high-performance systems.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto px-5">
        {skillCategories.map((category, index) => (
          <div key={index} className="mb-12">
            <h4 className="text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 border-l-4 border-teal-500 pl-4">
              {category.title}
            </h4>

            <div className="flex flex-wrap gap-6">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="group flex flex-col items-center justify-center p-4 w-28 h-28 md:w-32 md:h-32 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  <div className="text-4xl md:text-5xl mb-3 grayscale group-hover:grayscale-0 transition-all duration-300">
                    <Icon
                      icon={skill.icon}
                      color={skill.color || undefined}
                    />
                  </div>
                  <span className="text-sm font-medium text-center text-gray-600 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}