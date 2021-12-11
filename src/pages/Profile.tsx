import { useSelector } from 'react-redux';

import Layout from '../containers/Layout';
import ProfileContainer from '../containers/Profile';
import { ProfileStore } from '../redux/profile/reducer';
import { RootStore } from '../redux/store';

const ProfilePage: React.FunctionComponent = () => {
  const profile = useSelector<RootStore, ProfileStore['profile']>((store) => store.profile.profile);
  return (
    <Layout>
      <ProfileContainer profile={profile} />
    </Layout>
  );
};

export default ProfilePage;
