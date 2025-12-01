

// // // "use client";
// // // import React, { useRef } from "react";
// // // import { motion } from "framer-motion";
// // // import { Download, Instagram, Linkedin } from "lucide-react";
// // // import html2canvas from 'html2canvas';

// // // export default function TemplatesExport() {
// // //   const refs = {
// // //     instaQuote: useRef(null),
// // //     instaService: useRef(null),
// // //     instaBeforeAfter: useRef(null),
// // //     linkedinThought: useRef(null),
// // //     linkedinTeam: useRef(null),
// // //     linkedinImprovement: useRef(null),
// // //   };

// // //   const exportNodeAsImage = async (nodeRef, fileName) => {
// // //     if (!nodeRef?.current) return;
    
// // //     try {
// // //       const canvas = await html2canvas(nodeRef.current, {
// // //         scale: 2,
// // //         useCORS: true,
// // //         backgroundColor: '#ffffff',
// // //       });
      
// // //       const link = document.createElement('a');
// // //       link.download = `${fileName}.png`;
// // //       link.href = canvas.toDataURL();
// // //       link.click();
// // //     } catch (error) {
// // //       alert('Download failed. Please try again.');
// // //     }
// // //   };

// // //   const TemplateCard = ({ title, onDownload, children, refProp }) => (
// // //     <motion.div
// // //       initial={{ opacity: 0, y: 30 }}
// // //       whileInView={{ opacity: 1, y: 0 }}
// // //       viewport={{ once: true }}
// // //       transition={{ duration: 0.5 }}
// // //       className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all"
// // //     >
// // //       {/* Header */}
// // //       <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
// // //         <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
// // //         <motion.button
// // //           onClick={onDownload}
// // //           whileHover={{ scale: 1.05 }}
// // //           whileTap={{ scale: 0.95 }}
// // //           className="flex items-center gap-2 text-xs bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white px-4 py-2 rounded-lg shadow-md transition-all font-medium"
// // //         >
// // //           <Download className="w-3 h-3" />
// // //           Download PNG
// // //         </motion.button>
// // //       </div>

// // //       {/* Template Preview */}
// // //       <div className="p-6">
// // //         <div ref={refProp} className="select-none">
// // //           {children}
// // //         </div>
// // //       </div>
// // //     </motion.div>
// // //   );

// // //   return (
// // //     <div className="w-full min-h-screen py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
// // //       <div className="max-w-7xl mx-auto">
// // //         {/* Page Header */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: -20 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.6 }}
// // //           className="text-center mb-20"
// // //         >
// // //           <span className="text-slate-600 font-semibold text-sm uppercase tracking-wide">Social Media</span>
// // //           <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
// // //             Ready-to-Use Templates
// // //           </h1>
// // //           <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
// // //             Professional designs for Instagram & LinkedIn. Download instantly and customize for your brand.
// // //           </p>
// // //         </motion.div>

// // //         {/* ================= INSTAGRAM SECTION ================= */}
// // //         <section className="mb-24">
// // //           <motion.div
// // //             initial={{ opacity: 0, x: -20 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             viewport={{ once: true }}
// // //             className="flex items-center gap-4 mb-12"
// // //           >
// // //             <div className="p-4 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl text-white shadow-lg">
// // //               <Instagram className="w-7 h-7" />
// // //             </div>
// // //             <div>
// // //               <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Instagram Posts</h2>
// // //               <p className="text-slate-500 text-sm font-medium">1080 × 1080 px • Square Format</p>
// // //             </div>
// // //           </motion.div>

// // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //             {/* Quote Template */}
// // //             <TemplateCard
// // //               title="Inspirational Quote"
// // //               refProp={refs.instaQuote}
// // //               onDownload={() => exportNodeAsImage(refs.instaQuote, "vocalheart-quote")}
// // //             >
// // //               <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-md border border-slate-100 p-8 aspect-square flex flex-col justify-between h-[350px]">
// // //                 <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">
// // //                   💡 Daily Insight
// // //                 </p>

