import { useState } from "react";
import { Mail, Phone, MapPin, Send, Facebook } from "lucide-react";
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
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 accent-gradient rounded-xl flex items-center justify-center">
                  <Facebook className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Facebook</p>
                  <a 
                    href="https://www.facebook.com/nino.telesio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    @nino.telesio
                  </a>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* Location Map */}
          <div className="bg-card p-8 rounded-2xl shadow-soft">
            <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
              Our Location
            </h3>
            <div className="w-full h-96 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30913.234567890123!2d121.00244140625!3d14.5378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9f35e06f1b1%3A0x8b9e7c5e6a5f5a1!2sPasay%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sph!4v1647123456789!5m2!1sen!2sph&z=15"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Velora Services Location - Pasay City, Philippines"
              />
            </div>
            <p className="mt-4 text-muted-foreground">
              Located in the heart of Pasay City, Metro Manila. We're easily accessible and ready to meet with clients in person or virtually.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;