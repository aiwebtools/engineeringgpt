
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const DisclaimerPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if the user has already accepted the disclaimer
    const hasAccepted = localStorage.getItem('disclaimerAccepted');
    
    if (!hasAccepted) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAccept = () => {
    // Save to localStorage that user has accepted
    localStorage.setItem('disclaimerAccepted', 'true');
    setIsOpen(false);
    
    // Show toast confirmation
    toast({
      title: "Disclaimer Accepted",
      description: "Thank you for acknowledging our disclaimer.",
      duration: 3000,
    });
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-lg max-h-[90vh] overflow-auto bg-gray-900 border border-gray-800 rounded-xl shadow-2xl"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">Important Disclaimer</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="space-y-4 text-gray-300 text-sm">
                <p>
                  <strong>No Professional Advice:</strong> The information provided by ENGINEERING GPTs is for general informational purposes only and should not be considered as professional engineering advice, consultation, or services.
                </p>
                
                <p>
                  <strong>No Responsibility:</strong> AI WEB TOOLS LLC and the creators of ENGINEERING GPTs are not responsible for any errors, omissions, or damages arising from the use of the information provided.
                </p>
                
                <p>
                  <strong>No Liability for Decisions:</strong> Users are solely responsible for verifying all information and for any decisions made or actions taken based on information provided by ENGINEERING GPTs.
                </p>
                
                <p>
                  By using any ENGINEERING GPT, you acknowledge that you have read, understood, and agree to be bound by our full disclaimer.
                </p>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleAccept}
                  className="px-5 py-2 bg-cyber-blue text-white rounded-lg hover:bg-cyber-blue/80 transition-colors font-medium"
                >
                  I Agree
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerPopup;
