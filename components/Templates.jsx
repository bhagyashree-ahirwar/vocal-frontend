"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Templates() {
  return (
    <div className="w-full py-20 px-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
        Vocal Heart — Social Media Templates
      </h1>

      {/* Instagram Templates Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">📱 Instagram Templates</h2>

        {/* Template 1 */}
        <TemplateBox title="Quote Post">
          <div className="bg-white h-80 w-80 rounded-2xl shadow-md p-6 flex flex-col justify-between">
            <p className="text-sm text-gray-400">💡 AI Insight of the Day</p>
            <h1 className="text-xl font-bold text-gray-900 text-center">
              “Automation doesn’t replace creativity — it amplifies it.”
            </h1>
            <p className="text-sm text-gray-400 text-right">#VocalHeartAI</p>
          </div>
        </TemplateBox>

        {/* Template 2 */}
        <TemplateBox title="Service Highlight">
          <div className="bg-gradient-to-br from-white to-pink-100 h-80 w-80 rounded-2xl shadow-md p-6 flex flex-col justify-between">
            <h1 className="text-xl font-bold text-gray-900">AI Growth Package 🚀</h1>
            <p className="text-lg text-gray-700">Automate your marketing in 7 days</p>
            <button className="bg-black text-white py-2 px-4 rounded-lg self-start">
              DM us to Start
            </button>
          </div>
        </TemplateBox>

        {/* Template 3 */}
        <TemplateBox title="Before / After Story">
          <div className="bg-white h-80 w-80 rounded-2xl shadow-md p-6 grid grid-cols-2 gap-4">
            <div className="text-center">
              <h3 className="font-bold mb-2">Before</h3>
              <span>📉 Manual Work</span>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-2">After</h3>
              <span>🤖 AI Automation</span>
            </div>
          </div>
        </TemplateBox>
      </section>

      {/* LinkedIn Templates */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">💼 LinkedIn Templates</h2>

        <TemplateBox title="Thought Leadership (1080x1350)">
          <div className="bg-white h-[450px] w-80 rounded-2xl shadow-md p-6">
            <h3 className="font-bold text-xl mb-4">
              How AI is reshaping customer experience in 2025.
            </h3>
            <p className="text-gray-700 text-sm mb-8">
              Businesses are adopting smart workflows that reduce manual work
              and improve customer satisfaction.
            </p>
            <p className="text-gray-400 text-sm">#AIGrowth #VocalHeartAI</p>
          </div>
        </TemplateBox>

        <TemplateBox title="Team Highlight">
          <div className="bg-gray-200 h-[450px] w-80 rounded-2xl shadow-md p-6 flex flex-col justify-between">
            <div className="h-40 bg-gray-300 rounded-xl"></div>
            <div>
              <h3 className="text-lg font-bold">Meet Dhruv Saxena</h3>
              <p>Bringing Human Touch to AI Systems.</p>
              <p className="text-gray-400 text-sm mt-2">#TeamVocalHeart</p>
            </div>
          </div>
        </TemplateBox>
      </section>
    </div>
  );
}

// Template Box Component
function TemplateBox({ title, children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="mb-10 flex flex-col items-start"
    >
      <h3 className="font-semibold mb-3 text-lg text-gray-700">{title}</h3>
      {children}
    </motion.div>
  );
}
