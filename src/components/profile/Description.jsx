import PropTypes from 'prop-types'

import defaultImage from '../../images/hacker.jpg';

import Styles from './Profile.module.scss';


const Description = ({ name, avatar, tag, location }) => (
    <div className={Styles.description}>
        <img
        src={avatar}
        alt="Аватар пользователя"
        className={Styles.avatar}
        width="200"
        />
        <p className={Styles.name}>{name}</p>
        <p className={Styles.tag}>@{tag}</p>
        <p className={Styles.location}>{location}</p>
    </div>
);

export default Description;


Description.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string
  };
  
  
  Description.defaultProps = {
    name: 'User name',
    tag: 'User tag',
    location: 'User location is undefined',
    avatar: defaultImage
  };
