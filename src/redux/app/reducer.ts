import { AppActionTypes, AppActions } from './types';

export interface TodoItem {
  name: string;
  id: number;
}

export interface AppStore {
  todos: TodoItem[];
}

const initialStore: AppStore = {
  todos: [{ id: 1, name: 'hallo, this is ToDo List' }],
};

const app = (store = initialStore, action: AppActionTypes) => {
  switch (action.type) {
    case AppActions.ADD_TODO:
      return { ...store, todos: [...store.todos, action.payload] };
    case AppActions.REMOVE_TODO:
      return { ...store, todos: store.todos.filter((el) => el !== action.payload) };
    case AppActions.EDIT_TODO:
      if (action.payload) {
        return {
          ...store,
          todos: store.todos.map((el) => (el.id === action.payload?.id ? action.payload : el)),
        };
      }
      return store;
    default:
      return store;
  }
};

export default app;
