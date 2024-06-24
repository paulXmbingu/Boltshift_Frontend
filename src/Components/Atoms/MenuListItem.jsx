import React from "react";
import styles from "./MenuListItem.module.css"

const MenuListItem = ( {ActionLabel, MenuIcon} ) => {
    return(
        <div className={styles.menuItemListWrap}>
            <img src={MenuIcon} alt="Menu Icon" className={styles.menuItemListIcon} />
            <div className={styles.actionLabel}> {ActionLabel} </div>
        </div>
    )
};

export { MenuListItem }
