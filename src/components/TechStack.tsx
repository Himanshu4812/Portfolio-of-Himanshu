import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Worm, Globe, Leaf, Server, Atom, FileJson, GitBranch, MonitorSmartphone, Palette, Cpu } from 'lucide-react';

const skills = [
  { name: 'React.js', icon: <Atom />, color: 'text-[#61DAFB]', border: 'group-hover:border-[#61DAFB]' },
  { name: 'Node.js', icon: <Server />, color: 'text-[#339933]', border: 'group-hover:border-[#339933]' },
  { name: 'Express.js', icon: <Cpu />, color: 'text-gray-300', border: 'group-hover:border-gray-300' },
  { name: 'MongoDB', icon: <Leaf />, color: 'text-[#47A248]', border: 'group-hover:border-[#47A248]' },
  { name: 'MySQL', icon: <Database />, color: 'text-[#F29111]', border: 'group-hover:border-[#F29111]' },
  { name: 'JavaScript', icon: <FileJson />, color: 'text-[#F7DF1E]', border: 'group-hover:border-[#F7DF1E]' },
  { name: 'Postman', icon: <Globe />, color: 'text-[#FF6C37]', border: 'group-hover:border-[#FF6C37]' },
  { name: 'Python', icon: <Worm />, color: 'text-[#F7DF1E]', border: 'group-hover:border-[#F7DF1E]' },
  { name: 'Tailwind CSS', icon: <Palette />, color: 'text-[#06B6D4]', border: 'group-hover:border-[#06B6D4]' },
  { name: 'HTML5', icon: <Code2 />, color: 'text-[#E34F26]', border: 'group-hover:border-[#E34F26]' },
  { name: 'CSS3', icon: <MonitorSmartphone />, color: 'text-[#1572B6]', border: 'group-hover:border-[#1572B6]' },
  { name: 'Git/GitHub', icon: <GitBranch />, color: 'text-[#F05032]', border: 'group-hover:border-[#F05032]' },
];

const TechStack = () => {
  return (
    <section id="tech" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-12 flex items-center gap-4">
          <span className="text-neon-cyan">01.</span> Tech Stack
          <div className="h-[1px] bg-gray-800 flex-1"></div>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group p-6 rounded-lg bg-dark-card border border-gray-800 ${skill.border} hover:shadow-neon-cyan-hover transition-all duration-300 flex flex-col items-center justify-center gap-4 cursor-pointer`}
            >
              <div className={`${skill.color} transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse`}>
                {React.cloneElement(skill.icon as React.ReactElement, { size: 40 } as any)}
              </div>
              <span className="font-mono text-sm text-gray-400 group-hover:text-white transition-colors">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
