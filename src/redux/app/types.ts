export enum AppActions {
  INC_COUNTER = 'INC_COUNTER',
  DEC_COUNTER = 'DEC_COUNTER',
}

interface IncreaseCounterAction {
  type: AppActions.INC_COUNTER;
  payload: number;
}

interface DecreaseCounterAction {
  type: AppActions.DEC_COUNTER;
  payload: number;
}

export type AppActionTypes = IncreaseCounterAction | DecreaseCounterAction;
