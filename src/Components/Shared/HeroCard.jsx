import React from 'react';
import HeroImage from "../../assets/Images/Sofa.jpg";
import CTAbutton from './CTAButton';


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

const pagination={
    display: 'flex',
    padding: 'var(--spacing-md, 8px)',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 'var(--spacing-lg, 12px)',
    borderRadius: 'var(--radius-full, 9999px)',
    background: 'var(--Component-colors-Alpha-alpha-white-90, rgba(255, 255, 255, 0.90))',
    
    /* Backdrop blurs/backdrop-blur-sm */
    backdropFilter: 'blur(4px)'    
}

const tag={
    display: 'flex',
    padding: 'var(--spacing-xs, 4px) 10px',
    alignItems: 'center',
    gap: '3px',
    borderRadius: 'var(--radius-sm, 6px)',
    border: '1px solid var(--Gradient-Linear-Color-69, #F74FAC)',
    background: 'var(--Base-White, #FFF)'       
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: '1 0 0',
    alignSelf: 'stretch',
    overflow: 'hidden',
    color: 'var(--colors-text-text-brand-secondary-700, #BF1343)',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    
    /* Display sm/Semibold */
    fontFamily: 'Inter',
    fontSize: '30px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '38px' /* 126.667% */    
}



//FUNCTIONALITY
function HeroCard() {
    return(
        <div style={heroCardStyle}>
            <div style={productNamePrice}>
                <div style={detailsCTA}>
                    <button style={tag}> Open Sales Discount 50% </button>
                    <div style={nameDescription}>
                        <div style={productName}>
                            <div style={productNameText}>
                                Modern White Velvet 3-Seater Sofa Channel Tufted Upholstered Luxury Solid Wood 
                            </div>
                        </div>
                        <div> Product Description </div>
                    </div>
                    <CTAbutton />
                </div>
                <div style={pagination}> Pagination </div>
            </div>
            <div style={productImage}>
                <img src={HeroImage} alt="Hero Image" />
            </div>
        </div>
    );
};

export default HeroCard
