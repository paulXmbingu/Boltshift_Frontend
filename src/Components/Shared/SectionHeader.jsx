import React from "react";

//STYLING
const sectionHeaderStyles = {
    container: {
        display: 'flex',
        minWidth: '336px',
        maxWidth: '1280px',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        gap: '4px',
        alignSelf: 'stretch',
        flexWrap: 'wrap',
    },

    image: {
        width: '32px',
        height: '32px',
    },
    
    text: {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 1,
        overflow: 'hidden',
        color: '#333741',
        textAlign: 'center',
        textOverflow: 'ellipsis',
        fontFamily: 'Inter',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '32px'
    }
};

//FUNCTIONALITY
function SectionHeader({ headerTitle, icon }) {
    return (
        <div style={sectionHeaderStyles.container}>
            <img src={icon} style={sectionHeaderStyles.image} />
            <div style={sectionHeaderStyles.text}>
                {headerTitle}
            </div>
        </div>
    );
};

export default SectionHeader;
