import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-8 md:pt-28 md:pb-12 bg-dark tech-pattern overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 z-10 animate-slide-up">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-none mb-6">
              <span className="text-white block">The Smartest</span>
              <span className="text-cyan block">AI Support Engine</span>
              <span className="text-white block">for Your Business</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              CSW Automation supercharges your business with AI-driven customer support, lead 
              capture, CRM integration, and appointment setting.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-primary animate-scale">
                Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#how-it-works" className="btn btn-secondary animate-scale">
                How It Works
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end relative z-10 animate-float">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan to-electric rounded-xl blur opacity-30 animate-pulse-slow"></div>
              <div className="w-full max-w-lg h-80 md:h-96 bg-dark-200 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-dark-300/50 to-dark-100/50"></div>
                <div className="absolute inset-0 tech-dots"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan/20 to-electric/20 rounded-full animate-pulse-slow"></div>
                    <div className="absolute inset-4 bg-gradient-to-l from-cyan/30 to-electric/30 rounded-full animate-pulse"></div>
                    <div className="absolute inset-10 bg-gradient-to-t from-cyan/40 to-electric/40 rounded-full"></div>
                    <div className="absolute inset-16 bg-gradient-to-b from-cyan/50 to-electric/50 rounded-full"></div>
                    <div className="absolute inset-20 bg-dark-100 rounded-full flex items-center justify-center">
                      <span className="text-cyan font-bold text-5xl animate-pulse">AI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-electric/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan/10 rounded-full blur-3xl animate-pulse-slow"></div>
    </section>
  );
};

export default Hero;