import { createContext, useId, useRef, useState } from 'react';
import { DropdownProps, DropdownContextType } from './type';

export const dropdownContext = createContext<DropdownContextType>({
  isOpen: false,
  triggerId: '',
  menuId: '',
  triggerRef: null,
  menuRef: null,
  openMenu() {},
  closeMenu() {},
  toggleMenu() {}
});

const DropdownProvider = ({ children, defaultOpen = false, open, onOpenChange }: DropdownProps) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);

  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const triggerId = useId();
  const menuId = useId();

  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  if (isControlled && !onOpenChange)
    console.warn(
      'You provided `open` prop without an `onOpenChange` handler. This will render a non-interactive dropdown component.'
    );

  const setOpen = (value: boolean) => {
    if (!!onOpenChange && typeof onOpenChange !== 'function')
      console.warn('onOpenChange should be a function, ignoring invalid handler');
    else if (!!onOpenChange) onOpenChange(value);
    if (!isControlled) setInternalOpen(value);
  };

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen(!isOpen);

  return (
    <dropdownContext.Provider
      value={{ isOpen, triggerId, menuId, triggerRef, menuRef, openMenu, closeMenu, toggleMenu }}
    >
      {children}
    </dropdownContext.Provider>
  );
};
export default DropdownProvider;
