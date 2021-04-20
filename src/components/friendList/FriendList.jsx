import PropTypes from 'prop-types'

import Styles from './FriendList.module.scss';

const FriendList = ({ friends }) => (
  <ul className={Styles.friendList}>
    {friends.map(({ id, name, isOnline, avatar }) => (
      <li className={Styles.item} key={id}>
        <span className={ isOnline ? Styles.online : Styles.offline }></span>
        <img className={Styles.avatar} src={avatar} alt="User avatar" width="60" />
        <p className={Styles.name}>{name}</p>
      </li>
    ))}
  </ul>
);

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired
    }),
  ).isRequired,
};
