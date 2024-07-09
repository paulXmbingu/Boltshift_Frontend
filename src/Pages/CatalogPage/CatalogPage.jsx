import React, { useState, useEffect } from "react";
import styles from "./CatalogPage.module.css";
import { TopNavLarge, TopNavSmall } from "../../Components/Shared/TopNav";
import Footer from "../../Components/Shared/Footer";
import ProductCatalogCard from "../../Components/Shared/ProductCatalogCard";

function CatalogPage() {
    const [isLargeScreen, setIsLargeScreen] = useState(typeof window !== "undefined" ? window.innerWidth > 768 : false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
         <div className={styles.pageLayout}>
            {isLargeScreen ? <TopNavLarge /> : <TopNavSmall />}
            <div> Breadcrum </div> 
            <div> Page Header Section </div> 
            <div className={styles.FilterAndProduct}>
                <div className={styles.filter}>
                    Filter Section
                </div>
                <div className={styles.ProductListing}>
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                    <ProductCatalogCard Images={`https://i.pinimg.com/564x/89/ef/81/89ef81b691654ec92ceafc1823a7e489.jpg`} Name={`Stylish Purple Double Breasted Men Two Piece Suit | Three Pocket Suit`} Currency={`Kshs `} Price={` 650`} CounterText={`(153.8k reviews)`} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CatalogPage;
