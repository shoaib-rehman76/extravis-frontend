import React from "react";

// Import the subsections
import ProductsHero from "../../components/products/subsections/ProductsHero";
import EcosystemSection from "../../components/products/subsections/EcosystemSection";
import ComparisonMatrix from "../../components/products/subsections/ComparisonMatrix";
import ProductPreviews from "../../components/products/subsections/ProductPreviews";
import SlidingTextBanner from "../../components/products/subsections/SlidingTextBanner";

const Products = () => {
  return (
    <>
      {/* 1. Hero Section */}
      <ProductsHero />

      {/* 2. Ecosystem Section - Removed wrapper div to fix gap */}
      <EcosystemSection />

      {/* 3. Comparison Matrix - Removed wrapper div to fix gap */}
      <ComparisonMatrix />

      {/* 4. Product Previews - Removed wrapper div to fix gap */}
      <ProductPreviews />

      <SlidingTextBanner />
    </>
  );
};

export default Products;
