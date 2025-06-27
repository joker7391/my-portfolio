import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import daniel from "../assets/daniel.jpg";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGraphql,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiRedux,
} from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";

const Home = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  // useScroll hook with fallback safety
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const tech = [
    { name: "React", icon: <SiReact /> },
    { name: "React Native", icon: <FaMobileAlt /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "GraphQL", icon: <SiGraphql /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Redux", icon: <SiRedux /> },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 px-4 max-w-6xl mx-auto"
    >
      {/* Background Blobs */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 300]) }}
        className="absolute -bottom-10 -right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30"
      />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12">
        {/* Profile Image */}
        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-40 h-40 md:w-52 md:h-52 mb-6 md:mb-0 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg shrink-0"
        >
          <img
            src={daniel}
            alt="Daniel Jeffrey Aco"
            className="w-full h-full object-cover object-[50%_20%]"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left text-white"
        >
          <h1 className="text-4xl font-bold mb-2">
            Hi, I'm Daniel Jeffrey Aco 👋
          </h1>

          <motion.h2
            className="text-xl text-blue-400 font-medium mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typewriter
              words={[
                "Frontend Developer.",
                "React Native Specialist.",
                "TypeScript Enthusiast.",
                "UI/UX Focused Engineer.",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 max-w-2xl mb-4">
              I'm a passionate Software Engineer with over 5 years of experience
              building and scaling user-centric web and mobile applications. I
              specialize in crafting responsive interfaces using{" "}
              <span className="text-blue-400 font-medium">React</span>,{" "}
              <span className="text-blue-400 font-medium">React Native</span>,{" "}
              <span className="text-blue-400 font-medium">TypeScript</span>,{" "}
              <span className="text-blue-400 font-medium">GraphQL</span>, and{" "}
              <span className="text-blue-400 font-medium">TailwindCSS</span>.
            </p>

            <p className="text-lg text-gray-300 max-w-2xl mb-4">
              My development philosophy centers around clean, maintainable code
              and creating intuitive user experiences. Whether I'm collaborating
              with designers, working with APIs, or solving UI challenges, I
              focus on delivering scalable, elegant solutions that drive
              results.
            </p>

            <p className="text-lg text-gray-300 max-w-2xl mb-6">
              I'm currently open to new opportunities where I can contribute to
              impactful products, grow with passionate teams, and build tools
              that matter. Let’s connect and create something amazing together.
            </p>

            <motion.a
              href="/Daniel_Jeffrey_Aco.pdf"
              download
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Tech Stack Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Tech Stack
        </h2>
        <motion.div
          className="flex flex-wrap justify-center gap-6 text-white text-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {tech.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col items-center space-y-1 text-sm text-gray-300 hover:text-blue-400 transition"
            >
              {item.icon}
              <span className="text-xs mt-1">{item.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
