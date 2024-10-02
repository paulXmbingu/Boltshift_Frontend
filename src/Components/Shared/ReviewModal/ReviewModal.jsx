import styles from './ReviewModal.module.css';
import { Btn_Pri_XL } from "../../Atoms/Button";
import { StarRating5 } from "../../Molecules/StarRating";
import { InputField, TextareaInputField } from "../../Atoms/Inputs";
import ModalHeader from '../ModalHeader/ModalHeader';

const ReviewModalDesktop = ({ onClose }) => {
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.reviewModalDesktopWrap} onClick={(e) => e.stopPropagation()}>
                <ModalHeaderWrapper />
                <ReviewDetails />
                <ModalFooter />
            </div>
        </div>
    );
};

const ModalHeaderWrapper = () => {
    return (
        <div className={styles.modalHeader}>
            <ModalHeader />
        </div>
    );
};

const ReviewDetails = () => {
    return (
        <div className={styles.reviewDetails}>
            <InputField
                InputFieldLabel="Review Title"
                HintText=""
                InputFieldPlaceholder="Enter Your Review Title"
                InputFieldTailingIcon={``}
                InputFieldLeadingIcon={``}
            />
            <TextareaInputField 
                Label="Review (690 Characters max)" 
                HelpIcon={``}
                PlaceHolderText="Add your review"
                HintText=""
            />
            <div className={styles.starRating}>
                <span className={styles.starRatingLabel}> Rating* </span>
                <StarRating5 size={`40`} />
            </div>
            {/* <input type="file" /> */}
        </div>
    );
};

const ModalFooter = () => {
    return (
        <div className={styles.modalFooter}>
            <Btn_Pri_XL ButtonCTA={`Submit Review`}/>
        </div>
    );
};

export { ReviewModalDesktop };
