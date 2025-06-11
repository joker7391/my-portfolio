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
      description:
        "React Native app for ticket booking and user event management.",
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
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 border">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-600 hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
