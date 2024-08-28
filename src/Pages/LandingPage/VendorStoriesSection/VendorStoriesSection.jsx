import React from "react";
import VendorStory from "../../../Components/Shared/VendorStory";
import styles from "./VendorStoriesSection.module.css";
import SenjesCuisines from "./assets/Senjes Cuisines.svg";
import Excite from "./assets/Untitled UI.svg";
import AcmeGroup from "./assets/Acme Group.svg";
import AltShift from "./assets/AltShift.svg";
import Biosynthesis from "./assets/Biosynthesis.svg";
import Capsule from "./assets/Capsule.svg";
import Catalog from "./assets/Catalog.svg";
import CloudWatch from "./assets/CloudWatch.svg";
import CommandR from "./assets/Command+R.svg";
import Epicurious from "./assets/Epicurious.svg";
import FeatherDev from "./assets/FeatherDev.svg";
import FocalPoint from "./assets/FocalPoint.svg";
import Galileo from "./assets/Galileo.svg";
import GlobalBank from "./assets/GlobalBank.svg";
import Hourglass from "./assets/Hourglass.svg";
import Interlock from "./assets/Interlock.svg";
import Layers from "./assets/Layers.svg";
import Lightbox from "./assets/Lightbox.svg";
import Luminous from "./assets/Luminous.svg";
import Polymath from "./assets/Polymath.svg";
import Segment from "./assets/Segment.svg";
import Sisyphus from "./assets/Sisyphus.svg";
import Spherule from "./assets/Spherule.svg";

function VendorStoriesSection() {
    return (
        <div className={styles["stories-tray"]}>
            <VendorStory logo={SenjesCuisines} label='Senjes Cuisines' />
            <VendorStory logo={Excite} label='Excite! Innovation ' />
            <VendorStory logo={AcmeGroup} label='Acme Group' />
            <VendorStory logo={AltShift} label='AltShift' />
            <VendorStory logo={Biosynthesis} label='Biosynthesis' />
            <VendorStory logo={Capsule} label='Capsule' />
            <VendorStory logo={Catalog} label='Catalog' />
            <VendorStory logo={CloudWatch} label='CloudWatch' />
            <VendorStory logo={CommandR} label='Command+R' />
            <VendorStory logo={Epicurious} label='Epicurious' />
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
}

export default VendorStoriesSection;
