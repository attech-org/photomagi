import { Fighter } from './reducer';

export enum AppActions {
  SET_FIGHTERS = 'SET_FIGHTERS',
}

interface AddFightersAction {
  type: AppActions.SET_FIGHTERS;
  payload: Fighter[];
}

export type AppActionTypes = AddFightersAction;
