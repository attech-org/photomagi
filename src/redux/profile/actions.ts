import { User } from 'firebase/auth';

import { ProfileActionTypes, ProfileActions } from './types';

export const setUser = (value: User | undefined): ProfileActionTypes => ({
  type: ProfileActions.SET_CURRENT_USER,
  payload: value,
});
