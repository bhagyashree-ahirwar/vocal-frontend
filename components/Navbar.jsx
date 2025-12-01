

"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      height: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.15,
      },
    },
  };

  return (
    <header className="w-full bg-white/60 backdrop-blur-sm sticky top-0 z-40 shadow-sm">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-red-900 font-bold">VH</div>
          <div>
            <div className="font-heading font-bold">Vocal Heart</div>
            <div className="text-xs text-gray-500">Infotech Pvt Ltd</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="/templates" className="hover:text-primary transition-colors">Career</Link>
          <Link 
            href="/contact" 
            className="px-4 py-2 rounded-md bg-coral text-gray-900 hover:bg-coral/90 transition-all font-semibold"
          >
            Contact
          </Link>
        </nav>

        {/* Animated Hamburger Button */}
        <motion.button
          className="md:hidden p-1 relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="block w-6 h-0.5 bg-gray-900 rounded-sm relative"
            variants={{
              closed: {
                opacity: 1,
                rotate: 0,
                y: 0,
              },
              open: {
                opacity: 1,
                rotate: 45,
                y: 8,
              },
            }}
            animate={open ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-gray-900 rounded-sm absolute"
            initial={{ opacity: 1 }}
            variants={{
              closed: {
                opacity: 1,
                transform: "translateX(0)",
              },
              open: {
                opacity: 0,
                transform: "translateX(-100%)",
              },
            }}
            animate={open ? "open" : "closed"}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-gray-900 rounded-sm relative"
            variants={{
              closed: {
                opacity: 1,
                rotate: 0,
                y: 0,
              },
              open: {
                opacity: 1,
                rotate: -45,
                y: -8,
              },
            }}
            animate={open ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={open ? "open" : "closed"}
        className="md:hidden overflow-hidden"
      >
        <div className="bg-white/80 backdrop-blur-sm border-t border-gray-100 p-6">
          <motion.div 
            className="flex flex-col gap-4"
            variants={{
              open: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1,
                },
              },
            }}
          >
            <motion.div variants={itemVariants}>
              <Link href="/" className="block py-3 text-lg font-medium text-gray-700 hover:text-primary transition-colors" onClick={() => setOpen(false)}>Home</Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href="/about" className="block py-3 text-lg font-medium text-gray-700 hover:text-primary transition-colors" onClick={() => setOpen(false)}>About</Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href="/services" className="block py-3 text-lg font-medium text-gray-700 hover:text-primary transition-colors" onClick={() => setOpen(false)}>Services</Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href="/templates" className="block py-3 text-lg font-medium text-gray-700 hover:text-primary transition-colors" onClick={() => setOpen(false)}>career</Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link 
                href="/contact" 
                className="px-6 py-3 rounded-md bg-coral font-semibold text-lg hover:bg-coral/90 transition-all block text-center mt-2 text-gray-900"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
}



// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-lg border-b border-gray-100">
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
          
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-3 group">
//             <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
//               VH
//             </div>
//             <div>
//               <div className="font-bold text-xl text-gray-900 tracking-tight">Vocal Heart</div>
//               <div className="text-xs text-gray-500 font-medium">Infotech Pvt Ltd</div>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-8">
//             <Link href="/" className="text-gray-700 font-medium hover:text-blue-600 transition-all duration-300 relative group">
//               Home
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
//             </Link>
//             <Link href="/services" className="text-gray-700 font-medium hover:text-blue-600 transition-all duration-300 relative group">
//               Services
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
//             </Link>
//             <Link href="/about" className="text-gray-700 font-medium hover:text-blue-600 transition-all duration-300 relative group">
//               About
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
//             </Link>
//             <Link href="/careers" className="text-gray-700 font-medium hover:text-blue-600 transition-all duration-300 relative group">
//               Careers
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
//             </Link>
//             <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300">
//               Contact
//             </Link>
//           </nav>

//           {/* Mobile Menu Button */}
//           <motion.button
//             className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
//             onClick={() => setOpen(!open)}
//             whileTap={{ scale: 0.95 }}
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 strokeWidth={2} 
//                 className={open ? "hidden" : "block"}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//               <path 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 strokeWidth={2}
//                 className={!open ? "hidden" : "block"}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </motion.button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <motion.div
//         initial={{ opacity: 0, height: 0 }}
//         animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
//         transition={{ duration: 0.3 }}
//         className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-100"
//       >
//         <div className="px-6 py-8 space-y-4">
//           <Link 
//             href="/" 
//             className="block py-3 text-lg font-semibold text-gray-800 hover:text-blue-600 border-b border-gray-100 last:border-b-0 transition-colors" 
//             onClick={() => setOpen(false)}
//           >
//             Home
//           </Link>
//           <Link 
//             href="/services" 
//             className="block py-3 text-lg font-semibold text-gray-800 hover:text-blue-600 border-b border-gray-100 last:border-b-0 transition-colors" 
//             onClick={() => setOpen(false)}
//           >
//             Services
//           </Link>
//           <Link 
//             href="/about" 
//             className="block py-3 text-lg font-semibold text-gray-800 hover:text-blue-600 border-b border-gray-100 last:border-b-0 transition-colors" 
//             onClick={() => setOpen(false)}
//           >
//             About
//           </Link>
//           <Link 
//             href="/careers" 
//             className="block py-3 text-lg font-semibold text-gray-800 hover:text-blue-600 border-b border-gray-100 last:border-b-0 transition-colors" 
//             onClick={() => setOpen(false)}
//           >
//             Careers
//           </Link>
//           <Link 
//             href="/contact"
//             className="block w-full text-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-xl shadow-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all mt-4"
//             onClick={() => setOpen(false)}
//           >
//             Get Quote
//           </Link>
//         </div>
//       </motion.div>
//     </header>
//   );
// }
