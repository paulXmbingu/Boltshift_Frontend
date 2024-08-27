import React from "react";
import styles from "./Avatar.module.css"

// PHOTO AVATAR ONLY
const AvatarOnlyMDPhoto = () => {
    return (
        <img src={`https://res.cloudinary.com/excit3/image/upload/v1718726412/Boltshift%20Branding/Paul_Mbingu_-_Avatar_-_Casual_-_Full_BG_tbr4ml.png`} alt="Avatar Only Medium Size" className={styles.AvatarOnlyMDPhotoWrap} />
    )
}

export { AvatarOnlyMDPhoto }
