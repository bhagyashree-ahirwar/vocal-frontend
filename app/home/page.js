

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSuccess(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setLoading(false);
  };

  const ContactForm = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto"
    >
      {success ? (
        <div className="bg-emerald-500/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-200/50 text-center shadow-2xl shadow-emerald-500/25">
          <h3 className="text-2xl font-bold text-emerald-100 mb-4">Thank You!</h3>
          <p className="text-emerald-200">We will contact you within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl shadow-slate-900/50">
          <div className="space-y-3">
            <input 
              type="text" placeholder="Name" value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all shadow-lg shadow-slate-900/30" 
              required
            />
            <input 
              type="email" placeholder="Email" value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all shadow-lg shadow-slate-900/30" 
              required
            />
            <input 
              type="tel" placeholder="Phone" value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all shadow-lg shadow-slate-900/30"
            />
            <textarea 
              rows="3" placeholder="Message" value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-slate-400 resize-none transition-all shadow-lg shadow-slate-900/30"
            />
          </div>
          <motion.button 
            whileHover={{ scale: 1.02 }} 
            disabled={loading}
            className="w-full mt-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white py-3 rounded-xl font-semibold shadow-2xl shadow-slate-900/50 hover:shadow-slate-900/70 transition-all disabled:opacity-50"
          >
            {loading ? "Sending..." : "Get Free Consultation"}
          </motion.button>
        </form>
      )}
    </motion.div>
  );

  return (
    <main className="min-h-screen font-sans">
      {/* Hero - SAME AS BEFORE */}
      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-sm">
            <span className="font-semibold text-white">Since 2011 • Software Excellence</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Vocal Heart
            <span className="block text-4xl md:text-5xl bg-gradient-to-r from-slate-300 to-white bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-xl mx-auto leading-relaxed">
            Software Development • BPO • KPO • Digital Transformation
          </p>
        </motion.div>
      </section>

      {/* What We Do - Updated with proper services list */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 shadow-2xl shadow-slate-900/20">What We Do</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-2xl text-slate-600 mb-12">Complete digital solutions for modern businesses</p>
              
              {/* Services List */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: "💻", title: "Software Development", desc: "Custom web & mobile applications" },
                  { icon: "📞", title: "BPO Services", desc: "24/7 enterprise customer support" },
                  { icon: "📊", title: "KPO Services", desc: "Business process optimization" },
                  { icon: "🚀", title: "Digital Transformation", desc: "Complete business modernization" }
                ].map((service, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ delay: i * 0.1 }}
                    className="group p-8 bg-white rounded-2xl shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/70 border border-slate-100 hover:border-slate-200 transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-700">{service.title}</h3>
                    <p className="text-slate-600 text-sm">{service.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership - SAME AS BEFORE (Perfect) */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 shadow-2xl shadow-slate-900/20">Leadership</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Meet the visionaries driving Vocal Heart's success</p>
          </motion.div>

          {/* First Leader */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-16 mb-24"
          >
            <div className="flex-1 text-center md:text-left">
              <motion.div 
                initial={{ scale: 0.8, rotate: -5 }} 
                whileInView={{ scale: 1, rotate: 0 }} 
                className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-slate-700 to-slate-900 rounded-3xl mx-auto md:mx-0 flex items-center justify-center text-7xl shadow-2xl shadow-slate-900/60 hover:shadow-slate-900/80 transition-all duration-500 cursor-pointer"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                👨‍💼
              </motion.div>
              <p className="text-slate-600 mt-8 text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
                Strategic visionary leading enterprise digital transformation initiatives across India
              </p>
            </div>
            <div className="w-0.5 h-48 bg-gradient-to-b from-slate-300 to-slate-500 hidden md:block shadow-lg"></div>
            <div className="flex-1">
              <h3 className="text-4xl font-black text-slate-900 mb-4 text-center md:text-left">Manak Saxena</h3>
              <p className="text-2xl font-bold text-slate-700 mb-6 text-center md:text-left">Founder & CEO</p>
              <p className="text-slate-600 text-lg leading-relaxed">
                15+ years pioneering enterprise solutions. Leading 1655+ successful projects with a focus on innovation and client success.
              </p>
            </div>
          </motion.div>

          {/* Center Line */}
          <div className="w-0.5 h-20 bg-gradient-to-b from-slate-300 to-slate-500 mx-auto shadow-lg mb-24"></div>

          {/* Second Leader */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row-reverse items-center gap-16"
          >
            <div className="flex-1 text-center md:text-right">
              <motion.div 
                initial={{ scale: 0.8, rotate: 5 }} 
                whileInView={{ scale: 1, rotate: 0 }} 
                className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-slate-700 to-slate-900 rounded-3xl mx-auto md:mx-0 flex items-center justify-center text-7xl shadow-2xl shadow-slate-900/60 hover:shadow-slate-900/80 transition-all duration-500 cursor-pointer"
                whileHover={{ scale: 1.05, rotate: -2 }}
              >
                👨‍💻
              </motion.div>
              <p className="text-slate-600 mt-8 text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
                Technology architect ensuring seamless project execution and operational excellence
              </p>
            </div>
            <div className="w-0.5 h-48 bg-gradient-to-b from-slate-300 to-slate-500 hidden md:block shadow-lg"></div>
            <div className="flex-1">
              <h3 className="text-4xl font-black text-slate-900 mb-4 text-center md:text-right">Dhruv Saxena</h3>
              <p className="text-2xl font-bold text-slate-700 mb-6 text-center md:text-right">Director - Operations</p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Oversees strategic operations with 500+ successful deployments. Focuses on scalability and client satisfaction.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact - SAME AS BEFORE */}
      <section className="py-32 bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center relative">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 shadow-2xl shadow-slate-900/50">Ready to Start?</h2>
            <p className="text-2xl mb-16 text-slate-300 max-w-2xl mx-auto">Get your free consultation today</p>
            <ContactForm />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 mt-24 max-w-4xl mx-auto text-lg">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-4 text-slate-300 hover:text-white transition-all shadow-lg shadow-slate-900/30 p-6 rounded-xl hover:shadow-slate-900/50">
              <Phone className="w-8 h-8" />
              <span>+91 98765 43210</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex items-center justify-center gap-4 text-slate-300 hover:text-white transition-all shadow-lg shadow-slate-900/30 p-6 rounded-xl hover:shadow-slate-900/50">
              <Mail className="w-8 h-8" />
              <span>info@vocalheart.com</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex items-center justify-center gap-4 text-slate-300 hover:text-white transition-all shadow-lg shadow-slate-900/30 p-6 rounded-xl hover:shadow-slate-900/50">
              <MapPin className="w-8 h-8" />
              <span>Bhopal, India</span>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
