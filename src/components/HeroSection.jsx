import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { HiPaperClip } from 'react-icons/hi2';
import { BsClock } from 'react-icons/bs';
import { MdOutlineBarChart } from 'react-icons/md';

const HeroSection = () => {
  const [message, setMessage] = useState('');

  return (
    <section id="hero" className="min-h-screen bg-cream pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-12 mt-16 animate-fadeIn">
          <h1 className="text-6xl md:text-7xl font-black text-dark-text mb-6 leading-tight">
            Your AI Powerrd Companion
            <br />
            for Addiction Recovery
          </h1>
          <p className="text-lg text-dark-text/70 max-w-3xl mx-auto">
            24/7 personalized support using advanced RAG technology and evidence-based therapy
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-16 animate-scaleIn animation-delay-200">
          <button className="px-12 py-4 bg-warm-gray/40 hover:bg-warm-gray/50 text-dark-text rounded-full text-lg font-medium transition-all duration-800 ease-in-out hover:scale-105 hover:shadow-lg">
            Start here
          </button>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-8 mb-20 text-dark-text animate-fadeIn animation-delay-400">
          <div className="flex items-center gap-2 ">
            <BsClock className="text-xl" />
            <span className="font-medium">Available 24/7</span>
          </div>
          <div className="flex items-center gap-2 ">
            <MdOutlineBarChart className="text-xl" />
            <span className="font-medium">3 Addiction types supported</span>
          </div>
          <div className="flex items-center gap-2 ">
            <span className="text-xl">✦</span>
            <span className="font-medium">Evidence based Approach</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
