"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, Database, Shield, Clock, CheckCircle, Phone, Mail, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const ServicesSoftwarePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Vocal Heart
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">Home</a>
              <a href="/services" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">Services</a>
              <a href="/about" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">About</a>
              <a href="/contact" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">Contact</a>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
            >
              Get Quote
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[70vh] bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),transparent)]"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-8"
            >
              <span className="text-sm font-semibold">Software Excellence</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Custom Software
              <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Development
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
              Scalable web & mobile applications built with modern technologies for businesses that want to grow fast.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
              >
                Start Project <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="w-full h-80 bg-gradient-to-br from-white/20 to-transparent rounded-3xl backdrop-blur-xl border border-white/30 flex items-center justify-center">
              <Code className="w-32 h-32 text-emerald-400 opacity-80" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">What We Build</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">End-to-end software solutions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Web Applications", desc: "React, Next.js, Node.js full-stack apps", icon: "💻" },
              { title: "Mobile Apps", desc: "React Native cross-platform solutions", icon: "📱" },
              { title: "Backend APIs", desc: "REST & GraphQL APIs with MongoDB", icon: "🔌" },
              { title: "Cloud Solutions", desc: "AWS, Azure scalable deployments", icon: "☁️" },
              { title: "Enterprise Systems", desc: "CRM, ERP custom integrations", icon: "🏢" },
              { title: "DevOps Automation", desc: "CI/CD pipelines & monitoring", icon: "⚙️" }
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-100 text-center group cursor-pointer"
              >
                <div className="text-5xl mb-6 mx-auto group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto group-hover:scale-110 transition-transform" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Modern Tech Stack</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Industry-leading technologies</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { category: "Frontend", tech: ["React", "Next.js", "TypeScript", "Tailwind"] },
              { category: "Backend", tech: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
              { category: "Mobile", tech: ["React Native", "Flutter", "Expo"] }
            ].map((stack, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-emerald-500" />
                  {stack.category}
                </h3>
                <div className="space-y-3">
                  {stack.tech.map((item, j) => (
                    <div key={j} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 hover:bg-slate-100 transition-all">
                      <Clock className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="font-semibold text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Your Project?</h2>
            <p className="text-xl text-slate-300 mb-12 max-w-lg mx-auto">Let's build something amazing together</p>
            
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-12 py-5 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all"
            >
              Start Your Project <ArrowRight className="w-6 h-6 ml-2 inline" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Vocal Heart
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">Building scalable software solutions since 2011.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Services</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cloud Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Company</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Contact</h4>
              <div className="space-y-3 text-sm text-slate-400">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>Mumbai, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>info@vocalheart.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
            © 2025 Vocal Heart. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesSoftwarePage;
