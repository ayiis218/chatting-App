import React, { useState } from 'react';
import { Image } from '@mui/icons-material';
import {
  IconPlus,
  IconEmoticon,
  IconCamera,
  IconImage,
  IconDocument,
  IconUser,
  IconLocation
} from '../../assets/icons';
import Picker from 'emoji-picker-react';
import styles from './styles/Footer.module.css';

const index = ({ onSendMessage, message, setMessage }) => {
  const [navbarPopup, setNavbarPopup] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setMessage((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  return (
    <>
      <section className={styles.footer}>
        <div className={styles.form}>
          <form onSubmit={onSendMessage}>
            <input
              type="text"
              name="message"
              autoComplete="off"
              placeholder="Type your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <input type="submit" style={{ display: 'none' }} disabled={!message} />
          </form>
          <div className="style__footer--action">
            <div className="icon">
              <img
                src={IconPlus}
                alt="icon"
                onClick={() => {
                  navbarPopup ? setNavbarPopup(false) : setNavbarPopup(true);
                }}
              />
            </div>
            <div className="icon" onClick={() => setShowPicker((val) => !val)}>
              <img src={IconEmoticon} alt="icon" />
            </div>
            <div className="icon">
              <img src={IconCamera} alt="icon" />
            </div>
          </div>
        </div>
        {navbarPopup && (
          <div className={styles.popup}>
            <div className={styles.popup.row}>
              <Image src={IconImage} alt="Image" />
              <p>Image</p>
            </div>
            <div className={styles.popup.row}>
              <Image src={IconDocument} alt="Documents" />
              <p>Documents</p>
            </div>
            <div className={styles.popup.row}>
              <Image src={IconUser} alt="Contacts" />
              <p>Contacts</p>
            </div>
            <div className={styles.popup.row}>
              <Image src={IconLocation} alt="Location" />
              <p>Location</p>
            </div>
          </div>
        )}
      </section>

      {showPicker && (
        <Picker
          pickerStyle={{ position: 'absolute', bottom: '80px', right: '100px', width: '300px' }}
          onEmojiClick={onEmojiClick}
        />
      )}
    </>
  );
};

export default index;