import React from "react";
import styles from './ProductMediaThumbnail.module.css';

const ProductMediaThumbnailMD = ( {ThumbNailMedia, clickedThumbnail} ) => {
    return(
        <img
            src={ThumbNailMedia}
            alt="Product Media Thumbnail Medium"
            className={styles.productMediaThumbnailMD}
            onClick={ ()=> clickedThumbnail(ThumbNailMedia) }
        />
    );
};

export { ProductMediaThumbnailMD }
