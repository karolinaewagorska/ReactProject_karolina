import React from 'react';
import styles from "./Footer.module.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";

const Footer = ({ count }) => (
<div>
    <div className={styles.text}>
        <p>We have { count } more tasks to do. Start working!</p>
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

Footer.propTypes = {
    count: PropTypes.number.isRequired
};

export default Footer;
