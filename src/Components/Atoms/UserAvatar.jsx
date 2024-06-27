import React, { useState } from "react";
import styles from "./UserAvatar.module.css";

function UserAvatar({ userPhoto }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={styles.userAvatar} onClick={handleFocus} tabIndex={0} onFocus={handleFocus} onBlur={handleBlur}>
      <img
        src={userPhoto}
        alt="User Photo"
        className={`${styles.userPhoto} ${isFocused ? styles.focused : ""}`}
      />
    </div>
  );
}

export default UserAvatar;
