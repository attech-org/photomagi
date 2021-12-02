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
    default:
      return store;
  }
};

export default profile;
