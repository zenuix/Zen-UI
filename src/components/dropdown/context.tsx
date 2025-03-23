import { createContext } from 'react';
import { DropdownContextType } from './type';

const dropdownContext = createContext<DropdownContextType>({
  isOpen: false,
  triggerId: '',
  menuId: '',
  triggerRef: null,
  menuRef: null,
  openMenu() {},
  closeMenu() {},
  toggleMenu() {}
});
export default dropdownContext;
