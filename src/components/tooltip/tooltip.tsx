import TooltipProvider from './context';
import { TooltipProps } from './types';

function TooltipComponent({ children, ...props }: TooltipProps) {
  return <TooltipProvider {...props}>{children}</TooltipProvider>;
}

export default TooltipComponent;
