import React from "react";

//STYLING
const buttonStyling={
    color: 'var(--Base-White, #FFF)',
    /* Text md/Semibold */
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '24px' /* 150% */,
    display: 'flex',
    minWidth: 'var(--Base-4-Premitives-72, 288px)',
    maxWidth: 'var(--Base-4-Premitives-72, 288px)',
    padding: '12px 20px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    alignSelf: 'stretch',
    borderRadius: '8px',
    border: '1px solid var(--colors-foreground-fg-brand-primary-600, #DA154D)',
    background: 'var(--colors-foreground-fg-brand-primary-600, #DA154D)',
    
    /* Shadow/xs */
    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',  
    cursor: 'pointer',
}

const tailIconStyle={
    width: 'var(--Base-4-Premitives-5, 20px)',
    height: 'var(--Base-4-Premitives-5, 20px)'    
}

//FUNCTIONALITY
function CTAbutton({label,tailIcon}) {
    return(
        <button style={buttonStyling}>
            {label} {tailIcon &&
            <div style={tailIconStyle}>
                <img src={tailIcon} alt="Tail Icon"  />
            </div>}
        </button>
    );
};

export default CTAbutton;
