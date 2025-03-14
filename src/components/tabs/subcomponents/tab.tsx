import { useContext } from 'react';
import { TabProps } from '../type';
import { TabsContext } from '../context';
import '../style.css';

const Tab = ({ children, id }: TabProps) => {
  const { setActiveTabId } = useContext(TabsContext);

  return (
    <button className="tab-button" onClick={() => setActiveTabId?.(id)}>
      {children}
    </button>
  );
};

export default Tab;
