import React, { useEffect, useState } from "react";
import Banners from "../api/banners.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "./Title";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";

function Campaign() {
  const [banners, setBanners] = useState([]);

  const windowSize = useWindowWidth();

  useEffect(() => {
    setBanners(Banners);
  }, []);
  function NextButton({ onClick, className }) {
    return (
      <button className={`${className} text-purple-700`} onClick={onClick}>
        <IoIosArrowForward size={22} />
      </button>
    );
  }

  function PrevButton({ onClick, className }) {
    return (
      <button className={`${className} text-purple-700`} onClick={onClick}>
        <IoIosArrowBack size={22} />
      </button>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3500,
    cssEase: "linear",
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto md:pt-8">
      {windowSize >= 768 && <Title>Kampanyalar</Title>}
      <Slider {...settings} className="md:-mx-2">
        {banners.length &&
          banners.map((banner, index) => (
            <div key={banner.id}>
              <picture className=" block px-2">
                <img src={banner.image} className="md:rounded-lg"></img>
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default Campaign;
