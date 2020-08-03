import React from 'react';
import styles from "./Footer.module.css"

const Footer = ({ count }) => (<div className={styles.text}>
    We have { count } more tasks to do. Start working!
</div>);

export default Footer;
