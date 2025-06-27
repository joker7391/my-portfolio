import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Ticketnation.ph",
      description:
        "React Native app for ticket booking and user event management.",
      link: "https://www.ticketnation.ph",
      tags: ["React Native", "Mobile", "TailwindCSS"],
    },
    {
      title: "Gratchi's Getaway",
      description:
        "Next.js web app for online resort reservations and event management with GraphQL backend.",
      link: "https://www.gratchisgetaway.com",
      tags: ["Next.js", "GraphQL", "Booking", "TailwindCSS"],
    },
    {
      title: "Curamei",
      description:
        "Medical document management platform with modular React components.",
      link: "#",
      tags: ["React", "REST", "Redux", "Medical Tech"],
    },
    {
      title: "Pahiram.ph",
      description:
        "Rental management dashboard with inventory and user profiles.",
      link: "https://www.pahiram.ph",
      tags: ["React", "Node.js", "Dashboard", "MongoDB"],
    },
  ];

  return (
    <motion.section
      id="projects"
      className="max-w-6xl mx-auto py-16 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="block bg-[#1e293b] hover:border-blue-500 border border-gray-700 rounded-lg p-6 shadow-lg text-white hover:shadow-blue-600/30 transition"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <ExternalLink className="w-5 h-5 text-blue-400" />
            </div>

            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => {
                let bgClass = "bg-blue-600/20 text-blue-300";
                if (tag === "GraphQL") bgClass = "bg-pink-500/20 text-pink-300";
                if (tag === "Next.js") bgClass = "bg-gray-700 text-white";
                if (tag === "React Native")
                  bgClass = "bg-purple-600/20 text-purple-300";
                if (tag === "MongoDB")
                  bgClass = "bg-green-600/20 text-green-300";
                if (tag === "Node.js") bgClass = "bg-lime-600/20 text-lime-300";

                return (
                  <span
                    key={tagIndex}
                    className={`text-sm px-3 py-1 rounded-full ${bgClass}`}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
