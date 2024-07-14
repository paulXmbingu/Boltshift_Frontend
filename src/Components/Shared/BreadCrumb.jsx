import React from 'react'
import Styles from './BreadCrumb.module.css'
import home from '../../assets/Icons/UI/home-line.svg'
import chevron from "../../assets/Icons/UI/chevron-right (1).svg"

const BreadCrumb = ({Catalog, Cartegory, Subcategory, ProductName, }) => {
  return (
    <div className={Styles.BreadCrumb}>
        <img src={home} alt="Breadcrumb home icon" className={Styles.HomeIcon} />
        <div className={Styles.CatalogPage}>
            <img src={chevron} alt="chevron" className={Styles.chevron} />
            <div className={Styles.BreadcrumbButon}>
                <span className={Styles.BreadcrumbCatalogText}>{Catalog}</span>
            </div>
        </div>
        <div className={Styles.CatalogPage}>
            <img src={chevron} alt="chevron" className={Styles.chevron} />
            <div className={Styles.BreadcrumbButon}>
                <span className={Styles.BreadcrumbCatalogText}>{Cartegory}</span>
            </div>
        </div>
        <div className={Styles.CatalogPage}>
            <img src={chevron} alt="chevron" className={Styles.chevron} />
            <div className={Styles.BreadcrumbButon}>
                <span className={Styles.BreadcrumbCatalogText}>{Subcategory}</span>
            </div>
        </div>
        <div className={Styles.CatalogPage}>
            <img src={chevron} alt="chevron" className={Styles.chevron} />
            <div className={Styles.BreadcrumbButon}>
                <span className={Styles.BreadCrumbRedText}>{ProductName}</span>
            </div>
        </div>
    </div>
  );
};

export default BreadCrumb;
