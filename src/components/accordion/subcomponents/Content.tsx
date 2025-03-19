import { useEffect, useRef, useState } from 'react';
import { useAccordion } from '../context';

interface Props {
  index: number;
  children: React.ReactNode;
  className?: string;
}

const Content = ({ index, children, className }: Props) => {
  const { isOpen } = useAccordion();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, []);

  return (
    <div
      ref={contentRef}
      className={`${className} transition-all duration-300 ease-in-out`}
      style={{
        maxHeight: isOpen[index] ? `${height}px` : '0px',
        opacity: isOpen[index] ? 1 : 0,
        overflow: 'hidden',
        padding: isOpen[index] ? '15px' : '0px'
      }}
    >
      {children}
    </div>
  );
};

export default Content;
