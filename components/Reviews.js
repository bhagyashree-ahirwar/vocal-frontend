// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const reviews = [
//   { rating: "4.9/5", total: "1000 reviews" },
//   { rating: "5/5", total: "1655 reviews" }
// ];

// export default function Reviews() {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-12">
//         {reviews.map((review, index) => (
//           <motion.div
//             key={index}
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             transition={{ duration: 0.8, delay: index * 0.2 }}
//             className="bg-white p-8 rounded-lg shadow text-center"
//           >
//             <p className="text-2xl font-bold">{review.rating}</p>
//             <p className="text-gray-600">{review.total}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
