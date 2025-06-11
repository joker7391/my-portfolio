import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import { Github, Linkedin } from "lucide-react";
import daniel from "../assets/daniel.jpg";

const Home = () => {
  return (
    <section className="relative py-16 px-4 max-w-6xl mx-auto overflow-hidden min-h-screen">
      {/* Animated Background Blobs */}
      {/* <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-10 -right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div> */}

      {/* Floating Contact Button */}
      {/* <motion.a
        href="#contact"
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        whileHover={{ scale: 1.1 }}
      >
        Contact Me
      </motion.a> */}

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12">
        {/* Profile Image with Tilt */}
        <Tilt glareEnable={true} glareMaxOpacity={0} scale={1.05}>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-40 h-40 md:w-52 md:h-52 mb-6 md:mb-0 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg shrink-0"
          >
            <img
              src={daniel}
              alt="Daniel Jeffrey Aco"
              className="w-full h-full object-cover object-[50%_20%]"
            />
          </motion.div>
        </Tilt>

        {/* Text */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl font-bold mb-2 text-white">
            Hi, I'm Daniel Jeffrey Aco 👋
          </h1>

          <h2 className="text-xl text-blue-400 font-medium mb-4">
            <Typewriter
              words={[
                "Software Engineer.",
                "Frontend Developer.",
                "React Native Specialist.",
                "Pixel-perfect UI Builder.",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mb-4">
            I'm a passionate Software Engineer with over 5 years of experience
            building and scaling user-centric web and mobile applications. I
            specialize in crafting responsive interfaces using{" "}
            <span className="text-blue-400 font-medium">React</span>,{" "}
            <span className="text-blue-400 font-medium">React Native</span>, and
            modern technologies like{" "}
            <span className="text-blue-400 font-medium">TypeScript</span>,{" "}
            <span className="text-blue-400 font-medium">GraphQL</span>, and{" "}
            <span className="text-blue-400 font-medium">TailwindCSS</span>.
          </p>

          <p className="text-lg text-gray-300 max-w-2xl mb-4">
            My development philosophy centers around clean, maintainable code
            and creating intuitive user experiences. Whether I'm collaborating
            with designers, working with APIs, or solving UI challenges, I focus
            on delivering scalable, elegant solutions that drive results.
          </p>

          <p className="text-lg text-gray-300 max-w-2xl mb-6">
            I'm currently open to new opportunities where I can contribute to
            impactful products, grow with passionate teams, and build tools that
            matter. Let’s connect and create something amazing together.
          </p>

          {/* Download CV */}
          <a
            href="https://drive.google.com/file/d/1jnH80q3qcLD3vP-WmXBcw_WJjBsGBbDv/view?usp=sharing"
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition mb-4"
          >
            Download CV
          </a>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-6 mt-4">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
