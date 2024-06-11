import React from 'react';
import HeroImage from "../../assets/Images/Photos/Sofa.jpg";
import TailIcon from '../../assets/Icons/UI/chevron-right.svg';
import DiscountTag from '../../Components/Atoms/DiscountTag';
import HeroPagination from './HeroPagination';
import FavoriteButton from './FavoriteButton';
import styles from './HeroCard.module.css';
import { Btn_Pri_XL } from '../Atoms/Button';

const HeroCardDesktop = () => {
    return (
        <div className={styles.heroCard}>
            <div className={styles.favoriteButtonContainer}>
                <FavoriteButton />
            </div>
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
        </div>
    );
}

const HeroCardMobile = () => {
    return (
        <div className={styles.heroCardMobileWrapper}>
            <div className={styles.favoriteButtonContainer}>
                <FavoriteButton />
            </div>
            <div className={styles.imageDetailsMobile}>
                <div className={styles.imageMobeileWrap}>
                    <img src={HeroImage} alt="Hero Image" className={styles.mobileImage} />
                    {/* <HeroPagination className={styles.pagination} /> Move here */}
                </div>
                <div className={styles.detailsMobileWrap}>
                    <div className={styles.detailsMobileCTA}>
                        <div className={styles.detailsMobile}>
                            <div className={styles.productDetailsMobile}>
                                <DiscountTag />
                                <div className={styles.nameDescriptionMobile}>
                                    <div className={styles.productNameMobile}>
                                        <span className={styles.productNameTextMobile}>
                                            Modern White Velvet 3-Seater Sofa Channel Tufted Upholstered Luxury Solid Wood
                                        </span>
                                    </div>
                                    <div className={styles.productDescriptionMobile}>
                                        <span className={styles.productDescriptionTextMobile}>
                                            This velvet couch is a sophisticated and trendy sofa that focuses on furniture because of its sumptuous velvet quilted fabric and strong wood legs.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Btn_Pri_XL ButtonCTA={`Shop Now`} iconTrailing={TailIcon} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { HeroCardDesktop, HeroCardMobile };
