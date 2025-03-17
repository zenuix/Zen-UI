import { Headings, TitleProps } from '../type';

const Title = <T extends Headings = 'h2'>({ as, children, ...props }: TitleProps<T>) => {
  const Component = as || 'h2';
  return (
    <Component {...props} className={props.className}>
      {children}
    </Component>
  );
};

export default Title;
