import React from 'react';
import { ChevronRight, Code2 } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <AnimatedBackground />
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-6">
            <Code2 className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-semibold text-blue-600">ACM Chapter</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Empowering Innovators, Shaping the Future
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Join our premier hub for computing enthusiasts, tech leaders, and innovators.
          </p>
          <button className="group bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-blue-700 transition-all">
            Join Us
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}