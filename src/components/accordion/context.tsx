import React, { createContext } from 'react';
import AccordionType from './type';

const AccordionContext = createContext<AccordionType>({
  isOpen: false,
  toggle: () => {}
});

const useAccordion = () => {
  const contextAccordion = React.useContext(AccordionContext);
  return contextAccordion;
};

export { useAccordion, AccordionContext };
