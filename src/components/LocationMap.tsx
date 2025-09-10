import React from 'react';

const LocationMap = () => {
  return (
    <div className="bg-card p-4 rounded-xl border border-border">
      <h3 className="text-lg font-semibold mb-4 text-card-foreground">Our Location</h3>
      <div className="w-full h-48 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123650.1234!2d121.0244!3d14.5378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9f35e06f1b1%3A0x8b9e7c5e6a5f5a1!2sPasay%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sph!4v1647123456789!5m2!1sen!2sph"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Velora Services Location - Pasay City, Philippines"
        />
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        Pasay City, Metro Manila, Philippines
      </p>
    </div>
  );
};

export default LocationMap;