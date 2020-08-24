import React from 'react';
import styles from "./Footer.module.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const Footer = ({ count, doneCount }) => (
<div>
    <div className={styles.text}>
        <p>We have { count } more tasks to do. Start working!</p>
        <p>But you have already done { doneCount } tasks! Great job!</p>
    </div>
    <div className={styles.tabs}>
        <Tabs
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
            >
            <Tab label="All" />
            <Tab label="Active" />
            <Tab label="Completed" />
        </Tabs>
    </div>
</div>
);

Footer.defaultProps = {
    count: 0,
    doneCount: 666
}

export default Footer;
