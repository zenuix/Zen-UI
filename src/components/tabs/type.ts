import { Dispatch, SetStateAction } from 'react';

export type TabsComponentProps = {
  children?: React.ReactNode;
  defaultTab: string;
};

export type TabGroupProps = {
  children?: React.ReactNode;
};

export type TabProps = {
  children?: React.ReactNode;
  id: string;
};

export type ContentGroupProps = {
  children?: React.ReactNode;
};

export type ContentProps = {
  children?: React.ReactNode;
  id: string;
};

export type TabsContextType = {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
};

export type TabsProviderProps = {
  children?: React.ReactNode;
  defaultTab: string;
};
