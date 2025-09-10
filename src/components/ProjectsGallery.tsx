import { useEffect, useRef, useState } from "react";
import { X, Play } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectCorporate from "@/assets/project-corporate.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";

const projects = [
  {
    id: 1,
    title: "Store Landing Page",
    description: "Beautiful product showcase landing page with modern design, responsive layout, and optimized performance.",
    image: projectEcommerce,
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    category: "Landing Page"
  },
  {
    id: 2,
    title: "Wedding Website",
    description: "Elegant wedding website with beautiful galleries, RSVP system, and romantic design elements.",
    image: projectCorporate,
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    category: "Wedding"
  },
  {
    id: 3,
    title: "Creative Portfolio",
    description: "Stunning portfolio showcase with interactive galleries, smooth animations, and mobile optimization.",
    image: projectPortfolio,
    tech: ["React", "Framer Motion", "GSAP", "Netlify"],
    category: "Portfolio"
  }
];

const ProjectsGallery = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = projectRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleProjects(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Discover our latest work showcasing modern design, cutting-edge technology, 
            and exceptional user experiences.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-1 gap-12 sm:gap-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              className={`project-card bg-card rounded-2xl overflow-hidden shadow-soft ${
                visibleProjects.includes(index) ? 'reveal-up in-view' : 'reveal-up'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-64 lg:h-full object-cover transition-smooth hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="bg-accent text-accent-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`p-6 sm:p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-card-foreground">
                    {project.title}
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-secondary text-secondary-foreground px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                   <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                     {project.category === "Wedding" ? (
                       <Popover>
                         <PopoverTrigger asChild>
                           <button className="btn-accent w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">View Project</button>
                         </PopoverTrigger>
                         <PopoverContent className="w-96 p-0 bg-background border shadow-lg" side="top">
                           <div className="relative bg-black rounded-lg overflow-hidden">
                             {/* Close Button */}
                             <button className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors">
                               <X className="w-4 h-4 text-white" />
                             </button>
                             
                             {/* Video Player */}
                             <div className="relative aspect-video bg-black">
                               <video 
                                 className="w-full h-full object-cover"
                                 poster={projectCorporate}
                                 controls
                                 preload="metadata"
                               >
                                 <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                                 Your browser does not support the video tag.
                               </video>
                               
                               {/* Play overlay for poster */}
                               <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                                 <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                   <Play className="w-6 h-6 text-white ml-1" />
                                 </div>
                               </div>
                             </div>
                             
                             {/* Video Title */}
                             <div className="p-4 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0 right-0 text-white">
                               <h3 className="text-lg font-medium">Wedding Website Showcase</h3>
                               <p className="text-sm text-gray-300">Beautiful wedding photography portfolio</p>
                             </div>
                           </div>
                         </PopoverContent>
                       </Popover>
                     ) : (
                       <button className="btn-accent w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">View Project</button>
                     )}
                     <button className="btn-primary bg-transparent border border-border text-foreground hover:bg-muted w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                       Case Study
                     </button>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;