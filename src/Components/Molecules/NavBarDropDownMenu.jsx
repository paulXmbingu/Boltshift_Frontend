import React from "react";
import styles from "./NavBarDropDownMenu.module.css"
import { Link } from "react-router-dom";
import { DropDownMenuHeaderLoggedIn, MenuListItem } from "../Atoms/MenuListItem";
import PersonalInfo from "../../assets/Icons/UI/user-01.svg"
import Order from "../../assets/Icons/UI/shopping-bag-02.svg"
import Payment from "../../assets/Icons/UI/shield-dollar.svg"
import Voucher from "../../assets/Icons/UI/receipt-check.svg"
import LogOut from "../../assets/Icons/UI/log-out-01.svg"
import { DropdownHeaderLoggedinDesktop, DropdownHeaderLoggedinMobile } from "../Atoms/DropdownListHeader";

const NavBarDropDownMenu = () => {
    return (
        <div className={styles.navBarDropDownMenuWrap}>
            <DropdownHeaderLoggedinDesktop UserName={`Paul Mbingu`} Email={`paul@excite.company`} />
            <div className={styles.divider}></div>
            <Link to={`/personalInfo`} className={styles.links} > <MenuListItem ActionLabel={`Personal Info`} MenuIcon={PersonalInfo} /> </Link>
            <Link to={`/orders`} className={styles.links} > <MenuListItem ActionLabel={`Orders`} MenuIcon={Order} /> </Link>
            <Link to={`/payments`} className={styles.links} > <MenuListItem ActionLabel={`Payments`} MenuIcon={Payment} /> </Link>
            <Link to={`/vouchers`} className={styles.links} > <MenuListItem ActionLabel={`Vouchers`} MenuIcon={Voucher} /> </Link>
            <div className={styles.divider}></div>
            <MenuListItem ActionLabel={`Log Out`} MenuIcon={LogOut} />
        </div>
    )
}

const NavBarDropDownMenuMobileLoggedIn = () => {
    return (
        <div className={styles.navBarDropDownMenuMobileWrap}>
            <div className={styles.mainMenu}>
                <DropdownHeaderLoggedinMobile UserName={`Paul Mbingu`} Email={`paul@excite.company`}/>
                <div className={styles.divider}></div>
                <div className={styles.menuItems}>
                    <Link to={`/personalInfo`} className={styles.links} > <MenuListItem ActionLabel={`Personal Info`} MenuIcon={PersonalInfo} /> </Link>
                    <Link to={`/orders`} className={styles.links} > <MenuListItem ActionLabel={`Orders`} MenuIcon={Order} /> </Link>
                    <Link to={`/payments`} className={styles.links} > <MenuListItem ActionLabel={`Payments`} MenuIcon={Payment} /> </Link>
                    <Link to={`/vouchers`} className={styles.links} > <MenuListItem ActionLabel={`Vouchers`} MenuIcon={Voucher} /> </Link>
                    <MenuListItem ActionLabel={`Log Out`} MenuIcon={LogOut} classname={styles.logout} />
                </div>
            </div>
            <div> Logout </div>
        </div>
    );
};

export { NavBarDropDownMenu, NavBarDropDownMenuMobileLoggedIn }
