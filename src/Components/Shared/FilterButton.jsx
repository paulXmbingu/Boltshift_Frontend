import React from "react";
import styles from "./FilterButton.module.css"
import { Btn_Icon_Only_Sec_LG } from "../Atoms/Button";
import Filter from "../../assets/Icons/UI/filter-funnel-02.svg"

const FilterButton = () => {
    return (
        <div>
            <Btn_Icon_Only_Sec_LG Icon={Filter} />
        </div>
    );
};

export default FilterButton;