// // //                 <h1 className="text-xl md:text-2xl font-black text-slate-900 text-center leading-tight flex-1 flex items-center">
// // //                   "Great software doesn't just solve problems—<br/>it creates opportunities."
// // //                 </h1>

// // //                 <div className="flex justify-between items-center pt-4 border-t border-slate-200">
// // //                   <p className="text-xs text-slate-500">#VocalHeart #SoftwareExcellence</p>
// // //                   <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-xl flex items-center justify-center font-bold text-sm shadow-lg">
// // //                     VH
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </TemplateCard>

// // //             {/* Service Template */}
// // //             <TemplateCard
// // //               title="Service Highlight"
// // //               refProp={refs.instaService}
// // //               onDownload={() => exportNodeAsImage(refs.instaService, "vocalheart-service")}
// // //             >
// // //               <div className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden aspect-square h-[350px]">
// // //                 <div className="grid grid-cols-2 h-full">
// // //                   <div className="p-6 flex flex-col justify-between">
// // //                     <div>
// // //                       <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-2">Growth Package</p>
// // //                       <h2 className="text-lg md:text-xl font-black text-slate-900 leading-tight">
// // //                         Custom Software<br/>Development
// // //                       </h2>
// // //                     </div>
// // //                     <button className="bg-gradient-to-r from-slate-800 to-slate-900 text-white px-5 py-2 rounded-lg shadow-md text-sm font-semibold w-fit hover:shadow-lg transition-all">
// // //                       Learn More
// // //                     </button>
// // //                   </div>

// // //                   <div className="bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
// // //                     <div className="w-20 h-20 bg-white/20 backdrop-blur-sm text-slate-900 rounded-xl flex items-center justify-center font-bold text-2xl shadow-xl border-4 border-white/30">
// // //                       💻
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </TemplateCard>

// // //             {/* Before/After Template */}
// // //             <TemplateCard
// // //               title="Before / After"
// // //               refProp={refs.instaBeforeAfter}
// // //               onDownload={() => exportNodeAsImage(refs.instaBeforeAfter, "vocalheart-before-after")}
// // //             >
// // //               <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-6 aspect-square h-[350px] flex flex-col justify-between">
// // //                 <div className="grid grid-cols-2 gap-4 flex-1">
// // //                   <div className="flex flex-col items-center border-r border-slate-200 pr-2 py-4">
// // //                     <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-3 shadow-md">
// // //                       <span className="text-2xl">📋</span>
// // //                     </div>
// // //                     <h3 className="text-base font-bold text-slate-700 mb-1">Before</h3>
// // //                     <p className="text-slate-600 text-xs text-center leading-tight px-1">
// // //                       Manual processes<br/>Slow operations
// // //                     </p>
// // //                   </div>

// // //                   <div className="flex flex-col items-center pl-2 py-4">
// // //                     <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-3 shadow-md">
// // //                       <span className="text-2xl">⚡</span>
// // //                     </div>
// // //                     <h3 className="text-base font-bold text-emerald-700 mb-1">After</h3>
// // //                     <p className="text-slate-600 text-xs text-center leading-tight px-1">
// // //                       Automated workflows<br/>Fast results
// // //                     </p>
// // //                   </div>
// // //                 </div>

// // //                 <div className="pt-4 border-t border-slate-200 text-center">
// // //                   <p className="text-xs text-slate-500">Powered by Vocal Heart</p>
// // //                 </div>
// // //               </div>
// // //             </TemplateCard>
// // //           </div>
// // //         </section>

// // //         {/* ================= LINKEDIN SECTION ================= */}
// // //         <section>
// // //           <motion.div
// // //             initial={{ opacity: 0, x: -20 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             viewport={{ once: true }}
// // //             className="flex items-center gap-4 mb-12"
// // //           >
// // //             <div className="p-4 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl text-white shadow-lg">
// // //               <Linkedin className="w-7 h-7" />
// // //             </div>
// // //             <div>
// // //               <h2 className="text-3xl md:text-4xl font-bold text-slate-900">LinkedIn Posts</h2>
// // //               <p className="text-slate-500 text-sm font-medium">1080 × 1350 px • Portrait Format</p>
// // //             </div>
// // //           </motion.div>

// // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //             {/* Thought Leadership */}
// // //             <TemplateCard
// // //               title="Thought Leadership"
// // //               refProp={refs.linkedinThought}
// // //               onDownload={() => exportNodeAsImage(refs.linkedinThought, "vocalheart-linkedin-thought")}
// // //             >
// // //               <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-md border border-slate-100 p-8 h-[450px] flex flex-col">
// // //                 <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center text-white font-bold mb-6 shadow-lg">
// // //                   VH
// // //                 </div>
// // //                 <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 leading-tight">
// // //                   Future of Business Operations<br/>in Digital India
// // //                 </h2>
// // //                 <p className="text-slate-700 leading-relaxed mb-6 text-sm flex-1">
// // //                   Automation + Software Excellence = Sustainable Growth for Indian SMEs.
// // //                 </p>
// // //                 <p className="text-xs text-slate-500 mt-auto pt-6 border-t border-slate-200">
// // //                   #DigitalIndia #VocalHeart #SoftwareDevelopment
// // //                 </p>
// // //               </div>
// // //             </TemplateCard>

// // //             {/* Team Highlight */}
// // //             <TemplateCard
// // //               title="Team Spotlight"
// // //               refProp={refs.linkedinTeam}
// // //               onDownload={() => exportNodeAsImage(refs.linkedinTeam, "vocalheart-team-spotlight")}
// // //             >
// // //               <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-8 h-[450px] flex flex-col">
// // //                 <div className="flex gap-4 items-center mb-8">
// // //                   <div className="w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center font-bold text-xl text-white shadow-lg">
// // //                     DS
// // //                   </div>
// // //                   <div>
// // //                     <h3 className="text-xl font-black text-slate-900">Dhruv Saxena</h3>
// // //                     <p className="text-slate-600 text-sm font-semibold">Founder & Director</p>
// // //                   </div>
// // //                 </div>

// // //                 <p className="text-slate-700 leading-relaxed text-sm mb-6 flex-1">
// // //                   "14+ years building software solutions that power businesses across India. 
// // //                   We believe technology should simplify, not complicate."
// // //                 </p>

// // //                 <p className="text-xs text-slate-500 mt-auto pt-6 border-t border-slate-200">
// // //                   #VocalHeart #Leadership #TechIndia
// // //                 </p>
// // //               </div>
// // //             </TemplateCard>

// // //             {/* Transformation */}
// // //             <TemplateCard
// // //               title="Business Transformation"
// // //               refProp={refs.linkedinImprovement}
// // //               onDownload={() => exportNodeAsImage(refs.linkedinImprovement, "vocalheart-transformation")}
// // //             >
// // //               <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-8 h-[450px] flex flex-col">
// // //                 <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-8">
// // //                   Digital Transformation Journey
// // //                 </h2>

// // //                 <div className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 rounded-2xl p-6 shadow-sm mb-6 flex-1">
// // //                   <div className="flex items-start gap-3 mb-4">
// // //                     <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
// // //                       <span className="text-xl">📋</span>
// // //                     </div>
// // //                     <div>
// // //                       <h3 className="text-lg font-bold text-slate-800 mb-1">Manual Operations</h3>
// // //                       <p className="text-sm text-slate-600">Paperwork • Slow processes • Lost leads</p>
// // //                     </div>
// // //                   </div>
                  
// // //                   <div className="flex justify-center mb-6">
// // //                     <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-full flex items-center justify-center shadow-lg font-bold text-sm -mt-6 z-10">
// // //                       →
// // //                     </div>
// // //                   </div>

