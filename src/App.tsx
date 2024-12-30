import React from 'react';
import { CountdownTimer } from './components/CountdownTimer';
import { Sparkles } from 'lucide-react';
import { Logo } from './components/Logo';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-950 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Logo */}
      <div className="absolute top-8 left-8 z-20">
        <Logo className="text-4xl" />
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 -top-32 -left-32 bg-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute w-64 h-64 -bottom-32 -right-32 bg-red-600/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-pulse flex items-center justify-center gap-4">
          <Sparkles className="w-8 h-8 md:w-12 md:h-12" />
          2025 Happy New Year!
          <Sparkles className="w-8 h-8 md:w-12 md:h-12" />
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-12 italic">
          Something big is coming soon!
        </p>

        <CountdownTimer />
      </div>

      {/* Animated stars */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            ✨
          </div>
        ))}
      </div>
    </div>
  );
}