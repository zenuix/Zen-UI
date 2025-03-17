import { ReactElement } from 'react';

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;
type UlProps = React.HTMLAttributes<HTMLUListElement>;
type LiProps = React.HTMLAttributes<HTMLLIElement>;

export type TabsComponentProps = {
  children: [ReactElement<TabGroupProps>, ReactElement<ContentGroupProps>];
  defaultTab?: string;
  tab?: string;
  onChange?: (newTab: string) => void;
};

export type TabGroupProps = UlProps & {
  children: ReactElement<TabProps> | ReactElement<TabProps>[];
};

export type TabProps = LiProps &
  ButtonProps & {
    children?: React.ReactNode;
    id: string;
  };

export type ContentGroupProps = DivProps & {
  children: ReactElement<ContentProps> | ReactElement<ContentProps>[];
};

export type ContentProps = DivProps & {
  children?: React.ReactNode;
  id: string;
};

export type TabsContextType = {
  activeTab: string;
  handleChange: (newTab: string) => void;
};

export type TabsProviderProps = {
  children?: React.ReactNode;
  defaultTab?: string;
  tab?: string;
  onChange?: (newTab: string) => void;
};
