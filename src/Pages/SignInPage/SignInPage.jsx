import React, { useState, useEffect } from "react";
import styles from "./SignInPage.module.css";
import { TopNavLarge, TopNavSmall } from "../../Components/Shared/TopNav";

function SignInPage() {
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
            <div> Sign In Page </div>
        </div>
    );
}

export default SignInPage;
