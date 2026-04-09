import { useEffect, useState } from 'react';

const EasterEgg = () => {
  const [input, setInput] = useState('');
  const secretCode = 'hireme';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setInput((prev) => (prev + e.key).slice(-secretCode.length).toLowerCase());
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (input === secretCode) {
      alert("System Override: Resume Download Initiated! \n\n(In a real app, this would trigger the PDF download)");
      // window.open('/resume.pdf', '_blank');
      setInput('');
    }
  }, [input]);

  return null;
};

export default EasterEgg;
