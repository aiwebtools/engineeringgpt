
import React from 'react';
import { motion } from 'framer-motion';

const Disclaimer: React.FC = () => {
  return (
    <section id="disclaimer" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black to-[#080808] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-cyber-red bg-cyber-red/10 rounded-full border border-cyber-red/20">
            Important Information
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 glow-text">
            Legal Disclaimer
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 text-gray-300 text-sm space-y-4">
            <p>
              <strong>No Professional Advice:</strong> The information provided by ENGINEERING GPTs is for general informational purposes only and should not be considered as professional engineering advice, consultation, or services. Always consult with a qualified and licensed professional engineer before implementing any suggestions or calculations.
            </p>
            
            <p>
              <strong>No Responsibility:</strong> AI WEB TOOLS LLC and the creators of ENGINEERING GPTs are not responsible for any errors, omissions, or damages arising from the use of the information provided. The tools are provided "as is" without any warranties, expressed or implied.
            </p>
            
            <p>
              <strong>No Liability for Decisions:</strong> Users are solely responsible for verifying all information and for any decisions made or actions taken based on information provided by ENGINEERING GPTs. Under no circumstances shall AI WEB TOOLS LLC or its affiliates be liable for any direct, indirect, special, incidental, or consequential damages.
            </p>
            
            <p>
              <strong>Third-Party Links:</strong> ENGINEERING GPTs may provide links to third-party websites or resources. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or resources.
            </p>
            
            <p>
              <strong>Compliance With Laws:</strong> Users are responsible for ensuring that their use of information from ENGINEERING GPTs complies with all applicable laws, regulations, and professional standards in their jurisdiction.
            </p>
            
            <p>
              <strong>Intellectual Property:</strong> Users should ensure they have the necessary rights to any information they upload or share with ENGINEERING GPTs. AI WEB TOOLS LLC does not claim ownership of any user-provided content.
            </p>
            
            <p>
              <strong>Moderation:</strong> AI WEB TOOLS LLC reserves the right to moderate, restrict, or block access to ENGINEERING GPTs at its discretion.
            </p>
            
            <p>
              By using any ENGINEERING GPT, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Disclaimer;
