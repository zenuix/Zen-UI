import { useContext } from 'react';
import { TabProps } from '../type';
import { TabsContext } from '../context';

const Tab = ({ children, id, ...props }: TabProps) => {
  const { handleChange } = useContext(TabsContext);

  return (
    <li role="presentation">
      <button role="tab" onClick={() => handleChange(id)} {...props}>
        {children}
      </button>
    </li>
  );
};

export default Tab;
