import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [introText, setIntroText] = useState('');
  
  const fullIntro = "Initializing secure communication channel...\nConnection established.";

  // Typing effect for the terminal intro
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setIntroText(fullIntro.substring(0, i));
      i++;
      if (i > fullIntro.length) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      // 1. Send message to YOU (Contact template)
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // 2. Send auto-reply to USER
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset to idle after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      // Reset to idle after 3 seconds so they can try again
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 relative mb-10">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-mono text-white mb-12 flex items-center justify-center gap-4 text-center"
        >
          <span className="text-neon-cyan">04.</span> Initiate Connection
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-[#0a0a0a] border border-gray-800 rounded-xl overflow-hidden shadow-2xl shadow-neon-cyan/5"
        >
          {/* Terminal Header */}
          <div className="bg-[#151515] px-4 py-3 flex items-center border-b border-gray-800">
            <div className="flex gap-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer"></div>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-gray-400 bg-black/50 px-3 py-1 rounded-md border border-gray-800/50">
              <Terminal size={14} className="text-neon-cyan" />
              <span>root@server:~/contact</span>
            </div>
          </div>
          
          {/* Terminal Body */}
          <div className="p-6 md:p-8 font-mono relative">
            {/* Typing Intro */}
            <div className="mb-8 text-sm md:text-base text-gray-400 whitespace-pre-line min-h-[3rem]">
              {introText}
              {introText.length === fullIntro.length && (
                <span className="inline-block w-2 h-4 bg-neon-cyan ml-1 animate-pulse align-middle"></span>
              )}
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              {/* Name Input */}
              <div className="group flex flex-col md:flex-row md:items-center gap-2">
                <label className="text-neon-green whitespace-nowrap flex items-center gap-2">
                  <span className="text-neon-cyan">&gt;</span> enter_name:
                </label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-transparent border-none outline-none text-white flex-1 focus:ring-0 placeholder-gray-700 focus:text-neon-cyan transition-colors py-1"
                  placeholder="[Type your name]"
                  disabled={status === 'sending' || status === 'success'}
                />
              </div>
              
              {/* Email Input */}
              <div className="group flex flex-col md:flex-row md:items-center gap-2">
                <label className="text-neon-green whitespace-nowrap flex items-center gap-2">
                  <span className="text-neon-cyan">&gt;</span> enter_email:
                </label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-transparent border-none outline-none text-white flex-1 focus:ring-0 placeholder-gray-700 focus:text-neon-cyan transition-colors py-1"
                  placeholder="[Type your email]"
                  disabled={status === 'sending' || status === 'success'}
                />
              </div>
              
              {/* Message Textarea */}
              <div className="group flex flex-col gap-2">
                <label className="text-neon-green flex items-center gap-2">
                  <span className="text-neon-cyan">&gt;</span> message:
                </label>
                <textarea 
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-black/50 border border-gray-800 rounded-md p-4 outline-none text-white focus:border-neon-cyan hover:border-neon-cyan/50 hover:shadow-neon-cyan-hover transition-all resize-none mt-1 disabled:opacity-50"
                  placeholder="[Type your transmission here...]"
                  disabled={status === 'sending' || status === 'success'}
                ></textarea>
              </div>

              {/* Status Messages & Submit Button */}
              <div className="mt-4 flex flex-col items-start gap-4">
                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-neon-green text-sm flex items-start gap-2 bg-neon-green/10 p-3 rounded border border-neon-green/30 w-full"
                    >
                      <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                      <p>Message delivered successfully to developer terminal.<br/>Await response within 24 hours.</p>
                    </motion.div>
                  )}
                  
                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-400 text-sm flex items-center gap-2 bg-red-500/10 p-3 rounded border border-red-500/30 w-full"
                    >
                      <XCircle size={18} />
                      <p>Transmission failed. Retry connection.</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button 
                  type="submit" 
                  disabled={status === 'sending' || status === 'success'}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(0,255,204,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-transparent border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 rounded font-bold tracking-wider"
                >
                  {status === 'idle' && './send_message.sh'}
                  {status === 'sending' && (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Transmitting...
                    </>
                  )}
                  {status === 'success' && 'Transmission Successful'}
                  {status === 'error' && 'Retry ./send_message.sh'}
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
