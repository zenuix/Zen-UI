import { useAccordion } from '../context';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Header = ({ children, className }: Props) => {
  const { toggle } = useAccordion();

  return (
    <div onClick={toggle} className={className}>
      {children}
    </div>
  );
};

export default Header;
