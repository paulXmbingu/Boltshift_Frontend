import React from "react";
import VendorStory from "../../Shared/VendorStory";
import SenjesCuisines from "../../../assets/Logos/Senjes Cuisines.svg";
import AcmeGroup from "../../../assets/Logos/Acme Group.svg";
import AltShift from "../../../assets/Logos/AltShift.svg";
import Biosynthesis from "../../../assets/Logos/Biosynthesis.svg";
import Capsule from "../../../assets/Logos/Capsule.svg";
import Catalog from "../../../assets/Logos/Catalog.svg";

//STYLING
const vendorSectionStyle={
    display: 'flex',
    minWidth: 'var(--Grid-layouts-iPhone-375px, 375px)',
    maxWidth: 'var(--grid-layouts-desktop-1280-px, 1280px)',
    padding: 'var(--container-padding-mobile, 16px) var(--spacing-system-guides-corner-radius-4, 16px) var(--spacing-xs, 4px) var(--spacing-system-guides-corner-radius-4, 16px)',
    alignItems: 'flex-start',
    gap: 'var(--spacing-2xl, 20px)',
    alignSelf: 'stretch',
    overflow: 'auto'
}

//FUNCTIONALITY
function VendorSection() {
    return(
        <div style={vendorSectionStyle}>
            <VendorStory logo={SenjesCuisines} label='Senjes Cuisines' />
            <VendorStory logo={AcmeGroup} label='Acme Group' />
            <VendorStory logo={AltShift} label='AltShift' />
            <VendorStory logo={Biosynthesis} label='Biosynthesis' />
            <VendorStory logo={Capsule} label='Capsule' />
            <VendorStory logo={Catalog} label='Catalog' />
        </div>
    );
};

export default VendorSection;
