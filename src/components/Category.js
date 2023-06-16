import React from "react";

function Category({ category: { id, title, image } }) {
  return (
    <a
      href=""
      className="flex flex-col items-center gap-y-2 text-center p-4 transition hover:bg-purple-50 group"
    >
      <img
        src={image}
        alt=""
        className="w-12 h-12 rounded-sm border border-gray-500"
      />
      <span className="text-sm font-semibold group-hover:text-blue-300 tracking-tight whitespace-nowrap">
        {title}
      </span>
    </a>
  );
}

export default Category;
