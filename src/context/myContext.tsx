import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import {
  Action,
  CHOOSE_CARS,
  CHOOSE_COMPANIES,
  CHOOSE_DISCOUNTS,
  CHOOSE_INSURANCE,
  ContextProps,
  LOGIN,
  State,
} from './types';

// Reducer function
const myReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case CHOOSE_INSURANCE:
      return { ...state, chooseInsurance: action.payload };
    case CHOOSE_CARS:
      return { ...state, cars: action.payload };
    case CHOOSE_COMPANIES:
      return { ...state, companies: action.payload };
    case CHOOSE_DISCOUNTS:
      return { ...state, discounts: action.payload };
    case LOGIN:
      return { ...state, login: action.payload };
    default:
      return state;
  }
};

const initialState: State = {
  login: {
    frist_name: '',
    last_name: '',
    login: false,
  },
  chooseInsurance: {},
  cars: {},
  companies: {
    company: '',
  },
  discounts: {
    discont1: '',
    discont2: '',
  },
};

const MyContext = createContext<ContextProps | undefined>(undefined);

export const MyContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(myReducer, initialState);

  const contextValue: ContextProps = {
    state,
    dispatch,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export const useMyContext = (): ContextProps => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }

  return context;
};
