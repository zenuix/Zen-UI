import { ElementType, forwardRef, Ref } from 'react';
import { useDropdownContext } from '../hook';
import { DropdownItemProps, ItemType } from '../type';

const DropdownItemInner = <T extends ItemType>(
  { children, as = 'li' as T, onClick, ...props }: DropdownItemProps<T>,
  ref: Ref<HTMLElementTagNameMap[T]>
) => {
  const Component = as as ElementType;
  const { closeMenu } = useDropdownContext();

  const handleDropdownItemClick = (e: React.MouseEvent<HTMLElementTagNameMap[T]>) => {
    if (!!onClick && typeof onClick !== 'function')
      console.warn('onClick should be a function, ignoring invalid handler');
    else if (!!onClick) onClick(e);
    closeMenu();
  };

  return (
    <Component role="menuitem" ref={ref} onClick={handleDropdownItemClick} {...props}>
      {children}
    </Component>
  );
};

const DropdownItem = forwardRef(DropdownItemInner);
DropdownItem.displayName = 'dropdown-item';

export default DropdownItem;
