import React from 'react';
import './CategoryCard.css';

function CategoryCard({ icon, name, isAllCategories }) {
    const cardClass = isAllCategories ? "cardStyle cardStyleWithShadow" : "cardStyle";

    return (
        <div className={cardClass}>
            <img src={icon} alt="Category Icon" className="categoryIcon" />
            <div className="categoryName">
                <div className="categoryText">{name}</div>
            </div>
        </div>
    );
}

export default CategoryCard;
