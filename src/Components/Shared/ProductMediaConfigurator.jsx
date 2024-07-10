import React from "react";
import styles from './ProductMediaConfigurator.module.css'
import { ProductMediaThumbnailMD } from "./ProductMediaThumbnail";

const ProductMediaConfigurator = () => {
    return (
        <div className={styles.ProductMediaConfiguratorWrap}>
            <div className={styles.productMediaBrowser}>
                <div className={styles.mainProductImageWrap}>
                    <img src={`https://i.pinimg.com/736x/86/3a/8a/863a8a0c9c3d021ed37cb0ce0a3f0328.jpg`} alt="Main Product Image" className={styles.mainProductImage} />
                </div>
                <div className={styles.thumbnailsContainer}>
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://i.pinimg.com/736x/fd/1c/cd/fd1ccd114ab1a978550dee0790690a80.jpg`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://i.pinimg.com/736x/fd/1c/cd/fd1ccd114ab1a978550dee0790690a80.jpg`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://i.pinimg.com/736x/fd/1c/cd/fd1ccd114ab1a978550dee0790690a80.jpg`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://i.pinimg.com/736x/fd/1c/cd/fd1ccd114ab1a978550dee0790690a80.jpg`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://i.pinimg.com/736x/fd/1c/cd/fd1ccd114ab1a978550dee0790690a80.jpg`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://i.pinimg.com/736x/fd/1c/cd/fd1ccd114ab1a978550dee0790690a80.jpg`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://i.pinimg.com/736x/fd/1c/cd/fd1ccd114ab1a978550dee0790690a80.jpg`} />
                </div>
            </div>
            <div className={styles.productDetails}> Product Details </div>
        </div>
    );
};

export default ProductMediaConfigurator;
