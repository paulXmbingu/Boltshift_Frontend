function NotificationIcon({ iconPlaceholder }) {
    return(
        <div className={styles.notification}>
            <img src={iconPlaceholder} alt="Notification Icon" className={styles.icons} />
        </div>
    );
};

export default NotificationIcon;
