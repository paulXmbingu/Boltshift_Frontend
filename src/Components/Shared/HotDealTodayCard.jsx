import HotDealCardImage from "/src/assets/Images/HotDealCardImage.png";

function HotDealTodayCard() {
    const cardStyles = {
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
        overflow: "hidden",
        transition: "transform 0.2s",
        cursor: "pointer"
    };

    const imageStyles = {
        height: "160px",
        minHeight: "160px",
        maxHeight: "160px",
        width: "100%",
        objectFit: "cover"
    };

    const buttonStyles = {
        display: 'flex',
        padding: 'var(--spacing-md, 8px) var(--spacing-lg, 12px)',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 'var(--spacing-xs, 4px)',
        alignSelf: 'stretch',
        borderRadius: 'var(--radius-md, 8px)',
        border: '1px solid var(--Component-colors-Components-Buttons-Secondary-button-secondary-border, #D0D5DD)',
        background: 'var(--Component-colors-Components-Buttons-Secondary-button-secondary-bg, #FFF)',
        boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)'
    };

    const productDetailsStyles = {
        display: 'flex',
        padding: `0px var(--spacing-system-guides-corner-radius-3, 12px)`,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        gap: `var(--spacing-system-guides-corner-radius-1, 4px)`,
        alignSelf: 'stretch'
    };

    return (
        <hotDealCard style={cardStyles}>
            <img src={HotDealCardImage} alt="Product Image" style={imageStyles} />
            <productDetails style={productDetailsStyles}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }}>
                    <h6> Product Name </h6>
                </div>
                <button style={buttonStyles}>
                    Add to Cart
                </button>
                <h5> Popularity Status </h5>
                <h5> Product Details & CTA </h5>
            </productDetails>
        </hotDealCard>
    );
};

export default HotDealTodayCard;
