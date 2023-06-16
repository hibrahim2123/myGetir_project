import React from "react";

function MobileApp() {
  return (
    <div className=" container flex flex-col md:flex-row justify-between  mx-auto bg-[#5d3ebc] bg-mobile-app mt-7 rounded-lg text-white relative  ">
      <div className="flex flex-col gap-y-3 p-10">
        <h3 className="text-2xl font-weight tracking-tight">Getiri indirin</h3>
        <p>
          İstediğiniz ürünleri dakikalar içerisinde kapınıza <br></br> getirelim
        </p>
        <nav className="flex flex-wrap md:flex-nowrap gap-x-2">
          <a className="transition transform hover:scale-95">
            <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
          </a>
          <a className="transition transform hover:scale-95">
            <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
          </a>
          <a className="transition transform hover:scale-95">
            <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
          </a>
        </nav>
      </div>
      <picture className=" flex ">
        <img
          src="https://mediacat.com/wp-content/uploads/2022/04/getiris.jpg"
          className="md:rounded-lg hidden md:block md:w-[400px]"
        />
      </picture>
    </div>
  );
}

export default MobileApp;
