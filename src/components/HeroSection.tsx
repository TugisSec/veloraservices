import { useEffect, useState } from "react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <div className={`transition-slow ${isVisible ? 'reveal-up in-view' : 'reveal-up'}`}>
          <h1 className="text-5xl md:text-7xl font-display font-semibold mb-6 leading-tight tracking-tight">
            Crafting Digital
            <span className="block bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light leading-relaxed max-w-2xl mx-auto">
            We transform ideas into stunning websites that captivate users and drive results. 
            Professional web development with modern design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToProjects}
              className="btn-accent text-lg px-10 py-5 shadow-medium"
            >
              View Our Work
            </button>
            <button 
              onClick={scrollToContact}
              className="btn-primary text-lg px-10 py-5 border border-white/20 hover:bg-white/10"
            >
              Start Your Project
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
            <div className="w-1 h-3 bg-white/50 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;