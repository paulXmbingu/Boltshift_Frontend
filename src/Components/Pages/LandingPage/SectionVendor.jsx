import React from "react";
import VendorStory from "../../Shared/VendorStory";

//STYLING
const vendorSectionStyle={
    display: 'flex',
    minWidth: 'var(--Grid-layouts-iPhone-375px, 375px)',
    maxWidth: 'var(--grid-layouts-desktop-1280-px, 1280px)',
    padding: 'var(--container-padding-mobile, 16px) var(--spacing-system-guides-corner-radius-4, 16px) var(--spacing-xs, 4px) var(--spacing-system-guides-corner-radius-4, 16px)',
    alignItems: 'flex-start',
    gap: 'var(--spacing-2xl, 20px)',
    alignSelf: 'stretch'
}

//FUNCTIONALITY
function VendorSection() {
    return(
        <div style={vendorSectionStyle}>
            <VendorStory />
        </div>
    );
};

export default VendorSection;
