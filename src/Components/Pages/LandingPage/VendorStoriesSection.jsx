import React from "react";
import VendorStory from "../../Shared/VendorStory";
import SenjesCuisines from "../../../assets/Logos/Senjes Cuisines.svg";
import Excite from "../../../assets/Logos/Untitled UI.svg";
import AcmeGroup from "../../../assets/Logos/Acme Group.svg";
import AltShift from "../../../assets/Logos/AltShift.svg";
import Biosynthesis from "../../../assets/Logos/Biosynthesis.svg";
import Capsule from "../../../assets/Logos/Capsule.svg";
import Catalog from "../../../assets/Logos/Catalog.svg";
import CloudWatch from "../../../assets/Logos/CloudWatch.svg";
import CommandR from "../../../assets/Logos/Command+R.svg";
import Epicurious from "../../../assets/Logos/Epicurious.svg";
import FeatherDev from "../../../assets/Logos/FeatherDev.svg";
import FocalPoint from "../../../assets/Logos/FocalPoint.svg";
import Galileo from "../../../assets/Logos/Galileo.svg";
import GlobalBank from "../../../assets/Logos/GlobalBank.svg";
import Hourglass from "../../../assets/Logos/Hourglass.svg";
import Interlock from "../../../assets/Logos/Interlock.svg";
import Layers from "../../../assets/Logos/Layers.svg";
import Lightbox from "../../../assets/Logos/Lightbox.svg";
import Luminous from "../../../assets/Logos/Luminous.svg";
import Polymath from "../../../assets/Logos/Polymath.svg";
import Segment from "../../../assets/Logos/Segment.svg";
import Sisyphus from "../../../assets/Logos/Sisyphus.svg";
import Spherule from "../../../assets/Logos/Spherule.svg";

//STYLING
const vendorSectionStyle={
    display: 'flex',
    minWidth: 'var(--Grid-layouts-iPhone-375px, 375px)',
    maxWidth: 'var(--grid-layouts-desktop-1280-px, 1280px)',
    padding: 'var(--container-padding-mobile, 16px) var(--spacing-system-guides-corner-radius-4, 16px) var(--spacing-xs, 4px) var(--spacing-system-guides-corner-radius-4, 16px)',
    alignItems: 'flex-start',
    gap: 'var(--spacing-2xl, 20px)',
    alignSelf: 'stretch',
    overflow: 'scroll'
}

//FUNCTIONALITY
function VendorStoriesSection() {
    return(
        <div style={vendorSectionStyle}>
            <VendorStory logo={SenjesCuisines} label='Senjes Cuisines' />
            <VendorStory logo={Excite} label='Excite! Innovation ' />
            <VendorStory logo={AcmeGroup} label='Acme Group' />
            <VendorStory logo={AltShift} label='AltShift' />
            <VendorStory logo={Biosynthesis} label='Biosynthesis' />
            <VendorStory logo={Capsule} label='Capsule' />
            <VendorStory logo={Catalog} label='Catalog' />
            <VendorStory logo={CloudWatch} label='CloudWatch' />
            <VendorStory logo={CommandR} label='Command+R' />
            <VendorStory logo={Epicurious} label='Epicurious.svg' />
            <VendorStory logo={FeatherDev} label='FeatherDev' />
            <VendorStory logo={FocalPoint} label='FocalPoint' />
            <VendorStory logo={Galileo} label='Galileo' />
            <VendorStory logo={GlobalBank} label='GlobalBank' />
            <VendorStory logo={Hourglass} label='Hourglass' />
            <VendorStory logo={Interlock} label='Interlock' />
            <VendorStory logo={Layers} label='Layers' />
            <VendorStory logo={Lightbox} label='Lightbox' />
            <VendorStory logo={Luminous} label='Luminous' />
            <VendorStory logo={Polymath} label='Polymath' />
            <VendorStory logo={Segment} label='Segment' />
            <VendorStory logo={Sisyphus} label='Sisyphus' />
            <VendorStory logo={Spherule} label='Spherule' />
        </div>
    );
};

export default VendorStoriesSection;
