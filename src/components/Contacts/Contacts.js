import React from "react";
import styles from "./Contacts.module.css";

class Contacts extends React.Component {
    render() {
        return ( <div className={styles.wrap}>
            <div className={styles.title}>
                <p>CONTACT</p>
            </div>
            <div className={styles.contact}>
                <img className={styles.icon} src={require("./Media/location-pin.svg")} alt="location" />
                <div className={styles.location}>
                <div className={styles.location}>
                        <p>Wrocław</p>
                    </div>
                </div>
            </div>
                <div className={styles.contact}>
                    <img className={styles.icon} src={require("./Media/email.svg")} alt="email" />
                    <div className={styles.mail}>
                        <a className={styles.link} 
                            href="mailto:gorska.karoliewa@gmail.com" 
                            target="_blank"
                            rel="noopener noreferrer"> 
                            gorska.karoliewa@gmail.com</a>
                    </div>
                </div>
                <div className={styles.contact}>
                    <img className={styles.icon} src={require("./Media/phone-message.svg")} alt="phone" />
                    <div className={styles.phone}>
                        <p>+48 518 102 327</p>
                    </div>
                </div>
                <div className={styles.contact}>
                    <img className={styles.icon} src={require("./Media/facebook.svg")} alt="facebook" />
                    <div className={styles.facebook}>
                        <a  className={styles.link} 
                            href="https://www.facebook.com/karolina.trompek/" 
                            target="_blank"
                            rel="noopener noreferrer">
                            Facebook</a>
                    </div>
                </div>
                <div className={styles.contact}>
                    <img className={styles.icon} src={require("./Media/linkedin.svg")} alt="linkedin" />
                    <div className={styles.linkedin}>
                        <a  className={styles.link} 
                            href="https://www.linkedin.com/in/karolina-gorska-372480183/" 
                            target="_blank"
                            rel="noopener noreferrer">
                            LinkedIn</a>
                    </div>
                </div>
                <div className={styles.contact}>
                    <img className={styles.icon} src={require("./Media/github.svg")} alt="git" />
                    <div className={styles.git}>
                        <a  className={styles.link} 
                            href="https://github.com/karolinaewagorska/" 
                            target="_blank"
                            rel="noopener noreferrer">
                            GitHub</a>
                    </div>
                </div>
        </div>

        );
    }
}

export default Contacts;
