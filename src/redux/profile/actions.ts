import { getAuth, updateEmail, User } from 'firebase/auth';
import { Dispatch } from 'redux';

import { ProfileActionTypes, ProfileActions } from './types';

const auth = getAuth();
export const setUser = (value: User | undefined): ProfileActionTypes => ({
  type: ProfileActions.SET_CURRENT_USER,
  payload: value,
});

export const updateUser = (value: Partial<User>): ProfileActionTypes => ({
  type: ProfileActions.UPDATE_CURRENT_USER,
  payload: value,
});

export const updateUserAsync = (value: Partial<User>) => async (dispatch: Dispatch) => {
  const user = auth.currentUser;
  if (user) {
    await updateEmail(auth.currentUser, value.email || '');
    dispatch(updateUser(value));
  }
};
