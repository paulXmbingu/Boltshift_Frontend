import React from "react";
import styles from "./RecentReviewSection.module.css";
import ThumbsUp from '../../assets/Icons/Illustrated/Thumbs up.svg';
import SectionHeader from "../../Components/Shared/SectionHeader";
import ReviewCard from "../../Components/Shared/ReviewCard";

const RecentReviewSection = () => {
  return (
    <div className={styles.section}>
      <SectionHeader headerTitle={"Recent Reviews"} icon={ThumbsUp}/>
      <div className={styles.reviewCards}>
        <ReviewCard BuyerPhoto={`https://i.pinimg.com/564x/c6/37/cb/c637cb67e2a7211c708cfe19b30b387a.jpg`} Testimony={`We've tried countless prototyping tools and ProtoPie is hands down the most flexible and powerful tool that fits perfectly into any team's workflow. No matter which tools or platform are being used, we can import our design assets in seconds and make awesome code-free prototypes in minutes.`} />
        <ReviewCard BuyerPhoto={`https://i.pinimg.com/564x/c6/37/cb/c637cb67e2a7211c708cfe19b30b387a.jpg`} Testimony={`We've tried countless prototyping tools and ProtoPie is hands down the most flexible and powerful tool that fits perfectly into any team's workflow. No matter which tools or platform are being used, we can import our design assets in seconds and make awesome code-free prototypes in minutes.`} />
        <ReviewCard BuyerPhoto={`https://i.pinimg.com/564x/c6/37/cb/c637cb67e2a7211c708cfe19b30b387a.jpg`} Testimony={`We've tried countless prototyping tools and ProtoPie is hands down the most flexible and powerful tool that fits perfectly into any team's workflow. No matter which tools or platform are being used, we can import our design assets in seconds and make awesome code-free prototypes in minutes.`} />
        <ReviewCard BuyerPhoto={`https://i.pinimg.com/564x/c6/37/cb/c637cb67e2a7211c708cfe19b30b387a.jpg`} Testimony={`We've tried countless prototyping tools and ProtoPie is hands down the most flexible and powerful tool that fits perfectly into any team's workflow. No matter which tools or platform are being used, we can import our design assets in seconds and make awesome code-free prototypes in minutes.`} />
      </div>
    </div>
  );
};

export default RecentReviewSection;
