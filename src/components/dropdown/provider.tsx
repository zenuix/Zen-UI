import { useId, useRef, useState } from 'react';
import { useEscapeKey } from '../../global-hooks';
import dropdownContext from './context';
import { DropdownProps } from './type';

const DropdownProvider = ({
  children,
  triggerRef: externalTriggerRef,
  defaultOpen = false,
  open,
  onOpenChange
}: DropdownProps) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);

  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const triggerId = useId();
  const menuId = useId();

  const internalTriggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = isControlled ? (externalTriggerRef ?? null) : internalTriggerRef;

  if (isControlled && !onOpenChange)
    console.warn(
      'You provided `open` prop without an `onOpenChange` handler. This will render a non-interactive dropdown component.'
    );

  if (isControlled && !externalTriggerRef)
    console.warn(
      'You provided a controlled dropdown without passing a reference to the trigger element. This may cause positioning issues. Please provide a ref to the trigger element for proper positioning.'
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

  useEscapeKey(closeMenu, isOpen);

  return (
    <dropdownContext.Provider
      value={{ isOpen, triggerId, menuId, triggerRef, menuRef, openMenu, closeMenu, toggleMenu }}
    >
      {children}
    </dropdownContext.Provider>
  );
};
export default DropdownProvider;
