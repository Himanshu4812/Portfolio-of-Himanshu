import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-40 bg-dark/80 backdrop-blur-md border-b border-neon-cyan/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 font-mono text-neon-cyan font-bold text-xl"
        >
          <Terminal size={24} />
          <span>MY.REPO</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex gap-8 font-mono text-sm"
        >
          {['About', 'Tech', 'Projects', 'Experience', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-gray-400 hover:text-neon-cyan transition-colors relative group"
            >
              <span className="text-neon-green mr-1">&gt;</span>{item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-cyan transition-all group-hover:w-full"></span>
            </a>
          ))}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
