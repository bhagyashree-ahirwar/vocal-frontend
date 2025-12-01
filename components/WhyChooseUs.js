// "use client";
// import { motion } from "framer-motion";
// import { Star } from "lucide-react";

// export default function WhyLoveUs() {
//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* TOP HEADING + RATINGS */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold text-gray-900">
//             Why People Love Us?
//           </h2>

//           <p className="text-gray-600 mt-3 text-lg">
//             Vocal Heart Infotech is a complete solution to make it easy for
//             anyone to build their Career & Business.
//           </p>

//           {/* REVIEW BLOCKS */}
//           <div className="flex flex-col md:flex-row justify-center gap-10 mt-10">
//             {/* REVIEW 1 */}
//             <div className="bg-gray-100 px-8 py-4 rounded-2xl shadow">
//               <div className="flex justify-center gap-1 mb-2">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
//                 ))}
//               </div>
//               <p className="text-gray-700 font-semibold text-lg">
//                 4.9 / 5 (1000 reviews)
//               </p>
//             </div>

//             {/* REVIEW 2 */}
//             <div className="bg-gray-100 px-8 py-4 rounded-2xl shadow">
//               <div className="flex justify-center gap-1 mb-2">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
//                 ))}
//               </div>
//               <p className="text-gray-700 font-semibold text-lg">
//                 5 / 5 (1655 reviews)
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* SERVICE DETAILS CARDS GRID */}
//         <div className="grid md:grid-cols-2 gap-10">
          
//           {/* CARD 1 */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="p-8 bg-[#f7f7ff] rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all"
//           >
//             <h3 className="text-2xl font-bold text-indigo-700 mb-4">
//               BPO & KPO Services
//             </h3>
//             <p className="text-gray-700 leading-relaxed text-lg">
//               Backed by a skilled team, we excel in BPO, Database, Back Office,
//               Internet Marketing, and Technical Support Services. Our services
//               ensure efficiency and affordability.
//             </p>
//           </motion.div>

//           {/* CARD 2 */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="p-8 bg-[#f7f7ff] rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all"
//           >
//             <h3 className="text-2xl font-bold text-indigo-700 mb-4">
//               Software Development
//             </h3>
//             <p className="text-gray-700 leading-relaxed text-lg">
//               We design mobile and web applications that are responsive, modern,
//               user-friendly, and visually engaging.
//             </p>
//           </motion.div>

//           {/* CARD 3 */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, delay: 0.4 }}
//             className="p-8 bg-[#f7f7ff] rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all"
//           >
//             <h3 className="text-2xl font-bold text-indigo-700 mb-4">
//               Digital Marketing
//             </h3>
//             <p className="text-gray-700 leading-relaxed text-lg">
//               SEO, SMM, PPC, Content Marketing, Email Campaigns — everything you
//               need to grow your brand online.
//             </p>
//           </motion.div>

//           {/* CARD 4 */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, delay: 0.6 }}
//             className="p-8 bg-[#f7f7ff] rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all"
//           >
//             <h3 className="text-2xl font-bold text-indigo-700 mb-4">
//               Training & Placement
//             </h3>
//             <p className="text-gray-700 leading-relaxed text-lg">
//               We provide modern training programs and connect skilled candidates
//               with top employers for the best career opportunities.
//             </p>
//           </motion.div>

//           {/* CARD 5 */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, delay: 0.8 }}
//             className="p-8 bg-[#f7f7ff] rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all"
//           >
//             <h3 className="text-2xl font-bold text-indigo-700 mb-4">
//               Super Fast Performance
//             </h3>
//             <p className="text-gray-700 leading-relaxed text-lg">
//               Our optimized solutions and rapid IT support minimize downtime and
//               deliver faster performance.
//             </p>
//           </motion.div>

//           {/* CARD 6 */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, delay: 1 }}
//             className="p-8 bg-[#f7f7ff] rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all"
//           >
//             <h3 className="text-2xl font-bold text-indigo-700 mb-4">
//               Outstanding Support
//             </h3>
//             <p className="text-gray-700 leading-relaxed text-lg">
//               Our experts provide reliable IT support, troubleshooting, and
//               guidance to ensure seamless operations.
//             </p>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }
