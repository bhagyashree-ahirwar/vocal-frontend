

// // "use client";
// // import React from "react";
// // import { motion } from "framer-motion";

// // export default function HeroSection() {
// //   return (
// //     <>
// //       {/* ================= HERO SECTION ================= */}
// //       <section className="relative w-full h-screen overflow-hidden bg-[#22223b]">

// //         {/* BACKGROUND BLUR GRADIENT */}
// //         <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 to-purple-300/10 blur-3xl"></div>

// //         <div className="relative max-w-7xl mx-auto h-full flex items-center px-6 grid grid-cols-1 md:grid-cols-2 gap-20">

// //           {/* ========= LEFT TEXT ========= */}
// //           <div className="space-y-6">
// //             <motion.h1
// //               initial={{ opacity: 0, y: -30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 1 }}
// //               className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg"
// //             >
// //               Transform Your Vision with{" "}
// //               <span className="text-indigo-300">Vocal Heart Infotech</span>
// //             </motion.h1>

// //             <motion.p
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 1, delay: 0.2 }}
// //               className="text-gray-200 text-lg"
// //             >
// //               Future-ready solutions, modern technology & a passionate team — let’s build something exceptional.
// //             </motion.p>

// //             {/* BUTTONS */}
// //             <motion.div
// //               initial={{ opacity: 0, scale: 0.8 }}
// //               animate={{ opacity: 1, scale: 1 }}
// //               transition={{ duration: 1, delay: 0.4 }}
// //               className="flex gap-4 pt-2"
// //             >
// //               <a
// //                 href="/services"
// //                 className="px-7 py-3 bg-indigo-500 text-white font-semibold rounded-2xl shadow-md hover:bg-indigo-600 hover:shadow-xl transition-all"
// //               >
// //                 Explore Services
// //               </a>

// //               <button
// //                 className="px-7 py-3 backdrop-blur-md bg-white/20 text-white border border-white/30 rounded-2xl shadow hover:bg-white/30 transition-all"
// //               >
// //                 Why Choose Us?
// //               </button>
// //             </motion.div>
// //           </div>

// //           {/* ========= RIGHT CANVA IMAGE ========= */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 120 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 1 }}
// //             whileHover={{ scale: 1.03 }}
// //             className="relative w-full"
// //           >
// //             <div className="absolute -inset-4 bg-indigo-200/20 blur-3xl rounded-3xl animate-pulse"></div>

// //             <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white/10">
// //               {/* Replace with your Canva image */}
// //               <img
// //                 src="/canva-hero.png"
// //                 alt="Hero Canva Design"
// //                 className="w-full h-[300px] md:h-[380px] object-cover hover:scale-105 transition-transform duration-700"
// //               />
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* ================= SKILLS SECTION (BLUE + BLUR + ANIMATION) ================= */}
// //       <section className="w-full py-20 bg-[#22223b]/90 backdrop-blur-xl">
// //         <div className="max-w-6xl mx-auto px-6">
// //           {/* HEADING */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 1 }}
// //             className="text-center mb-14"
// //           >
// //             <h2 className="text-3xl md:text-4xl font-bold text-white">
// //               Build Your Skills With
// //             </h2>
// //             <p className="text-xl md:text-2xl font-semibold text-indigo-300 mt-2">
// //               VOCAL HEART INFOTECH PRIVATE LIMITED
// //             </p>
// //           </motion.div>

// //           {/* LOGO GRID WITH ANIMATION */}
// //           <div className="grid grid-cols-2 md:grid-cols-5 gap-8 justify-center items-center">
// //             {["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png"].map(
// //               (logo, index) => (
// //                 <motion.div
// //                   key={index}
// //                   initial={{ opacity: 0, scale: 0.5, y: 40 }}
// //                   whileInView={{ opacity: 1, scale: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ duration: 0.6, delay: index * 0.15 }}
// //                   className="bg-white/10 backdrop-blur-lg border border-white/20
// //                   rounded-xl shadow-xl p-4 flex items-center justify-center 
// //                   hover:shadow-2xl hover:scale-110 hover:bg-white/20 
// //                   transition-all duration-300"
// //                 >
// //                   <img
// //                     src={`/${logo}`}
// //                     className="w-24 h-auto object-contain filter drop-shadow-lg"
// //                   />
// //                 </motion.div>
// //               )
// //             )}
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // }



// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// export default function HeroSection() {
//   return (
//     <>
//       {/* ================= HERO SECTION ================= */}
//       <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-purple-800 to-indigo-700">

//         {/* BACKGROUND BLUR GRADIENT */}
//         <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-400/20 blur-3xl"></div>

//         <div className="relative max-w-7xl mx-auto h-full flex items-center px-6 grid grid-cols-1 md:grid-cols-2 gap-20">

//           {/* ========= LEFT TEXT ========= */}
//           <div className="space-y-6">
//             <motion.h1
//               initial={{ opacity: 0, y: -30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//               className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg"
//             >
//               Transform Your Vision with{" "}
//               <span className="text-pink-400">Vocal Heart Infotech</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.2 }}
//               className="text-gray-200 text-lg"
//             >
//               Future-ready solutions, modern technology & a passionate team — let’s build something exceptional.
//             </motion.p>

//             {/* BUTTONS */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1, delay: 0.4 }}
//               className="flex gap-4 pt-2"
//             >
//               <a
//                 href="/services"
//                 className="px-7 py-3 bg-pink-500 text-white font-semibold rounded-2xl shadow-md hover:bg-pink-600 hover:shadow-xl transition-all"
//               >
//                 Explore Services
//               </a>

