import { Fighter } from './reducer';

export enum AppActions {
  INC_COUNTER = 'INC_COUNTER',
  DEC_COUNTER = 'DEC_COUNTER',
  SET_FIGHTERS = 'SET_FIGHTERS',
}

interface IncreaseCounterAction {
  type: AppActions.INC_COUNTER;
  payload: number;
}

interface DecreaseCounterAction {
  type: AppActions.DEC_COUNTER;
  payload: number;
}

interface AddFightersAction {
  type: AppActions.SET_FIGHTERS;
  payload: Fighter[];
}

export type AppActionTypes = IncreaseCounterAction | DecreaseCounterAction | AddFightersAction;
