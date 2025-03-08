
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const VideoSection: React.FC = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create an Intersection Observer to load the video when it's visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (videoContainerRef.current) {
              // Replace with your YouTube video ID
              const videoId = "VIDEO_ID_HERE"; // Replace with actual video ID
              
              // Create the iframe
              const iframe = document.createElement('iframe');
              iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0&showinfo=0&modestbranding=1&hd=1`;
              iframe.width = "100%";
              iframe.height = "100%";
              iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
              iframe.frameBorder = "0";
              iframe.allowFullscreen = true;
              
              // Add the iframe to the container
              videoContainerRef.current.innerHTML = "";
              videoContainerRef.current.appendChild(iframe);
              
              // Disconnect the observer after loading
              observer.disconnect();
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black to-[#080808] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 glow-text">
            See ENGINEERING GPTs in Action
          </h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            Watch how these powerful engineering AI tools can solve complex problems and assist with technical documentation.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto relative overflow-hidden rounded-xl"
        >
          <div className="absolute inset-0 cyber-border z-0"></div>
          
          <div 
            ref={videoContainerRef} 
            className="relative w-full h-full bg-black flex items-center justify-center"
          >
            <div className="flex flex-col items-center justify-center">
              <div className="loading-spinner mb-4"></div>
              <p className="text-gray-400">Loading video...</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
