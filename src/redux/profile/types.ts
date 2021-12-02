import { User } from 'firebase/auth';

export enum ProfileActions {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
}

interface SetCurrentUserAction {
  type: ProfileActions.SET_CURRENT_USER;
  payload: User | undefined;
}
export type ProfileActionTypes = SetCurrentUserAction;
