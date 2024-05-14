import React from 'react';
import HeroImage from "../../assets/Images/Sofa.jpg";
import CTAbutton from './CTAButton';
import TailIcon from "../../assets/Icons/chevron-right.svg";
import DiscountTag from './DiscountTag';
import HeroPagination from './HeroPagination';
import FavoriteButton from './FavoriteButton';

//STYLING
const heroCardStyle={
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignContent: 'center',
    gap: '0px var(--spacing-system-guides-corner-radius-6, 24px)',
    flex: '1 0 0',
    alignSelf: 'stretch',
    flexWrap: 'wrap',
    borderRadius: 'var(--spacing-system-guides-corner-radius-3, 12px)',
    border: '1px solid var(--Gray-200, #EAECF0)',
    background: 'var(--Gradient-Linear-Color-20, linear-gradient(45deg, #E9DEFA 0%, #FFF6EB 100%))',
    overflow: 'hidden'
}

const productImage={
    display: 'flex',
    height: 'var(--Base-4-Premitives-148, 592px)',
    minWidth: 'var(--Base-4-Premitives-72, 288px)',
    minHeight: 'var(--spacing-system-guides-corner-radius-148, 592px)',
    maxHeight: 'var(--spacing-system-guides-corner-radius-148, 592px)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    flex: '1 0 0',
    background: 'var(--Base-White, #FFF)',
    position: 'relative'
}

const favoriteButtonStyle = {
    position: 'absolute',
    top: '0',
    right: '0'
};

const productNamePrice={
    display: 'flex',
    minWidth: 'var(--Base-4-Premitives-72, 288px)',
    padding: 'var(--spacing-system-guides-corner-radius-24, 96px) 0px var(--spacing-system-guides-corner-radius-6, 24px) 0px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 'var(--spacing-system-guides-corner-radius-10, 40px)',
    flex: '1 0 0'    
}

const detailsCTA={
    display: 'flex',
    maxWidth: 'var(--spacing-system-guides-corner-radius-72, 288px)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 'var(--spacing-system-guides-corner-radius-12, 48px)',
    alignSelf: 'stretch'    
}

const nameDescription={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '8px',
    alignSelf: 'stretch'           
}

const productName={
    display: 'flex',
    minWidth: 'var(--Base-4-Premitives-72, 288px)',
    maxWidth: 'var(--Base-4-Premitives-72, 288px)',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    flexWrap: 'wrap'    
}

const productNameText={
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 5,
    flex: '1 0 0',
    overflow: 'hidden',
    color: 'var(--colors-text-text-brand-secondary-700, #BF1343)',
    textOverflow: 'ellipsis',
    
    /* Display sm/Semibold */
    fontFamily: 'Inter',
    fontSize: '30px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '38px' /* 126.667% */    
}

const prodDescription={
    display: 'flex',
    height: '55px',
    minWidth: 'var(--Base-4-Premitives-72, 288px)',
    maxWidth: 'var(--Base-4-Premitives-72, 288px)',
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'stretch'    
}

const prodDescriptionText={
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    alignSelf: 'stretch',
    overflow: 'hidden',
    color: 'var(--Gray-600, #475467)',
    textOverflow: 'ellipsis',
    
    /* Text sm/Regular */
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '20px' /* 142.857% */    
}

//FUNCTIONALITY
function HeroCard() {
    return(
        <div style={heroCardStyle}>
            <div style={productNamePrice}>
                <div style={detailsCTA}>
                    <DiscountTag />
                    <div style={nameDescription}>
                        <div style={productName}>
                            <div style={productNameText}> {`Modern White Velvet 3-Seater Sofa Channel Tufted Upholstered Luxury Solid Wood`} </div>
                        </div>
                        <div style={prodDescription}>
                            <div style={prodDescriptionText}>
                                {`This velvet couch is a sophisticated and trendy sofa that focuses on 
                                furniture because of its sumptuous velvet quilted fabric and strong wood legs. 
                                Make the living area feel like a million bucks with this couch because this
                                three-seated couch is sleek and trendy, converting any living area into a 
                                fashionable environment. This sofa's robust wood construction ensures it will 
                                provide years of reliable service. With its long-lasting support and deep comfort, 
                                this couch is the perfect choice for your home. As for the inside, it's comprised 
                                of solid, high-resilience foam, a substance chosen for its ability to return to its 
                                former shape swiftly and with a nice greeting.`}
                            </div>
                        </div>
                    </div> <CTAbutton label="Shop Now" tailIcon={TailIcon} /> </div>
                <HeroPagination />
            </div>
            <div style={productImage}>
                <FavoriteButton style={favoriteButtonStyle} />
                <img src={HeroImage} alt="Hero Image" />
            </div>
        </div>
    );
};

export default HeroCard
