'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  useEffect(() => {
    // Initialize any animations or scripts
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full opacity-50"
          >
            <source src="/videos/about-hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            About B2R Platform
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Transforming property management through innovative technology solutions
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-4">
                At B2R Platform, we're dedicated to revolutionizing the property management industry through cutting-edge technology and innovative solutions. Our mission is to empower property managers and enhance resident experiences through seamless, intelligent software solutions.
              </p>
              <p className="text-gray-300">
                We believe in creating sustainable, efficient, and user-friendly platforms that address the complex challenges of modern property management while fostering community and connection.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/jfKfPfyJRdk"
                title="Property Management Innovation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Continuously pushing boundaries to create cutting-edge solutions',
                icon: '🚀'
              },
              {
                title: 'Reliability',
                description: 'Building trust through consistent, dependable service',
                icon: '🛡️'
              },
              {
                title: 'Community',
                description: 'Fostering connections and supporting growth',
                icon: '🤝'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 p-6 rounded-lg text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Our Leadership Team
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Chief Executive Officer',
                image: '/images/team/ceo.jpg'
              },
              {
                name: 'Michael Chen',
                role: 'Chief Technology Officer',
                image: '/images/team/cto.jpg'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Head of Operations',
                image: '/images/team/operations.jpg'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-gray-300">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "B2R Platform has transformed how we manage our properties. The efficiency gains have been remarkable.",
                author: "David Smith",
                role: "Property Manager, Urban Living Co."
              },
              {
                quote: "The student experience features have significantly improved our resident satisfaction scores.",
                author: "Lisa Chen",
                role: "Director of Operations, Campus Housing Solutions"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 p-8 rounded-lg"
              >
                <p className="text-gray-300 text-lg mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="text-white font-bold">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
