import React from 'react';
import styles from './CategoryCard.module.css';
import { Link } from 'react-router-dom';

function CategoryCard({ icon, name, isAllCategories }) {
    const cardClass = isAllCategories ? `${styles.cardStyle} ${styles.cardStyleWithShadow}` : styles.cardStyle;

    return (
        <Link to='/catalog' className={`${cardClass} ${styles.linkStyle}`}>
            <img src={icon} alt="Category Icon" className={styles.categoryIcon} />
            <div className={styles.categoryName}>
                <div className={styles.categoryText}>{name}</div>
            </div>
        </Link >
    );
}

export default CategoryCard;
