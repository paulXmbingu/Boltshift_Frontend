import React from "react";
import styles from './BrandLogo.module.css'
import Logo from './Assets/Brand Logo.svg'


const BrandLogoHor = () => {
    return (
        <div>
            <img src={Logo} alt="Brand Logo" className={styles.logoWrap} />
        </div>
    )
}

export {BrandLogoHor};
