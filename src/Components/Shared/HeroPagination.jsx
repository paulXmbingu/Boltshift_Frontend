import React from "react";

//STYLING
const pagination={
    display: 'flex',
    padding: 'var(--spacing-md, 8px)',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 'var(--spacing-lg, 12px)',
    borderRadius: 'var(--radius-full, 9999px)',
    background: 'var(--Component-colors-Alpha-alpha-white-90, rgba(255, 255, 255, 0.90))',
    
    /* Backdrop blurs/backdrop-blur-sm */
    backdropFilter: 'blur(4px)'    
}

//FUNCTIONALITY
function HeroPagination() {
    return(
        <div style={pagination}>
            Pagination Dots
        </div>
    );

};

export default HeroPagination;
