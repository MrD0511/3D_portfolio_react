import React from 'react';
import { AlertTriangle, Home } from 'lucide-react';
import { useState, useEffect } from 'react';

const NotFound = () => {
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBounce(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      {/* Main container */}
      <div className="text-center">
        {/* Animated 404 text */}
        <div className={`text-[#ffcc66] text-9xl font-bold mb-8 transition-transform duration-500 ${bounce ? 'transform translate-y-2' : ''}`}>
          404
        </div>

        {/* Meme face */}
        <div className="text-6xl mb-8">
          ¯\_(ツ)_/¯
        </div>

        {/* Alert icon with spinning animation */}
        <div className="animate-spin mb-8">
          <AlertTriangle size={48} className="text-[#ffcc66]" />
        </div>

        {/* Message */}
        <h2 className="text-[#ffcc66] text-2xl font-semibold mb-4">
          Oops! Page not found
        </h2>
        <p className="text-[#ffcc66] text-lg mb-8 max-w-md mx-auto">
          Looks like this page took a wrong turn at Albuquerque! 
          Maybe it's out getting coffee? ☕
        </p>

        {/* Home button with hover effect */}
        <a 
          href="/"
          className="inline-flex items-center gap-2 bg-[#ffcc66] text-black px-6 py-3 rounded-lg font-semibold transition-transform hover:scale-105 hover:shadow-lg"
        >
          <Home size={20} />
          Take Me Home
        </a>
      </div>

      {/* Floating elements animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float text-[#ffcc66] opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              fontSize: `${Math.random() * 20 + 20}px`
            }}
          >
            404
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotFound;

// Add this to your global CSS or style block
const styles = `
  @keyframes float {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(10deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
`;