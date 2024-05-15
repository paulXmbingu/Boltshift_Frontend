import React from "react";

//STYLING
const storyStyle={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--spacing-xs, 4px)',
    cursor: 'pointer',
}

const vendorLogoStyle={
    width: 'var(--Base-4-Premitives-16, 64px)',
    height: 'var(--Base-4-Premitives-16, 64px)',
    borderRadius: 'var(--radius-full, 9999px)',
    border: '2px solid var(--Gradient-Linear-Color-69, #F74FAC)',
    background: 'var(--Avatar-company-logo-Biosynthesis, url(<path-to-image>) lightgray 50% / cover no-repeat)'    
}

const vendorNameStyle={
    display: 'flex',
    maxWidth: 'var(--Base-4-Premitives-32, 128px)',
    minHeight: 'var(--Base-4-Premitives-4, 16px)',
    maxHeight: 'var(--Base-4-Premitives-4, 16px)',
    padding: 'var(--spacing-none, 0px)',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 'var(--spacing-none, 0px)',
    alignSelf: 'stretch'
}

const vendorLabelStyle={
    display: '-webkit-box',
    webkitBoxOrient: 'vertical',
    webkitLineClamp: '1',
    flex: '1 0 0',
    overflow: 'hidden',
    color: 'var(--colors-text-text-primary-900, #101828)',
    textAlign: 'center',
    textOverflow: 'ellipsis',
    
    /* Text xs/Regular */
    fontFamily: 'Inter',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '18px' /* 150% */    
}

//FUNCTIONALITY
function VendorStory({logo,label}) {
    return(
        <div style={storyStyle}>
            <img src={logo} alt="Vendor Logo" style={vendorLogoStyle} />
            <div style={vendorNameStyle}>
                <div style={vendorLabelStyle}> {label} </div>
            </div>
        </div>
    );
};

export default VendorStory;
