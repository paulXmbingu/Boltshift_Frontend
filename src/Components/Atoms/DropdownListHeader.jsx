import React from "react";
import styles from "./DropdownListHeader.module.css"
import { DropDownMenuHeaderLoggedIn } from "./MenuListItem";
import UserAvatar from "./UserAvatar";

const DropdownHeaderLoggedinMobile = () => {
    return(
        <div className={styles.loggedinMobileWrapper}>
            <div className={styles.profileCover} >
            </div>
            <div className={styles.userDetails}>
                <UserAvatar userPhoto={`https://res.cloudinary.com/excit3/image/upload/v1718726412/Boltshift%20Branding/Paul_Mbingu_-_Avatar_-_Casual_-_Full_BG_tbr4ml.png`} />
            </div>
        </div>
    );
};

export { DropdownHeaderLoggedinMobile, };
