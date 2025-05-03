'use client';
import React, { useState, useRef, useEffect } from 'react';

export function InfoMarker({ description }: { description: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const markerRef = useRef<HTMLDivElement | null>(null);
  
  // Handle clicks outside to close tooltip
  useEffect(() => {
    if (!isVisible) return;
    
    function handleClickOutside(event: { target: Node | null; }) {
      if (markerRef.current && !markerRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside as EventListener);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside as EventListener);
    };
  }, [isVisible]);
  
  return (
    <div className="relative inline-block">
      <div 
        ref={markerRef}
        className="flex items-center justify-center w-5 h-5 text-xs font-bold italic text-black bg-zinc-300 rounded-full cursor-help border border-white transition-colors"
        onClick={() => setIsVisible(!isVisible)}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            setIsVisible(false);
          }
        }}
      >
        i
      </div>
      
      {isVisible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 py-2 px-3 bg-zinc-700  text-sm rounded shadow-lg z-50 max-w-sm">
          <p className="text-sm bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent">{description}</p>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
        </div>
      )}
    </div>
  );
}