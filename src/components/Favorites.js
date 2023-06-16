import React from "react";
import Title from "./Title";
import products from "../api/product.json";
import ProductItem from "./ProductItem";

function Favorites({ children }) {
  return (
    <div className="container mx-auto ">
      <Title>Favorilerim</Title>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9 lg  gap-0.1 rounded-lg overflow-hidden ">
        {products.length &&
          products.map((product) => (
            <ProductItem product={product} key={product.id}></ProductItem>
          ))}
      </div>
    </div>
  );
}

export default Favorites;
