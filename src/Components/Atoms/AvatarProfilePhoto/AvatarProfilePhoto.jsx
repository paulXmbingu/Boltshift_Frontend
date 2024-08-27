import React from "react";
import styles from "./AvatarProfilePhoto.module.css"

//WITH PHOTO
const AvatarProfilePhotoSM = ({UserPhoto}) => {
    return (
        <div className={styles.AvatarProfilePhotoSM}>
            {UserPhoto && <img src={UserPhoto} alt="User Photo" className={styles.userPhotoSM} />}
        </div>
    );
};

const AvatarProfilePhotoMD = ({UserPhoto}) => {
    return (
        <div className={styles.AvatarProfilePhotoMD}>
            {UserPhoto && <img src={UserPhoto} alt="User Photo" className={styles.userPhotoMD} />}
        </div>
    );
};

export {
    AvatarProfilePhotoSM,
    AvatarProfilePhotoMD
}
