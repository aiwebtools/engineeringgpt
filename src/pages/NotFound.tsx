
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      window.location.pathname
    );
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-black overflow-hidden relative px-4">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyber-blue/20 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-cyber-purple/20 rounded-full filter blur-[100px]"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="text-9xl font-bold mb-6 glow-text">404</div>
        <h1 className="text-3xl font-bold mb-6 text-white">Page Not Found</h1>
        <p className="text-gray-400 mb-8 max-w-md">
          The engineering blueprint you're looking for doesn't exist or has been moved to a different server.
        </p>
        <Link 
          to="/" 
          className="cyber-button inline-block"
        >
          <span>Return to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
