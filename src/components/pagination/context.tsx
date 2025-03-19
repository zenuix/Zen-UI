import React, { useReducer, createContext, useEffect } from 'react';

const initialState: PaginationState = {
  currentPage: 0,
  totalPages: 0,
  pageLimit: 0,
  pages: [],
  leadingEllipsis: false,
  trailingEllipsis: false
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
  currentPage: 0,
  totalPages: 0,
  pageLimit: 0,
  pages: [],
  leadingEllipsis: false,
  trailingEllipsis: false,
  selectPage: () => {},
  prevPage: () => {},
  nextPage: () => {},
  setPages: () => {}
});

export const PaginationProvider = ({
  children,
  totalPages,
  pageLimit = 5,
  leadingEllipsis = false,
  trailingEllipsis = false
}: {
  children: React.ReactNode;
  totalPages: number;
  pageLimit: number;
  leadingEllipsis?: boolean;
  trailingEllipsis?: boolean;
}) => {
  const [state, dispatch] = useReducer(paginationReducer, {
    ...initialState,
    totalPages,
    pageLimit,
    leadingEllipsis,
    trailingEllipsis
  });

  const selectPage = (page: number) => {
    dispatch({ type: SELECT_PAGE, page });
  };

  const prevPage = () => {
    dispatch({ type: PREV_PAGE });
  };

  const nextPage = () => {
    dispatch({ type: NEXT_PAGE });
  };

  const setPages = () => {
    let startPage = Math.max(1, state.currentPage - Math.floor(pageLimit / 2));
    let lastPage = startPage + pageLimit - 1;

    if (lastPage > totalPages) {
      lastPage = totalPages;
      startPage = Math.max(1, lastPage - pageLimit + 1);
    }

    let pages = [];

    for (let i = startPage; i <= lastPage; i++) {
      pages.push(i);
    }

    dispatch({ type: SET_PAGES, pages });
  };

  useEffect(() => {
    setPages();
  }, [state.currentPage, totalPages, pageLimit, state.leadingEllipsis, state.trailingEllipsis]);

  return (
    <paginationContext.Provider
      value={{
        currentPage: state.currentPage,
        totalPages,
        pageLimit,
        pages: state.pages,
        leadingEllipsis,
        trailingEllipsis,
        selectPage,
        prevPage,
        nextPage,
        setPages
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
  leadingEllipsis: boolean;
  trailingEllipsis: boolean;
};

type PaginationContextType = {
  currentPage: number;
  totalPages: number;
  pageLimit: number;
  pages: number[];
  leadingEllipsis: boolean;
  trailingEllipsis: boolean;
  selectPage: (page: number) => void;
  prevPage: () => void;
  nextPage: () => void;
  setPages: () => void;
};
