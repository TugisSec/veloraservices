import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import LocationMap from "./LocationMap";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours."
    });
    setFormData({
      name: '',
      email: '',
      project: '',
      message: ''
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Get in touch with us today and let's discuss 
            how we can bring your vision to life.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We're here to help you succeed online. Whether you need a new website, 
                a redesign, or ongoing support, our team is ready to deliver exceptional results.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 accent-gradient rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">veloradigitalservices@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 accent-gradient rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground">+639512136957</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 accent-gradient rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Pasay City, Philippines</p>
                </div>
              </div>
            </div>
            
            {/* Small Location Map */}
            <div className="mt-8">
              <LocationMap />
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-soft">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                    Full Name
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-fast" placeholder="Your full name" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email Address
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-fast" placeholder="your@email.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="project" className="block text-sm font-medium text-card-foreground mb-2">
                  Project Type
                </label>
                <select id="project" name="project" value={formData.project} onChange={handleChange} required className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-fast">
                  <option value="">Select project type</option>
                  <option value="new-website">New Website</option>
                  <option value="redesign">Website Redesign</option>
                  <option value="ecommerce">E-Commerce Platform</option>
                  <option value="web-app">Web Application</option>
                  <option value="maintenance">Maintenance & Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Project Details
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-fast resize-none" placeholder="Tell us about your project, timeline, and any specific requirements..."></textarea>
              </div>
              
              <button type="submit" className="w-full btn-accent text-lg py-4 flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;