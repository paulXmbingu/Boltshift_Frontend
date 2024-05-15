import React from "react";
import BrandLogo from "../../assets/Logos/Brand Logo.svg"
import MenuIcon from "../../assets/Icons/menu-03.svg"

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

const logoStyle = {
  display: 'flex',
  width: '170px',
  height: '48px',
  padding: '2px 0.738px 2px 0px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '11.38px',
  cursor: 'pointer'
};

const menuIconStyle = {
  width: 'var(--Base-4-Premitives-6, 24px)',
  height: 'var(--Base-4-Premitives-6, 24px)',
  cursor: 'pointer'
};

// FUNCTIONALITY
function TopNav() {
  return(
    <div style={navStyle}>
        <img src={MenuIcon} alt="Menu Icon" style={menuIconStyle} />
        <img src={BrandLogo} alt="Brand Logo" style={logoStyle}/>
        <div> Search & Filter </div>
        <div> Profile & Icons </div>
    </div>
  );
};

export default TopNav;
