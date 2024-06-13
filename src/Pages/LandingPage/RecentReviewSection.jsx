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
        <ReviewCard ReviewerName={`Marion Ngayi`} ReviewDate={`12 May 2024`} ReviewerPhoto={`https://i.pinimg.com/564x/35/72/d2/3572d2b5a02a66fb735af7f09c029004.jpg`} Review={`Amazing product! Exceeded my expectations in every way. The quality is top-notch, and the attention to detail is evident in every aspect. I was particularly impressed with the durability and sleek design. It's clear that a lot of thought went into making this product both functional and aesthetically pleasing. The customer service was also exceptional. I had a few questions before purchasing, and the support team was very responsive and helpful. Highly recommend this product to anyone looking for something reliable and stylish.`}  />
        <ReviewCard ReviewerName={`Mercy Mbingu`} ReviewDate={`01 Jun 2024`} ReviewerPhoto={`https://i.pinimg.com/564x/15/26/09/1526099a08f911fafcc1cd900ca5c299.jpg`} Review={`Good quality and fast shipping. Will buy again. The product arrived well-packaged and in perfect condition. I was pleasantly surprised by the speed of delivery, especially considering the current shipping delays affecting many companies. The product itself is of excellent quality, with sturdy materials and a well-thought-out design. It has become an essential part of my daily routine. The user manual was clear and easy to follow, which made setup a breeze. Overall, a fantastic purchase that I would recommend to others.`}  />
        <ReviewCard ReviewerName={`Wendy Hawi`} ReviewDate={`18 Apr 2024`} ReviewerPhoto={`https://i.pinimg.com/474x/d8/d3/bf/d8d3bfde91f0e32fe271fc9341234ce1.jpg`} Review={`Satisfactory purchase. The product performs as expected, and I am generally happy with it. There were a few small issues, such as a slight delay in shipping and a minor cosmetic flaw, but these did not significantly impact my overall satisfaction. The customer service team was very responsive when I reached out about these concerns and offered a partial refund as compensation. The product itself works well and meets my needs, so I would still recommend it, especially considering the company's excellent customer service.`}  />
        <ReviewCard ReviewerName={`Kalah Papa`} ReviewDate={`25 May 2024`} ReviewerPhoto={`https://i.pinimg.com/564x/35/74/ed/3574ed0ad69100dc6fa834b74e7d7fc6.jpg`} Review={`Excellent customer service. They resolved my issue quickly and efficiently. I initially had some trouble with my order, as I received the wrong item. However, the customer service team was incredibly helpful and resolved the issue promptly. They arranged for a replacement to be sent out immediately and even provided a discount on my next purchase as a gesture of goodwill. The replacement product is fantastic - high quality, exactly as described, and it works perfectly. I am very pleased with my experience and will definitely be a returning customer.`}  />
        <ReviewCard ReviewerName={`Felix Ouma`} ReviewDate={`05 Mar 2024`} ReviewerPhoto={`https://i.pinimg.com/564x/f2/f8/08/f2f808b8ebaf96ed004356b63d81aa11.jpg`} Review={`Outstanding product and service! The product is exactly as described and works flawlessly. The design is sleek, and the materials used are of very high quality. I had a minor issue with the setup, but the customer service team was extremely helpful and walked me through the process step-by-step. The shipping was also very fast, and the product arrived well-packaged. I would highly recommend this product to anyone looking for a reliable and high-quality option.`}  />
      </div>
    </div>
  );
};

export default RecentReviewSection;
