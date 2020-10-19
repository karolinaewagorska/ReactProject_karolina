import React from 'react';
import styles from "./Footer.module.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";

const Footer = ({ count, onFilterChange, filter }) => (

<div>
    <div className={styles.tabs}>
        <Tabs
            indicatorColor="primary"
            textColor="inherit"
            variant="fullWidth"
            value={filter}
            aria-label="full width tabs example"
            >
            <Tab 
                label="All"
                value="all"
                onClick={() => onFilterChange("all")}
            />
            <Tab 
                label="Active" 
                value="active"
                onClick={() => onFilterChange("active")}
            />
            <Tab 
                label="Completed" 
                value="done"
                onClick={() => onFilterChange("done")}
                />
        </Tabs>
    </div>
    <div className={styles.text}>
        <p>We have { count } more tasks to do</p>
    </div>
</div>
);

Footer.propTypes = {
    count: PropTypes.number.isRequired
};

export default Footer;
