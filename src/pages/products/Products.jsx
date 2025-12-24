import React from "react";

// Import the subsections we planned earlier
import ProductsHero from "../../components/products/subsections/ProductsHero";
import EcosystemSection from "../../components/products/subsections/EcosystemSection";
import ComparisonMatrix from "../../components/products/subsections/ComparisonMatrix";
import ProductPreviews from "../../components/products/subsections/ProductPreviews";

const Products = () => {
  return (
    <>
      {/* 1. Hero Section */}
      <ProductsHero />

      {/* 2. Ecosystem Section */}
      <div className="my-10">
        <EcosystemSection />
      </div>

      {/* 3. Comparison Matrix */}
      <div className="my-10">
        <ComparisonMatrix />
      </div>

      {/* 4. Product Previews */}
      <div className="my-10">
        <ProductPreviews />
      </div>
    </>
  );
};

export default Products;
