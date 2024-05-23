import React from "react";
import BrandLogo from "../assets/Logos/Brand Logo.svg";
import MenuIcon from "../assets/Icons/UI/menu-03.svg";
import UserAvatar from "./UserAvatar";
import styles from './TopNav.module.css';

// FUNCTIONALITY
function TopNav() {
  return (
    <div className={styles.nav}>
        <img src={MenuIcon} alt="Menu Icon" className={styles.menuIcon} />
        <img src={BrandLogo} alt="Brand Logo" className={styles.logo} />
        <div className={styles.searchWrapper}> 
          <input type="search" name="Search Products" id="" className={styles.searchInput} placeholder="Search Products" />
        </div>
        <div className={styles.profileNotification}> 
          <UserAvatar />
        </div>
    </div>
  );
};

export default TopNav;
