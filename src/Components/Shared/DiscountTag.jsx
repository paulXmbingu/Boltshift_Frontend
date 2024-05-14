import React from "react";

//STYLING
const tag={
    display: 'flex',
    padding: 'var(--spacing-xs, 4px) 10px',
    alignItems: 'center',
    gap: '3px',
    borderRadius: 'var(--radius-sm, 6px)',
    border: '1px solid var(--Gradient-Linear-Color-69, #F74FAC)',
    background: 'var(--Base-White, #FFF)'       
}

function DiscountTag(){
    return(
        <button style={tag}> Open Sales Discount 50% </button>
    );
};

export default DiscountTag;
