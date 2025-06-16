import React from 'react';
import { useContent } from '../hooks/useContent';

export default function Contact() {
  const { content, loading, error } = useContent('/content/contact.json');

  if (loading) return <div className="py-20 bg-gray-50 flex items-center justify-center min-h-[400px]"><div>Loading...</div></div>;
  if (error) return <div className="py-20 bg-gray-50 flex items-center justify-center min-h-[400px]"><div>Error loading content</div></div>;

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
            <form className="space-y-4" netlify netlify-honeypot="bot-field" name="contact">
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  required 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address" 
                  required 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <textarea 
                  rows="5" 
                  name="message"
                  placeholder="Your Message" 
                  required 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300 transform hover:scale-[1.02] uppercase tracking-wider"
                style={{ letterSpacing: '0.1em' }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map and Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.573111554045!2d-80.09353268496504!3d26.36312308336935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91c6b9a2f4b5d%3A0x9b5e6b9e5c8b5f1e!2s125%20Via%20Naranjas%2C%20Boca%20Raton%2C%20FL%2033432!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Espresso Joint Location"
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium">Visit Us</p>
                    <p className="text-gray-600">{content?.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-gray-600">{content?.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-gray-600">{content?.email}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">{content?.hours?.weekdays}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">{content?.hours?.saturday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">{content?.hours?.sunday}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}