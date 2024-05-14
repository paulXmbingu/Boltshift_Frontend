import HeroCard from "../../Shared/HeroCard";


//STYLING
const HeroSectionLayout={
    display: 'flex',
    height: '688px',
    minWidth: 'var(--Grid-layouts-iPhone-375px, 375px)',
    maxWidth: 'var(--grid-layouts-desktop-1280-px, 1280px)',
    padding: 'var(--spacing-system-guides-corner-radius-12, 48px) var(--spacing-system-guides-corner-radius-4, 16px)',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--spacing-system-guides-corner-radius-10, 40px)',
    alignSelf: 'stretch'
}


//FUNCTIONALITY
function HeroSection() {
    return(
        <HeroSection style={HeroSectionLayout}>
            <HeroCard />
        </HeroSection>
    );
};

export default HeroSection;
