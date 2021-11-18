import { TodoItem } from './reducer';
import { AppActionTypes, AppActions } from './types';

export const addItemAction = (item: TodoItem): AppActionTypes => ({
  type: AppActions.ADD_ITEM,
  payload: item,
});

export const removeItemAction = (item: TodoItem): AppActionTypes => ({
  type: AppActions.REMOVE_ITEM,
  payload: item,
});

export const addToDoneAction = (item: TodoItem): AppActionTypes => ({
  type: AppActions.ADD_TO_DONE,
  payload: item,
});
export const submitItemAction = (item?: TodoItem): AppActionTypes => ({
  type: AppActions.SUBMIT_ITEM,
  payload: item,
});
