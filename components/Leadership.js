
// "use client";

// import { motion } from "framer-motion";

// export default function HomePage() {
//   return (
//     <div className="w-full">
//       {/* First Section */}
//       <section className="bg-purple-600 text-white text-center py-20">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">
//           We bring innovation and creative freedom to the Vocal Heart Infotech.
//         </h1>
//         <p className="max-w-2xl mx-auto mb-12">
//           Established in the year <b>2009</b>, at <b>Bhopal Madhya Pradesh, India</b>,
//           we <b>“Vocal Heart Infotech Private Limited”</b> have achieved tremendous triumph in
//           the field of offering <b>BPO Services, Data Base, Back Office, Internet Marketing and Technical Support Services</b>.
//         </p>

//         <div className="flex justify-center flex-wrap gap-8 text-center">
//           {[
//             { number: "1.2k+", label: "LICENSE SOLD" },
//             { number: "5.4k+", label: "END USERS" },
//             { number: "1K+", label: "5 STARS RATING" },
//             { number: "16", label: "YEARS ON MARKET" },
//           ].map((stat, i) => (
//             <div key={i} className="px-4">
//               <h2 className="text-3xl font-bold">{stat.number}</h2>
//               <p className="text-sm tracking-widest">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Leadership Team Section */}
//       <section className="py-20 bg-white text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-200 to-purple-100 inline-block px-4 py-1 rounded"
//         >
//           Leadership Team
//         </motion.h2>
//         <p className="max-w-2xl mx-auto mb-12">
//           Meet Our Leadership Team – A group of visionary leaders, dedicated to driving innovation,
//           fostering growth, and ensuring excellence in every aspect of our business. With their
//           expertise, passion, and strategic foresight, they guide our company towards achieving new
//           milestones and delivering exceptional value to our clients.
//         </p>

//         <div className="flex justify-center flex-wrap gap-8">
//           {[
//             { name: "Mayank Saxena", role: "FOUNDER & CEO", img: "/mayank.jpg" },
//             { name: "Dhruv Saxena", role: "FOUNDER & CEO", img: "/dhruv.jpg" },
//           ].map((member, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.2 }}
//               className="bg-gradient-to-b from-purple-200 to-purple-100 rounded-xl p-6 w-72"
//             >
//               <img
//                 src={member.img}
//                 alt={member.name}
//                 className="w-40 h-40 mx-auto rounded-full mb-4 object-cover"
//               />
//               <h3 className="font-bold text-lg">{member.name}</h3>
//               <p className="text-sm mb-2">{member.role}</p>
//               <div className="flex justify-center gap-4 text-blue-600">
//                 <a href="#"><i className="fab fa-facebook"></i></a>
//                 <a href="#"><i className="fab fa-linkedin"></i></a>
//                 <a href="#"><i className="fab fa-twitter"></i></a>
//                 <a href="#"><i className="fab fa-pinterest"></i></a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }
