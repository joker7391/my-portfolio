import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Ticketnation.ph",
      description:
        "React Native app for ticket booking and user event management.",
      link: "https://www.ticketnation.ph",
    },
    {
      title: "Gratchi's Getaway",
      description: "Online reservation system for nature resort and events.",
      link: "https://www.gratchisgetaway.com",
    },
    {
      title: "Curamei",
      description:
        "Medical document management platform with modular React components.",
      link: "#",
    },
    {
      title: "Pahiram.ph",
      description:
        "Rental management dashboard with inventory and user profiles.",
      link: "https://www.pahiram.ph",
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
            <p className="text-gray-300">{project.description}</p>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
