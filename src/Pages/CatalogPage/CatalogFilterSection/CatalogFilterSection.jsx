import React, { useState } from 'react';
import styles from './CatalogFilterSection.module.css';
import { FilterHeader, FilterLabel, FilterSubHeader } from '../../../Components/Shared/Filters/Filters';
import ChevronUp from "./Assets/chevron-up.svg";
import ChevronDown from "./Assets/chevron-down.svg";
import MinusSquare from "./Assets/minus-square.svg";
import PlusSquare from "./Assets/plus-square.svg";
import { Badge_PillColor_SM_Blue, Badge_PillColor_SM_BlueLight, Badge_PillColor_SM_Brand, Badge_PillColor_SM_Error, Badge_PillColor_SM_Gray, Badge_PillColor_SM_GrayBlue, Badge_PillColor_SM_Indigo, Badge_PillColor_SM_LeadIcon_Success, Badge_PillColor_SM_Orange, Badge_PillColor_SM_Pink, Badge_PillColor_SM_Purple, Badge_PillColor_SM_Success, Badge_PillColor_SM_Warning } from '../../../Components/Atoms/Badge';
import { StarRating1, StarRating2, StarRating3, StarRating4, StarRating5 } from '../../../Components/Molecules/StarRating';

// CATALOG FILTERS
const CatalogFilterSection = () => {
  return (
    <div className={styles.CatalogFilterSection}>
      <HeaderStack FilterHeaderLabel="Categories" />
      <BrandStack />
      <PopularTagsFilters />
      <StarRatingsFilter />
      <ShippingOptions />
    </div>
  );
};

// HEADER STACK
const HeaderStack = ({ FilterHeaderLabel }) => {
  const [isHeaderStackExpanded, setHeaderStackExpanded] = useState(true);

  const handleFilterHeader = () => {
    setHeaderStackExpanded(!isHeaderStackExpanded);
  };

  const categories = [
    {
      subHeader: 'Automotive',
      filters: [
        'Car Care',
        'Electronics & Accessories',
        'Exterior Accessories',
        'Lights & Lighting Accessories',
        'Interior Accessories',
        'Motorcycle & Power Sports',
        'Oils & Fluids',
        'Paint & Paint',
        'Tires & Wheels',
        'Tools & Equipment',
      ],
    },
    {
      subHeader: 'Baby',
      filters: [
        'Activity & Entertainment',
        'Apparel & Accessories',
        'Baby & Toddler',
        'Toys Baby',
        'Care Baby Stationery',
        'Diapering Feeding Gifts',
        'Nursery Potty Training',
        'Pregnancy & Maternity Safety',
        'Baby Furniture',
        'Baby Monitors',
      ],
    },
    {
      subHeader: 'Beauty and Personal Care',
      filters: [
        'Makeup',
        'Skin Care',
        'Hair Care',
        'Fragrance',
        'Foot, Hand & Nail Care',
        'Tools & Accessories',
        'Shave & Hair Removal',
        'Personal Care Oral Care',
        'Bath & Body',
        'Beauty Tools',
      ],
    },
    {
      subHeader: 'Health & Household',
      filters: [
        'Baby & Child Care',
        'Health Care',
        'Household Supplies',
        'Medical Supplies & Equipment',
        'Oral Care',
        'Personal Care',
        'Sexual Wellness',
        'Sports Nutrition',
        'First Aid',
        'Vitamins & Supplements',
      ],
    },
    {
      subHeader: 'Home & Kitchen',
      filters: [
        'Kids’ Home Store',
        'Kitchen & Dining',
        'Bedding',
        'Bath',
        'Furniture',
        'Home Décor',
        'Wall Art',
        'Lighting & Ceiling Fans',
        'Storage & Organization',
        'Small Appliances',
      ],
    },
    {
      subHeader: 'Luggage',
      filters: [
        'Carry-ons',
        'Backpacks',
        'Garment Bags',
        'Travel Totes',
        'Luggage Sets',
        'Laptop Bags',
        'Suitcases',
        'Kids Luggage',
        'Duffel Bags',
        'Luggage Accessories',
      ],
    },
    {
      subHeader: 'Men\'s Fashion',
      filters: [
        'Shorts',
        'Shirts',
        'Activewear',
        'Hoodies & Sweatshirts',
        'Jeans',
        'Pants',
        'Pajamas & Robes',
        'Occupational & Workwear',
        'Jackets & Coats',
        'Socks & Underwear',
      ],
    },
    {
      subHeader: 'Women\'s Fashion',
      filters: [
        'Clothing',
        'Shoes',
        'Jewelry',
        'Watches',
        'Handbags',
        'Accessories',
        'Lingerie',
        'Filter Label',
        'Dresses',
        'Scarves & Wraps',
      ],
    },
    {
      subHeader: 'Pet Supplies',
      filters: [
        'Dogs',
        'Cats',
        'Fish & Aquatic Pets',
        'Birds',
        'Horses',
        'Reptiles & Amphibians',
        'Small Animals',
        'Filter Label',
        'Pet Food',
        'Pet Grooming',
      ],
    },
  ];

  return (
    <div className={isHeaderStackExpanded ? styles.headerStackWrapExpanded : styles.headerStackWrapCollapsed}>
      <FilterHeader
        FilterHeaderLabel={FilterHeaderLabel}
        FilterHeaderIcon={isHeaderStackExpanded ? MinusSquare : PlusSquare}
        handleFilterHeader={handleFilterHeader}
      />
      {isHeaderStackExpanded && categories.map((category, index) => (
        <SubHeaderStack 
          key={index} 
          FilterSubHeaderLabel={category.subHeader} 
          filters={category.filters}
        />
      ))}
    </div>
  );
};

