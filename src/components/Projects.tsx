import { motion } from 'framer-motion';
import { ExternalLink, Github, SquareTerminal } from 'lucide-react';

const projects = [
  {
    title: 'QuizMaster AI App',
    description: 'AI-powered quiz application using OpenTDB API. Features dynamic quizzes, score tracking, and a highly responsive UI.',
    tech: ['HTML', 'CSS', 'JavaScript', 'OpenTDB API'],
    live: 'https://quizmaster-ai-app.vercel.app/',
    github: '#',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=800&auto=format&fit=crop',
    status: 'completed'
  },
  {
    title: 'FitTrack Pro',
    description: 'Premium AI fitness tracking web app. Includes workout tracking, body metrics visualization, and AI-driven fitness advice.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    live: 'https://fitnesstracker-b1lz.onrender.com/#/login',
    github: '#',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop',
    status: 'completed'
  },
  {
    title: 'Project Nexus',
    description: 'More innovative projects under development. Preparing the next generation of scalable web applications.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
    live: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    status: 'coming_soon'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-12 flex items-center gap-4">
          <span className="text-neon-cyan">02.</span> Featured Projects
          <div className="h-[1px] bg-gray-800 flex-1"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-dark-card rounded-xl overflow-hidden border border-gray-800 hover:border-neon-cyan transition-colors duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-neon-cyan/20 mix-blend-overlay group-hover:opacity-0 transition-opacity z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
                {project.status === 'coming_soon' && (
                  <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20 backdrop-blur-sm">
                    <span className="font-mono text-neon-green border border-neon-green px-4 py-2 rounded shadow-neon-green">COMING SOON</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                  <SquareTerminal className="text-gray-500" size={20} />
                </div>
                <p className="text-gray-400 text-sm mb-6 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-neon-green bg-neon-green/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  {project.status === 'completed' && (
                    <>
                      <a href={project.github} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noreferrer">
                        <Github size={20} />
                      </a>
                      <a href={project.live} className="text-gray-400 hover:text-neon-cyan transition-colors" target="_blank" rel="noreferrer">
                        <ExternalLink size={20} />
                      </a>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
