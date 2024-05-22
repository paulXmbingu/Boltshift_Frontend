import React from "react";
import BrandLogo from "../assets/Logos/Brand Logo.svg"
import MenuIcon from "../assets/Icons/UI/menu-03.svg"
import UserAvatar from "./UserAvatar";

// STYLING
const navStyle = {
  display: 'flex',
  minWidth: 'var(--Grid-layouts-iPhone-375px, 375px)',
  maxWidth: 'var(--grid-layouts-desktop-1280-px, 1280px)',
  minHeight: 'var(--Base-4-Premitives-24, 72px)',
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

const searchWrapper = {
  display: 'flex',
  height: '48px',
  minWidth: 'var(--spacing-system-guides-corner-radius-80, 320px)',
  maxWidth: 'var(--spacing-system-guides-corner-radius-220, 880px)',
  alignItems: 'center',
  gap: 'var(--Base-4-Premitives-3, 12px)',
  flex: '1 0 0'
};

const searchInput = {
  display: 'flex',
  height: 'var(--Base-4-Premitives-11, 44px)',
  minWidth: 'var(--Base-4-Premitives-32, 128px)',
  maxWidth: 'var(--Base-4-Premitives-220, 880px)',
  maxHeight: 'var(--Base-4-Premitives-11, 44px)',
  paddingLeft: 'var(--Base-4-Premitives-3, 12px)',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch',
  borderRadius: 'var(--Base-4-Premitives-2, 8px)',
  border: '1px solid var(--Colors-Border-border-primary, #D0D5DD)',
  background: 'var(--Colors-Base-white, #FFF)'
};

const searchButtonStyle = {
  display: 'flex',
  padding: 'var(--Base-4-Premitives-2, 8px) 14px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch',
  borderRadius: 'var(--Base-4-Premitives-0, 0px)',
  border: '1px solid var(--colors-foreground-fg-brand-primary-600, #DA154D)',
  background: 'var(--colors-foreground-fg-brand-primary-600, #DA154D)',
  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)'
};

// FUNCTIONALITY
function TopNav() {
  return(
    <div style={navStyle}>
        <img src={MenuIcon} alt="Menu Icon" style={menuIconStyle} />
        <img src={BrandLogo} alt="Brand Logo" style={logoStyle}/>
        <div style={searchWrapper}> Search Bar </div>
        <div> 
          <UserAvatar />
        </div>
    </div>
  );
};

export default TopNav;
