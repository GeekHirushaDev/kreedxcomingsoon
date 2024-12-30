import React from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`font-bold text-3xl select-none ${className}`}>
      <img className="text-white" src="https://kreedx.com/kreedx_light.png" width={200} height={200} alt="KreedX Logo" />
    </div>
  );
}
