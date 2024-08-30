import React from 'react'
import Styles from './BreadCrumb.module.css'
import { Link } from 'react-router-dom';
import home from './Assets/home-line.svg'
import chevron from "./Assets/chevron-right.svg"

const BreadCrumb = ({Catalog, Cartegory, Subcategory, ProductName, }) => {
  return (
    <div className={Styles.BreadCrumb}>
        <Link to='/' > <img src={home} alt="Breadcrumb home icon" className={Styles.HomeIcon} /> </Link> 
        <Link to='/catalog' className={Styles.BreadCrumbButton}>
            <img src={chevron} alt="chevron" className={Styles.chevron} />
            <div className={Styles.BreadcrumbButon}>
                <span className={Styles.BreadcrumbCatalogText}>{Catalog}</span>
            </div>
        </Link>
        {Cartegory && (
            <Link className={Styles.BreadCrumbButton}>
                <img src={chevron} alt="chevron" className={Styles.chevron} />
                <div className={Styles.BreadcrumbButon}>
                    <span className={Styles.BreadcrumbCatalogText}> {Cartegory} </span>
                </div>
            </Link>)}
        {Subcategory && (
            <Link className={Styles.BreadCrumbButton}>
                <img src={chevron} alt="chevron" className={Styles.chevron} />
                <div className={Styles.BreadcrumbButon}>
                    <span className={Styles.BreadcrumbCatalogText}> {Subcategory} </span>
                </div>
            </Link>)}
        {ProductName && (
            <div className={Styles.BreadCrumbButton}>
                <img src={chevron} alt="chevron" className={Styles.chevron} />
                <div className={Styles.BreadcrumbButon}>
                    <span className={Styles.BreadCrumbCurrent}>{ProductName}</span>
                </div>
            </div>)}
    </div>
  );
};

export default BreadCrumb;
