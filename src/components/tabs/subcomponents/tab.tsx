import { useContext } from 'react';
import { TabProps } from '../type';
import { TabsContext } from '../context';

const Tab = ({ children, id, as: Tag = 'button', ...props }: TabProps) => {
  const { handleChange } = useContext(TabsContext);

  if (typeof id !== 'string') {
    console.warn(`Tabs: 'id' prop should be a string, but received '${typeof id}'.`);
  }

  return (
    <li role="presentation">
      <Tag role="tab" onClick={() => handleChange(id)} {...props}>
        {children}
      </Tag>
    </li>
  );
};

export default Tab;
