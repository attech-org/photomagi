import { User } from 'firebase/auth';

export enum ProfileActions {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
  UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER',
}

interface SetCurrentUserAction {
  type: ProfileActions.SET_CURRENT_USER;
  payload?: User;
}

interface UpdateCurrentUserAction {
  type: ProfileActions.UPDATE_CURRENT_USER;
  payload: Partial<User>;
}
export type ProfileActionTypes = SetCurrentUserAction | UpdateCurrentUserAction;
