import React from "react";
import styles from './ProductMediaConfigurator.module.css'
import { ProductMediaThumbnailMD } from "./ProductMediaThumbnail";

const ProductMediaConfigurator = () => {
    return (
        <div className={styles.ProductMediaConfiguratorWrap}>
            <div className={styles.productMediaBrowser}>
                <div className={styles.mainProductImageWrap}>
                    <img src={`https://www.avocadomall.com/cdn/shop/products/18664g3e3N5r9a2H4Z7Q2R8L4Q-52985.jpg?v=1710525912`} alt="Main Product Image" className={styles.mainProductImage} />
                </div>
                <div className={styles.thumbnailsContainer}>
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://www.avocadomall.com/cdn/shop/products/cdd77eee-198b-4407-a57b-f40c4ee4059b-52985-6.jpg?v=1710525912`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://www.avocadomall.com/cdn/shop/products/cdd77eee-198b-4407-a57b-f40c4ee4059b-52985-7.jpg?v=1710525912`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://www.avocadomall.com/cdn/shop/products/cdd77eee-198b-4407-a57b-f40c4ee4059b-52985-11.jpg?v=1710525912`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://www.avocadomall.com/cdn/shop/products/cdd77eee-198b-4407-a57b-f40c4ee4059b-52985-2.jpg?v=1710525912`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://www.avocadomall.com/cdn/shop/products/cdd77eee-198b-4407-a57b-f40c4ee4059b-52985-5.jpg?v=1710525912`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://www.avocadomall.com/cdn/shop/products/cdd77eee-198b-4407-a57b-f40c4ee4059b-52985-pc-sec.jpg?v=17105259122`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://www.avocadomall.com/cdn/shop/products/cdd77eee-198b-4407-a57b-f40c4ee4059b-52985-1.jpg?v=1710525912`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://www.avocadomall.com/cdn/shop/products/cdd77eee-198b-4407-a57b-f40c4ee4059b-52985-4.jpg?v=1710525912`} />
                </div>
            </div>
            <div className={styles.productDetails}> Product Details </div>
        </div>
    );
};

export default ProductMediaConfigurator;
