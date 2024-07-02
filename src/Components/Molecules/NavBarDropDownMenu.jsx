import React from "react";
import styles from "./NavBarDropDownMenu.module.css"
import { Link } from "react-router-dom";
import { DropDownMenuHeaderLoggedIn, MenuListItem } from "../Atoms/MenuListItem";
import PersonalInfo from "../../assets/Icons/UI/user-01.svg"
import Order from "../../assets/Icons/UI/shopping-bag-02.svg"
import Payment from "../../assets/Icons/UI/shield-dollar.svg"
import Voucher from "../../assets/Icons/UI/receipt-check.svg"
import LogOut from "../../assets/Icons/UI/log-out-01.svg"

const NavBarDropDownMenu = () => {
    return (
        <div className={styles.navBarDropDownMenuWrap}>
            <DropDownMenuHeaderLoggedIn userName={`Paul Mbingu`} userEmail={`paul@excite.company`} />
            <div className={styles.divider}></div>
            <Link to={`/personalInfo`} className={styles.links} > <MenuListItem ActionLabel={`Personal Info`} MenuIcon={PersonalInfo} /> </Link>
            <Link to={`/order`} className={styles.links} > <MenuListItem ActionLabel={`Order`} MenuIcon={Order} /> </Link>
            <Link to={`/payments`} className={styles.links} > <MenuListItem ActionLabel={`Payment`} MenuIcon={Payment} /> </Link>
            <MenuListItem ActionLabel={`Vouchers`} MenuIcon={Voucher} />
            <div className={styles.divider}></div>
            <MenuListItem ActionLabel={`Log Out`} MenuIcon={LogOut} />
        </div>
    )
}

const NavBarDropDownMenuMobile = () => {
    return (
        <div className={styles.navBarDropDownMenuMobileWrap}>
            Mobile Menu
        </div>
    );
};

export { NavBarDropDownMenu, NavBarDropDownMenuMobile }
