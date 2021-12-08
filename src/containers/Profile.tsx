import { User } from 'firebase/auth';

interface ProfileContainerProps {
  profile?: User;
}

const ProfileContainer: React.FunctionComponent<ProfileContainerProps> = ({ profile }) => (
  <>
    <div>{profile?.displayName}</div>
    <div>{profile?.email}</div>
  </>
);
export default ProfileContainer;
