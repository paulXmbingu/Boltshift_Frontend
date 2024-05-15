import React from "react";

// STYLING
const navStyle = {
  display: 'flex',
  minWidth: 'var(--Grid-layouts-iPhone-375px, 375px)',
  maxWidth: 'var(--grid-layouts-desktop-1280-px, 1280px)',
  minHeight: 'var(--Base-4-Premitives-24, 96px)',
  padding: 'var(--Base-4-Premitives-4, 16px) var(--spacing-system-guides-corner-radius-4, 16px)',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  gap: '16px var(--Base-4-Premitives-4, 16px)',
  alignSelf: 'stretch',
  flexWrap: 'wrap',
  borderRadius: 'var(--spacing-system-guides-corner-radius-0, 0px)',
  background: 'var(--Base-White, #FFF)',
  /* Background blur/md */
  backdropFilter: 'blur(8px)',
  position: 'sticky',
  top: 0,
  zIndex: 1000 // Optional, adjust as needed
};

// FUNCTIONALITY
function TopNav() {
  return(
    <div style={navStyle}>
        <div> Menu </div>
        <div> Brand Logo </div>
        <div> Search & Filter </div>
        <div> Profile & Icons </div>
    </div>
  );
};

export default TopNav;