// SUBHEADER STACK
const SubHeaderStack = ({ FilterSubHeaderLabel, filters }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFilterSubHeader = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.subHeaderStackWrap}>
      <FilterSubHeader
        FilterSubHeaderLabel={FilterSubHeaderLabel}
        subHeaderTailIcon={isExpanded ? ChevronUp : ChevronDown}
        handleFilterSubHeader={handleFilterSubHeader}
      />
      <div className={isExpanded ? styles.filtersListsExpanded : styles.filtersListsCollapsed}>
        {filters.map((filter, index) => (
          <FilterLabel
            key={index} 
            FilterLabel={filter}
          />
        ))}
      </div>
    </div>
  );
};

// BRANDSTACK
const BrandStack = () => {
  const [isBrandStackExpanded, setBrandStackExpanded] = useState(true);

  const handleFilterHeader = () => {
    setBrandStackExpanded(!isBrandStackExpanded);
  };

  const brand = [
    `3M Company`,
    `Apple`,
    `Dell`,
    `Dyson`,
    `Microsoft`,
    `Nike`,
    `Samsung`,
    `Sony`,
    `Under Armor`,
    `Zeplin`,
  ];

  return (
    <div className={styles.brandStackWrap}>
      <FilterHeader
        FilterHeaderLabel={`Brands`}
        FilterHeaderIcon={isBrandStackExpanded ? MinusSquare : PlusSquare}
        handleFilterHeader={handleFilterHeader}
      />
      <div className={isBrandStackExpanded ? styles.filtersListsExpanded : styles.filtersListsCollapsed}>
        {brand.map((brands, index) => (
          <FilterSubHeader 
            FilterSubHeaderLabel={brands}
            key={index} 
          />
        ))}
      </div>
    </div>
  );
};

// SHIPPING OPTIONS
const ShippingOptions = () => {
  const [isShippingStackExpanded, setShippingStackExpanded] = useState(true);

  const handleFilterHeader = () => {
    setShippingStackExpanded(!isShippingStackExpanded);
  };

  const shippingOptions = [
    `Fast`,
    `Saving`,
    `Free`,
  ];

  return (
    <div className={styles.brandStackWrap}>
      <FilterHeader
        FilterHeaderLabel={`Shipping`}
        FilterHeaderIcon={isShippingStackExpanded ? MinusSquare : PlusSquare}
        handleFilterHeader={handleFilterHeader}
      />
      <div className={isShippingStackExpanded ? styles.filtersListsExpanded : styles.filtersListsCollapsed}>
        {shippingOptions.map((shipping, index) => (
          <FilterSubHeader 
            FilterSubHeaderLabel={shipping}
            key={index} 
          />
        ))}
      </div>
    </div>
  );
};

