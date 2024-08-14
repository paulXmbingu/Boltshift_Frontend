import React from "react";
import styles from "./ButtonGroup.module.css"

const ButtonGroup = ( {LeadingIcon, ButtonCTA, handleClick } ) => {
    return (
        <button 
            className={styles.buttonGroupWrap} 
            onClick={handleClick}
            >
            {LeadingIcon && <img 
                src={LeadingIcon} 
                alt="Leading Icon" 
                className={styles.ButtonGroupLeadingIcon} 
            />}
            <div className={styles.ButtonGroupCTA}> {ButtonCTA} </div>
        </button>
    );
};

export { ButtonGroup };
