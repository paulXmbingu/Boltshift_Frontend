import React from "react";
import FireIcon from "../assets/Icons/Illustrated/Fire.svg";
import FavoriteButton from "./FavoriteButton";
import './HotDealCard.css';

function HotDealCard({ imageSrc }) {
    const progress = 50;

    return (
        <div className="hotDealCardStyle">
            {/* <FavoriteButton /> */}
            <img src={imageSrc} alt="Product Image" className="imageStyles" />
            <div className="productDetailsStyles">
                <div className="productNamePrice">
                    <div className="productName">
                        <div className="productNameText"> Modern White Velvet 3-Seater Sofa Channel Tufted Upholstered Luxury Solid Wood </div>
                    </div>
                    <div className="productPrice">
                        <div className="currency"> Kshs. </div>
                        <div className="ammount"> 92,900 </div>
                    </div>
                </div>
                <div className="popularityStatus">
                    <div className="progressDistance" style={{ width: `${progress}%`, background: 'var(--Colors-Brand-brand-primary, #DA154D)' }}></div>
                    <div className="unitsSold">
                        <img src={FireIcon} alt="Fire Icon" className="Fire" />
                        <div className="noSold"> 28 </div>
                        <div className="noLeft"> Left </div>
                    </div>
                </div>
                <button className="buttonStyles"> Add to Cart </button>
            </div>
        </div>
    );
};

export default HotDealCard;
