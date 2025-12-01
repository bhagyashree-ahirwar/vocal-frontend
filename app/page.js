

'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function LandingPage() {
  const router = useRouter();
  const [stage, setStage] = useState(0); // 0: VH Logo + VOCAL HEART, 1: Main content
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 2000);
    const timer2 = setTimeout(() => setIsVisible(true), 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleGetStarted = () => {
    router.push('/home');
  };

  return (
    <main className="min-h-screen font-sans bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden px-6 py-24 text-center text-white">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.2) 1px, transparent 1px),linear-gradient(90deg, rgba(148, 163, 184, 0.2) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Animated Background Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-slate-400/20 rounded-full blur-3xl opacity-20"
        animate={{ scale: [1, 1.15, 1], x: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 right-10 w-80 h-80 bg-slate-500/20 rounded-full blur-3xl opacity-20"
        animate={{ scale: [1, 1.25, 1], x: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* STAGE 0: VH Logo + VOCAL HEART Animation */}
      <AnimatePresence>
        {stage === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center space-y-8"
          >
            {/* VH Logo Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, type: 'spring', damping: 12 }}
              className="mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-r from-slate-600 to-slate-700 flex items-center justify-center relative shadow-2xl border-4 border-white/20"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-slate-900 flex items-center justify-center shadow-2xl">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-wider drop-shadow-lg">VH</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Smaller VOCAL HEART */}
            <motion.div
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: 'spring', damping: 15 }}
            >
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-slate-300 to-slate-100 bg-clip-text text-transparent tracking-tight"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                VOCAL HEART
              </motion.h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* STAGE 1: Main Content - CLEANED VERSION */}
      <AnimatePresence>
        {stage === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex flex-col items-center justify-center px-6 py-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl mx-auto space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full border border-white/20 text-sm font-semibold"
              >
                Since 2009 • Bhopal
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
              >
                VOCAL HEART
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 }}
                  className="block text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-slate-300 to-white bg-clip-text text-transparent font-black"
                >
                  INFOTECH PVT. LTD.
                </motion.span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-lg md:text-xl text-slate-300 max-w-lg mx-auto leading-relaxed font-light"
              >
                Empowering enterprises with innovative BPO, software development, and training solutions
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="grid grid-cols-3 gap-6 max-w-lg mx-auto mb-16"
              >
                {[
                  { value: '3.4/5', label: '1000+ Reviews' },
                  { value: '1655+', label: 'Happy Clients' },
                  { value: '2009', label: 'Established' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                    className="animate-float"
                    style={{ animationDelay: `${i * 0.5}s` }}
                  >
                    <div className="text-2xl font-bold text-slate-200 mb-1">{stat.value}</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Get Started Button */}
              <motion.button
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGetStarted}
                className="group relative px-12 py-4 bg-white text-slate-900 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-3xl border-2 border-white/20 backdrop-blur-sm transition-all duration-500 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-slate-200 to-white opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-500"></span>
                <span className="relative z-10 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
