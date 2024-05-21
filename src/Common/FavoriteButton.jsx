import React from "react";
import WishilistIcon from "../assets/Icons/UI/heart-rounded.svg";

//STYLING
const favStyling={
    display: 'flex',
    padding: 'var(--spacing-system-guides-corner-radius-2, 8px)',
    alignItems: 'flex-start',
    gap: '8px',
    position: 'absolute',
    right: '0px',
    cursor: 'pointer'
}

const featuredIcon={
    display: 'flex',
    width: '16px',
    height: '16px',
    padding: '8px',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    borderRadius: 'var(--radius-full, 9999px)',
    background: 'var(--Gray-50, #F9FAFB)',
    
    /* Background blur / xl */
    backdropFilter: 'blur(20px)'      
}

//FUNCTIONALITY
function FavoriteButton() {
    return (
        <div style={favStyling} >
            <div style={featuredIcon}>
                <img src={WishilistIcon} alt="Wishilist Icon"/>
            </div>
        </div>
    );
};

export default FavoriteButton;
