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
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://www.avocadomall.com/cdn/shop/products/1w6T8S7y9t2N4O8O2i3O2P2g5i-00651.jpg?v=1700124092`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://www.avocadomall.com/cdn/shop/products/08045105-5848-4aba-aaa2-ab1d762eb42d-00651-0.jpg?v=1700124092`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://www.avocadomall.com/cdn/shop/products/08045105-5848-4aba-aaa2-ab1d762eb42d-00651-2.jpg?v=1700124092`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://www.avocadomall.com/cdn/shop/products/08045105-5848-4aba-aaa2-ab1d762eb42d-00651-1.jpg?v=1700124092`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://www.avocadomall.com/cdn/shop/products/1w6T8S7y9t2N4O8O2i3O2P2g5i-00651.jpg?v=1700124092`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://www.avocadomall.com/cdn/shop/products/08045105-5848-4aba-aaa2-ab1d762eb42d-00651-0.jpg?v=1700124092`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://www.avocadomall.com/cdn/shop/products/08045105-5848-4aba-aaa2-ab1d762eb42d-00651-2.jpg?v=1700124092`} />
                </div>
            </div>
            <div className={styles.productDetails}>
                <div> Top Badge </div>
                <div> Store Label </div>
                <div className={styles.productRatingSummary}>
                    <div className={styles.productName}> Voi Kariokor Twilight Dinner Dress Designed by Kombo Kala Mwanake </div>
                    <div> Rating & Review Counter </div>
                    <div className={styles.productDescriptionSummary}> Discover the essence of African craftsmanship with our elegant dress, meticulously designed in Voi town, Kenya. Embracing vibrant local culture and artistry, each dress is crafted with care, blending traditional motifs with contemporary flair. Perfect for any occasion, this dress embodies the rich heritage and craftsmanship of Kenya, offering both style and cultural significance. Dress up with a piece that celebrates authenticity and beauty from Voi town to the world. </div>
                </div>
                <div> Product Tags </div>
                <div> Product Options 1 </div>
                <div> Product Options 2 </div>
                <div> Price </div>
                <div> CTAs </div>
            </div>
        </div>
    );
};

export default ProductMediaConfigurator;
