


// // "use client";
// // import { motion } from "framer-motion";
// // import Image from "next/image";

// // export default function ServicesSection() {
// //   const services = [
// //     {
// //       title: "BPO / KPO / RPO Consulting",
// //       desc: "We provide BPO, KPO, and RPO consulting with tailored solutions to boost efficiency, optimize resources, and drive growth, ensuring seamless processes and measurable results.",
// //       img: "/bpo.jpg",
// //     },
// //     {
// //       title: "Software Development",
// //       desc: "We specialize in delivering innovative and custom-built software solutions. Our expertise ensures seamless integration, high performance, and scalable systems for business growth.",
// //       img: "/software.jpg",
// //     },
// //     {
// //       title: "Training & Placement",
// //       desc: "We provide complete Training & Placement services focused on skill-building, career readiness, and connecting talented individuals with the right opportunities.",
// //       img: "/training.jpg",
// //     },
// //   ];

// //   return (
// //     <section className="w-full py-20 bg-[#22223b] text-white">
// //       <div className="max-w-7xl mx-auto px-6">
        
// //         {/* Heading Animation */}
// //         <motion.div
// //           initial={{ opacity: 0, y: -20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8 }}
// //           className="text-center mb-16"
// //         >
// //           <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow">
// //             Our <span className="text-indigo-300">Services</span>
// //           </h2>
// //           <p className="text-gray-300 mt-3 text-lg">
// //             Providing world-class solutions with modern technology
// //           </p>
// //         </motion.div>

// //         {/* Services Cards */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
// //           {services.map((s, i) => (
// //             <motion.div
// //               key={i}
// //               initial={{ opacity: 0, scale: 0.8, y: 40 }}
// //               whileInView={{ opacity: 1, scale: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.9, delay: i * 0.3 }}
// //               className="bg-white/10 backdrop-blur-xl border border-white/20 
// //               rounded-3xl shadow-2xl overflow-hidden hover:shadow-indigo-500/40 
// //               hover:-translate-y-2 transition-all duration-500"
// //             >
// //               <div className="w-full h-56 overflow-hidden">
// //                 <Image
// //                   src={s.img}
// //                   width={500}
// //                   height={300}
// //                   alt={s.title}
// //                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
// //                 />
// //               </div>

// //               <div className="p-6 space-y-3">
// //                 <h3 className="text-2xl font-bold text-white drop-shadow">
// //                   {s.title}
// //                 </h3>
// //                 <p className="text-gray-300 leading-relaxed">
// //                   {s.desc}
// //                 </p>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>

// //         {/* View More Button */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 1, delay: 0.6 }}
// //           className="text-center mt-14"
// //         >
// //           <a
// //             href="/services"
// //             className="px-10 py-3 bg-indigo-500 hover:bg-indigo-600 
// //             font-semibold text-white rounded-2xl shadow-xl 
// //             hover:shadow-indigo-500/40 transition-all"
// //           >
// //             View More
// //           </a>
// //         </motion.div>

// //       </div>
// //     </section>
// //   );
// // }



// // "use client";
// // import Link from "next/link";
// // import { motion } from "framer-motion";

// // const services = [
// //   {
// //     title: "Digital Marketing",
// //     desc: "Gain online visibility with SEO, ads, branding, content & social media marketing.",
// //     link: "/services/digital-marketing",
// //     img: "/services/digital.jpg",
// //   },
// //   {
// //     title: "Software Development",
// //     desc: "We build scalable and high-quality software solutions tailored to your business needs.",
// //     link: "/services/software",
// //     img: "/services/software.jpg",
// //   },
// //   {
// //     title: "Training & Placement",
// //     desc: "We prepare students with skills and provide strong placement opportunities.",
// //     link: "/services/training",
// //     img: "/services/training.jpg",
// //   },
// // ];

// // export default function Services() {
// //   return (
// //     <section className="py-24 bg-[#22223b]">
// //       <div className="max-w-7xl mx-auto px-6 text-center">
// //         <h2 className="text-4xl font-bold text-white mb-10">Our Services</h2>

// //         <div className="grid md:grid-cols-3 gap-10">
// //           {services.map((item, i) => (
// //             <motion.div
// //               key={i}
// //               initial={{ opacity: 0, y: 60 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.7, delay: i * 0.2 }}
// //               className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 hover:scale-105 transition-all cursor-pointer"
// //             >
// //               {/* Make Card Clickable */}
// //               <Link href={item.link}>
// //                 <div>
// //                   <img
// //                     src={item.img}
// //                     className="w-full h-48 object-cover rounded-xl mb-5"
// //                   />

