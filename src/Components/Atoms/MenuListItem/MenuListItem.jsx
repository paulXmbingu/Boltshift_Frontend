import React from "react";
import styles from "./MenuListItem.module.css"
import UserAvatar from "../UserAvatar"

// MENU LISTS

const MenuListItem = ( {ActionLabel, MenuIcon} ) => {
    return(
        <div className={styles.menuItemListWrap}>
            <img src={MenuIcon} alt="Menu Icon" className={styles.menuItemListIcon} />
            <div className={styles.actionLabel}> {ActionLabel} </div>
        </div>
    )
};

// DROP DOWN MENU HEADER

const DropDownMenuHeaderLoggedIn = ( {userName, userEmail} ) => {
    return(
        <div className={styles.menuHeaderWrap}>
            <UserAvatar userPhoto={`https://res.cloudinary.com/excit3/image/upload/v1718726412/Boltshift%20Branding/Paul_Mbingu_-_Avatar_-_Casual_-_Full_BG_tbr4ml.png`}/>
            <div className={styles.userNameEmail}>
                <div className={styles.userName}> {userName}</div>
                <div className={styles.userEmail}> {userEmail} </div>
            </div>
        </div>
    );
};

export { MenuListItem, DropDownMenuHeaderLoggedIn,  }
