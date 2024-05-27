import React from 'react';
import CTAbutton from '../Components/Atoms/CTAButton';
import TailIcon from '../assets/Icons/UI/chevron-right.svg';
import DiscountTag from '../Components/Atoms/DiscountTag';
import styles from './HeroCard.module.css';

function ProductDetailsCTA() {
    return (
        <div className={styles.detailsCTA}>
            <div className={styles.nameDescription}>
                <DiscountTag />
                <div className={styles.productName}>
                    <div className={styles.productNameText}>
                        Modern White Velvet 3-Seater Sofa Channel Tufted Upholstered Luxury Solid Wood
                    </div>
                </div>
                <div className={styles.prodDescription}>
                    <div className={styles.prodDescriptionText}>
                        This velvet couch is a sophisticated and trendy sofa that focuses on
                        furniture because of its sumptuous velvet quilted fabric and strong wood legs.
                    </div>
                </div>
            </div>
            <CTAbutton label="Shop Now" tailIcon={TailIcon} />
        </div>
    );
}

export default ProductDetailsCTA;
