import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-12 flex items-center gap-4">
          <span className="text-neon-cyan">03.</span> Experience
          <div className="h-[1px] bg-gray-800 flex-1"></div>
        </h2>

        <div className="relative border-l border-gray-800 ml-3 md:ml-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-10 ml-8 relative"
          >
            {/* Glowing Dot */}
            <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-neon-green shadow-neon-green"></span>
            
            <div className="bg-dark-card p-6 rounded-lg border border-gray-800 hover:border-neon-green transition-colors group">
              <h3 className="text-xl font-bold text-white mb-1">Open Source Contributor</h3>
              <h4 className="text-neon-cyan font-mono text-sm mb-4">Code Social / Elite Coders</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-neon-green mt-1">▹</span>
                  Contributed 7+ merged pull requests across multiple projects, improving frontend performance and backend
                  reliability
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-green mt-1">▹</span>
                  Enhanced UI responsiveness and accessibility, improving user experience and consistency.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-green mt-1">▹</span>
                  Resolved TypeScript and build issues, improving development stability and reducing errors
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-green mt-1">▹</span>
                  Collaborated via code reviews and issue tracking to ensure maintainable, production-ready code
                </li>
              </ul>
            </div>
            <br></br>
            <div className="bg-dark-card p-6 rounded-lg border border-gray-800 hover:border-neon-green transition-colors group">
              <h3 className="text-xl font-bold text-white mb-1">Full Stack Developer Intern</h3>
              <h4 className="text-neon-cyan font-mono text-sm mb-4">Unified Mentor Pvt Ltd</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-neon-green mt-1">▹</span>
                  Developed full-stack features using React, Node.js, and Express, improving application usability.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-green mt-1">▹</span>
                  Designed and integrated RESTful APIs following API-first architecture principles and third-party services,
                  streamlining backend data flow
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-green mt-1">▹</span>
                  Integrated backend with MongoDB for efficient data storage and retrieval
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-green mt-1">▹</span>
                  Built scalable backend modules and gained experience in production-like environments
                </li>
              </ul>
            </div>
            <br></br>
            <div className="bg-dark-card p-6 rounded-lg border border-gray-800 hover:border-neon-green transition-colors group">
              <h3 className="text-xl font-bold text-white mb-1">Frontend Developer Intern</h3>
              <h4 className="text-neon-cyan font-mono text-sm mb-4">ApexPlanet Software Pvt Ltd</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-neon-green mt-1">▹</span>
                  Built Math Quiz App using OpenTDB API.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-green mt-1">▹</span>
                  Developed frontend UI and integrated RESTful APIs.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-green mt-1">▹</span>
                  Collaborated with the team to ensure responsive and clean design.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
