import React from 'react'
import styles from './ProductCatalogCard.module.css'
import { StarRating4 } from '../Molecules/StarRating'

const ProductCatalogCard = ({Images, Name, Currency,Price, CounterText }) => {
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
                <div className={styles.CurrencyPrice} >
                    <span className={styles.Currency} >
                        {Currency}
                    </span>
                    <span className={styles.Price}> {Price} </span>
                </div>
            </div>
            <div className={styles.RatingAndViews}>
                <div className={styles.StarRating}><StarRating4 /> </div>
                <div className={styles.ViewsCounter}>
                    <span className={styles.CounterText}> {CounterText} </span>
                </div>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default ProductCatalogCard