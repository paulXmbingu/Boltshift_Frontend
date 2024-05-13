import CategoryIcon from "/src/assets/Icons/T-shirt.svg";


//STYLING
const cardStyle={
    display: 'flex',
    height: 'var(--spacing-system-guides-corner-radius-32, 128px)',
    minWidth: '136px',
    maxWidth: 'var(--spacing-system-guides-corner-radius-40, 160px)',
    minHeight: 'var(--spacing-system-guides-corner-radius-12, 48px)',
    maxHeight: 'var(--spacing-system-guides-corner-radius-32, 128px)',
    padding: 'var(--spacing-system-guides-corner-radius-3, 12px)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 'var(--spacing-system-guides-corner-radius-3, 12px)',
    flex: '1 0 0',
    borderRadius: 'var(--spacing-system-guides-corner-radius-2, 8px)',
    border: '1px solid var(--Colors-Border-border-secondary, #EAECF0)',
    background: 'var(--Colors-Background-bg-primary, #FFF)',
    cursor: "pointer"
}

const categoryIcon={
    width: 'var(--Base-4-Premitives-12, 48px)',
    height: 'var(--Base-4-Premitives-12, 48px)',    
}

const categoryName={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',    
}

const categoryText={
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 1,
    overflow: 'hidden',
    color: 'var(--colors-text-text-primary-900, #101828)',
    textAlign: 'center',
    textOverflow: 'ellipsis',
    fontFamily: 'Inter',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '18px', // 150%    
}


//FUNCTIONALITY
function CategoryCard({ icon,name }) {
    return (
        <categoryCard style={cardStyle}>
            <img src={icon} alt="Category Icon" style={categoryIcon} />
            <categoryName style={categoryName}>
                <categoryText style={categoryText}> {name} </categoryText>
            </categoryName>
        </categoryCard>
    );
};

export default CategoryCard
