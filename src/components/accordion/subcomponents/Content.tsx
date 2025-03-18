import { useAccordion } from '../context';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Content = ({ children, className }: Props) => {
  const { isOpen } = useAccordion();

  return isOpen && <div className={className}>{children}</div>;
};

export default Content;
