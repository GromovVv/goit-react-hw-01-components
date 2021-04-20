import Styles from './Profile.module.scss';

import PropTypes from 'prop-types';

const Stats = ({ followers, views, likes }) => (
  <ul className={Styles.stats}>
    <li className={Styles.item}>
      <span className={Styles.label}>Followers</span>
      <span className={Styles.quantity}>{followers}</span>
    </li>
    <li className={Styles.item}>
      <span className={Styles.label}>Views</span>
      <span className={Styles.quantity}>{views}</span>
    </li>
    <li className={Styles.item}>
      <span className={Styles.label}>Likes</span>
      <span className={Styles.quantity}>{likes}</span>
    </li>
  </ul>
);

export default Stats;

Stats.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

Stats.defaultProps = {
  followers: 0,
  views: 0,
  likes: 0,
};
