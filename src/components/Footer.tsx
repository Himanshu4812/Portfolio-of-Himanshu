

const Footer = () => {
  return (
    <footer className="py-6 border-t border-gray-800 text-center font-mono text-sm text-gray-500">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>Built with React & Tailwind CSS</p>
        <div className="flex items-center gap-2">
          <span className="text-neon-green">●</span> Repository Active
        </div>
        <div className="flex items-center gap-2">
          <span>Visitor count: </span>
          <span className="text-neon-cyan font-bold">01042</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
