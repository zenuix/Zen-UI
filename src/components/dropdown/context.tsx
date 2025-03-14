import { createContext, useEffect, useState } from 'react';
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

  const setOpen = (value: boolean) => {
    if (onOpenChange) onOpenChange(value);
    if (open === undefined) setInternalOpen(value);
  };

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen(!isOpen);

  useEffect(() => {
    if (open !== undefined) setInternalOpen(open);
  }, [open]);

  return (
    <dropdownContext.Provider value={{ isOpen, openMenu, closeMenu, toggleMenu }}>{children}</dropdownContext.Provider>
  );
};
export default DropdownProvider;
