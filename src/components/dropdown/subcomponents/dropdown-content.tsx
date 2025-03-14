import { useContext } from 'react';
import { dropdownContext } from '../context';
import { DropdownContentProps } from '../type';

const DropdownContent = ({ children, style, ...props }: DropdownContentProps) => {
  const { isOpen } = useContext(dropdownContext);

  return (
    <div {...props} style={{ display: isOpen ? 'block' : 'none', ...style }}>
      {children}
    </div>
  );
};
export default DropdownContent;
