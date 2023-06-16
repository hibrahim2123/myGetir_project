import React, { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import { useWindowWidth } from "@react-hook/window-size";
import { BiDownArrowAlt } from "react-icons/bi";

function Menu({ title, items }) {
  const [isOpen, setOpen] = useState(true);
  const windowSize = useWindowWidth();

  const toggleCollapse = () => {
    if (windowSize <= 768) {
      setOpen(!isOpen);
    }
  };

  useEffect(() => {
    if (isOpen && windowSize <= 768) {
      setOpen(false);
    }
    if (!isOpen && windowSize >= 768) {
      setOpen(true);
    }
  }, [windowSize]);
  return (
    <div>
      <section>
        <nav className="grid gap-y-4">
          <h6 className="text-lg text-[#5d3ebc] flex justify-between items-center ">
            {title}
            <button
              onClick={toggleCollapse}
              className="grid md:hidden w-6-h-6 flex items-center justify-center bg-purple-100 border rounded-lg"
            >
              <span
                className={`transition-all transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <BiDownArrowAlt></BiDownArrowAlt>
              </span>
            </button>
          </h6>
          <Collapse className="transition-all" isOpened={isOpen}>
            <ul className="grid gap-y-2">
              {items.map((item, key) => (
                <a href="#" className="text-sm hover:text-[#5d3ebc]">
                  <li key={key}>{item.title}</li>
                </a>
              ))}
            </ul>
          </Collapse>
        </nav>
      </section>
    </div>
  );
}

export default Menu;
