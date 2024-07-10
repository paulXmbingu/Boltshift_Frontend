import React from "react";
import styles from './ProductMediaConfigurator.module.css'
import { ProductMediaThumbnailMD } from "./ProductMediaThumbnail";

const ProductMediaConfigurator = () => {
    return (
        <div className={styles.ProductMediaConfiguratorWrap}>
            <div className={styles.productMediaBrowser}>
                <div className={styles.mainProductImageWrap}>
                    <img src={`https://www.avocadomall.com/cdn/shop/products/08045105-5848-4aba-aaa2-ab1d762eb42d-00651-2.jpg?v=1700124092`} alt="Main Product Image" className={styles.mainProductImage} />
                </div>
                <div className={styles.thumbnailsContainer}>
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://www.avocadomall.com/cdn/shop/products/08045105-5848-4aba-aaa2-ab1d762eb42d-00651-1.jpg?v=1700124092`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://www.avocadomall.com/cdn/shop/products/08045105-5848-4aba-aaa2-ab1d762eb42d-00651-2.jpg?v=1700124092`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://www.avocadomall.com/cdn/shop/products/08045105-5848-4aba-aaa2-ab1d762eb42d-00651-0.jpg?v=1700124092`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://www.avocadomall.com/cdn/shop/products/1w6T8S7y9t2N4O8O2i3O2P2g5i-00651.jpg?v=1700124092`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://www.avocadomall.com/cdn/shop/products/08045105-5848-4aba-aaa2-ab1d762eb42d-00651-2.jpg?v=1700124092`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://www.avocadomall.com/cdn/shop/products/08045105-5848-4aba-aaa2-ab1d762eb42d-00651-0.jpg?v=1700124092`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://www.avocadomall.com/cdn/shop/products/1w6T8S7y9t2N4O8O2i3O2P2g5i-00651.jpg?v=1700124092`} />
                </div>
            </div>
            <div className={styles.productDetails}> Product Details </div>
        </div>
    );
};

export default ProductMediaConfigurator;
