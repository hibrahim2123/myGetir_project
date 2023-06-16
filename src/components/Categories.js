import React, { useEffect, useState } from "react";
import CategoryData from "../api/categories.json";
import Category from "./Category";
import Campaign from "./Campaign";
import Title from "./Title";

function Categories() {
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    setTimeout(() => setCategory(CategoryData), 1000);
  }, []);
  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <Title>Kategoriler</Title>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12">
          {!categories.length && "yükleniyor..."}
          {categories &&
            categories.map((category, index) => (
              <Category key={index} category={category}></Category>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
