import React from 'react';
import { MessageSquare, UserPlus, Calendar, Bot } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Bot className="h-12 w-12 text-cyan" />,
      title: 'AI Chat Agents',
      description: 'Intelligent Conversations',
      details: 'Advanced AI agents that handle customer inquiries 24/7, providing instant, human-like responses while continuously learning from interactions.'
    },
    {
      icon: <UserPlus className="h-12 w-12 text-cyan" />,
      title: 'Lead Generation',
      description: 'Automated Lead Capture',
      details: 'Smart lead generation system that identifies, qualifies, and nurtures prospects automatically, increasing your conversion rates significantly.'
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-cyan" />,
      title: 'CRM Integration',
      description: 'Seamless Connection',
      details: 'Deep integration with your existing CRM, ensuring all customer interactions and lead data are synchronized in real-time.'
    },
    {
      icon: <Calendar className="h-12 w-12 text-cyan" />,
      title: 'Smart Scheduling',
      description: 'Automated Booking',
      details: 'Intelligent appointment setting that handles scheduling, reminders, and follow-ups automatically, reducing no-shows and maximizing efficiency.'
    }
  ];

  return (
    <section id="benefits" className="py-12 md:py-16 bg-dark-100 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="section-title">AI-Powered Solutions</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Transform your business operations with our cutting-edge AI automation tools.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="card hover:translate-y-[-8px] group animate-scale"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 p-4 inline-block rounded-lg bg-dark-300 group-hover:bg-gradient-to-r group-hover:from-cyan/20 group-hover:to-electric/20 transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">{benefit.title}</h3>
              <p className="text-cyan font-medium mb-4">{benefit.description}</p>
              <p className="text-gray-400">{benefit.details}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dark to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark to-transparent"></div>
    </section>
  );
};

export default Benefits;