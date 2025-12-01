


// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Main Footer Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
//           {/* Company Info */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-6"
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-coral flex items-center justify-center text-white font-bold text-lg">VH</div>
//               <div>
//                 <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Vocal Heart</h2>
//                 <p className="text-sm text-gray-400">AI-Powered Marketing</p>
//               </div>
//             </div>
//             <p className="text-gray-400 leading-relaxed max-w-md">
//               Transforming businesses with cutting-edge AI solutions and innovative marketing strategies.
//             </p>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="space-y-6"
//           >
//             <h3 className="text-xl font-bold text-white">Quick Links</h3>
//             <ul className="space-y-3">
//               {[
//                 { href: "/about", label: "About Us" },
//                 { href: "/services", label: "Services" },
//                 { href: "/templates", label: "Templates" },
//                 { href: "/contact", label: "Contact" },
//               ].map((item, idx) => (
//                 <motion.li key={item.href} whileHover={{ x: 4 }}>
//                   <Link 
//                     href={item.href} 
//                     className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 group"
//                   >
//                     <span className="w-1 h-1 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform" />
//                     {item.label}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Services */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="space-y-6"
//           >
//             <h3 className="text-xl font-bold text-white">Our Services</h3>
//             <ul className="space-y-3">
//               {[
//                 "BPO & KPO Services",
//                 "Software Development", 
//                 "Digital Marketing",
//                 "AI Solutions",
//                 "Trainings & Placement"
//               ].map((service, idx) => (
//                 <motion.li 
//                   key={service}
//                   whileHover={{ x: 4 }}
//                   className="text-gray-300 hover:text-white transition-all duration-300"
//                 >
//                   <Link href="/services" className="flex items-center gap-2">
//                     <span className="w-1.5 h-1.5 bg-coral rounded-full" />
//                     {service}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact & Social */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="space-y-6"
//           >
//             <h3 className="text-xl font-bold text-white">Stay Connected</h3>
            
//             {/* Social Links */}
//             <div className="flex gap-4 mb-6">
//               {[
//                 { icon: FaFacebookF, href: "https://facebook.com", color: "from-blue-600 to-blue-700" },
//                 { icon: FaLinkedinIn, href: "https://linkedin.com", color: "from-blue-500 to-blue-600" },
//                 { icon: FaInstagram, href: "https://instagram.com", color: "from-pink-500 to-purple-600" },
//                 { icon: FaTwitter, href: "https://twitter.com", color: "from-sky-400 to-sky-500" },
//               ].map(({ icon: Icon, href, color }) => (
//                 <motion.a
//                   key={href}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.1, y: -2 }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:${color} text-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-transparent`}
//                 >
//                   <Icon className="w-5 h-5" />
//                 </motion.a>
//               ))}
//             </div>

//             {/* Newsletter Signup */}
//             <div className="space-y-3">
//               <p className="text-sm text-gray-400">Get latest updates</p>
//               <div className="flex gap-2">
//                 <input 
//                   type="email" 
//                   placeholder="your@email.com"
//                   className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:border-primary transition-all"
//                 />
//                 <motion.button 
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-6 py-3 bg-gradient-to-r from-primary to-coral text-white font-semibold rounded-xl hover:from-coral hover:to-primary transition-all shadow-lg hover:shadow-xl"
//                 >
//                   Subscribe
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom Bar */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400"
//         >
//           <p>© 2009 - 2025 Vocal Heart Infotech Private Limited. All rights reserved.</p>
//           <div className="flex gap-6">
//             <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
//             <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   );
// }


"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-coral flex items-center justify-center text-white font-bold text-lg">VH</div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Vocal Heart</h2>
                <p className="text-sm text-gray-400">AI-Powered Marketing</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Transforming businesses with cutting-edge AI solutions and innovative marketing strategies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/templates", label: "Templates" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <motion.li key={item.href} whileHover={{ x: 4 }}>
                  <Link 
                    href={item.href} 
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform" />
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white">Our Services</h3>
            <ul className="space-y-3">
              {[
                "BPO & KPO Services",
                "Software Development", 
                "Digital Marketing",
                "AI Solutions",
                "Trainings & Placement"
              ].map((service) => (
                <motion.li 
                  key={service}
                  whileHover={{ x: 4 }}
                  className="text-gray-300 hover:text-white transition-all duration-300"
                >
                  <Link href="/services" className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-coral rounded-full" />
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white">Stay Connected</h3>
            
            {/* Social Links */}
            <div className="flex gap-4 mb-6">
              {[
                { icon: FaFacebookF, href: "https://facebook.com", color: "hover:bg-blue-600" },
                { icon: FaLinkedinIn, href: "https://linkedin.com", color: "hover:bg-blue-500" },
                { icon: FaInstagram, href: "https://instagram.com", color: "hover:bg-pink-500" },
                { icon: FaTwitter, href: "https://twitter.com", color: "hover:bg-sky-400" },
              ].map(({ icon: Icon, href, color }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 rounded-2xl bg-white/10 backdrop-blur-sm text-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 ${color}`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <p className="text-sm text-gray-400">Get latest updates</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:border-primary transition-all"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-primary to-coral text-white font-semibold rounded-xl hover:from-coral hover:to-primary transition-all shadow-lg hover:shadow-xl"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400"
        >
          <p>© 2009 - 2025 Vocal Heart Infotech Private Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

