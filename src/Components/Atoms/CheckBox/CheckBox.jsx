import styles from "./CheckBox.module.css";

const CheckBox = () => {
    return (
        <label className={styles.customCheckBox}>
            <input
                className={styles.hiddenCheckBox}
                type="checkbox"
            />
            <span className={styles.customBox}></span>
        </label>
    );
};

export default CheckBox;
