import React from "react";
import ProductLogo from "../assets/Logos/Brand Logo.svg";
import MenuIcon from "../assets/Icons/UI/menu-03.svg";
import UserAvatar from "../Components/Atoms/UserAvatar";
import styles from './TopNav.module.css';
import UserPhoto from '../assets/Images/Photos/Paul Mbingu - Avatar.png';
import Bell from '../assets/Icons/UI/bell-02.svg'
import NotificationIcon from "../Components/Molecules/NotificationIcon";

function TopNav() {
  return (
    <div className={styles.nav}>
      <div className={styles.menu}>
        <img src={MenuIcon} alt="Menu Icon" className={styles.menuIcon} /> 
      </div>
      <div className={styles.productLogo}>
        <img src={ProductLogo} alt="Product Logo" className={styles.logo} />
      </div>
      <div className={styles.searchFilter}>
        Search and Filter 
      </div>
      <div className={styles.notifications}>
        {/* <NotificationIcon /> */}
        <UserAvatar userPhoto={UserPhoto} />
        <UserAvatar userPhoto={UserPhoto} />
        <UserAvatar userPhoto={UserPhoto} />
        <UserAvatar userPhoto={UserPhoto} />
      </div>
    </div>
  );
}

export default TopNav;
