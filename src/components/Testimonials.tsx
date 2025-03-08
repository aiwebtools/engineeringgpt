
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "The Electrical Engineering GPT helped me design a complex circuit for my senior project. It provided detailed calculations and component recommendations that saved me weeks of research.",
    author: "Alex J.",
    title: "Electrical Engineering Student",
    delay: 0
  },
  {
    quote: "As a mechanical engineer working on fluid dynamics simulations, the Mechanical Engineering GPT has been invaluable. It helped me interpret results and provided optimization suggestions that improved efficiency by 15%.",
    author: "Sarah M.",
    title: "Senior Mechanical Engineer",
    delay: 0.1
  },
  {
    quote: "Civil Engineer GPT assisted me with structural analysis for a challenging retrofit project. The detailed load calculations and material recommendations were spot-on and complied with all local building codes.",
    author: "Michael L.",
    title: "Structural Engineer",
    delay: 0.2
  },
  {
    quote: "The AI Software Engineer GPT transformed our documentation process. It generated comprehensive API docs and helped refactor legacy code that we'd been struggling with for months.",
    author: "Jessica T.",
    title: "Software Development Lead",
    delay: 0.3
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] to-cyber-black z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-cyber-yellow bg-cyber-yellow/10 rounded-full border border-cyber-yellow/20">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 glow-text">
            What Engineers Are Saying
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover how ENGINEERING GPTs are helping professionals solve complex problems.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: testimonial.delay }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="cyber-card rounded-lg p-6 h-full border border-gray-800 relative">
                <svg className="w-8 h-8 text-cyber-blue/30 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                
                <p className="text-gray-300 mb-6">
                  "{testimonial.quote}"
                </p>
                
                <div className="mt-auto">
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.title}</div>
                </div>
                
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyber-blue opacity-5 blur-3xl rounded-full -mr-20 -mt-20 transform rotate-45"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
