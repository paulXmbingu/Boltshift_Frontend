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
import PaulMbingu from "../../assets/Logos/Paul Mbingu Logo.svg";
import Excite from "../../assets/Logos/Excite Logo.svg";
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
                    <a href="https://play.google.com/store/games?hl=en_US" className={styles.link} target="_blank" rel="noopener noreferrer"> <img src={GoogleStore} alt="Google Logo" className={styles.storeLogo} /> </a>
                    <a href="https://www.apple.com/app-store/" className={styles.link} target="_blank" rel="noopener noreferrer"> <img src={AppleStore} alt="Apple Logo" className={styles.storeLogo} /> </a>
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
                    {/* <a href="https://paulmbingu.com/" className={styles.link} target="_blank" rel="noopener noreferrer" > <img src={PaulMbingu} alt="Paul Mbingu" className={styles.socialLogo} /> </a> */}
                    {/* <a href="https://excite.company/" className={styles.link} target="_blank" rel="noopener noreferrer" > <img src={Excite} alt="Paul Mbingu" className={styles.socialLogo} /> </a> */}
                    <a href="https://dribbble.com/paulXmbingu" className={styles.link} target="_blank" rel="noopener noreferrer" > <img src={Dribbble} alt="Dribbble" className={styles.socialLogo} /> </a>
                    <a href="https://www.instagram.com/paulxmbingu/" className={styles.link} target="_blank" rel="noopener noreferrer"> <img src={Instagram} alt="Instagram" className={styles.socialLogo} /> </a>
                    <a href="https://www.linkedin.com/in/paulxmbingu/" className={styles.link} target="_blank" rel="noopener noreferrer"> <img src={LinkedIn} alt="LinkedIn" className={styles.socialLogo} /> </a>
                    <a href="https://github.com/paulXmbingu" className={styles.link} target="_blank" rel="noopener noreferrer"> <img src={GitHub} alt="GitHub" className={styles.socialLogo} /> </a>
                    <a href="https://www.youtube.com/@paulXmbingu" className={styles.link} target="_blank" rel="nooponer noreferrer"> <img src={YouTube} alt="YouTube" className={styles.socialLogo} /> </a>
                    <a href="https://twitter.com/paulXmbingu" className={styles.link} target="_blank" rel="noopener noreferrer" > <img src={X} alt="X" className={styles.socialLogo} /> </a>
                </div>
            </div>
            <div className={styles.copyrightInfoWrapper}>
                <div className={styles.copyrightInfoText}>
                    © 2024 Excite! Innovation Company. All rights reserved. All other trademarks, service marks, company names, and media assets are the property of their respective owners and are used for illustration purpose. <b>Excite! Innovation Company</b> is a Premier Digital Product Innovation Company that specializes in UIUX Research, Design & Software Engineering. <b>Boltshift</b> is an intellectual property designed & built by <b>Paul Mbingu</b> for Excite! Innovation Company. Special thanks to <b>Senje's Cuisines</b>, <b>Marion Ngayi</b>, <b>Mercy Mbingu</b>, <b>Kombo Mwanake</b>, and <b>Felix Ouma</b> as trainee frontend web developer.
                </div>
            </div>
        </div>
    );
};

export default Footer;
