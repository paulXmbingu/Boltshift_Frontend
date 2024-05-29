import React from "react";
import styles from './TopNav.module.css';
import ProductLogo from "../../assets/Logos/Brand Logo.svg";
import MenuIcon from "../../assets/Icons/UI/menu-03.svg";
import UserAvatar from "../../Components/Atoms/UserAvatar";
import UserPhoto from '../../assets/Images/Photos/Paul Mbingu - Avatar.png';
import NotificationIcon from "../../Components/Molecules/NotificationIcon";
import Favorite from '../../assets/Icons/UI/heart.svg'
import Cart from '../../assets/Icons/UI/shopping-cart-03.svg'
import Bell from '../../assets/Icons/UI/bell-02.svg'
import Search from '../../assets/Icons/UI/search-sm.svg'
import SearchInput from "../../Components/Molecules/SearchInput";

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
        {/* <SearchInput /> */}
      </div>
      <div className={styles.notifications}>
        <NotificationIcon icon={Favorite} />
        <NotificationIcon icon={Cart} />
        <NotificationIcon icon={Bell} />
        <UserAvatar userPhoto={UserPhoto} />
      </div>
    </div>
  );
}

export default TopNav;
