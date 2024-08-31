import React from 'react'
import styles from './Error404.module.css'
import { Btn_Sec_Color_XL } from '../../Atoms/Button/Button'
import Illustration from "./Assets/Screenshot_2023-08-05_at_02_05_40-transformed 1.svg"

const Error404 = () => {
  return (
    <div className={styles.Error404}>
        <div className={styles.ErrorContainer}>
            <div className={styles.Content}>
                <div className={styles.HeadingSurpotingTxt}>
                    <div className={styles.Heading}>
                        <span className={styles.subHeading}>404 Error</span>
                        <span className={styles.ErrorHeading}>Oops! Lost in the Aisles?</span>
                    </div>
                    <span className={styles.SurpotingText}>Looks like the page is playing hide and seek. While we find it, why not explore our treasure trove of goodies?</span>
                </div>
                <div className={styles.action}>
                    <Btn_Sec_Color_XL ButtonCTA={`Browse Our Catalogue`} />
                </div>
            </div>
            <div className={styles.Illustration}>
                <img className={styles.IllustrationImg} src={Illustration} alt="" />
            </div>
        </div>
    </div>
  );
};

export default Error404;
