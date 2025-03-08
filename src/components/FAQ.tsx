
import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What are ENGINEERING GPTs?",
      answer: "ENGINEERING GPTs are specialized AI assistants designed to help with various engineering disciplines including electrical, mechanical, civil, and software engineering. Each GPT is trained on domain-specific knowledge and can help with calculations, analysis, documentation, and problem-solving in its respective field."
    },
    {
      question: "Do I need an OpenAI ChatGPT subscription to use these tools?",
      answer: "Yes, these tools are available through ChatGPT and require an OpenAI account. Some features may require a ChatGPT Plus subscription for full functionality."
    },
    {
      question: "How accurate are the engineering calculations provided by these tools?",
      answer: "The tools provide calculations based on established engineering principles and formulas. However, all results should be verified by a qualified engineer before implementation in critical applications. These tools are meant to assist professionals, not replace their expertise."
    },
    {
      question: "Can these tools help with specific engineering software like AutoCAD or MATLAB?",
      answer: "While the tools can provide guidance on using engineering software and help interpret results, they cannot directly operate these applications. They can, however, assist with code for data analysis and help troubleshoot issues you may encounter."
    },
    {
      question: "Can these tools generate professional engineering reports and documentation?",
      answer: "Yes, all four ENGINEERING GPTs can help generate professional documentation including reports, analysis, specifications, and more. They can structure content according to industry standards and provide comprehensive information."
    },
    {
      question: "How do I get the most out of these ENGINEERING GPTs?",
      answer: "Be specific with your queries, provide relevant context, and iterate on responses. The more information you provide about your engineering problem, the more tailored and helpful the response will be. You can also upload images, diagrams, or data for analysis."
    }
  ];

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] to-cyber-black z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-cyber-purple bg-cyber-purple/10 rounded-full border border-cyber-purple/20">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 glow-text">
            Questions & Answers
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Find answers to common questions about our ENGINEERING GPTs.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800">
                <AccordionTrigger className="text-left font-medium py-4 hover:text-cyber-purple transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