// // //                   <div className="flex items-start gap-3">
// // //                     <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
// // //                       <span className="text-xl">⚡</span>
// // //                     </div>
// // //                     <div>
// // //                       <h3 className="text-lg font-bold text-emerald-800 mb-1">Digital Excellence</h3>
// // //                       <p className="text-sm text-slate-600">Automation • CRM • Real-time insights</p>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 <p className="text-xs text-slate-500 text-center">
// // //                   Partner with Vocal Heart for your digital journey
// // //                 </p>
// // //               </div>
// // //             </TemplateCard>
// // //           </div>
// // //         </section>
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // "use client";
// // import { motion } from "framer-motion";
// // import { useState } from "react";
// // import { ArrowRight, Phone, Mail, MapPin, Clock, Users, GraduationCap } from "lucide-react";

// // export default function CareersPage() {
// //   const [activeTab, setActiveTab] = useState("openings");

// //   const jobOpenings = [
// //     {
// //       title: "Full Stack Developer",
// //       type: "Full-time • Bhopal",
// //       salary: "₹6-12 LPA",
// //       experience: "2-5 Years",
// //     },
// //     {
// //       title: "BPO Team Lead",
// //       type: "Full-time • Bhopal",
// //       salary: "₹4-7 LPA",
// //       experience: "2-4 Years",
// //     },
// //     {
// //       title: "Software Tester",
// //       type: "Full-time • Bhopal",
// //       salary: "₹4-8 LPA",
// //       experience: "1-3 Years",
// //     },
// //   ];

// //   return (
// //     <div className="w-full min-h-screen bg-white">
// //       {/* Hero Section */}
// //       <section className="pt-24 pb-20 px-6 md:px-12 lg:px-24">
// //         <div className="max-w-6xl mx-auto text-center">
// //           <div className="inline-flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-2xl border border-gray-200 mb-8">
// //             <div className="w-2 h-2 bg-blue-600 rounded-full" />
// //             <span className="text-sm font-semibold text-gray-700">Careers</span>
// //           </div>

// //           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
// //             Join Our Team
// //           </h1>

// //           <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
// //             Building careers since 2009. Join Vocal Heart Infotech - 
// //             16+ years of excellence, 500+ clients served.
// //           </p>

// //           <div className="flex flex-col sm:flex-row gap-6 justify-center">
// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all border border-blue-600/50 text-lg"
// //             >
// //               View Openings
// //             </motion.button>
            
// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               className="px-10 py-5 bg-gray-50 border-2 border-gray-200 rounded-2xl font-bold text-gray-900 hover:bg-gray-100 transition-all text-lg flex items-center gap-2"
// //             >
// //               <Phone className="w-5 h-5" />
// //               +91 7554937509
// //             </motion.button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Tabs */}
// //       <section className="px-6 md:px-12 lg:px-24 pb-20">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="flex flex-wrap gap-4 justify-center mb-20">
// //             {["openings", "benefits", "culture"].map((tab) => (
// //               <motion.button
// //                 key={tab}
// //                 onClick={() => setActiveTab(tab)}
// //                 whileHover={{ scale: 1.02 }}
// //                 className={`px-8 py-4 rounded-2xl font-semibold transition-all text-sm ${
// //                   activeTab === tab
// //                     ? "bg-blue-600 text-white shadow-lg"
// //                     : "bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100"
// //                 }`}
// //               >
// //                 {tab === "openings" && "Job Openings"}
// //                 {tab === "benefits" && "Benefits"}
// //                 {tab === "culture" && "Culture"}
// //               </motion.button>
// //             ))}
// //           </div>

// //           {/* Job Openings */}
// //           {activeTab === "openings" && (
// //             <div className="grid md:grid-cols-2 gap-8">
// //               {jobOpenings.map((job, index) => (
// //                 <motion.div
// //                   key={index}
// //                   initial={{ opacity: 0, y: 30 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:border-blue-200 transition-all group"
// //                 >
// //                   <div className="flex items-start gap-4 mb-6">
// //                     <div className="w-3 h-3 bg-blue-600 rounded-full mt-2" />
// //                     <div>
// //                       <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
// //                       <p className="text-blue-600 font-semibold">{job.type}</p>
// //                     </div>
// //                   </div>

