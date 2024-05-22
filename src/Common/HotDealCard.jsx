import React from "react";
import HotDealCardImage from "../assets/Images/Photos/Perfume.jpeg";
import FireIcon from "../assets/Icons/Illustrated/Fire.svg";
import FavoriteButton from "./FavoriteButton"


//STYLING
const cardStyles = {
    display: "flex",
    width: "160px",
    height: "var(--spacing-system-guides-corner-radius-72, 288px)",
    minWidth: "var(--spacing-system-guides-corner-radius-40, 160px)",
    maxWidth: "var(--spacing-system-guides-corner-radius-40, 160px)",
    minHeight: "var(--spacing-system-guides-corner-radius-72, 288px)",
    maxHeight: "var(--spacing-system-guides-corner-radius-64, 288px)",
    paddingBottom: "var(--spacing-system-guides-corner-radius-3, 12px)",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "var(--spacing-system-guides-corner-radius-3, 12px)",
    border: "1px solid var(--Colors-Border-border-secondary, #EAECF0)",
    background: "var(--Colors-Background-bg-primary, #FFF)",
    overflow: "hidden",
    transition: "transform 0.2s",
    cursor: "pointer"
};

const productNamePrice = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
};

const productName = {
    display: 'flex',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    flexWrap: 'wrap',
};

const productNameText = {
    display: '-webkit-box',
    width: '128px',
    maxWidth: 'var(--spacing-system-guides-corner-radius-32, 128px)',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    color: 'var(--colors-text-text-primary-900, #101828)',
    textOverflow: 'ellipsis',
    fontFamily: 'Inter',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '18px', // 150%
};

const productPrice = {
    display: 'flex',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    flexWrap: 'wrap',
};

const currency = {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 1,
    overflow: 'hidden',
    color: 'var(--colors-text-text-brand-tertiary-600, #DA154D)',
    textAlign: 'center',
    textOverflow: 'ellipsis',
    fontFamily: 'Inter',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '18px', // 150%
};

const ammount = {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 1,
    overflow: 'hidden',
    color: 'var(--colors-text-text-brand-tertiary-600, #DA154D)',
    textOverflow: 'ellipsis',
    fontFamily: 'Inter',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '18px', // 150%
};

const popularityStatus = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-system-guides-corner-radius-1, 4px)',
    alignSelf: 'stretch',
};

const progressDistance = {
    display: 'flex',
    alignItems: 'center',
    flex: '1 0 0',
    borderRadius: 'var(--spacing-system-guides-corner-radius-2, 8px)',
    background: 'var(--Colors-Background-bg-brand-secondary, #FDE8EE)',
    height: '4px', // Set the height of the progress bar
    overflow: 'hidden', // Hide overflowing content
};

const unitsSold = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 'var(--spacing-system-guides-corner-radius-1, 0.25rem)',
};

const noSold = {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 1,
    overflow: 'hidden',
    color: 'var(--colors-text-text-brand-tertiary-600, #DA154D)',
    textOverflow: 'ellipsis',
    fontFamily: 'Inter',
    fontSize: '0.75rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '1.125rem', // 150%
};

const noLeft = {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 1,
    overflow: 'hidden',
    color: 'var(--colors-text-text-brand-tertiary-600, #DA154D)',
    textAlign: 'center',
    textOverflow: 'ellipsis',
    fontFamily: 'Inter',
    fontSize: '0.75rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '1.125rem', // 150%
};

const Fire = {
    display: 'flex',
    width: '1rem',
    height: '1rem',
    justifyContent: 'center',
    alignItems: 'center',    
};

const imageStyles = {
    height: "160px",
    minHeight: "160px",
    maxHeight: "160px",
    width: "100%",
    objectFit: "cover"
};

const buttonStyles = {
    display: 'flex',
    padding: 'var(--spacing-md, 8px) var(--spacing-lg, 12px)',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 'var(--spacing-xs, 4px)',
    alignSelf: 'stretch',
    borderRadius: 'var(--radius-md, 8px)',
    border: '1px solid var(--Component-colors-Components-Buttons-Secondary-button-secondary-border, #D0D5DD)',
    background: 'var(--Component-colors-Components-Buttons-Secondary-button-secondary-bg, #FFF)',
    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)'
};

const productDetailsStyles = {
    display: 'flex',
    padding: `0px var(--spacing-system-guides-corner-radius-3, 12px)`,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    gap: `var(--spacing-system-guides-corner-radius-1, 4px)`,
    alignSelf: 'stretch'
};


//FUNCTIONALITY
function HotDealCard({imageSrc}) {
    const progress = 50;

    return (
        <div style={cardStyles}>
            {/* <FavoriteButton /> */}
            <img src={imageSrc} alt="Product Image" style={imageStyles} />
            <div style={productDetailsStyles}>
                <div style={productNamePrice}>
                    <div style={productName}>
                        <div style={productNameText}> Modern White Velvet 3-Seater Sofa Channel Tufted Upholstered Luxury Solid Wood </div>
                    </div>
                    <div style={productPrice}> 
                        <currency style={currency}> Kshs. </currency>
                        <ammount style={ammount}> 92,900 </ammount>
                    </div>
                </div>
                <div style={popularityStatus}>
                    <div style={{ ...progressDistance, width: `${progress}%`, background: 'var(--Colors-Brand-brand-primary, #DA154D)' }}></div>
                    <div style={unitsSold}>
                        <img src={FireIcon} alt="Fire Icon" style={Fire} />
                        <div style={noSold}> 28 </div>
                        <div style={noLeft}> Left </div>
                    </div>
                </div>
                <button style={buttonStyles}> Add to Cart </button>
            </div>
        </div>
    );
};

export default HotDealCard;
