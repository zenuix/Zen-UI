import { createContext, useContext, useState } from 'react';
import { TooltipProps, TooltipContextType } from './types';
import { useEscapeKey } from '../../global-hooks';

const TooltipContext = createContext<TooltipContextType>({
  isOpen: false,
  setIsOpen: () => {},
  position: 'top',
  animation: 'fade',
  offset: 8,
  delay: 0
});

export function TooltipProvider({
  children,
  position = 'top',
  animation = 'fade',
  offset = 8,
  delay = 0
}: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEscapeKey(closeMenu, isOpen);

  const value: TooltipContextType = {
    isOpen,
    setIsOpen,
    position,
    animation,
    offset,
    delay
  };

  return <TooltipContext.Provider value={value}>{children}</TooltipContext.Provider>;
}

export const useTooltipContext = () => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error('useTooltipContext must be used within a TooltipProvider');
  }
  return context;
};

export default TooltipProvider;
