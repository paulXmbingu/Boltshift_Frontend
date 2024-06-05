import React from "react";
import styles from "./Button.module.css";

const Btn_Sec_Gray_SM = () => {
    return(
        <button>  </button>
    );
};


const Btn_Primary_MD = () => {
    return (
        <button className={styles.Btn_Primary_MD}>
            Button CTA
        </button>
    );
};


const Btn_Primary_LG = () => {
    return (
        <button className={styles.Btn_Primary_LG}>
            Button CTA
        </button>
    );
};



export { Btn_Sec_Gray_SM, Btn_Primary_MD, Btn_Primary_LG };
