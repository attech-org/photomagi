import { AppActionTypes, AppActions } from './types';

export interface TodoItem {
  id: number;
  itemName: string;
}
export interface AppStore {
  todoItems: TodoItem[];
  doneItems: TodoItem[];
}

const initialStore: AppStore = {
  todoItems: [],
  doneItems: [],
};

const app = (store = initialStore, action: AppActionTypes) => {
  switch (action.type) {
    case AppActions.ADD_ITEM:
      return { ...store, todoItems: [...store.todoItems, action.payload] };
    case AppActions.REMOVE_ITEM:
      return {
        ...store,
        todoItems: store.todoItems.filter((singleItem) => singleItem !== action.payload),
        doneItems: [...store.doneItems, action.payload],
      };
    case AppActions.SUBMIT_ITEM:
      if (action.payload) {
        return {
          ...store,
          todoItems: store.todoItems.map((el) =>
            el.id === action.payload?.id ? action.payload : el,
          ),
        };
      }
      return store;
    default:
      return store;
  }
};

export default app;
