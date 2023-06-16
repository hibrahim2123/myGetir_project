import React from "react";

function Title({ children }) {
  return (
    <div className="text-sm font-semibold mb-3 px-6 md:px-0">
      <p>{children}</p>
    </div>
  );
}

export default Title;
