import React from "react";
import styles from './DescriptionSection.module.css'
import { SecSectionHeader } from "../../Components/Shared/SecondarySectionHeader";

const DescriptionSection = () => {
    return(
        <div className={styles.productDescriptionSection}>
            <SecSectionHeader headerTitle={`Description`} />
            <div className={styles.productDescriptionWrap}>
                <div className={styles.productDescriptionText}>   
                    Xpluswear's Design Plus Size Mother Of The Bride Dress
                    combines timeless sophistication with modern elegance. Since its inception,
                    Xpluswear has been dedicated to crafting dresses that blend classic charm
                    with contemporary style, making it a trusted name in plus-size fashion.
                    <ul>
                        <li> 
                            <span className={styles.productDescriptionTextBold}> Contemporary Elegance: </span>
                            This dress features an exquisite champagne color and a graceful long silhouette, creating a look that is both chic and refined. The flowing fabric and elegant design make it a standout choice for any formal occasion.
                        </li>
                        <li>
                            <span className={styles.productDescriptionTextBold}> Modern Design: </span>
                            Tailored specifically for plus sizes, this dress offers a flattering fit with a tailored bodice and a graceful skirt that drapes beautifully. The delicate detailing and high-quality fabric ensure both comfort and style.
                        </li>
                        <li>
                            <span className={styles.productDescriptionTextBold}> High-Quality Fabric: </span>
                            Made from premium materials, this dress provides a luxurious feel and exceptional durability. The fabric is designed to move gracefully with you, ensuring that you look and feel your best throughout the event.
                        </li>
                        <li>
                            <span className={styles.productDescriptionTextBold}> Elegant Detailing: </span>
                            The dress is adorned with subtle embellishments that add a touch of sparkle without overwhelming the design. The sophisticated champagne hue complements a wide range of accessories and bridal party themes.
                        </li>
                        <li>
                            <span className={styles.productDescriptionTextBold}> Caring for Your Dress: </span>
                            To maintain the beauty of your Xpluswear dress, follow the care instructions provided. Dry clean only to preserve the fabric and embellishments. Store in a cool, dry place to prevent damage and ensure that your dress remains as stunning as the day you wore it.
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