//               <button
//                 className="px-7 py-3 backdrop-blur-md bg-white/20 text-white border border-white/30 rounded-2xl shadow hover:bg-white/30 transition-all"
//               >
//                 Why Choose Us?
//               </button>
//             </motion.div>
//           </div>

//           {/* ========= RIGHT IMAGE ========= */}
//           <motion.div
//             initial={{ opacity: 0, x: 120 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             whileHover={{ scale: 1.03 }}
//             className="relative w-full"
//           >
//             <div className="absolute -inset-4 bg-pink-200/20 blur-3xl rounded-3xl animate-pulse"></div>
//             <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white/10">
//               <img
//                 src="/canva-hero.png"
//                 alt="Hero Canva Design"
//                 className="w-full h-[300px] md:h-[380px] object-cover hover:scale-105 transition-transform duration-700"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ================= SKILLS / BOXES ================= */}
//       <section className="w-full py-20 bg-gradient-to-tr from-purple-900/90 to-indigo-900/80 backdrop-blur-xl">
//         <div className="max-w-6xl mx-auto px-6">
//           {/* HEADING */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1 }}
//             className="text-center mb-14"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-white">
//               Build Your Skills With
//             </h2>
//             <p className="text-xl md:text-2xl font-semibold text-pink-400 mt-2">
//               VOCAL HEART INFOTECH PRIVATE LIMITED
//             </p>
//           </motion.div>

//           {/* 2 BOXES GRID */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center">
//             {["logo1.png", "logo2.png"].map((logo, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.5, y: 40 }}
//                 whileInView={{ opacity: 1, scale: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 className="bg-gradient-to-br from-pink-600/30 to-indigo-500/30 backdrop-blur-lg border border-white/20
//                   rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-center
//                   hover:shadow-3xl hover:scale-105 hover:bg-gradient-to-br hover:from-pink-500/40 hover:to-indigo-400/40
//                   transition-all duration-500"
//               >
//                 <img
//                   src={`/${logo}`}
//                   className="w-32 h-32 object-contain filter drop-shadow-xl mb-4"
//                 />
//                 <h3 className="text-white text-xl font-bold mb-2">
//                   Skill Name
//                 </h3>
//                 <p className="text-white/80 text-center">
//                   Short description about this skill or technology. Make it clear and attractive.
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }




// app/page.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";  
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function LandingPage() {
  const services = [
    { title: "AI Starter", desc: "Setup your first automations and digital systems.", icon: "⚙" },
    { title: "AI Growth", desc: "Scale your workflows with smart marketing & CRM integration.", icon: "📈" },
    { title: "AI Pro", desc: "Advanced AI tools, analytics & full business intelligence setup.", icon: "🧠" },
  ];

  const packages = [
    { title: "AI Starter", desc: "Kickstart your automation journey with basic AI tools", cta: "Start Now" },
    { title: "AI Growth", desc: "Optimize marketing & operations with smart AI workflows", cta: "Upgrade" },
    { title: "AI Pro", desc: "End-to-end AI setup with analytics & reporting", cta: "Book Demo" },
  ];

  return (
    <>

{/* ================= HERO SECTION ================= */}
<section
  className="w-full h-screen flex flex-col justify-center items-center text-center px-6"
  style={{ backgroundColor: "#1A1F36" }}
>
  <motion.h1
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="text-4xl md:text-6xl font-bold mb-6 text-white"
  >
    Empowering Businesses with AI-Driven Growth
  </motion.h1>
  <motion.p
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="text-lg md:text-xl mb-8 max-w-2xl text-gray-100"
  >
    Transform your marketing, operations, and decision-making with tailored AI automation.
  </motion.p>
  <div className="flex flex-col md:flex-row gap-4">
    <button
      className="font-semibold px-6 py-3 rounded-lg shadow transition-all bg-white text-[#703B3B] hover:bg-gray-100"
    >
      Get Started
    </button>
    <button
      className="font-semibold px-6 py-3 rounded-lg shadow transition-all bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#703B3B]"
    >
      Explore Packages
    </button>
  </div>
</section>

    

      {/* ================= ABOUT / MISSION ================= */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Vocal Heart</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          Since 2011, we’ve evolved from software development, BPO, and KPO services to a full-scale AI-driven automation agency.
          Our mission is simple — to bring intelligence, efficiency, and emotion into every digital system we build.
        </p>
        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <span>💻 Software</span>
          <span>📞 BPO</span>
          <span>🤖 AI Automation</span>
        </div>
      </section>

      {/* ================= SERVICES / SOLUTIONS ================= */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What We Do</h2>
        <p className="text-gray-600 mb-12">We blend AI, design, and strategy to automate your business growth.</p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Meet the Minds Behind Vocal Heart</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto px-6">
          {[
            { name: "Manak", role: "Founder & Strategy" },
            { name: "Dhruv Saxena", role: "Growth & AI Systems" },
          ].map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl p-8 shadow-md transition transform"
            >
              <div className="h-48 w-48 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center text-5xl">
                👤
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">{member.name}</h3>
              <p className="text-gray-700 text-lg">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PACKAGES ================= */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Choose Your AI Growth Package</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-md transition flex flex-col justify-between"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{pkg.title}</h3>
              <p className="text-gray-700 mb-4">{pkg.desc}</p>
              <button className="mt-auto bg-gray-900 hover:bg-gray-700 text-white px-4 py-2 rounded-lg shadow transition">
                {pkg.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 bg-gray-100 text-center text-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make Your Business AI-Smart?</h2>
        <p className="text-lg mb-8">Let’s transform your operations, one automation at a time.</p>
        <button className="bg-gray-900 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition">
          Schedule Free Consultation
        </button>
      </section>
    </>
  );
}
