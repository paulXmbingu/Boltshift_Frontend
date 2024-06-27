import React from "react";
import styles from "./NavBarDropDownMenu.module.css"
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
            <MenuListItem ActionLabel={`Personal Info`} MenuIcon={PersonalInfo} />
            <MenuListItem ActionLabel={`Order`} MenuIcon={Order} />
            <MenuListItem ActionLabel={`Payment`} MenuIcon={Payment} />
            <MenuListItem ActionLabel={`Vouchers`} MenuIcon={Voucher} />
            <div className={styles.divider}></div>
            <MenuListItem ActionLabel={`Log Out`} MenuIcon={LogOut} />
        </div>
    )
}

export { NavBarDropDownMenu }