// //                   <div className="space-y-3 mb-8 text-gray-600">
// //                     <div className="flex items-center gap-2">
// //                       <span className="font-semibold text-gray-900">{job.salary}</span>
// //                     </div>
// //                     <div className="flex items-center gap-2">
// //                       <Clock className="w-4 h-4" />
// //                       <span>{job.experience}</span>
// //                     </div>
// //                   </div>

// //                   <motion.button
// //                     whileHover={{ scale: 1.05 }}
// //                     className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group-hover:translate-y-[-2px]"
// //                     onClick={() => window.location.href = "/apply"}
// //                   >
// //                     Apply Now
// //                   </motion.button>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           )}

// //           {/* Benefits */}
// //           {activeTab === "benefits" && (
// //             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //               {[
// //                 { title: "Competitive Salary", desc: "Market-leading compensation packages" },
// //                 { title: "Training Programs", desc: "Continuous skill development" },
// //                 { title: "Flexible Hours", desc: "Work-life balance focus" },
// //                 { title: "Team Events", desc: "Regular team building activities" },
// //                 { title: "Health Insurance", desc: "Comprehensive medical coverage" },
// //                 { title: "Career Growth", desc: "Clear promotion pathways" },
// //               ].map((benefit, i) => (
// //                 <motion.div
// //                   key={i}
// //                   initial={{ opacity: 0, y: 30 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   whileHover={{ scale: 1.02 }}
// //                   className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all text-center group"
// //                 >
// //                   <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-all">
// //                     <GraduationCap className="w-10 h-10 text-blue-600" />
// //                   </div>
// //                   <h4 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h4>
// //                   <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           )}

// //           {/* Culture */}
// //           {activeTab === "culture" && (
// //             <div className="max-w-4xl mx-auto text-center">
// //               <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Work Culture</h2>
// //               <div className="space-y-8">
// //                 <div className="bg-white border border-gray-200 rounded-3xl p-12 shadow-lg">
// //                   <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
// //                     "Collaborative environment with focus on innovation, growth, and work-life balance. 
// //                     Join a team that's been building India's future since 2009."
// //                   </p>
// //                 </div>
                
// //                 <div className="grid md:grid-cols-3 gap-6">
// //                   <div className="text-center">
// //                     <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
// //                       👥
// //                     </div>
// //                     <h4 className="font-bold text-gray-900 mb-2">Team First</h4>
// //                     <p className="text-gray-600">Collaborative culture</p>
// //                   </div>
// //                   <div className="text-center">
// //                     <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
// //                       📈
// //                     </div>
// //                     <h4 className="font-bold text-gray-900 mb-2">Growth</h4>
// //                     <p className="text-gray-600">Continuous learning</p>
// //                   </div>
// //                   <div className="text-center">
// //                     <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
// //                       ⚖️
// //                     </div>
// //                     <h4 className="font-bold text-gray-900 mb-2">Balance</h4>
// //                     <p className="text-gray-600">Flexible working hours</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 px-6 md:px-12 lg:px-24">
// //         <div className="max-w-4xl mx-auto text-center">
// //           <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Apply?</h2>
// //           <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
// //             Send your resume and join India's leading BPO & Software company.
// //           </p>
// //           <div className="flex flex-col sm:flex-row gap-6 justify-center">
// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               className="px-12 py-6 bg-white text-blue-600 font-bold rounded-3xl shadow-2xl hover:shadow-3xl transition-all text-lg"
// //               onClick={() => window.location.href = "/apply"}
// //             >
// //               Apply Now
// //             </motion.button>
// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               className="px-12 py-6 border-2 border-white rounded-3xl font-bold text-white hover:bg-white hover:text-blue-600 transition-all text-lg flex items-center gap-3 justify-center"
// //             >
// //               <Mail className="w-5 h-5" />
// //               careers@vocalheart.com
// //             </motion.button>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }




// "use client";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { ArrowRight, Phone, Mail, MapPin, Clock, Users, GraduationCap } from "lucide-react";

// export default function CareersPage() {
//   const [activeTab, setActiveTab] = useState("openings");

