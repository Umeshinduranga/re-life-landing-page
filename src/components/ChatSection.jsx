import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { HiPaperClip } from 'react-icons/hi2';
import { BsPerson } from 'react-icons/bs';
import { BiBot } from 'react-icons/bi';

const ChatSection = () => {
  const [message, setMessage] = useState('');

  return (
    <section id="chat" className="min-h-screen bg-cream pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Greeting */}
        <div className="text-center mb-20 animate-fadeIn">
          <h2 className="text-5xl md:text-6xl font-black text-dark-text mb-4">
            Hi kavindu, How can i help ?
          </h2>
        </div>

        {/* Chat Messages */}
        <div className="space-y-6 mb-20">
          {/* AI Message */}
          <div className="flex items-start gap-4 animate-slideInLeft animation-delay-200">
            <div className="w-12 h-12 rounded-full bg-soft-pink flex items-center justify-center flex-shrink-0">
              <BiBot className="text-2xl text-dark-text/70" />
            </div>
            <div className="bg-soft-pink rounded-3xl rounded-tl-md px-8 py-5 max-w-2xl">
              <p className="text-dark-text leading-relaxed">
                "I understand you're going through a tough time. Can you tell me more about what triggered these feelings today?"
              </p>
            </div>
          </div>

          {/* User Message */}
          <div className="flex items-start gap-4 justify-end">
            <div className="bg-mint rounded-3xl rounded-tr-md px-8 py-5 max-w-2xl transition-all duration-400 ease-in-out hover:shadow-lg cursor-pointer">
              <p className="text-dark-text leading-relaxed">
                "I Saw a post on social media that made me want to use again"
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-mint flex items-center justify-center flex-shrink-0 transition-transform duration-400 ease-in-out hover:scale-105">
              <BsPerson className="text-2xl text-dark-text/70" />
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="max-w-3xl mx-auto animate-fadeIn animation-delay-600">
          <div className="relative">
            <input
              type="text"
              placeholder="Ask anything...."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-6 py-5 rounded-full bg-white border border-warm-gray/30 text-dark-text placeholder-warm-gray focus:outline-none focus:border-warm-gray/50 shadow-sm"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
              <button className="p-2 hover:bg-warm-gray/10 rounded-full transition-colors">
                <FiSend className="text-xl text-warm-gray" />
              </button>
              <button className="p-2 hover:bg-warm-gray/10 rounded-full transition-colors">
                <HiPaperClip className="text-xl text-warm-gray" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
