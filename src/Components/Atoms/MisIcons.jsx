import React from "react";
import Yellow100pcStar from '../../assets/Icons/Illustrated/Star Fill100pc ColorYellow.svg';

//MISCELLANEOUS ICONS
//Star Icons

//Yellow Stars

const Star_Yellow_100pc = ({ size = 20 }) => {
    return (
        <img
            src={Yellow100pcStar}
            alt={`Star Yellow 100% Filled`} 
            style={{ 
                width: `${size}px`, 
                height: `${size}px` 
            }}
        />
    );
};

export {
    Star_Yellow_100pc,
};
