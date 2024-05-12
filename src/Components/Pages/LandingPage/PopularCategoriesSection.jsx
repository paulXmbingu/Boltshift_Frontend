import CategoryCard from "../../Shared/CategoryCard";
import SectionHeader from "../../Shared/SectionHeader";


const popCatSection={
    display: 'flex',
    minWidth: 'var(--Grid-layouts-iPhone-375px, 375px)',
    maxWidth: 'var(--grid-layouts-desktop-1280-px, 1280px)',
    padding: 'var(--spacing-system-guides-corner-radius-12, 48px) var(--spacing-system-guides-corner-radius-4, 16px)',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 'var(--spacing-system-guides-corner-radius-10, 40px)',
    alignSelf: 'stretch',
}

const categoryCards={
    display: "flex",
    alignItems: "flex-start",
    alignContent: "flex-start",
    gap: "16px var(--spacing-system-guides-corner-radius-4, 16px)",
    alignSelf: "stretch",
    flexWrap: "wrap"
}


function PopularCategoriesSection() {
    return (
        <popCatSection style={popCatSection}>
            <div> <SectionHeader text="Popular Categories" />  </div>
            <categoryCards style={categoryCards}>
               <CategoryCard />
               <CategoryCard />
               <CategoryCard />
               <CategoryCard />
               <CategoryCard />
               <CategoryCard />
               <CategoryCard />
               <CategoryCard />
               <CategoryCard />
               <CategoryCard />
               <CategoryCard />
               <CategoryCard />
               <CategoryCard />
               <CategoryCard />
            </categoryCards>
        </popCatSection>
    );
};

export default PopularCategoriesSection;
