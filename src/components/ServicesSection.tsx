import { useEffect, useRef, useState } from "react";
import { Code, Palette, Smartphone, Zap, Globe, Users } from "lucide-react";
const services = [{
  icon: Code,
  title: "Web Development",
  description: "Modern, scalable websites built with cutting-edge technologies."
}, {
  icon: Palette,
  title: "UI/UX Design",
  description: "Beautiful interfaces that engage users and drive conversions."
}, {
  icon: Smartphone,
  title: "Responsive Design",
  description: "Perfect performance across all devices and screen sizes."
}, {
  icon: Zap,
  title: "Performance Optimization",
  description: "Lightning-fast speeds for optimal user experience."
}, {
  icon: Globe,
  title: "SEO Integration",
  description: "Enhanced visibility and organic traffic growth."
}, {
  icon: Users,
  title: "Ongoing Support",
  description: "Reliable maintenance to keep your site running smoothly."
}];
const ServicesSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const observers = serviceRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setVisibleItems(prev => [...new Set([...prev, index])]);
        }
      }, {
        threshold: 0.3
      });
      observer.observe(ref);
      return observer;
    });
    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);
  return <section className="py-16 sm:py-20 subtle-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Comprehensive web development solutions tailored to your business needs, 
            from concept to launch and beyond.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
          const Icon = service.icon;
          return <div key={index} ref={el => serviceRefs.current[index] = el} className={`bg-card p-6 sm:p-8 rounded-2xl shadow-soft hover:shadow-medium transition-smooth ${visibleItems.includes(index) ? 'reveal-up in-view' : 'reveal-up'}`} style={{
            transitionDelay: `${index * 0.1}s`
          }}>
                <div className="w-12 h-12 sm:w-14 sm:h-14 accent-gradient rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent-foreground" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-card-foreground">
                  {service.title}
                </h3>
                
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>;
        })}
        </div>
        
        
      </div>
    </section>;
};
export default ServicesSection;