import React from "react";
import styles from "./Pagination.module.css"
import { Btn_Sec_Gray_SM } from "../Atoms/Button";
import ArrowLeft from "../../assets/Icons/UI/arrow-left.svg"
import ArrowRight from "../../assets/Icons/UI/arrow-right.svg"

const Pagination = () => {
    return(
        <div className={styles.paginationWrap}>
            <div className={styles.buttonWrapPrevious}>
                <div> <Btn_Sec_Gray_SM ButtonCTA={`Prev.`} iconLeading={ArrowLeft}/> </div>
            </div>
            <div className={styles.pageCount}> Page 1 of 10 </div>
            <div className={styles.buttonWrapNext}>
                <div> <Btn_Sec_Gray_SM ButtonCTA={`Next`} iconTrailing={ArrowRight}/> </div>
            </div>
        </div>
    );
};

export {Pagination, }
