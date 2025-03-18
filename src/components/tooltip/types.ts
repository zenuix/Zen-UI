import { ReactNode } from 'react';

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  animation?: 'fade' | 'scale' | 'none';
  offset?: number;
  delay?: number;
}

export interface TooltipContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  position: 'top' | 'bottom' | 'left' | 'right';
  animation: 'fade' | 'scale' | 'none';
  offset: number;
  delay: number;
}
