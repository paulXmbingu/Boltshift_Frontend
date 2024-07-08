import React from "react";
import styles from "./AvatarProfilePhoto.module.css"

//WITH PHOTO

const AvatarProfilePhotoMD = ({UserPhoto}) => {
    return (
        <div className={styles.AvatarProfilePhotoMD}>
            <img src={UserPhoto} alt="User Photo" className={styles.userPhotoMD} />
        </div>
    );
};

const AvatarProfilePhotoSM = ({UserPhoto}) => {
    return (
        <div className={styles.AvatarProfilePhotoSM}>
            <img src={UserPhoto} alt="User Photo" className={styles.userPhotoSM} />
        </div>
    );
};

export {AvatarProfilePhotoMD, AvatarProfilePhotoSM }
