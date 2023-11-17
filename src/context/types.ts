import { Dispatch } from 'react';

export interface State {
  login: Profile;
  cars: {
    types?: {
      id: number;
      title: string;
    };
    vehicle?: {
      id: number;
      title: string;
    };
  };
  chooseInsurance: {};
  companies?: {
    company: string;
  };
  discounts: {
    discont1: string;
    discont2: string;
  };
}

export interface Action {
  type: string;
  payload?: any;
}

export interface SnackBar {
  value: string;
  type: any;
  open: boolean;
}

export interface ContextProps {
  state: State;
  dispatch: Dispatch<Action>;
}
export interface ContextPropsSnackBar {
  state: SnackBar;
  dispatch: Dispatch<Action>;
}

export interface Profile {
  frist_name: string;
  last_name: string;
  login: boolean;
}

export const CHOOSE_INSURANCE = 'CHOOSE_INSURANCE';
export const CHOOSE_CARS = 'CHOOSE_CARS';
export const CHOOSE_COMPANIES = 'CHOOSE_COMPANIES';
export const CHOOSE_DISCOUNTS = 'CHOOSE_DISCOUNTS';
export const LOGIN = 'LOGIN';

export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
