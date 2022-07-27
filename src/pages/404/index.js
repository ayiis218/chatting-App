import React from 'react';
import { Link } from 'react-router-dom';
// import { APP_NAME } from '../../helpers/env';
import styles from './style.module.css';

const index = () => {
//   useEffect(() => {
//     document.title = `${APP_NAME} | Not Found Page`;
//   }, []);

  return (
    <div className={styles.notfound}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>404</h1>
        </div>
        <h2>Page Not Found!</h2>
        <Link to="/">
          <span className="arrow" />
          Return To Homepage
        </Link>
      </div>
    </div>
  );
};

export default index;