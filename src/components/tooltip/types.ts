import { ReactNode } from 'react';

export type TooltipProps = {
  content: ReactNode;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  animation?: 'fade' | 'scale' | 'none';
  offset?: number;
  delay?: number;
};

export type TooltipContextType = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  position: 'top' | 'bottom' | 'left' | 'right';
  animation: 'fade' | 'scale' | 'none';
  offset: number;
  delay: number;
};
