import React from 'react';
import styles from './CategoryCard.module.css'; // Import the CSS module

function CategoryCard({ icon, name, isAllCategories }) {
    const cardClass = isAllCategories ? `${styles.cardStyle} ${styles.cardStyleWithShadow}` : styles.cardStyle;

    return (
        <div className={cardClass}>
            <img src={icon} alt="Category Icon" className={styles.categoryIcon} />
            <div className={styles.categoryName}>
                <div className={styles.categoryText}>{name}</div>
            </div>
        </div>
    );
}

export default CategoryCard;
