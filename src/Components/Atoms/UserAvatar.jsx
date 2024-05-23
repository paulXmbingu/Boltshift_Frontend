import React from "react";
import styles from "./UserAvatar.module.css";

function UserAvatar({ userPhoto }) {
  return (
    <div className={styles.userAvatar}>
      <img src={userPhoto} alt="User Photo" className={styles.userPhoto} />
    </div>
  );
}

export default UserAvatar;
