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

const paginationDot={
    width: '8px',
    height: '8px',
    borderRadius: 'var(--radius-full, 9999px)',
    background: 'var(--Colors-Background-bg-quaternary, #EAECF0)'    
}

const paginationDotCurrent={
    width: '40px',
    height: '6px',
    borderRadius: 'var(--radius-full, 9999px)',
    background: 'var(--Colors-Foreground-fg-brand-primary_alt, #DA154D)'
}

//FUNCTIONALITY
function HeroPagination() {
    return(
        <div style={pagination}>
            <div style={paginationDot}></div>
            <div style={paginationDotCurrent}></div>
            <div style={paginationDot}></div>
            <div style={paginationDot}></div>
            <div style={paginationDot}></div>
        </div>
    );

};

export default HeroPagination;
