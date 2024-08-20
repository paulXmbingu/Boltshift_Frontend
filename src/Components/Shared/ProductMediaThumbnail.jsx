import React from "react";
import styles from './ProductMediaThumbnail.module.css';

const ProductMediaThumbnailMD = ({ ThumbNailMedia, clickedThumbnail }) => {
    return (
        <img
            src={ThumbNailMedia}
            alt="Product Media Thumbnail Medium"
            className={styles.productMediaThumbnailMD}
            onClick={() => clickedThumbnail(ThumbNailMedia)}
        />
    );
};

const ProductMediaThumbnailSM = ({ Media, MediaAltText, handleClick }) => {
    if (!Media) return null;

    return (
        <img 
            src={Media} 
            alt={MediaAltText || 'Small User Added Product Media Thumbnail'}
            className={styles.ProductMediaThumbnailSM}
            onClick={handleClick}
        />
    );
};

export { 
    ProductMediaThumbnailMD,
    ProductMediaThumbnailSM
};