//   const jobOpenings = [
//     {
//       title: "Full Stack Developer",
//       type: "Full-time • Bhopal",
//       salary: "₹6-12 LPA",
//       experience: "2-5 Years",
//     },
//     {
//       title: "BPO Team Lead",
//       type: "Full-time • Bhopal",
//       salary: "₹4-7 LPA",
//       experience: "2-4 Years",
//     },
//     {
//       title: "Software Tester",
//       type: "Full-time • Bhopal",
//       salary: "₹4-8 LPA",
//       experience: "1-3 Years",
//     },
//   ];

//   return (
//     <>
//       {/* Hero Section - Dark theme like About */}
//       <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 pt-20">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="space-y-6"
//             >
//               <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 w-fit">
//                 <span className="text-sm font-semibold text-white">Careers</span>
//               </div>
              
//               <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
//                 Vocal Heart
//                 <span className="block text-3xl md:text-5xl bg-gradient-to-r from-slate-300 to-white bg-clip-text text-transparent">
//                   Careers
//                 </span>
//               </h1>

//               <p className="text-xl text-slate-300 max-w-lg leading-relaxed">
//                 Building careers since 2009. Join Vocal Heart Infotech - 
//                 16+ years of excellence, 500+ clients served.
//               </p>

//               {/* Stats */}
//               <div className="grid grid-cols-3 gap-6 pt-4">
//                 {[
//                   { value: "16+", label: "Years" },
//                   { value: "500+", label: "Clients" },
//                   { value: "50+", label: "Team" }
//                 ].map((stat, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.3 + i * 0.1 }}
//                     className="text-center"
//                   >
//                     <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
//                     <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
//                   </motion.div>
//                 ))}
//               </div>

//               <div className="flex gap-4">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   className="bg-white text-slate-900 font-semibold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all"
//                   onClick={() => document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' })}
//                 >
//                   View Openings
//                 </motion.button>
//                 <motion.button 
//                   whileHover={{ scale: 1.05 }}
//                   className="border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-slate-900 transition-all flex items-center gap-2"
//                 >
//                   <Phone className="w-4 h-4" />
//                   +91 7554937509
//                 </motion.button>
//               </div>
//             </motion.div>

//             {/* Right Image */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               className="hidden md:flex justify-center"
//             >
//               <div className="w-80 h-80 bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl flex items-center justify-center shadow-2xl">
//                 <Users className="w-32 h-32 text-slate-400" />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Tabs Section */}
//       <section id="openings" className="px-6 md:px-12 lg:px-24 py-20 bg-slate-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex flex-wrap gap-4 justify-center mb-20">
//             {["openings", "benefits", "culture"].map((tab) => (
//               <motion.button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 whileHover={{ scale: 1.02 }}
//                 className={`px-8 py-4 rounded-2xl font-semibold transition-all text-sm ${
//                   activeTab === tab
//                     ? "bg-slate-900 text-white shadow-lg"
//                     : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 shadow-md"
//                 }`}
//               >
//                 {tab === "openings" && "Job Openings"}
//                 {tab === "benefits" && "Benefits"}
//                 {tab === "culture" && "Culture"}
//               </motion.button>
//             ))}
//           </div>

//           {/* Job Openings */}
//           {activeTab === "openings" && (
//             <div className="grid md:grid-cols-2 gap-8">
//               {jobOpenings.map((job, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all"
//                 >
//                   <div className="flex items-start gap-4 mb-6">
//                     <div className="w-3 h-3 bg-slate-900 rounded-full mt-2 flex-shrink-0" />
//                     <div>
//                       <h3 className="text-2xl font-bold text-slate-900 mb-2">{job.title}</h3>
//                       <p className="text-slate-600 font-semibold">{job.type}</p>
//                     </div>
//                   </div>

//                   <div className="space-y-3 mb-8 text-slate-600">
//                     <div className="flex items-center gap-2">
//                       <span className="font-bold text-2xl text-slate-900">{job.salary}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Clock className="w-4 h-4 text-slate-500" />
//                       <span>{job.experience}</span>
//                     </div>
//                   </div>

