import SecHeaderIcon from "/src/assets/Icons/Fire.svg";

function SectionHeader() {
    return (
        <div style={{
            display: 'flex',
            minWidth: `var(--spacing-system-guides-corner-radius-84, 336px)`,
            maxWidth: `var(--grid-layouts-desktop-1280-px, 1280px)`,
            alignItems: 'flex-start',
            alignContent: 'flex-start',
            gap: `var(--spacing-system-guides-corner-radius-1, 4px)`,
            alignSelf: 'stretch',
            flexWrap: 'wrap',
        }}>
            <img src={SecHeaderIcon} style={{
                width: 'var(--Base-4-Premitives-8, 32px)',
                height: 'var(--Base-4-Premitives-8, 32px)',
            }} />
            <div style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 1,
                overflow: 'hidden',
                color: 'var(--Colors-Text-text-placeholder_subtle, #333741)',
                textAlign: 'center',
                textOverflow: 'ellipsis',
                fontFamily: 'Inter',
                fontSize: '24px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '32px'
            }}>
                Section Header
            </div>
        </div>
    );
};

export default SectionHeader;
