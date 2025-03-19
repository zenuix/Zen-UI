import React, { useEffect, useState } from 'react';
import { AccordionContext } from './context';
import Header from './subcomponents/Header';
import Content from './subcomponents/Content';

interface Props {
  children: React.ReactNode;
}

const Accordion = ({ children }: Props) => {
  const [isOpen, setisOpen] = useState<boolean[]>([]);

  useEffect(() => {
    const initialState = React.Children.map(children, () => false);
    setisOpen(initialState as boolean[]);
  }, [children]);

  const toggle = (index: number) => {
    setisOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      console.log(isOpen);
      return newState;
    });
  };

  return (
    <AccordionContext.Provider value={{ isOpen, toggle }}>
      <div className="accordion-container flex flex-col gap-1">{children}</div>
    </AccordionContext.Provider>
  );
};
export default Accordion;

Accordion.header = Header;
Accordion.Content = Content;
