import React from 'react';
import HeroImage from "../assets/Images/Photos/Sofa.jpg";
import CTAbutton from '../Components/Atoms/CTAButton';
import TailIcon from '../assets/Icons/UI/chevron-right.svg';
import DiscountTag from '../Components/Atoms/DiscountTag';
import HeroPagination from './HeroPagination';
import FavoriteButton from './FavoriteButton';
import styles from './HeroCard.module.css';

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
                                This velvet couch is a sophisticated and trendy sofa that focuses on
                                furniture because of its sumptuous velvet quilted fabric and strong wood legs.
                                Make the living area feel like a million bucks with this couch because this
                                three-seated couch is sleek and trendy, converting any living area into a
                                fashionable environment. This sofa's robust wood construction ensures it will
                                provide years of reliable service. With its long-lasting support and deep comfort,
                                this couch is the perfect choice for your home. As for the inside, it's comprised
                                of solid, high-resilience foam, a substance chosen for its ability to return to its
                                former shape swiftly and with a nice greeting.
                            </div>
                        </div>
                    </div>
                    <CTAbutton label="Shop Now" tailIcon={TailIcon} />
                </div>
                <HeroPagination />
            </div>
            <div className={styles.productImage}>
                <FavoriteButton className={styles.favoriteButton} />
                <img src={HeroImage} alt="Hero" />
            </div>
        </div>
    );
}

export default HeroCard;
