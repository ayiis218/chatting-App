import React from 'react';
import propTypes from 'prop-types';
import Default from '../../assets/img/default.png';
// import moment from 'moment';
import styles from './styles/Message.module.css';

const Message = ({ username, message, time, newMessage, onClick }) => {
  return (
    <div className={styles.message} onClick={onClick}>
      <div className={styles.avatar}>
        <img
          src={Default}
          alt={username}
        //   onError={(e) => {
        //     e.target.src = Default;
        //   }}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          {/* <h4 className={styles.username}>{username}</h4>
          {message.length ? (
            message.map((item) => (
              <h4 key={item.id} className={styles.chat}>
                {item.message}
              </h4>
            ))
          ) : ( */}
            <h4 className={styles.chat}>No Chat</h4>
          {/* )} */}
        </div>

        {/* <div className={styles.number}>
          {time.length ? (
            time.map((item) => (
              <p key={item.id} className="times">
                {moment(item.created_at).format('HH:mm')}
              </p>
            ))
          ) : (
            <></>
          )}

          <div className="cirle-notification">
            <p>{newMessage}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

Message.propTypes = {
  avatar: propTypes.string,
  username: propTypes.string.isRequired,
  message: propTypes.string,
  time: propTypes.string,
  onClick: propTypes.func
};

Message.defaultProps = {
  avatar: AvatarDefault,
  username: 'Username'
};

export default Message;