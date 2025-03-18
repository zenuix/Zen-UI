import { useState } from 'react';
import { AccordionContext } from './context';
import Header from './subcomponents/Header';
import Content from './subcomponents/Content';

interface Props {
  children: React.ReactNode;
}

const Accordion = ({ children }: Props) => {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen((prev) => !prev);
  };

  return <AccordionContext.Provider value={{ isOpen, toggle }}>{children}</AccordionContext.Provider>;
};
export default Accordion;

Accordion.header = Header;
Accordion.Content = Content;
