import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="max-w-3xl mx-auto py-16 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-bold mb-6 text-white"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Who I Am
      </motion.h2>

      <motion.p
        className="text-gray-300 text-lg mb-6 leading-relaxed"
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        I'm <span className="text-white font-semibold">Daniel Jeffrey Aco</span>{" "}
        — curious, focused, and always up for a challenge.
      </motion.p>

      <motion.p
        className="text-gray-300 text-lg mb-6 leading-relaxed"
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Whether it’s strategizing a chess match, grinding ranked games with
        friends, or exploring new creative ideas, I’ve always been drawn to
        systems that require both logic and intuition. I find joy in mastering
        mechanics, optimizing outcomes, and staying calm under pressure —
        whether on the board, behind a controller, or in real life.
      </motion.p>

      <motion.p
        className="text-gray-300 text-lg mb-6 leading-relaxed"
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        These hobbies have taught me more than just quick thinking and
        adaptability — they’ve shaped how I solve problems, how I approach
        growth, and how I connect with people. I value structure, but I’m always
        looking for better patterns. I love friendly competition, but I’m also
        all about collaboration.
      </motion.p>

      <motion.p
        className="text-gray-300 text-lg mb-10 leading-relaxed"
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        When I’m not pushing pixels or writing logic, you’ll probably find me
        thinking three moves ahead, tinkering with something new, or sharing
        laughs with the people I care about. Let’s build something great — not
        just with code, but with purpose.
      </motion.p>
    </motion.section>
  );
};

export default About;
