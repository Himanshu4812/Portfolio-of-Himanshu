import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Github, Linkedin, Mail, Download, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none mask-image-b"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-green/30 bg-neon-green/10 text-neon-green font-mono text-xs mb-6 shadow-neon-green">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
            Available for Internship
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-gray-400">Hello, I'm</span> <br />
            <span className="text-white text-glow-cyan">[Himanshu Kumar]</span>
          </h1>
          
          <div className="text-2xl md:text-4xl font-mono text-neon-cyan h-12 mb-6">
            <span className="text-neon-green">$</span>{' '}
            <Typewriter
              words={['Full Stack Developer', 'MERN Stack Specialist', 'Building futuristic web experiences.']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          
          <p className="text-gray-400 max-w-2xl text-lg mb-10 font-space">
            Building scalable web apps with futuristic UI and powerful backend systems. Seeking internships and placement opportunities in Full Stack Development.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#projects" className="group relative px-6 py-3 font-mono font-bold text-black bg-neon-cyan rounded hover:shadow-neon-cyan-hover transition-all flex items-center gap-2 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">View Projects <ChevronRight size={18} /></span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
            </a>
            
            <a href="https://drive.google.com/file/d/1I53jSzmZ1lNuv1B1XpLinA9mZBiXh7cI/view?usp=sharing" className="group px-6 py-3 font-mono font-bold text-neon-green border border-neon-green rounded hover:bg-neon-green/10 hover:shadow-neon-green transition-all flex items-center gap-2">
              <Download size={18} /> Download Resume
            </a>
          </div>
          
          <div className="flex gap-6">
            {[
              { icon: <Github />, href: "https://github.com/Himanshu4812" },
              { icon: <Linkedin />, href: "https://www.linkedin.com/in/himanshu4812/" },
              { icon: <Mail />, href: "mailto:himanshu91090@gmail.com" }
            ].map((social, idx) => (
              <a 
                key={idx} 
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-neon-cyan hover:shadow-neon-cyan transition-all p-2 border border-gray-800 rounded-full hover:border-neon-cyan"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
