import React from 'react';
import HeroImage from "../../assets/Images/Photos/Sofa.jpg";
import TailIcon from '../../assets/Icons/UI/chevron-right.svg';
import DiscountTag from '../../Components/Atoms/DiscountTag';
import HeroPagination from './HeroPagination';
import FavoriteButton from './FavoriteButton';
import styles from './HeroCard.module.css';
import { Btn_Pri_XL } from '../Atoms/Button';

function HeroCard() {
    return (
        <div className={styles.heroCard}>
            <div className={styles.productNamePrice}>
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
                                This velvet couch is a sophisticated and trendy sofa that focuses on furniture because of its sumptuous velvet quilted fabric and strong wood legs.
                            </div>
                        </div>
                    </div>
                    <Btn_Pri_XL ButtonCTA={`Shop Now`} iconTrailing={TailIcon} />
                    <HeroPagination />
                </div>
            </div>
            <div className={styles.productImage}>
                <img src={HeroImage} alt="Hero Image" className={styles.heroImage} />
            </div>
            {/* <FavoriteButton className={styles.favoriteButton} /> */}
        </div>
    );
}

export default HeroCard;
