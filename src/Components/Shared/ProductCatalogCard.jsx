import React from 'react'
import styles from './ProductCatalogCard.module.css'

const ProductCatalogCard = ({Images, Name, }) => {
  return (
    <div className={styles.productCatalogCard}>
        <div className={styles.productimage}>
            <img src={Images} alt="product image" className={styles.Cardimage} />
        </div>
        <div className={styles.productDetails}>
            <div className={styles.NamePrice}>
                <div className={styles.Name}>
                    <span className={styles.Nametext}> {Name} </span>
                </div>
                <div></div>
            </div>
            <div></div>
        </div>
        <div></div>
    </div>
  )
}

export default ProductCatalogCard