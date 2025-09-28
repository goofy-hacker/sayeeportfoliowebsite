import React from 'react';
import ContactForm from './ContactForm';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-black py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-6 inline-block rounded-full bg-matrix-900/30 px-4 py-1.5">
            <span className="text-matrix-400 text-sm font-typewriter">
              ~get in touch~
            </span>
          </div>
          
          <h2 className="mb-4 text-3xl font-typewriter text-matrix-400 md:text-4xl">
            Let's Work Together
          </h2>
          
          <p className="text-lg text-matrix-300">
            Have a project in mind or want to talk cyber? I'd love to hear from you!
          </p>
        </div>
        
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="flex flex-col justify-between rounded-xl bg-black/50 p-8 ring-1 ring-matrix-900">
            <div>
              <h3 className="mb-6 text-2xl font-typewriter text-matrix-400">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-matrix-900/30 text-matrix-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-typewriter text-matrix-300">Email</p>
                    <p className="text-matrix-400">sayeeb1@umbc.edu</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-matrix-900/30 text-matrix-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-typewriter text-matrix-300">Phone</p>
                    <p className="text-matrix-400">+1 (667) 802-9890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-matrix-900/30 text-matrix-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-typewriter text-matrix-300">Location</p>
                    <p className="text-matrix-400">Baltimore, MD</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-8">
              <h4 className="mb-4 text-lg font-typewriter text-matrix-400">Connect with me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/goofy-hacker/Cybersecurity-HandsOnProjects" 
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-matrix-900/30 text-matrix-400 transition-colors duration-300 hover:bg-matrix-800 hover:text-matrix-300"
                  aria-label="Github"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sayee-bandishte-5a697b207/" 
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-matrix-900/30 text-matrix-400 transition-colors duration-300 hover:bg-matrix-800 hover:text-matrix-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="rounded-xl bg-black/50 p-8 shadow-lg ring-1 ring-matrix-900">
            <h3 className="mb-6 text-2xl font-typewriter text-matrix-400">Send Me a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;