import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { FireworkSound } from './FireworkSound';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isComplete, setIsComplete] = useState(false);
  const targetDate = new Date('2025-01-15T10:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setIsComplete(true);
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center p-4">
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 min-w-[100px] text-center mb-2">
        <span className="text-4xl font-bold text-white animate-pulse">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-white/80 text-sm uppercase tracking-wider">{label}</span>
    </div>
  );

  return (
    <div className="flex flex-col items-center">
      <FireworkSound isPlaying={isComplete} />
      {isComplete ? (
        <div className="text-center animate-bounce">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-8 h-8" />
            Happy New Year 2025!
            <Sparkles className="w-8 h-8" />
          </h2>
          <p className="text-white/80 text-xl">The wait is over! 🎉</p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-4">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      )}
    </div>
  );
}