// POPULAR TAGS FILTER STACK
const PopularTagsFilters = () => {
  const [isTagsFilterExpanded, setTagsFiltersExpanded] = useState(true);
  const [areTagsVisible, setTagsVisible] = useState(true); // New state for tags visibility

  const toggleTagsFilter = () => {
    setTagsFiltersExpanded(!isTagsFilterExpanded);
    setTagsVisible(!areTagsVisible); // Toggle tags visibility
  };

  return (
    <div className={styles.popularTagsFilters}>
      <FilterHeader 
        FilterHeaderLabel={`Popular Tags`}
        FilterHeaderIcon={isTagsFilterExpanded ? MinusSquare : PlusSquare}
        handleFilterHeader={toggleTagsFilter} // Use new toggle function
      />
      {areTagsVisible && ( // Render tags only if visible
        <div className={styles.tagsGroup}>
          <Badge_PillColor_SM_Blue BadgeLabel={`New Arrivals`} />
          <Badge_PillColor_SM_BlueLight BadgeLabel={`Best Sellers`} />
          <Badge_PillColor_SM_Brand BadgeLabel={`On Sale`} />
          <Badge_PillColor_SM_Error BadgeLabel={`Featured`} />
          <Badge_PillColor_SM_Gray BadgeLabel={`Clearance`} />
          <Badge_PillColor_SM_GrayBlue BadgeLabel={`Refurbished`} />
          <Badge_PillColor_SM_Indigo BadgeLabel={`Exclusive`} />
          <Badge_PillColor_SM_Orange BadgeLabel={`In-Stock`} />
          <Badge_PillColor_SM_Pink BadgeLabel={`Pre-orders`} />
          <Badge_PillColor_SM_Purple BadgeLabel={`Limited Edition`} />
          <Badge_PillColor_SM_Success BadgeLabel={`Out of Stock`} />
          <Badge_PillColor_SM_Warning BadgeLabel={`Backorder`} />
        </div>
      )}
    </div>
  );
};

// STAR RATINGS FILTER STACK
const StarRatingsFilter = () => {
  const [isStarRatingExpanded, setStarRatingExpanded] = useState(true);

  const handleFilterHeader = () => {
    setStarRatingExpanded(!isStarRatingExpanded);
  };

  return (
    <div className={styles.brandStackWrap}>
      <FilterHeader
        FilterHeaderLabel={`Star Ratings`}
        FilterHeaderIcon={isStarRatingExpanded ? MinusSquare : PlusSquare}
        handleFilterHeader={handleFilterHeader}
      />
      <div className={isStarRatingExpanded ? styles.filtersListsExpanded : styles.filtersListsCollapsed}>
        <div className={styles.subfiltersGroup}>
          <div className={styles.ratingsSubfilters}>
            <div className={styles.ratingsSubfilterHeader}>
                <div className={styles.ratingsCheckBox}> <input type="checkbox" name="" id="" /> </div>
                <div className={styles.starRatingsReview}>
                <StarRating5 />
                <div className={styles.ratingsStarCountWrap}>
                  <span className={styles.ratingsStarCount}> 5 Stars </span>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className={isStarRatingExpanded ? styles.filtersListsExpanded : styles.filtersListsCollapsed}>
        <div className={styles.subfiltersGroup}>
          <div className={styles.ratingsSubfilters}>
            <div className={styles.ratingsSubfilterHeader}>
                <div className={styles.ratingsCheckBox}> <input type="checkbox" name="" id="" /> </div>
                <div className={styles.starRatingsReview}>
                <StarRating4 />
                <div className={styles.ratingsStarCountWrap}>
                  <span className={styles.ratingsStarCount}> 4 Stars </span>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className={isStarRatingExpanded ? styles.filtersListsExpanded : styles.filtersListsCollapsed}>
        <div className={styles.subfiltersGroup}>
          <div className={styles.ratingsSubfilters}>
            <div className={styles.ratingsSubfilterHeader}>
                <div className={styles.ratingsCheckBox}> <input type="checkbox" name="" id="" /> </div>
                <div className={styles.starRatingsReview}>
                <StarRating3 />
                <div className={styles.ratingsStarCountWrap}>
                  <span className={styles.ratingsStarCount}> 3 Stars </span>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className={isStarRatingExpanded ? styles.filtersListsExpanded : styles.filtersListsCollapsed}>
        <div className={styles.subfiltersGroup}>
          <div className={styles.ratingsSubfilters}>
            <div className={styles.ratingsSubfilterHeader}>
                <div className={styles.ratingsCheckBox}> <input type="checkbox" name="" id="" /> </div>
                <div className={styles.starRatingsReview}>
                <StarRating2 />
                <div className={styles.ratingsStarCountWrap}>
                  <span className={styles.ratingsStarCount}> 2 Stars </span>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className={isStarRatingExpanded ? styles.filtersListsExpanded : styles.filtersListsCollapsed}>
        <div className={styles.subfiltersGroup}>
          <div className={styles.ratingsSubfilters}>
            <div className={styles.ratingsSubfilterHeader}>
                <div className={styles.ratingsCheckBox}> <input type="checkbox" name="" id="" /> </div>
                <div className={styles.starRatingsReview}>
                <StarRating1 />
                <div className={styles.ratingsStarCountWrap}>
                  <span className={styles.ratingsStarCount}> 1 Stars </span>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogFilterSection;
