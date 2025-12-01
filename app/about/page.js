


"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heart, Target, Users, Award, Phone, Mail, MapPin } from "lucide-react";

const AboutPage = () => {
  return (
    <>
      {/* Hero Section - Simple */}
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
                <span className="text-sm font-semibold text-white">Since 2011</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Vocal Heart
                <span className="block text-3xl md:text-5xl bg-gradient-to-r from-slate-300 to-white bg-clip-text text-transparent">
                  Our Story
                </span>
              </h1>

              <p className="text-xl text-slate-300 max-w-lg leading-relaxed">
                From software development and BPO services to complete digital transformation solutions.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                {[
                  { value: "14+", label: "Years" },
                  { value: "500+", label: "Projects" },
                  { value: "98%", label: "Success" }
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
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="hidden md:flex justify-center"
            >
              <div className="w-80 h-80 bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl flex items-center justify-center shadow-2xl">
                <Heart className="w-32 h-32 text-slate-400" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">14 years of growth and transformation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                year: "2011-2016",
                title: "Foundation",
                desc: "Software development & BPO operations",
                icon: "💻"
              },
              {
                year: "2017-2020", 
                title: "Expansion",
                desc: "CRM systems & process outsourcing",
                icon: "📞"
              },
              {
                year: "2021-Now",
                title: "Transformation", 
                desc: "Digital solutions for modern businesses",
                icon: "📊"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-all text-center"
              >
                <div className="text-4xl mb-4 mx-auto">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.year}</h3>
                <h4 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: <Target className="w-12 h-12 text-slate-600" />,
                title: "Our Mission",
                desc: "Deliver reliable software solutions and business process services that drive growth for Indian SMEs and global enterprises."
              },
              {
                icon: <Heart className="w-12 h-12 text-slate-600" />,
                title: "Our Vision", 
                desc: "Be the most trusted digital partner for businesses seeking sustainable growth through technology and process excellence."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-8 rounded-2xl border border-slate-100 hover:border-slate-200 transition-all"
              >
                <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">Founder & Director</h2>
            
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-100 max-w-2xl mx-auto">
              <div className="w-32 h-32 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full mx-auto mb-8 flex items-center justify-center text-5xl shadow-2xl">
                👨‍💼
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-3">Dhruv Saxena</h3>
              <p className="text-xl text-slate-600 font-semibold mb-8">Founder & Director</p>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                14+ years building software solutions, BPO operations, and digital transformation services for businesses across India.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Why Choose Us</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Award className="w-6 h-6" />, text: "14+ years operational excellence" },
              { icon: <Users className="w-6 h-6" />, text: "Expert software & BPO teams" },
              { icon: <Target className="w-6 h-6" />, text: "Tailored for Indian businesses" },
              { icon: <Heart className="w-6 h-6" />, text: "Client-first approach" },
              { icon: <Users className="w-6 h-6" />, text: "500+ successful projects" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="text-slate-600">{item.icon}</div>
                </div>
                <p className="text-slate-700 font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform?</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-lg mx-auto">Start your digital journey with Vocal Heart</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="flex-1 bg-white text-slate-900 font-semibold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all"
              >
                Start Project
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="flex-1 border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-slate-900 transition-all"
              >
                Contact Us
              </motion.button>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-6 mt-16 text-sm text-slate-400">
              <div className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@vocalheart.com</span>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
                <span>India</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
