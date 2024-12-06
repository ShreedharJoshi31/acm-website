import React from 'react';

export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute w-full h-full bg-gradient-to-br from-blue-50 to-purple-50" />
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: 0.1,
          }}
        >
          <div
            className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-500"
            style={{
              filter: 'blur(50px)',
            }}
          />
        </div>
      ))}
    </div>
  );
}