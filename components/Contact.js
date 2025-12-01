

// // // components/ContactSection.jsx
// // "use client";
// // import { useState, useEffect } from "react";

// // export default function ContactSection() {
// //   const [isVisible, setIsVisible] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const element = document.getElementById("contact-card");
// //       if (element) {
// //         const rect = element.getBoundingClientRect();
// //         if (rect.top < window.innerHeight - 100) {
// //           setIsVisible(true);
// //         }
// //       }
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     handleScroll();

// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <section className="px-8 py-16 bg-white flex flex-col md:flex-row justify-flex items-start gap-10 relative">
      
// //       {/* Top horizontal line (thin & black) */}
// //       <div className="absolute top-0 left-0 w-full h-[2px] bg-black"></div>

// //       {/* Left: Contact Info */}
// //       <div className="md:w-1/2 space-y-6">
// //         {/* Small top button with new color */}
// //         <button className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm hover:bg-indigo-700 transition">
// //           Contact Us
// //         </button>

// //         {/* Section title */}
// //         <h2 className="font-bold text-lg mt-2">Get In Touch</h2>

// //         {/* Contact details */}
// //         <div className="flex items-start gap-4">
// //           <span>📍</span>
// //           <p>
// //             Plot N. 3, Third Floor, Bajaj Tower, Raisen Rd, Lala Lajpat Rai
// //             Colony, Bhopal, Madhya Pradesh 462023
// //           </p>
// //         </div>
// //         <div className="flex items-center gap-4">
// //           <span>✉️</span>
// //           <p>info@vocalheart.com</p>
// //         </div>
// //         <div className="flex items-center gap-4">
// //           <span>📞</span>
// //           <p>07554937509</p>
// //         </div>

// //         {/* Middle horizontal line */}
// //         <hr className="my-6 border-purple-300" />

// //         {/* Map */}
// //         <h2 className="font-bold text-lg mb-2">Find Us</h2>
// //         <iframe
// //           className="w-full h-48 rounded-lg shadow-md"
// //           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14672.49119750354!2d77.380764!3d23.259960!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4230a7a9b3bb%3A0x12f0b4d0ff7c0d22!2sBhopal!5e0!3m2!1sen!2sin!4v1698724850000!5m2!1sen!2sin"
// //           allowFullScreen=""
// //           loading="lazy"
// //         ></iframe>
// //       </div>

// //       {/* Right: Contact Form (smaller size) */}
// //       <div
// //         id="contact-card"
// //         className={`md:w-[600px] p-6 rounded-2xl bg-black-400 shadow-2xl transition-all duration-1000 transform ${
// //           isVisible
// //             ? "opacity-100 translate-x-0 scale-100"
// //             : "opacity-0 -translate-x-20 scale-95"
// //         }`}
// //       >
// //         <h2 className="text-2xl font-bold mb-2 text-indigo-600">
// //           Send us a message
// //         </h2>
// //         <p className="mb-6 text-gray-600">
// //           Empowering your digital journey with Vocal Heart Infotech – Innovation
// //           at its core!
// //         </p>
// //         <form className="space-y-3">
// //           <input
// //             type="text"
// //             placeholder="Full Name"
// //             className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-400 outline-none transition"
// //           />
// //           <input
// //             type="text"
// //             placeholder="Mobile"
// //             className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-400 outline-none transition"
// //           />
// //           <input
// //             type="email"
// //             placeholder="Email"
// //             className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-400 outline-none transition"
// //           />
// //           <button
// //             type="button"
// //             className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
// //           >
// //             Verify Email
// //           </button>
// //           <input
// //             type="text"
// //             placeholder="Verify Code (required)"
// //             className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-400 outline-none transition"
// //           />
// //           <input
// //             type="text"
// //             placeholder="Subject"
// //             className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-400 outline-none transition"
// //           />
// //           <textarea
// //             placeholder="Message"
// //             className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-400 outline-none transition"
// //             rows={4}
// //           ></textarea>
// //           <button
// //             type="submit"
// //             className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
// //           >
// //             Send Message
// //           </button>
// //         </form>
// //       </div>
// //     </section>
// //   );
// // }



// // components/ContactSection.jsx
// "use client";
// import { useState, useEffect } from "react";

// export default function ContactSection() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const element = document.getElementById("contact-card");
//       if (element) {
//         const rect = element.getBoundingClientRect();
//         if (rect.top < window.innerHeight - 100) {
//           setIsVisible(true);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="px-8 py-16 bg-white flex flex-col md:flex-row justify-center items-start gap-10 relative">
      
//       {/* Top horizontal line (thin & black) */}
//       <div className="absolute top-0 left-0 w-full h-[2px] bg-black"></div>

//       {/* Left: Contact Info */}
//       <div className="md:w-1/2 space-y-6 relative">
//         {/* Centered top button (larger size) */}
//         <div className="flex justify-center mb-4">
//           <button className="bg-indigo-600 text-white px-6 py-2 rounded-full text-base font-semibold hover:bg-indigo-700 transition">
//             Contact Us
//           </button>
//         </div>

//         {/* Section title */}
//         <h2 className="font-bold text-lg mt-2">Get In Touch</h2>

//         {/* Contact details */}
//         <div className="flex items-start gap-4">
//           <span>📍</span>
//           <p>
//             Plot N. 3, Third Floor, Bajaj Tower, Raisen Rd, Lala Lajpat Rai
//             Colony, Bhopal, Madhya Pradesh 462023
//           </p>
//         </div>
//         <div className="flex items-center gap-4">
//           <span>✉️</span>
//           <p>info@vocalheart.com</p>
//         </div>
//         <div className="flex items-center gap-4">
//           <span>📞</span>
//           <p>07554937509</p>
//         </div>

//         {/* Middle horizontal line */}
//         <hr className="my-6 border-purple-300" />

//         {/* Map */}
//         <h2 className="font-bold text-lg mb-2">Find Us</h2>
//         <iframe
//           className="w-full h-48 rounded-lg shadow-md"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14672.49119750354!2d77.380764!3d23.259960!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4230a7a9b3bb%3A0x12f0b4d0ff7c0d22!2sBhopal!5e0!3m2!1sen!2sin!4v1698724850000!5m2!1sen!2sin"
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </div>

//       {/* Right: Contact Form (smaller width, full shadow) */}
//       <div
//         id="contact-card"
//         className={`md:w-[500px] p-6 rounded-2xl bg-white shadow-2xl shadow-black/40 transition-all duration-1000 transform ${
//           isVisible
//             ? "opacity-100 translate-x-0 scale-100"
//             : "opacity-0 -translate-x-20 scale-95"
//         }`}
//       >
//         <h2 className="text-2xl font-bold mb-2 text-indigo-600">
//           Send us a message
//         </h2>
//         <p className="mb-6 text-gray-600">
//           Empowering your digital journey with Vocal Heart Infotech – Innovation
//           at its core!
//         </p>
//         <form className="space-y-3">
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-400 outline-none transition"
//           />
//           <input
//             type="text"
//             placeholder="Mobile"
//             className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-400 outline-none transition"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-400 outline-none transition"
//           />
//           <button
//             type="button"
//             className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
//           >
//             Verify Email
//           </button>
//           <input
//             type="text"
//             placeholder="Verify Code (required)"
//             className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-400 outline-none transition"
//           />
//           <input
//             type="text"
//             placeholder="Subject"
//             className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-400 outline-none transition"
//           />
//           <textarea
//             placeholder="Message"
//             className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-400 outline-none transition"
//             rows={4}
//           ></textarea>
//           <button
//             type="submit"
//             className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }
