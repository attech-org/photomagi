import { User } from 'firebase/auth';

import { ProfileActions, ProfileActionTypes } from './types';

export interface ProfileStore {
  profile?: Partial<User>;
}

const initialStore: ProfileStore = {};

const profile = (store = initialStore, action: ProfileActionTypes) => {
  switch (action.type) {
    case ProfileActions.SET_CURRENT_USER:
      return { ...store, profile: action.payload };
    case ProfileActions.UPDATE_CURRENT_USER:
      return { ...store, profile: { ...store.profile, ...action.payload } };
    default:
      return store;
  }
};

export default profile;
