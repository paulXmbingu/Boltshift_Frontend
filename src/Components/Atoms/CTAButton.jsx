import React from "react";
import styles from './CTAbutton.module.css';

function CTAbutton({label, tailIcon}) {
    return (
        <button className={styles.buttonStyling}>
            {label} {tailIcon &&
            <div className={styles.tailIconStyle}>
                <img src={tailIcon} alt="Tail Icon" />
            </div>}
        </button>
    );
};

export default CTAbutton;
