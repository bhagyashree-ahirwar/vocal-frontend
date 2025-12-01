

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, CheckCircle, Phone, Mail } from "lucide-react";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0 }
// };

// const ServicesPage = () => {
//   return (
//     <>
//       {/* Hero Section - Clean */}
//       <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6 py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-8"
//         >
//           <span className="text-sm font-semibold text-white">Professional Services</span>
//         </motion.div>

//         <motion.h1
//           variants={fadeUp}
//           initial="hidden"
//           animate="visible"
//           transition={{ duration: 0.7 }}
//           className="text-4xl md:text-6xl font-bold text-white max-w-4xl leading-tight"
//         >
//           Comprehensive Business Solutions
//           <span className="block text-3xl md:text-5xl bg-gradient-to-r from-slate-300 to-white bg-clip-text text-transparent">
//             Since 2011
//           </span>
//         </motion.h1>

//         <motion.p
//           variants={fadeUp}
//           initial="hidden"
//           animate="visible"
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-xl text-slate-300 mt-6 max-w-2xl mx-auto leading-relaxed"
//         >
//           Software development, BPO operations, and digital transformation services for growing businesses.
//         </motion.p>

//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           animate="visible"
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="flex flex-col sm:flex-row gap-4 mt-12"
//         >
//           <motion.button 
//             whileHover={{ scale: 1.05 }}
//             className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 justify-center"
//           >
//             Get Quote <ArrowRight className="w-5 h-5" />
//           </motion.button>
//           <motion.button 
//             whileHover={{ scale: 1.05 }}
//             className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-slate-900 transition-all"
//           >
//             View Case Studies
//           </motion.button>
//         </motion.div>
//       </section>

//       {/* Services Grid - ALL CLICKABLE */}
//       <section className="py-20 bg-slate-50">
//         <div className="max-w-6xl mx-auto px-6">
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Services</h2>
//             <p className="text-xl text-slate-600 max-w-2xl mx-auto">Tailored solutions for your business needs</p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { title: "Software Development", desc: "Custom web & mobile applications", icon: "💻", path: "/services/software" },
//               { title: "BPO Services", desc: "24/7 customer support operations", icon: "📞", path: "/services/bpo" },
//               { title: "KPO Services", desc: "Business process optimization", icon: "📊", path: "/services/kpo" },
//               { title: "CRM Development", desc: "Custom CRM systems & integrations", icon: "🧩", path: "/services/crm" },
//               { title: "Digital Marketing", desc: "Growth-focused marketing solutions", icon: "📈", path: "/services/marketing" },
//               { title: "IT Consulting", desc: "Technology strategy & implementation", icon: "🔧", path: "/services/consulting" }
//             ].map((service, i) => (
//               <motion.a
//                 key={i}
//                 href={service.path}
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//                 whileHover={{ y: -8, scale: 1.02 }}
//                 className="block bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-slate-100 text-center group cursor-pointer no-underline hover:no-underline"
//               >
//                 <div className="text-5xl mb-6 mx-auto group-hover:scale-110 transition-transform">{service.icon}</div>
//                 <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors">{service.title}</h3>
//                 <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
//                 <div className="flex items-center text-slate-700 font-semibold opacity-0 group-hover:opacity-100 transition-all">
//                   Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                 </div>
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-20 bg-white">
//         <div className="max-w-5xl mx-auto px-6">
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Why Choose Vocal Heart</h2>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-6">
//             {[
//               "14+ years of industry experience",
//               "500+ successful projects delivered", 
//               "Dedicated support teams",
//               "Custom solutions for Indian businesses",
//               "End-to-end project management",
//               "Proven process excellence"
//             ].map((benefit, i) => (
//               <motion.div
//                 key={i}
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: i * 0.08 }}
//                 className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-all group"
//               >
//                 <CheckCircle className="w-7 h-7 text-emerald-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
//                 <p className="text-lg text-slate-700 font-medium">{benefit}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center relative">
//         <div className="max-w-4xl mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
//             <p className="text-xl text-slate-300 mb-12 max-w-lg mx-auto">Transform your business with our proven solutions</p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-12">
//               <motion.button 
//                 whileHover={{ scale: 1.05 }}
//                 className="flex-1 bg-white text-slate-900 font-semibold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all"
//               >
//                 Request Quote
//               </motion.button>
//               <motion.button 
//                 whileHover={{ scale: 1.05 }}
//                 className="flex-1 border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-slate-900 transition-all"
//               >
//                 Contact Sales
//               </motion.button>
//             </div>

//             {/* Contact Info */}
//             <div className="grid md:grid-cols-2 gap-8 text-sm text-slate-400 max-w-lg mx-auto">
//               <div className="flex items-center justify-center gap-3 hover:text-white transition-colors">
//                 <Phone className="w-5 h-5" />
//                 <span>+91 98765 43210</span>
//               </div>
//               <div className="flex items-center justify-center gap-3 hover:text-white transition-colors">
//                 <Mail className="w-5 h-5" />
//                 <span>info@vocalheart.com</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ServicesPage;



"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone, Mail } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const ServicesPage = () => {
  return (
    <>
      {/* Hero Section - Compact and font size reduced */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 py-16 bg-gradient-to-br from-slate-900 to-slate-800 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 mb-6"
        >
          <span className="text-xs font-semibold text-white">Professional Services</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-white max-w-3xl leading-tight"
        >
          Comprehensive Business Solutions
          <span className="block text-2xl md:text-3xl bg-gradient-to-r from-slate-300 to-white bg-clip-text text-transparent">
            Since 2011
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-slate-300 mt-4 max-w-xl mx-auto leading-relaxed"
        >
          Software development, BPO operations, and digital transformation services for growing businesses.
        </motion.p>

        {/* Removed buttons here */}
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Our Services</h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">Tailored solutions for your business needs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Software Development", desc: "Custom web & mobile applications", icon: "💻", path: "/services/components/software" },
              { title: "BPO Services", desc: "24/7 customer support operations", icon: "📞", path: "/services/bpo" },
              { title: "KPO Services", desc: "Business process optimization", icon: "📊", path: "/services/kpo" },
              { title: "CRM Development", desc: "Custom CRM systems & integrations", icon: "🧩", path: "/services/crm" },
              { title: "Digital Marketing", desc: "Growth-focused marketing solutions", icon: "📈", path: "/services/marketing" },
              { title: "IT Consulting", desc: "Technology strategy & implementation", icon: "🔧", path: "/services/consulting" }
            ].map((service, i) => (
              <motion.a
                key={i}
                href={service.path}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-slate-100 text-center group cursor-pointer no-underline hover:no-underline"
              >
                <div className="text-4xl mb-4 mx-auto group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">{service.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex items-center text-slate-700 font-semibold opacity-0 group-hover:opacity-100 transition-all justify-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Vocal Heart</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              "14+ years of industry experience",
              "500+ successful projects delivered",
              "Dedicated support teams",
              "Custom solutions for Indian businesses",
              "End-to-end project management",
              "Proven process excellence"
            ].map((benefit, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-md transition-all group"
              >
                <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <p className="text-base text-slate-700 font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Ready to Get Started?</h2>
            <p className="text-lg text-slate-300 mb-10 max-w-lg mx-auto">
              Transform your business with our proven solutions
            </p>

            <div className="grid grid-cols-1 gap-4 max-w-md mx-auto mb-10 text-sm text-slate-400">
              <div className="flex items-center justify-center gap-3 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center justify-center gap-3 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@vocalheart.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
