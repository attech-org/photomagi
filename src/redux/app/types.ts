import { TodoItem } from './reducer';

export enum AppActions {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  ADD_TO_DONE = 'ADD_TO_DONE',
  SUBMIT_ITEM = 'SUBMIT_ITEM',
}

interface IncreaseCounterAction {
  type: AppActions.ADD_ITEM;
  payload: TodoItem;
}

interface DecreaseCounterAction {
  type: AppActions.REMOVE_ITEM;
  payload: TodoItem;
}
interface AddToDoneAction {
  type: AppActions.ADD_TO_DONE;
  payload: TodoItem;
}
interface SubmitItemAction {
  type: AppActions.SUBMIT_ITEM;
  payload?: TodoItem;
}

export type AppActionTypes =
  | IncreaseCounterAction
  | DecreaseCounterAction
  | AddToDoneAction
  | SubmitItemAction;
