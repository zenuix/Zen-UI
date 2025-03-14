import { useContext } from 'react';
import { dropdownContext } from '../context';
import { DropdownItemProps } from '../type';

const DropdownItem = ({ children, onClick, ...props }: DropdownItemProps) => {
  const { closeMenu } = useContext(dropdownContext);

  const handleDropdownItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
    if (onClick) onClick(e);
    closeMenu();
  };

  return (
    <li onClick={handleDropdownItemClick} {...props}>
      {children}
    </li>
  );
};
DropdownItem.displayName = 'dropdown-item';

export default DropdownItem;
