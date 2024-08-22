import React from "react";
import styles from './MisIcons.module.css'
import Yellow100pcStar from '../../assets/Icons/Illustrated/Star Fill100pc ColorYellow.svg'

//MISCELLANEOUS ICONS
//Star Icons

//Yellow Stars

const Star_Yellow_100pc = ({ width = 20, height = 20 }) => {
    return (
        <img
            src={Yellow100pcStar}
            alt={`Star Icon`} 
            style={{ width: `${width}px`, height: `${height}px` }}
        />
    );
};


export {
    Star_Yellow_100pc,
}