// //                   <h3 className="text-2xl font-bold text-indigo-300 mb-2">
// //                     {item.title}
// //                   </h3>

// //                   <p className="text-gray-200 text-lg">{item.desc}</p>

// //                   <p className="mt-4 inline-block text-indigo-300 font-semibold">
// //                     View More →
// //                   </p>
// //                 </div>
// //               </Link>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const services = [
//   {
//     title: "Digital Marketing",
//     desc: "Boost visibility with SEO, SMM, ads, branding & content marketing.",
//     link: "/services/digital-marketing",
//     img: "/services/digital.jpg",
//   },
//   {
//     title: "Software Development",
//     desc: "We build high-quality, scalable software and web applications.",
//     link: "/services/software",
//     img: "/services/software.jpg",
//   },
//   {
//     title: "Training & Placement",
//     desc: "Practical training programs with strong placement support.",
//     link: "/services/training",
//     img: "/services/training.jpg",
//   },
// ];

// export default function Services() {
//   return (
//     <section className="py-24 bg-[#22223b]">
//       <div className="max-w-7xl mx-auto px-6 text-center">

//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -30, scale: 0.95 }}
//           whileInView={{ opacity: 1, y: 0, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl font-extrabold text-white mb-14"
//         >
//           Our <span className="text-gray-300">Services</span>
//         </motion.h2>

//         {/* Cards */}
//         <div className="grid md:grid-cols-3 gap-12">
//           {services.map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 60, rotate: 2 }}
//               whileInView={{ opacity: 1, y: 0, rotate: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.8,
//                 delay: i * 0.2,
//                 ease: "easeOut",
//               }}
//               className="group bg-white/10 backdrop-blur-xl border border-white/20 
//               rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-white/30 transition-all 
//               duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden"
//             >
//               <Link href={item.link}>
//                 <div>
//                   {/* Image */}
//                   <div className="w-full h-56 overflow-hidden">
//                     <Image
//                       src={item.img}
//                       width={600}
//                       height={400}
//                       alt={item.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                     />
//                   </div>

//                   {/* Content */}
//                   <div className="p-6 text-left">
//                     <h3 className="text-2xl font-bold text-white mb-2">
//                       {item.title}
//                     </h3>

//                     <p className="text-gray-300 leading-relaxed text-sm">
//                       {item.desc}
//                     </p>

//                     <motion.p
//                       initial={{ x: -10, opacity: 0 }}
//                       whileInView={{ x: 0, opacity: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.5, delay: 0.2 }}
//                       className="mt-5 text-gray-200 font-semibold group-hover:text-white"
//                     >
//                       View More →
//                     </motion.p>
//                   </div>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }





// components/ServicesPage.jsx
"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "Restaurants AI Solutions",
    desc: "AI menu recommendations, automated customer engagement, inventory prediction.",
    icon: "🍽️",
  },
  {
    title: "Real Estate AI Solutions",
    desc: "AI-powered lead scoring, property valuation automation, predictive analytics.",
    icon: "🏢",
  },
  {
    title: "Enterprise Automation",
    desc: "Workflow automation, CRM integration, data-driven marketing campaigns.",
    icon: "💼",
  },
  {
    title: "Custom Solutions",
    desc: "Bespoke AI models and automation workflows for unique business needs.",
    icon: "🤖",
  },
];

export default function ServicesPage() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      {/* Hero */}
      <div className="container mx-auto text-center mb-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          AI-Driven Solutions for Every Business
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From smart automation to AI-powered marketing — Vocal Heart Infotech helps
          restaurants, real estate, and enterprises scale faster and smarter.
        </p>
        <button className="mt-6 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
          Explore Our Services
        </button>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl cursor-pointer text-center flex flex-col items-center gap-4"
          >
            <div className="text-4xl">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* How It Works */}
      <div className="container mx-auto text-center mt-20 px-4">
        <h2 className="text-3xl font-bold gradient-text mb-8">Smart. Simple. Scalable.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "Analyze", desc: "Understand data and business challenges." },
            { step: "Automate", desc: "Implement AI-powered automation and workflows." },
            { step: "Optimize", desc: "Continuously monitor and improve efficiency." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto text-center mt-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
          Transform Your Business with AI
        </h2>
        <p className="text-gray-600 mb-6">
          Discover how automation and AI tools can scale your restaurant, real estate, or enterprise operations effortlessly.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            Book a Free Consultation
          </button>
          <button className="px-6 py-3 rounded-lg bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition">
            See Demo Tools
          </button>
        </div>
      </div>
    </section>
  );
}
