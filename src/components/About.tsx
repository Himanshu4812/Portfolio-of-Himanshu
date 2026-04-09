import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-lg overflow-hidden border border-gray-800 bg-dark-card shadow-2xl"
        >
          {/* Terminal Header */}
          <div className="bg-gray-900 px-4 py-3 flex items-center gap-2 border-b border-gray-800">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 font-mono text-xs text-gray-500">guest@portfolio:~</span>
          </div>
          
          {/* Terminal Body */}
          <div className="p-6 md:p-8 font-mono text-sm md:text-base">
            <p className="text-neon-green mb-2">$ git show --about</p>
            <p className="text-gray-300 leading-relaxed">
              I am a B.Tech CSE student passionate about building scalable MERN applications with clean UI, optimized backend architecture, and real-world deployment experience.
            </p>
            <br />
            <p className="text-gray-300 leading-relaxed">
              My focus is on writing clean, maintainable code and creating intuitive, futuristic user experiences. I thrive in environments where I can learn, adapt, and solve complex problems.
            </p>
            <p className="text-neon-green mt-4 animate-pulse">_</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
