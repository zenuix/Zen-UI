import { ElementType, forwardRef, Ref } from 'react';
import { DropdownGroupProps, ListType } from '../type';

const DropdownGroupInner = <T extends ListType = 'ul'>(
  { children, as = 'ul' as T, ...props }: DropdownGroupProps<T>,
  ref: Ref<HTMLElementTagNameMap[T]>
) => {
  const Component = as as ElementType;

  return (
    <Component role="group" ref={ref} {...props}>
      {children}
    </Component>
  );
};

const DropdownGroup = forwardRef(DropdownGroupInner);
DropdownGroup.displayName = 'DropdownGroup';

export default DropdownGroup;
