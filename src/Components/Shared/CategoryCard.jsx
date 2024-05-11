function CategoryCard() {
    return (
        <div style={{
            display: 'flex',
            height: 'var(--spacing-system-guides-corner-radius-32, 128px)',
            minWidth: '160px',
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
        }}>
            <h3> Category Card </h3>
        </div>
    );
};

export default CategoryCard
