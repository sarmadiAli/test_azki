import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Action, ContextPropsSnackBar, OPEN_SNACKBAR, SnackBar } from './types';

// Reducer function
const myReducer = (state: SnackBar, action: Action): SnackBar => {
  switch (action.type) {
    case OPEN_SNACKBAR:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

const initialState: SnackBar = {
  value: '',
  type: 'error',
  open: false,
};

const MyContext = createContext<ContextPropsSnackBar | undefined>(undefined);

export const ContextProviderSnackBar: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(myReducer, initialState);

  const contextValue: ContextPropsSnackBar = {
    state,
    dispatch,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export const useMyContextSnackBar = (): ContextPropsSnackBar => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }

  return context;
};
