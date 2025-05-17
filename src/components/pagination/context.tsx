import React, { useReducer, createContext, useEffect } from 'react';

const initialState: PaginationState = {
  currentPage: 1,
  totalPages: 0,
  pageLimit: 0,
  pages: []
};

const paginationReducer = (state: PaginationState, action: PaginationAction): PaginationState => {
  switch (action.type) {
    case SELECT_PAGE:
      return { ...state, currentPage: action.page };
    case PREV_PAGE:
      return state.currentPage > 1 ? { ...state, currentPage: state.currentPage - 1 } : state;
    case NEXT_PAGE:
      return state.currentPage < state.totalPages ? { ...state, currentPage: state.currentPage + 1 } : state;
    case SET_PAGES:
      return { ...state, pages: action.pages };
    default:
      return state;
  }
};

export const paginationContext = createContext<PaginationContextType>({
  ...initialState,
  selectPage: () => {},
  setToPrevPage: () => {},
  setToNextPage: () => {},
  updatePageRange: () => {}
});

export const PaginationProvider = ({
  children,
  totalPages,
  pageLimit = 5,
  onPageChange
}: {
  children: React.ReactNode;
  totalPages: number;
  pageLimit: number;
  onPageChange?: (page: number) => void;
}) => {
  const [state, dispatch] = useReducer(paginationReducer, {
    ...initialState,
    totalPages,
    pageLimit
  });

  const selectPage = (page: number) => {
    dispatch({ type: SELECT_PAGE, page });
    if (onPageChange) onPageChange(page);
  };

  const setToPrevPage = () => {
    if (state.currentPage > 1) {
      const newPage = state.currentPage - 1;
      dispatch({ type: PREV_PAGE });
      if (onPageChange) onPageChange(newPage);
    }
  };

  const setToNextPage = () => {
    if (state.currentPage < state.totalPages) {
      const newPage = state.currentPage + 1;
      dispatch({ type: NEXT_PAGE });
      if (onPageChange) onPageChange(newPage);
    }
  };

  const updatePageRange = () => {
    let startPage = Math.max(1, state.currentPage - Math.floor(state.pageLimit / 2));
    let lastPage = startPage + state.pageLimit - 1;

    if (lastPage > state.totalPages) {
      lastPage = state.totalPages;
      startPage = Math.max(1, lastPage - state.pageLimit + 1);
    }

    const pages = Array.from({ length: lastPage - startPage + 1 }, (_, i) => startPage + i);

    dispatch({ type: SET_PAGES, pages });
  };

  useEffect(() => {
    updatePageRange();
  }, [state.currentPage]);

  return (
    <paginationContext.Provider
      value={{
        currentPage: state.currentPage,
        totalPages,
        pageLimit,
        pages: state.pages,
        selectPage,
        setToPrevPage,
        setToNextPage,
        updatePageRange
      }}
    >
      {children}
    </paginationContext.Provider>
  );
};

const SELECT_PAGE = 'SELECT_PAGE';
const PREV_PAGE = 'PREV_PAGE';
const NEXT_PAGE = 'NEXT_PAGE';
const SET_PAGES = 'SET_PAGES';

type PaginationAction =
  | { type: typeof SELECT_PAGE; page: number }
  | { type: typeof PREV_PAGE }
  | { type: typeof NEXT_PAGE }
  | { type: typeof SET_PAGES; pages: number[] };

type PaginationState = {
  currentPage: number;
  totalPages: number;
  pageLimit: number;
  pages: number[];
};

type PaginationContextType = {
  currentPage: number;
  totalPages: number;
  pageLimit: number;
  pages: number[];
  selectPage: (page: number) => void;
  setToPrevPage: () => void;
  setToNextPage: () => void;
  updatePageRange: () => void;
};
