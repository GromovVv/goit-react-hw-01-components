import Styles from './Profile.module.scss';

import Stats from './Stats';
import Description from './Description';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={Styles.profile}>
    <Description
      name={name}
      tag={tag}
      location={location}
      avatar={avatar}
    />
    <Stats 
      followers={stats.followers}
      views={stats.views}
      likes={stats.likes}
      />
  </div>  
);

export default Profile;

