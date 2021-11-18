import { TodoItem } from './reducer';
import { AppActionTypes, AppActions } from './types';

export const addTodoItem = (value: TodoItem): AppActionTypes => ({
  type: AppActions.ADD_TODO,
  payload: value,
});

export const removeTodoItem = (value: number): AppActionTypes => ({
  type: AppActions.REMOVE_TODO,
  payload: value,
});
