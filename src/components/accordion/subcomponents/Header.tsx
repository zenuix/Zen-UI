import { useAccordion } from '../context';

interface Props {
  children: React.ReactNode;
  className?: string;
  index: number;
}

const Header = ({ children, className, index }: Props) => {
  const { toggle } = useAccordion();

  return (
    <div onClick={() => toggle(index)} className={`${className} cursor-pointer p-4 bg-gray-200 rounded-lg`}>
      {children}
    </div>
  );
};

export default Header;