//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     className="w-full bg-slate-900 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
//                     onClick={() => window.location.href = "mailto:careers@vocalheart.com"}
//                   >
//                     Apply Now
//                   </motion.button>
//                 </motion.div>
//               ))}
//             </div>
//           )}

//           {/* Benefits */}
//           {activeTab === "benefits" && (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {[
//                 { title: "Competitive Salary", desc: "Market-leading compensation packages" },
//                 { title: "Training Programs", desc: "Continuous skill development" },
//                 { title: "Flexible Hours", desc: "Work-life balance focus" },
//                 { title: "Team Events", desc: "Regular team building activities" },
//                 { title: "Health Insurance", desc: "Comprehensive medical coverage" },
//                 { title: "Career Growth", desc: "Clear promotion pathways" },
//               ].map((benefit, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   whileHover={{ scale: 1.02 }}
//                   className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all text-center"
//                 >
//                   <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:bg-slate-200 transition-all">
//                     <GraduationCap className="w-10 h-10 text-slate-700" />
//                   </div>
//                   <h4 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h4>
//                   <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
//                 </motion.div>
//               ))}
//             </div>
//           )}

//           {/* Culture */}
//           {activeTab === "culture" && (
//             <div className="max-w-4xl mx-auto text-center">
//               <h2 className="text-4xl font-bold text-slate-900 mb-12">Our Work Culture</h2>
//               <div className="space-y-8">
//                 <div className="bg-white border border-slate-100 rounded-3xl p-12 shadow-xl">
//                   <p className="text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto">
//                     "Collaborative environment with focus on innovation, growth, and work-life balance. 
//                     Join a team that's been building India's future since 2009."
//                   </p>
//                 </div>
                
//                 <div className="grid md:grid-cols-3 gap-6">
//                   <div className="text-center">
//                     <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
//                       👥
//                     </div>
//                     <h4 className="font-bold text-slate-900 mb-2">Team First</h4>
//                     <p className="text-slate-600">Collaborative culture</p>
//                   </div>
//                   <div className="text-center">
//                     <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
//                       📈
//                     </div>
//                     <h4 className="font-bold text-slate-900 mb-2">Growth</h4>
//                     <p className="text-slate-600">Continuous learning</p>
//                   </div>
//                   <div className="text-center">
//                     <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
//                       ⚖️
//                     </div>
//                     <h4 className="font-bold text-slate-900 mb-2">Balance</h4>
//                     <p className="text-slate-600">Flexible working hours</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* CTA Section - Dark theme */}
//       <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center">
//         <div className="max-w-4xl mx-auto px-6">
//           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Apply?</h2>
//             <p className="text-xl text-slate-300 mb-10 max-w-lg mx-auto">
//               Send your resume and join India's leading BPO & Software company.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
//               <motion.button 
//                 whileHover={{ scale: 1.05 }}
//                 className="flex-1 bg-white text-slate-900 font-semibold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all"
//                 onClick={() => window.location.href = "mailto:careers@vocalheart.com"}
//               >
//                 Apply Now
//               </motion.button>
//               <motion.button 
//                 whileHover={{ scale: 1.05 }}
//                 className="flex-1 border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-slate-900 transition-all flex items-center gap-2 justify-center"
//               >
//                 <Mail className="w-4 h-4" />
//                 Email Resume
//               </motion.button>
//             </div>

//             <div className="grid md:grid-cols-3 gap-6 mt-16 text-sm text-slate-400">
//               <div className="flex items-center gap-3 hover:text-white transition-colors justify-center">
//                 <Phone className="w-5 h-5" />
//                 <span>+91 7554937509</span>
//               </div>
//               <div className="flex items-center gap-3 hover:text-white transition-colors justify-center">
//                 <Mail className="w-5 h-5" />
//                 <span>careers@vocalheart.com</span>
//               </div>
//               <div className="flex items-center gap-3 hover:text-white transition-colors justify-center">
//                 <MapPin className="w-5 h-5" />
//                 <span>Bhopal, MP</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// }



