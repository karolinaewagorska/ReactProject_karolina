import React from 'react';
import styles from "./Footer.module.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const Footer = ({ count, todo, onFilterChange, onClickDeleteComplited }) => (

<div>
    <div className={styles.tabs}>
        <Tabs
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
            >
            <Tab 
                label="All"
                todo={todo}
                onClick={() => onFilterChange("all")}
            />
            <Tab 
                label="Active" 
                onClick={() => onFilterChange("active")
            }
            />
            <Tab 
                label="Completed" 
                onClick={() => onFilterChange("done")}
                />
        </Tabs>
    </div>
    <div className={styles.text}>
        <p>We have { count } more tasks to do.</p>
    </div>
</div>
);

Footer.propTypes = {
    count: PropTypes.number.isRequired
};

export default Footer;
