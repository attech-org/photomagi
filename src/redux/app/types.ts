import { TodoItem } from './reducer';

export enum AppActions {
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  EDIT_TODO = 'EDIT_TODO',
}

interface AddTodoAction {
  type: AppActions.ADD_TODO;
  payload: TodoItem;
}

interface RemoveTodoAction {
  type: AppActions.REMOVE_TODO;
  payload: TodoItem;
}

interface EditTodoAction {
  type: AppActions.EDIT_TODO;
  payload: TodoItem;
}

export type AppActionTypes = AddTodoAction | RemoveTodoAction | EditTodoAction;
