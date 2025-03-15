import { forwardRef, useContext } from 'react';
import { dropdownContext } from '../context';
import { DropdownItemProps } from '../type';

const DropdownItem = forwardRef<HTMLLIElement, DropdownItemProps>(({ children, onClick, ...props }, ref) => {
  const { closeMenu } = useContext(dropdownContext);

  const handleDropdownItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
    if (onClick && typeof onClick !== 'function')
      console.warn('onClick should be a function, ignoring invalid handler');
    else if (onClick) onClick(e);
    closeMenu();
  };

  return (
    <li onClick={handleDropdownItemClick} ref={ref} {...props}>
      {children}
    </li>
  );
});
DropdownItem.displayName = 'dropdown-item';

export default DropdownItem;
