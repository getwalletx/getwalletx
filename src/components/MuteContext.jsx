"use client"
import { createContext, useContext, useState } from 'react';

const MuteContext = createContext();

export const useMute = () => useContext(MuteContext);

export const MuteProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  return (
    <MuteContext.Provider value={{ isMuted, toggleMute }}>
      {children}
    </MuteContext.Provider>
  );
};
