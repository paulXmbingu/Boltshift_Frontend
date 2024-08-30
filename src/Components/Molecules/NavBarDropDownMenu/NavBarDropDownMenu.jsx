import React from "react";
import styles from "./NavBarDropDownMenu.module.css";
import { Link } from "react-router-dom";
import { MenuListItem } from "../../Atoms/MenuListItem";
import PersonalInfo from "./Assets/user-01.svg";
import Order from "./Assets/shopping-bag-02.svg";
import Payment from "./Assets/shield-dollar.svg";
import Voucher from "./Assets/receipt-check.svg";
import LogOut from "./Assets/log-out-01.svg";
import { DropdownHeaderLoggedinDesktop, DropdownHeaderLoggedinMobile } from "../../Atoms/DropdownListHeader";

const NavBarDropDownMenu = () => {
    return (
        <div className={styles.navBarDropDownMenuWrap}>
            <DropdownHeaderLoggedinDesktop UserName="Paul Mbingu" Email="paul@excite.company" />
            <div className={styles.divider}></div>
            <Link to="/personalInfo" className={styles.links}> 
                <MenuListItem ActionLabel="Personal Info" MenuIcon={PersonalInfo} /> 
            </Link>
            <Link to="/orders" className={styles.links}> 
                <MenuListItem ActionLabel="Orders" MenuIcon={Order} /> 
            </Link>
            <Link to="/payments" className={styles.links}> 
                <MenuListItem ActionLabel="Payments" MenuIcon={Payment} /> 
            </Link>
            <Link to="/vouchers" className={styles.links}> 
                <MenuListItem ActionLabel="Vouchers" MenuIcon={Voucher} /> 
            </Link>
            <div className={styles.divider}></div>
            <MenuListItem ActionLabel="Log Out" MenuIcon={LogOut} />
        </div>
    );
};

const NavBarDropDownMenuMobileLoggedIn = () => {
    const handleClick = (event) => {
        event.stopPropagation();
    };

    return (
        <div className={styles.navBarDropDownMenuMobileWrap} onClick={handleClick}>
            <div className={styles.mainMenu}>
                <DropdownHeaderLoggedinMobile UserName="Paul Mbingu" Email="paul@excite.company"/>
                <div className={styles.divider}></div>
                <div className={styles.menuItems}>
                    <Link to="/personalInfo" className={styles.links}> 
                        <MenuListItem ActionLabel="Personal Info" MenuIcon={PersonalInfo} /> 
                    </Link>
                    <Link to="/orders" className={styles.links}> 
                        <MenuListItem ActionLabel="Orders" MenuIcon={Order} /> 
                    </Link>
                    <Link to="/payments" className={styles.links}> 
                        <MenuListItem ActionLabel="Payments" MenuIcon={Payment} /> 
                    </Link>
                    <Link to="/vouchers" className={styles.links}> 
                        <MenuListItem ActionLabel="Vouchers" MenuIcon={Voucher} /> 
                    </Link>
                    <MenuListItem ActionLabel="Log Out" MenuIcon={LogOut} classname={styles.logout} />
                </div>
            </div>
        </div>
    );
};

export { NavBarDropDownMenu, NavBarDropDownMenuMobileLoggedIn };
