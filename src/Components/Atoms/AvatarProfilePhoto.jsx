import React from "react";
import styles from "./AvatarProfilePhoto.module.css"

//WITH PHOTO

const AvatarProfilePhotoMD = ({UserPhoto}) => {
    return (
        <div className={styles.AvatarProfilePhotoMD}>
            <img src={UserPhoto} alt="User Photo" className={styles.userPhoto} />
        </div>
    );
};

export {AvatarProfilePhotoMD, }
