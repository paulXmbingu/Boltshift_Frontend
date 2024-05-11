import HotDealCardImage from "/src/assets/Images/HotDealCardImage.png";


function HotDealTodayCard() {
    return (
        <hotDealCard style={{
            display: "flex",
            width: "160px",
            height: "var(--spacing-system-guides-corner-radius-72, 288px)",
            minWidth: "var(--spacing-system-guides-corner-radius-40, 160px)",
            maxWidth: "var(--spacing-system-guides-corner-radius-40, 160px)",
            minHeight: "var(--spacing-system-guides-corner-radius-72, 288px)",
            maxHeight: "var(--spacing-system-guides-corner-radius-64, 288px)",
            paddingBottom: "var(--spacing-system-guides-corner-radius-3, 12px)",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "var(--spacing-system-guides-corner-radius-3, 12px)",
            border: "1px solid var(--Colors-Border-border-secondary, #EAECF0)",
            background: "var(--Colors-Background-bg-primary, #FFF)",
            overflow: "hidden"
        }}>
            <img src={HotDealCardImage} alt="Product Image" style={{
                height: "160px",
                minHeight: "160px",
                maxHeight: "160px",
                width: "100%",
                objectFit: "cover"
            }} />
            <productDetails style={{ 
                display: 'flex',
                padding: `0px var(--spacing-system-guides-corner-radius-3, 12px)`,
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                gap: `var(--spacing-system-guides-corner-radius-1, 4px)`,
                alignSelf: 'stretch'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }}>
                    <h6> Product Name </h6>
                    <h6> Product Price </h6>
                </div>
                <h5> Popularity Status </h5>
                <h5> Product Details & CTA </h5>
            </productDetails>
        </hotDealCard>
    );
};

export default HotDealTodayCard;
