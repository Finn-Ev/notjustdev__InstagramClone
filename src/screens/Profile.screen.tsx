import { Image } from 'react-native';
import user from '../../assets/data/user.json';
import FeedGridView from '../components/feed/FeedGridView';

import ProfileHeader from '../components/profile/ProfileHeader';

interface IProfile {}

const ProfileScreen: React.FC<IProfile> = ({}) => {
  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
