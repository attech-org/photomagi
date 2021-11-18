import { TodoItem } from './reducer';

export enum AppActions {
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
}

interface AddTodoAction {
  type: AppActions.ADD_TODO;
  payload: TodoItem;
}

interface RemoveTodoAction {
  type: AppActions.REMOVE_TODO;
  payload: number;
}

export type AppActionTypes = AddTodoAction | RemoveTodoAction;
