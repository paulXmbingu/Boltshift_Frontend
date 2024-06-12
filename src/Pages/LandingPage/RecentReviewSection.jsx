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
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default RecentReviewSection;
