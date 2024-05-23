import React from "react";
import styles from "./NotificationIcon.module.css";

function NotificationIcon({ icon }) {
    return(
        <div className={styles.notificationHolder}>
            <img src={icon} alt="Notification Icon" className={styles.icon} />
        </div>
    );
};

export default NotificationIcon;
