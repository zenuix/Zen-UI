import { useRef } from 'react';
import clsx from 'clsx';
import '../style.css';
import { useTooltipContext } from '../context';

interface TooltipTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function TooltipTrigger({ children, className }: TooltipTriggerProps) {
  const { setIsOpen, delay } = useTooltipContext();
  const triggerRef = useRef<HTMLDivElement>(null); // 트리거 요소 DOM 참조
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // 타이머 id 저장 참조

  const handleOpen = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsOpen(true), delay);
  };

  const handleClose = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(false);
  };

  return (
    <div
      ref={triggerRef}
      className={clsx('tooltipWrapper', className)}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      onFocus={handleOpen}
      onBlur={handleClose}
      tabIndex={0}
    >
      {children}
    </div>
  );
}

export default TooltipTrigger;
