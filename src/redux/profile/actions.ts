import { User } from 'firebase/auth';

import { ProfileActionTypes, ProfileActions } from './types';

export const setUser = (value: User | undefined): ProfileActionTypes => ({
  type: ProfileActions.SET_CURRENT_USER,
  payload: value,
});

export const updateUserProfile = (value: Partial<User>): ProfileActionTypes => ({
  type: ProfileActions.UPDATE_CURRENT_USER,
  payload: value,
});
