import { TodoItem } from './reducer';
import { AppActionTypes, AppActions } from './types';

export const addTodoItem = (value: TodoItem): AppActionTypes => ({
  type: AppActions.ADD_TODO,
  payload: value,
});

export const removeTodoItem = (value: TodoItem): AppActionTypes => ({
  type: AppActions.REMOVE_TODO,
  payload: value,
});

export const editTodoItem = (value: TodoItem): AppActionTypes => ({
  type: AppActions.EDIT_TODO,
  payload: value,
});
