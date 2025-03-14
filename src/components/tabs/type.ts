/**
 * 탭 루트 컴포넌트
 */
export interface TabsContainerProps {
  children?: React.ReactNode;
  defaultTabId: string;
}

/**
 * 탭 버튼 그룹 컴포넌트
 */
export interface TabGroupProps {
  children?: React.ReactNode;
}

/**
 * 개별 탭 버튼 컴포넌트
 */
export interface TabProps {
  children?: React.ReactNode;
  id: string;
}

/**
 * 탭 내용 그룹 컴포넌트
 */
export interface ContentGroupProps {
  children?: React.ReactNode;
}

/**
 * 개별 탭 내용 컴포넌트
 */
export interface ContentProps {
  children?: React.ReactNode;
  id: string;
}
