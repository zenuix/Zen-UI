import { ReactNode } from 'react';

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type UlProps = React.HTMLAttributes<HTMLUListElement>;
type LiProps = React.HTMLAttributes<HTMLLIElement>;
type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;
type HrProps = React.HTMLAttributes<HTMLHRElement>;

export type DropdownContentProps = DivProps & {};
export type DropdownGroupProps = UlProps & {};
export type DropdownItemProps = LiProps & {};
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
