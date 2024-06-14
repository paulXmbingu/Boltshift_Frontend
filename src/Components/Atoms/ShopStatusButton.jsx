import React from "react";
import styles from "./ShopStatusButton.module.css"
import StoreStatus from "../../assets/Icons/UI/Dot.svg"

const StoreStatusButton = ({}) => {
    return (
        <div className={styles.buttonWrap}>
            <img src={StoreStatus} alt="" className={styles.indicator} />
            <div className={styles.statusLabel}> We are Open </div>
        </div>
    );
};

export { StoreStatusButton, };
