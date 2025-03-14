import { useContext } from 'react';
import { dropdownContext } from '../context';
import { DropdownTriggerProps } from '../type';

const DropdownTrigger = ({ children, onClick, ...props }: DropdownTriggerProps) => {
  const { toggleMenu } = useContext(dropdownContext);

  const handleTriggerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
    toggleMenu();
  };

  return (
    <button onClick={handleTriggerClick} {...props}>
      {children}
    </button>
  );
};
DropdownTrigger.displayName = 'dropdown-trigger';

export default DropdownTrigger;
