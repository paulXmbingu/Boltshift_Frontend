import React, { useState } from "react";
import styles from './ProductMediaConfigurator.module.css'
import { Link } from "react-router-dom";
import { ProductMediaThumbnailMD } from "./ProductMediaThumbnail";
import { Btn_Pri_XL, Btn_Sec_Color_XL } from "../Atoms/Button";
import { Badge_PillColor_SM_Blue,
    Badge_PillColor_SM_BlueLight,
    Badge_PillColor_SM_Brand,
    Badge_PillColor_SM_Error,
    Badge_PillColor_SM_Gray,
    Badge_PillColor_SM_GrayBlue,
    Badge_PillColor_SM_Indigo,
    Badge_PillColor_SM_Orange,
    Badge_PillColor_SM_Pink,
    Badge_PillColor_SM_Purple,
    Badge_PillColor_SM_Success,
    Badge_PillColor_SM_Warning,
    Badge_PillOutline_LG_LeadingIcon_BrandColor
} from "../Atoms/Badge";
import { StarRating4 } from "../Molecules/StarRating";
import { ButtonGroup } from "../Atoms/ButtonGroup";
import StoreLabel from "./StoreLabel";
import arrowdown from "../../assets/Icons/UI/arrow-down.svg"
import shoppingcart03 from "../../assets/Icons/UI/shopping-cart-03 Brand.svg"
import minus from "../../assets/Icons/UI/minus.svg"
import plus from "../../assets/Icons/UI/plus fgSec700.svg"

const ProductMediaConfigurator = () => {
    const [quantity, setQuantity] = useState(1);

    const handleAdd = () => {
        setQuantity (quantity + 1);
    };

    const handleSubtract = () => {
        setQuantity (quantity - 1);
    };

    return (
        <div className={styles.ProductMediaConfiguratorWrap}>
            <div className={styles.productMediaBrowser}>
                <div className={styles.mainProductImageWrap}>
                    <img src={`https://i.pinimg.com/736x/eb/ea/4b/ebea4b4488cd4d1d47cc352e9ade2265.jpg`} alt="Main Product Image" className={styles.mainProductImage} />
                </div>
                <div className={styles.thumbnailsContainer}>
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://i.pinimg.com/736x/2b/21/ac/2b21ac39398f6ede03e66c708610835d.jpg`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://i.pinimg.com/736x/a7/cd/c8/a7cdc8f41910734cfdeb5c42258a029c.jpg`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://i.pinimg.com/736x/0d/97/c5/0d97c54c0e0f845a6f5741b6b78598b3.jpg`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://i.pinimg.com/736x/8e/57/c0/8e57c01507456463c55da3dcf21c78d2.jpg`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://i.pinimg.com/736x/b9/a4/1c/b9a41c493e385d96a3a470c3662dd6c8.jpg`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://i.pinimg.com/736x/67/ff/16/67ff16257c0fbb21bde0af00c7524a3c.jpg`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://i.pinimg.com/736x/dc/ce/4a/dcce4aefc6aa896485a4942b7ebcfcdb.jpg`} />
                    <ProductMediaThumbnailMD ThumbNailMedia={`https://i.pinimg.com/736x/12/50/31/125031389d00319bdd50bb9de815dce2.jpg`} />
                </div>
            </div>
            <div className={styles.productDetails}>
                <Badge_PillOutline_LG_LeadingIcon_BrandColor BadgeLabel={`50% Discount`} LeadingIcon={arrowdown} />
                <StoreLabel StoreName={`Senjes Cuisines Store`} />
                <div className={styles.productRatingSummary}>
                    <div className={styles.productName}> Xpluswear Design Plus Size Mother Of The Bride Elegant Champagne Long Sleeve Split Pocket Satin Two Piece Dress Set View </div>
                    <div className={styles.starRatingReviewCounter}>
                        <StarRating4 />
                        <div className={styles.reviewCounter}> (123.46k reviews) </div>
                    </div>
                    <div className={styles.productDescriptionSummary}> Discover the essence of African craftsmanship with our elegant dress, meticulously designed in Voi town, Kenya. Embracing vibrant local culture and artistry, each dress is crafted with care, blending traditional motifs with contemporary flair. Perfect for any occasion, this dress embodies the rich heritage and craftsmanship of Kenya, offering both style and cultural significance. Dress up with a piece that celebrates authenticity and beauty from Voi town to the world. </div>
                </div>
                <div className={styles.productTags}>
                    <Badge_PillColor_SM_Gray BadgeLabel={`New Arrival`} />
                    <Badge_PillColor_SM_Brand BadgeLabel={`Best Seller`} />
                    <Badge_PillColor_SM_Error BadgeLabel={`Popular`} />
                    <Badge_PillColor_SM_Warning BadgeLabel={`Clearance`} />
                    <Badge_PillColor_SM_Success BadgeLabel={`Limited Edition`} />
                    <Badge_PillColor_SM_GrayBlue BadgeLabel={`Exclusive`} />
                    <Badge_PillColor_SM_BlueLight BadgeLabel={`Featured`} />
                    <Badge_PillColor_SM_Blue BadgeLabel={`Trending`} />
                    <Badge_PillColor_SM_Indigo BadgeLabel={`Free Shipping`} />
                    <Badge_PillColor_SM_Purple BadgeLabel={`Seasonal`} />
                    <Badge_PillColor_SM_Pink BadgeLabel={`Back in Store`} />
                    <Badge_PillColor_SM_Orange BadgeLabel={`Top Rated`} />
                </div>
                <div> Product Options 1 </div>
                <div> Product Options 2 </div>
                <div className={styles.price}>
                    <div className={styles.currency}> Ksh. </div>
                    <div className={styles.priceValue}> 70,721 </div>
                </div>
                <div className={styles.CTAs}> 
                    <div className={styles.secondaryCTAs}>
                        <div className={styles.itemButtonGroup}>
                            <ButtonGroup LeadingIcon={minus} onClick={handleSubtract} />
                            <input
                                type="number"
                                className={styles.countInput}
                                defaultValue={1}
                            />
                            <ButtonGroup LeadingIcon={plus} onClick={handleAdd} />
                        </div>
                        <Btn_Sec_Color_XL LeadingIcon={shoppingcart03} ButtonCTA={`Add to Cart`} />
                    </div>
                    <Link to='/checkout' className={styles.buyNowCTA}> <Btn_Pri_XL ButtonCTA={`Buy Now`} /> </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductMediaConfigurator;
