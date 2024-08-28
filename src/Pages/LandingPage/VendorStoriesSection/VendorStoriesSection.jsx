import React from "react";
import VendorStory from "../../../Components/Shared/VendorStory";
import styles from "./VendorStoriesSection.module.css";
import SenjesCuisines from "./Assets/Senjes Cuisines.svg";
import Excite from "./Assets/Untitled UI.svg";
import AcmeGroup from "./Assets/Acme Group.svg";
import AltShift from "./Assets/AltShift.svg";
import Biosynthesis from "./Assets/Biosynthesis.svg";
import Capsule from "./Assets/Capsule.svg";
import Catalog from "./Assets/Catalog.svg";
import CloudWatch from "./Assets/CloudWatch.svg";
import CommandR from "./Assets/Command+R.svg";
import Epicurious from "./Assets/Epicurious.svg";
import FeatherDev from "./Assets/FeatherDev.svg";
import FocalPoint from "./Assets/FocalPoint.svg";
import Galileo from "./Assets/Galileo.svg";
import GlobalBank from "./Assets/GlobalBank.svg";
import Hourglass from "./Assets/Hourglass.svg";
import Interlock from "./Assets/Interlock.svg";
import Layers from "./Assets/Layers.svg";
import Lightbox from "./Assets/Lightbox.svg";
import Luminous from "./Assets/Luminous.svg";
import Polymath from "./Assets/Polymath.svg";
import Segment from "./Assets/Segment.svg";
import Sisyphus from "./Assets/Sisyphus.svg";
import Spherule from "./Assets/Spherule.svg";

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
