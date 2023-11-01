import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FrendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        className={`${css.status} ${isOnline ? css.online : css.offline}`}
      ></span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};

FrendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
