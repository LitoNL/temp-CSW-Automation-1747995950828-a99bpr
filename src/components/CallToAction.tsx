import React from 'react';
import { Calendar, Bot, Zap } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-dark tech-pattern relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 animate-slide-up">
            <h2 className="section-title">Experience the Future of Business</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Elevate your business with AI-powered automation that delivers real results. Our intelligent solutions handle customer interactions while you focus on growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="btn btn-primary inline-flex items-center text-lg px-8 py-4 animate-scale">
                <Calendar className="mr-2 h-5 w-5" />
                Book Demo
              </a>
              <a href="#" className="btn btn-secondary inline-flex items-center text-lg px-8 py-4 animate-scale">
                <Bot className="mr-2 h-5 w-5" />
                Try AI Chat
              </a>
            </div>
          </div>
          
          <div className="glass rounded-xl p-8 mt-12 shadow-lg animate-scale" style={{ animationDelay: '150ms' }}>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">Start Your AI Journey</h3>
                <p className="text-gray-300 mb-6">
                  Get a personalized demo of our AI automation suite and discover how it can transform your:
                </p>
                <ul className="space-y-4">
                  {[
                    'Customer Support & Engagement',
                    'Lead Generation & Conversion',
                    'CRM & Data Management',
                    'Appointment & Schedule Management'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <Zap className="h-5 w-5 text-cyan mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full bg-dark-300/50 border border-dark-300 rounded-lg p-3 text-white focus:outline-none focus:border-cyan"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-dark-300/50 border border-dark-300 rounded-lg p-3 text-white focus:outline-none focus:border-cyan"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Company" 
                    className="w-full bg-dark-300/50 border border-dark-300 rounded-lg p-3 text-white focus:outline-none focus:border-cyan"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-dark-100/50 to-transparent"></div>
    </section>
  );
};

export default CallToAction;