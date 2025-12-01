


"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, ChevronDown, CheckCircle } from "lucide-react";

export default function ContactPage() {
  // Form State
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSuccess(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setLoading(false);
  };

  // FAQ State
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does Vocal Heart offer?",
      answer: "We provide software development, BPO services, KPO operations, CRM development, digital marketing, and IT consulting for businesses across India."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary from 2 weeks for small projects to 3-6 months for complex enterprise solutions. We provide detailed timelines after requirement analysis."
    },
    {
      question: "Do you serve clients outside India?",
      answer: "Yes, we work with international clients from USA, UK, Australia, and Middle East through our offshore development model."
    },
    {
      question: "What is your support process?",
      answer: "We offer 24/7 support for BPO clients and 9-6 support for software projects with dedicated account managers and ticketing system."
    },
    {
      question: "How do I get a project quote?",
      answer: "Fill out the contact form or call us directly. We'll schedule a free consultation within 24 hours to understand your requirements."
    }
  ];

  return (
    <>
      {/* Contact Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8"
          >
            <div>
              <span className="text-slate-600 font-semibold text-sm uppercase tracking-wide">Contact Us</span>
              <h1 className="text-4xl font-bold text-slate-900 mt-3">Get In Touch</h1>
              <p className="text-slate-600 mt-2">Ready to start your project? Our team responds within 24 hours.</p>
            </div>

            {/* Phone Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-1">Call Us</p>
                  <h3 className="text-2xl font-bold text-slate-900">+91 7554937509</h3>
                </div>
              </div>
            </motion.div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100">
                <Mail className="w-5 h-5 text-slate-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-slate-500">Email</p>
                  <p className="text-slate-900 font-semibold">info@vocalheart.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100">
                <MapPin className="w-5 h-5 text-slate-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-slate-500">Address</p>
                  <p className="text-slate-900">Plot N. 3, Third Floor, Bajaj Tower, Raisen Rd, Bhopal, MP</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-4 shadow-lg border border-slate-100"
            >
              <iframe
                className="w-full h-64 rounded-xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.128628425997!2d77.38076431490034!3d23.259960084881838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716b572ac685!2sBajaj%20Tower%2C%20Raisen%20Road%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <motion.div 
              animate={{ opacity: success ? 0 : 1 }} 
              className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100"
            >
              {success ? (
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-20 h-20 text-emerald-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                  <p className="text-slate-600">We'll contact you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Message</h2>
                  
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent transition-all"
                    required
                  />
                  
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent transition-all"
                  />
                  
                  <input
                    type="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent transition-all"
                    required
                  />
                  
                  <input
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent transition-all"
                  />
                  
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent resize-vertical transition-all"
                  />

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-slate-800 to-slate-900 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-slate-600 font-semibold text-sm uppercase tracking-wide">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">Frequently Asked Questions</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Common questions about our services and process</p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-slate-100 transition-all"
                >
                  <h3 className="text-xl font-semibold text-slate-900">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
