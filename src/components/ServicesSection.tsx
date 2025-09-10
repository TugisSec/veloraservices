import { useEffect, useRef, useState } from "react";
import { Code, Palette, Smartphone, Zap, Globe, Users } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites built with modern technologies for optimal performance and scalability."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuitive and engaging user interfaces that enhance user experience and drive conversions."
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first approach ensuring your website looks perfect on all devices and screen sizes."
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast loading speeds and optimized performance for better user engagement."
  },
  {
    icon: Globe,
    title: "SEO Integration",
    description: "Search engine optimized websites to improve visibility and drive organic traffic."
  },
  {
    icon: Users,
    title: "Ongoing Support",
    description: "Continuous maintenance and support to keep your website running smoothly and updated."
  }
];

const ServicesSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = serviceRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-20 subtle-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your business needs, 
            from concept to launch and beyond.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                ref={el => serviceRefs.current[index] = el}
                className={`bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-smooth ${
                  visibleItems.includes(index) ? 'reveal-up in-view' : 'reveal-up'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 accent-gradient rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-accent-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-accent text-lg px-10 py-5">
            Get a Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;