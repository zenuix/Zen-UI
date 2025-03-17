import { forwardRef } from 'react';
import { useDropdownContext } from '../hook';
import { DropdownItemProps } from '../type';

const DropdownItem = forwardRef<HTMLLIElement, DropdownItemProps>(({ children, onClick, ...props }, ref) => {
  const { closeMenu } = useDropdownContext();

  const handleDropdownItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
    if (!!onClick && typeof onClick !== 'function')
      console.warn('onClick should be a function, ignoring invalid handler');
    else if (!!onClick) onClick(e);
    closeMenu();
  };

  return (
    <li role="menuitem" ref={ref} onClick={handleDropdownItemClick} {...props}>
      {children}
    </li>
  );
});
DropdownItem.displayName = 'dropdown-item';

export default DropdownItem;
