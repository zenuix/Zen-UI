import { useContext } from 'react';
import { dropdownContext } from './context';

export const useDropdownContext = () => {
  const context = useContext(dropdownContext);
  if (!context) {
    throw new Error('useDropdown must be used within a dropdownContext');
  }
  return context;
};
