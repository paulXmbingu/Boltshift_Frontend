import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import AppleStore from "../../assets/Logos/Apple Mobile app store badge.svg";
import GoogleStore from "../../assets/Logos/Google Mobile app store badge.svg";
import Dribbble from "../../assets/Logos/Dribbble.svg";
import Instagram from "../../assets/Logos/Instagram.svg";
import LinkedIn from "../../assets/Logos/LinkedIn.svg";
import GitHub from "../../assets/Logos/GitHub.svg";
import YouTube from "../../assets/Logos/YouTube.svg";
import X from "../../assets/Logos/X.svg";
import { BrandLogoHor } from "../Atoms/BrandLogo";

const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.logoStores}>
                <div className={styles.productLogo}> 
                    <Link to='/'>
                        <BrandLogoHor className={styles.logo} />
                    </Link>
                </div>
                <div className={styles.appStores}>
                    <img src={AppleStore} alt="Apple Logo" className={styles.storeLogo} />
                    <img src={GoogleStore} alt="Google Logo" className={styles.storeLogo} />
                </div>
            </div>
            <div className={styles.linksSocials}>
                <div className={styles.footerLinks}>
                    <div className={styles.linkText}> Overview </div>
                    <div className={styles.linkText}> Features </div>
                    <div className={styles.linkText}> Blog </div>
                    <div className={styles.linkText}> Pricing </div>
                    <div className={styles.linkText}> Support </div>
                    <div className={styles.linkText}> FAQs </div>
                    <div className={styles.linkText}> Privacy </div>
                    <div className={styles.linkText}> Ts & Cs </div>
                    <div className={styles.linkText}> Legal </div>
                    <div className={styles.linkText}> Team </div>
                    <div className={styles.linkText}> Careers </div>
                    <a href="https://excite.gitbook.io/boltshift" className={styles.linkText} target="_blank" rel="noopener noreferrer"> Resources </a>
                </div>
                <div className={styles.socialIcons}>
                    <img src={Dribbble} alt="Dribbble" className={styles.socialLogo} />
                    <img src={Instagram} alt="Instagram" className={styles.socialLogo} />
                    <img src={LinkedIn} alt="LinkedIn" className={styles.socialLogo} />
                    <img src={GitHub} alt="GitHub" className={styles.socialLogo} />
                    <img src={YouTube} alt="YouTube" className={styles.socialLogo} />
                    <img src={X} alt="X" className={styles.socialLogo} />
                </div>
            </div>
            <div className={styles.copyrightInfoWrapper}>
                <div className={styles.copyrightInfoText}>
                    © 2010 - 2024 Paul Mbingu and/or Excite! Innovation Company. All rights reserved. All other trademarks, service marks, and company names are the property of their respective owners. <b>Excite! Innovation Company</b> is a Premier Digital Product Innovation Company that specializes in UIUX Research, Design & Software Engineering. <b>Boltshift</b> is an intellectual property designed & built by <b>Paul Mbingu</b> for Excite! Innovation Company. Special thanks to <b>Senje's Cuisines</b>, <b>Marion Ngayi</b>, <b>Mercy Mbingu</b>, <b>Kombo Mwanake</b>, and <b>Felix Ouma</b> as trainee frontend web developer.
                </div>
            </div>
        </div>
    );
};

export default Footer;
