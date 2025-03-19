import { useContext, useEffect, useRef, useState } from 'react';
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
        maxHeight: isOpen[index] ? `${height}px` : '0px', // 열리면 높이를 설정
        opacity: isOpen[index] ? 1 : 0, // 열리면 투명도 1로 설정
        overflow: 'hidden', // 넘치는 부분은 숨김
        padding: isOpen[index] ? '15px' : '0px'
      }}
    >
      {children}
    </div>
  );
};

export default Content;
