import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import styles from "./Contacts.module.css";

class Contacts extends React.Component {
    render() {
        return ( <div className={styles.wrap}>
            <div className={styles.title}>
                <h1>Contact</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.contact}>
                    <MailIcon className={styles.icon} />
                    <a  className={styles.link} 
                        href="mailto:gorska.karoliewa@gmail.com" 
                        target="_blank"
                        rel="noopener noreferrer"> 
                        gorska.karoliewa@gmail.com</a>
                </div>
                <div className={styles.contact}>
                    <LocalPhoneIcon className={styles.icon} />
                    <p>+48 518 102 327</p>
                </div>
                <div className={styles.contact}>
                    <FacebookIcon className={styles.icon} />
                    <a  className={styles.link} 
                        href="https://www.facebook.com/karolina.trompek/" 
                        target="_blank"
                        rel="noopener noreferrer">
                        Facebook</a>
                </div>
                <div className={styles.contact}>
                    <LinkedInIcon className={styles.icon} />
                    <a  className={styles.link} 
                        href="https://www.linkedin.com/in/karolina-gorska-372480183/" 
                        target="_blank"
                        rel="noopener noreferrer">
                        LinkedIn</a>
                </div>
            </div>

        </div>

        )
    }
}

export default Contacts;
