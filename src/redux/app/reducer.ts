import { AppActionTypes, AppActions } from './types';

export interface TodoItem {
  name: string,
  id: number,
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
      return { ...store, todos: store.todos.filter((el) => el.id !== action.payload) };
    default:
      return store;
  }
};

export default app;
