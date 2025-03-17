import { ContentGroupProps } from '../type';

const ContentGroup = ({ children, ...props }: ContentGroupProps) => {
  return <div {...props}>{children}</div>;
};

export default ContentGroup;
