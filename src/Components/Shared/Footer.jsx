import React from "react";
import styles from "./Footer.module.css"

const Footer = () => {
    return(
        <div className={styles.footerWrapper}>
            <div className={styles.logoStores}>
                Logo and Stores
            </div>
            <div className={styles.linksSocials}>
                Links and Socials
            </div>
            <div className={styles.copyrightInfoWrapper}>
                <div className={styles.copyrightInfoText}>
                    © 2010 - 2024 Paul Mbingu and/or Excite! Innovation Company. All rights reserved. All other trademarks, service marks, and company names are the property of their respective owners. <b>Excite! Innovation Company↗</b> is a Premier Digital Product Innovation Company that Specializes in UIUX Research, Design & Software Engineering. Boltshift is a NON-COMMERCIAL EXPERIMENT conducted by  <strong>Paul Mbingu↗</strong> on behalf of Excite! Innovation Company, exclusively intended for educational purposes. This experiment is not intended for commercial use. Special thanks to <b> Senje's Cuisines ↗, Marion Ngayi ↗, Mercy Mbingu, and Kombo Mwanake ↗.</b>
                </div>
            </div>
        </div>
    );
};

export default Footer;
