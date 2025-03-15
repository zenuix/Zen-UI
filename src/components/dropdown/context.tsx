import { createContext, useState } from 'react';
import { DropdownProps, DropdownContextType } from './type';

export const dropdownContext = createContext<DropdownContextType>({
  isOpen: false,
  openMenu() {},
  closeMenu() {},
  toggleMenu() {}
});

const DropdownProvider = ({ children, defaultOpen = false, open, onOpenChange }: DropdownProps) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);

  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  if (isControlled && !onOpenChange)
    console.warn(
      'You provided `open` prop without an `onOpenChange` handler. This will render a non-interactive dropdown component.'
    );

  const setOpen = (value: boolean) => {
    if (!!onOpenChange && typeof onOpenChange !== 'function')
      console.warn('onOpenChange should be a function, ignoring invalid handler');
    else if (!!onOpenChange) onOpenChange(value);
    if (isControlled) setInternalOpen(value);
  };

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen(!isOpen);

  return (
    <dropdownContext.Provider value={{ isOpen, openMenu, closeMenu, toggleMenu }}>{children}</dropdownContext.Provider>
  );
};
export default DropdownProvider;
