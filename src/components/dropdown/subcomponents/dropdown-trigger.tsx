import { forwardRef, useContext } from 'react';
import { dropdownContext } from '../context';
import { DropdownTriggerProps } from '../type';

const DropdownTrigger = forwardRef<HTMLButtonElement, DropdownTriggerProps>(({ children, onClick, ...props }, ref) => {
  const { toggleMenu } = useContext(dropdownContext);

  const handleTriggerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick && typeof onClick !== 'function')
      console.warn('onClick should be a function, ignoring invalid handler');
    else if (onClick) onClick(e);
    toggleMenu();
  };

  return (
    <button onClick={handleTriggerClick} ref={ref} {...props}>
      {children}
    </button>
  );
});
DropdownTrigger.displayName = 'dropdown-trigger';

export default DropdownTrigger;
