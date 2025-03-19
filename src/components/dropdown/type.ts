import { ReactNode } from 'react';

export type ItemType = 'li' | 'button' | 'a' | 'div';
export type ListType = 'ul' | 'ol' | 'div';

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;
type HrProps = React.HTMLAttributes<HTMLHRElement>;

export type DropdownContentProps = DivProps & {};
export type DropdownGroupProps<T extends ListType & keyof HTMLElementTagNameMap = 'ul'> = React.HTMLAttributes<
  HTMLElementTagNameMap[T]
> & {
  as?: T;
};
export type DropdownItemProps<T extends ItemType & keyof HTMLElementTagNameMap = 'li'> = React.HTMLAttributes<
  HTMLElementTagNameMap[T]
> & {
  as?: T;
};
export type DropdownTriggerProps = ButtonProps & {};
export type DropdownSeparatorProps = HrProps & {};

export type DropdownContextType = {
  isOpen: boolean;
  triggerId: string;
  menuId: string;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
};

export type DropdownProps = {
  children: ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};
