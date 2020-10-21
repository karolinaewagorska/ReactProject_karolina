import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Card from "@material-ui/core/Card";

import Todo from "../Todo/Todo";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import styles from "./App.module.css";

const App = () => (
  <Router>
    <div className={styles.wrap}>
      <div className={styles.menu}>
          <Link to ="/"> <div className={styles.link}>ABOUT</div></Link>
          <Link to ="/todo"> <div className={styles.link}>TASKS</div></Link>
          <Link to ="/contacts"> <div className={styles.link}>CONTACT</div></Link>
      </div>
      <Card className={styles.content}>
        <Route path="/" exact component={About} />
        <Route path="/todo" component={Todo} />
        <Route path="/contacts" component={Contacts} />
      </Card>
    </div>
    <div className={styles.logo}>
          <span>developed in</span>
          <img className={styles.icon} src={require("./Media/logo.jpg")} alt="logo" />
    </div>
  </Router>);

export default App;
