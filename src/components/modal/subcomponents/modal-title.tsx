import clsx from 'clsx';
import { PolymorphicProps } from '../type';

/** TitleProps - Headings 범위로 제한 */
export type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong';
export type TitleProps<T extends Headings = 'h2'> = PolymorphicProps<T>;

const Title = <T extends Headings = 'h2'>({ as, children, ...props }: TitleProps<T>) => {
  const Component = as || 'h2';
  return (
    <Component {...props} className={clsx('modal-title', props.className)}>
      {children}
    </Component>
  );
};

export default Title;
