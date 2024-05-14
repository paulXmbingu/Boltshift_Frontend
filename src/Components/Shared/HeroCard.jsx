import React from 'react';
import HeroImage from "/src/assets/Images/Sofa.jpg";

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
    background: 'var(--Gradient-Linear-Color-20, linear-gradient(45deg, #E9DEFA 0%, #FFF6EB 100%))'    
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
    overflow: 'hidden'
}


function HeroCard() {
    return(
        <div style={heroCardStyle}>
            <div style={productNamePrice}>
                <div>
                    Product Name Price 
                </div>
            </div>
            <div style={productImage}>
                <img src={HeroImage} alt="Hero Image" />
            </div>
        </div>
    );
};

export default HeroCard
