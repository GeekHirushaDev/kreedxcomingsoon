import React, { useEffect, useRef } from 'react';

export function FireworkSound({ isPlaying }: { isPlaying: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(error => {
        console.log('Audio playback failed:', error);
      });
    }
  }, [isPlaying]);

  return (
    <audio ref={audioRef} preload="auto">
      <source src="https://assets.mixkit.co/active_storage/sfx/2870/2870-preview.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}