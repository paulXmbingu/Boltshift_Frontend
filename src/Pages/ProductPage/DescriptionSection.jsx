import React from "react";
import styles from './DescriptionSection.module.css'
import { SecSectionHeader } from "../../Components/Shared/SecondarySectionHeader";

const DescriptionSection = () => {
    return(
        <div className={styles.productDescriptionSection}>
            <SecSectionHeader headerTitle={`Description`} />
            <div className={styles.productDescriptionWrap}>
                <div className={styles.productDescriptionText}>   
                    Since 1881, Movado has been a brand in motion - always changing, always
                    innovating, always moving forward. This quest for innovation has made us
                    one of the world's premier watchmakers, with a proud heritage of Swiss
                    craftsmanship, design excellence, and technological innovation.
                    <ul>
                        <li> 
                            <span className={styles.productDescriptionTextBold}> Contemporary Chic: </span> Sleek ceramic and sparkling crystals define this modern must have timepiece.
                        </li>
                        <li>
                            <span className={styles.productDescriptionTextBold}> Modern Designed: </span> Women's Movado Bold, stainless steel case with crystals, silver-toned metallic Museum dial with crystal set dot, blush ceramic and stainless steel link bracelet.
                        </li>
                        <li>
                            <span className={styles.productDescriptionTextBold}> Swiss Quartz Accuracy: </span> Swiss quartz movement provides incredibly precise timekeeping, superior craftsmanship and minimal maintenance for a reliable and worry-free timepiece.
                        </li>
                        <li>
                            <span className={styles.productDescriptionTextBold}> K1 Mineral Crystal Glass: </span> K1 mineral crystal is the most common crystal used in designer watches and more scratch-resistant than regular mineral crystal—and is even more shatter-resistant than sapphire crystal.
                        </li>
                        <li>
                            <span className={styles.productDescriptionTextBold}> Caring for Your Timepiece: </span> Like any finely crafted mechanism, your Movado watch requires periodic maintenance to ensure optimal performance. A maintenance interval of 3 to 5 years is recommended, in addition to any required battery replacement. Never open the watch yourself.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export {
    DescriptionSection
};
