// components/footer.js

import React from "react";
import styles from './TickerFooter.module.css';

const Footer = () => {
  return (
    <div className={styles.tickerContainer}>
      <ul className={styles.tickerList}>
        <li className={styles.tickerItem}><a href="https://bsky.app/profile/hacloco.org" target="_blank">HacLoCo is on Bluesky! For updates and event notifications follow us at bsky.app/profile/hacloco.org</a></li>
      {/*  <li className={styles.tickerItem}>Item 2</li>
        <li className={styles.tickerItem}>Item 3</li>
        <li className={styles.tickerItem}>Item 4</li>*/}
        {/* Add more list items as needed */}
      </ul>
    </div>
  );
};

export default Footer;