"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, Clock, Users, GraduationCap } from "lucide-react";

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState("benefits");

  const jobOpenings = [
    {
      title: "Full Stack Developer",
      type: "Full-time • Bhopal",
      salary: "₹6-12 LPA",
      experience: "2-5 Years",
    },
    {
      title: "BPO Team Lead",
      type: "Full-time • Bhopal",
      salary: "₹4-7 LPA",
      experience: "2-4 Years",
    },
    {
      title: "Software Tester",
      type: "Full-time • Bhopal",
      salary: "₹4-8 LPA",
      experience: "1-3 Years",
    },
  ];

  return (
    <>
      {/* Hero Section - Dark theme like About */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 w-fit">
                <span className="text-sm font-semibold text-white">Careers</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Vocal Heart
                <span className="block text-3xl md:text-5xl bg-gradient-to-r from-slate-300 to-white bg-clip-text text-transparent">
                  Careers
                </span>
              </h1>

              <p className="text-xl text-slate-300 max-w-lg leading-relaxed">
                Building careers since 2009. Join Vocal Heart Infotech - 
                16+ years of excellence, 500+ clients served.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                {[
                  { value: "16+", label: "Years" },
                  { value: "500+", label: "Clients" },
                  { value: "50+", label: "Team" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-center"
                  >
                    <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                    <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-slate-900 transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  +91 7554937509
                </motion.button>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="hidden md:flex justify-center"
            >
              <div className="w-80 h-80 bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl flex items-center justify-center shadow-2xl">
                <Users className="w-32 h-32 text-slate-400" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Section - WITHOUT Job Openings */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-20">
            {["benefits", "culture"].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.02 }}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all text-sm ${
                  activeTab === tab
                    ? "bg-slate-900 text-white shadow-lg"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 shadow-md"
                }`}
              >
                {tab === "benefits" && "Benefits"}
                {tab === "culture" && "Culture"}
              </motion.button>
            ))}
          </div>

          {/* Benefits */}
          {activeTab === "benefits" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Competitive Salary", desc: "Market-leading compensation packages" },
                { title: "Training Programs", desc: "Continuous skill development" },
                { title: "Flexible Hours", desc: "Work-life balance focus" },
                { title: "Team Events", desc: "Regular team building activities" },
                { title: "Health Insurance", desc: "Comprehensive medical coverage" },
                { title: "Career Growth", desc: "Clear promotion pathways" },
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all text-center"
                >
                  <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:bg-slate-200 transition-all">
                    <GraduationCap className="w-10 h-10 text-slate-700" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          )}

          {/* Culture */}
          {activeTab === "culture" && (
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-slate-900 mb-12">Our Work Culture</h2>
              <div className="space-y-8">
                <div className="bg-white border border-slate-100 rounded-3xl p-12 shadow-xl">
                  <p className="text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto">
                    "Collaborative environment with focus on innovation, growth, and work-life balance. 
                    Join a team that's been building India's future since 2009."
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                      👥
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Team First</h4>
                    <p className="text-slate-600">Collaborative culture</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                      📈
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Growth</h4>
                    <p className="text-slate-600">Continuous learning</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                      ⚖️
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Balance</h4>
                    <p className="text-slate-600">Flexible working hours</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section - Dark theme */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Apply?</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-lg mx-auto">
              Send your resume and join India's leading BPO & Software company.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="flex-1 bg-white text-slate-900 font-semibold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all"
                onClick={() => window.location.href = "mailto:careers@vocalheart.com"}
              >
                Email Resume
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="flex-1 border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-slate-900 transition-all flex items-center gap-2 justify-center"
              >
                <Phone className="w-4 h-4" />
                Call HR
              </motion.button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-16 text-sm text-slate-400">
              <div className="flex items-center gap-3 hover:text-white transition-colors justify-center">
                <Phone className="w-5 h-5" />
                <span>+91 7554937509</span>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition-colors justify-center">
                <Mail className="w-5 h-5" />
                <span>careers@vocalheart.com</span>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition-colors justify-center">
                <MapPin className="w-5 h-5" />
                <span>Bhopal, MP</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
