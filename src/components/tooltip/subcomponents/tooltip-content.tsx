import clsx from 'clsx';
import '../style.css';
import { useTooltipContext } from '../context';

interface TooltipContentProps {
  children: React.ReactNode;
  className?: string;
}

export function TooltipContent({ children, className }: TooltipContentProps) {
  const { isOpen, position, animation, offset } = useTooltipContext();

  if (!isOpen) return null;

  return (
    <span
      className={clsx(
        'tooltipContent',
        {
          // 위치에 따른 조건부 클래스
          top: position === 'top',
          bottom: position === 'bottom',
          left: position === 'left',
          right: position === 'right',

          // 애니메이션 타입에 따른 조건부 클래스
          fade: animation === 'fade',
          scale: animation === 'scale',

          show: isOpen
        },
        className
      )}
      style={{ [`${position}`]: `calc(100% + ${offset}px)` }}
    >
      {children}
    </span>
  );
}

export default TooltipContent;
