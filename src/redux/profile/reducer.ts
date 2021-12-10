import { User } from 'firebase/auth';

import { ProfileActions, ProfileActionTypes } from './types';

export interface ProfileStore {
  profile?: User;
}

const initialStore: ProfileStore = {};

const profile = (store = initialStore, action: ProfileActionTypes) => {
  switch (action.type) {
    case ProfileActions.SET_CURRENT_USER:
      return { ...store, profile: action.payload };
    case ProfileActions.UPDATE_CURRENT_USER:
      if (store.profile) {
        return { ...store, profile: { ...store.profile, ...action.payload } };
      }
      return store;
    default:
      return store;
  }
};

export default profile;
