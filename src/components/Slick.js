import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { BsFacebook } from "react-icons/bs";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";

export default function Slick() {
  const windowWidth = useWindowWidth();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };
  const [selected, setSelected] = useState("TR");

  const phones = {
    US: "+1",
    DE: "+50",
    TR: "+90",
    IT: "+7",
    IN: "+15",
  };

  return (
    <div className="relative h-auto md:h-[500x] before:bg-gradient-to-r before:from-[#5d3ebc] before:to-transparent before:absolute before:inset-0 before:z-10 before:w-5/5 before:h-full ">
      {windowWidth > 767 && (
        <Slider {...settings}>
          <div>
            <img
              className="w-full object-cover"
              src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full object-cover"
              src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full object-cover"
              src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
              alt=""
            />
          </div>
        </Slider>
      )}
      <div className="md:container flex justify-between items-center relative md:absolute top-0 left-0  md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20 ">
        <div className="hidden lg:block flex flex-col gap-3 ">
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt=""
          />
          <h1 className="text-4xl mt-3 font-semibold text-white">
            Dakikalar içinde <br /> kapınızda
          </h1>
        </div>
        <div className=" w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6">
          <h4 className="text-gray-500 text-center font-semibold mb-4 ">
            Giriş yap veya kayıt ol
          </h4>
          <div className="grid gap-y-3">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                selected={selected}
                onSelect={(code) => setSelected(code)}
                className="flag-select"
              />
              <label className="flex-1 relative block">
                <input
                  required
                  className="h-14  border-2 w-full rounded-md hover:border-[#5d3ebc] outline:none peer pt-2"
                />
                <span className=" absolute  top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-6 peer-focus:text-[#5d3ebc] peer-focus:text-xs peer-valid:h-6 peer-valid:text-[#5d3ebc] peer-valid:text-xs ">
                  Telefon numarası
                </span>
              </label>
            </div>
            <button className="bg-[#5d3ebc] h-11 rounded-lg text-[#ffd300] transition-color hover:bg-[#ffd300]  hover:text-[#5d3ebc]">
              Telefon numarası ile devam et
            </button>
            <hr className="h-[1px] bg-gray-500 my-2" />
            <button className="flex justify-between items-center bg-[#4267b2] h-11 rounded-lg text-[#ffd300] transition-color hover:bg-gray-200 hover:text-[#4267b2] ">
              <BsFacebook size={30} className="ml-5"></BsFacebook>
              <p className="flex-1">Facebook ile devam et</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
