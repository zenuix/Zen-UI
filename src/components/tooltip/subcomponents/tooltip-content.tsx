import clsx from 'clsx';
import '../style.css';
import { useTooltipContext } from '../context';

interface TooltipContentProps {
  children: React.ReactNode;
  className?: string;
}

export function TooltipContent({ children, className }: TooltipContentProps) {
  const { isOpen, position, animation } = useTooltipContext();

  if (!isOpen) return null;

  return <span className={clsx('tooltipContent', position, animation, { show: isOpen }, className)}>{children}</span>;
}

export default TooltipContent;
