import { AppActionTypes, AppActions } from './types';

export const increaseCounter = (value: number): AppActionTypes => ({
  type: AppActions.INC_COUNTER,
  payload: value,
});

export const decreaseCounter = (value: number): AppActionTypes => ({
  type: AppActions.DEC_COUNTER,
  payload: value,
});
