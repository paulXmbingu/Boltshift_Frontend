import React from 'react'
import Styles from './BreadCrumb.module.css'
import home from '../../assets/Icons/UI/home-line.svg'

const BreadCrumb = ({BreadCrumbText, chevron, MenFashion, watches, OrlandoWatch }) => {
  return (
    <div className={Styles.BreadCrumb}>
        <img src={home} alt="Breadcrumb home icon" className={Styles.HomeIcon} />
        <div className={Styles.CatakogPage}>
            <img src={chevron} alt="chevron" className={Styles.chevron} />
            <div className={Styles.BreadcrumbButon}>
                <span className={Styles.BreadcrumbCatalogText}>{BreadCrumbText}</span>
            </div>
        </div>
        <div className={Styles.CatakogPage}>
            <img src={chevron} alt="chevron" className={Styles.chevron} />
            <div className={Styles.BreadcrumbButon}>
                <span className={Styles.BreadcrumbCatalogText}>{MenFashion}</span>
            </div>
        </div>
        <div className={Styles.CatakogPage}>
            <img src={chevron} alt="chevron" className={Styles.chevron} />
            <div className={Styles.BreadcrumbButon}>
                <span className={Styles.BreadcrumbCatalogText}>{watches}</span>
            </div>
        </div>
        <div className={Styles.CatakogPage}>
            <img src={chevron} alt="chevron" className={Styles.chevron} />
            <div className={Styles.BreadcrumbButon}>
                <span className={Styles.BreadCrumbRedText}>{OrlandoWatch}</span>
            </div>
        </div>
    </div>
  )
}

export default BreadCrumb