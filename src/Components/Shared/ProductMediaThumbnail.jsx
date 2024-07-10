import React from "react";
import styles from './ProductMediaThumbnail.module.css';

const ProductMediaThumbnailMD = ( {ThumbNailMedia} ) => {
    return(
        <img src={ThumbNailMedia}
        alt="Product Media Thumbnail Medium"
        className={styles.productMediaThumbnailMD} />
    );
};

export { ProductMediaThumbnailMD, }
