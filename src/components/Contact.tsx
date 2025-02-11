import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Contact Us</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Phone className="w-8 h-8 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+91 9581432606</p>
          </div>
          
          <div className="text-center p-6">
            <MapPin className="w-8 h-8 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-600">Agiripalli, Andhra Pradesh</p>
          </div>
          
          <div className="text-center p-6">
            <Clock className="w-8 h-8 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Hours</h3>
            <p className="text-gray-600">
              Mon-Sun: 11:00 AM - 11:00 PM
            </p>
          </div>
        </div>
        
        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15283.880462689654!2d80.99161!3d16.723247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3675e4a9679b6d%3A0x2089e34d7b33a7ae!2sAgiripalli%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1647850687158!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;