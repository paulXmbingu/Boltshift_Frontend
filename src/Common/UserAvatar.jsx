import React from "react";
import ProfilePhoto from "../assets/Images/Photos/Paul Mbingu - Avatar.png";
import styles from './UserAvatar.module.css';

// FUNCTIONALITY
function UserAvatar() {
    return (
        <div>
            <img src={ProfilePhoto} alt="User Avatar Photo" className={styles.avatar} />
        </div>
    );
};

export default UserAvatar;
