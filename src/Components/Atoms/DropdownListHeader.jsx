import React from "react";
import styles from "./DropdownListHeader.module.css"
import { AvatarProfilePhotoMD } from "./AvatarProfilePhoto";
import { AvatarOnlyMDPhoto } from "./Avatar";

const DropdownHeaderLoggedinDesktop = ( {UserName, Email} ) => {
    return(
        <div className={styles.menuHeaderWrapDesktop}>
            <AvatarOnlyMDPhoto />
            <div className={styles.userNameEmailDesktop}>
                <div className={styles.userNameDesktop}> {UserName}</div>
                <div className={styles.userEmailDesktop}> {Email} </div>
            </div>
        </div>
    );
};

const DropdownHeaderLoggedinMobile = ( {UserName, Email} ) => {
    return(
        <div className={styles.loggedinMobileWrapper}>
            <div className={styles.profileCover} > </div>
            <div className={styles.userDetails}>
                <AvatarProfilePhotoMD UserPhoto={`https://res.cloudinary.com/excit3/image/upload/v1718726412/Boltshift%20Branding/Paul_Mbingu_-_Avatar_-_Casual_-_Full_BG_tbr4ml.png`} />
                <div className={styles.userNameEmail}>
                    <div className={styles.userName}> {UserName} </div>
                    <div className={styles.email}> {Email} </div>
                </div>
            </div>
        </div>
    );
};

export { DropdownHeaderLoggedinDesktop, DropdownHeaderLoggedinMobile };
