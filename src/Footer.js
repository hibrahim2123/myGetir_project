import React from "react";
import Menu from "./components/Menu";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";

function Footer() {
  const menus = [
    {
      title: "Getir'i keşfedin",
      items: [
        {
          title: "Hakkımızda",
        },
        {
          title: "Kariyer",
        },
        {
          title: "İletişim",
        },
        {
          title: "COVID-19 Duyuru",
        },
        {
          title: "Sosyal Sorumluluk Projeleri",
        },
      ],
    },
    {
      title: "Yardıma mı ihtiyacınız var?",
      items: [
        {
          title: "Sıkça sorulan sorular",
        },
        {
          title: "Kişisel Verilerin korunması",
        },
        {
          title: "Gizlilik Politikası",
        },
        {
          title: "Kullanım koşulları ",
        },
        {
          title: "Çerez Politikası",
        },
      ],
    },
    {
      title: "İş Ortağımız Olun",
      items: [
        {
          title: "Bayimiz Olun",
        },
        {
          title: "Deponuzu kiralayın",
        },
        {
          title: "İletişim",
        },
        {
          title: "GetirYemek Restorantı Olun",
        },
        {
          title: "GetirÇarşı İşletmesi olun",
        },
      ],
    },
  ];
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 md:px-0 pt-5 md:pt-10">
        <div className="grid md:grid-cols-2  lg:grid-cols-4 pt-10 gap-y-6">
          <section>
            <h6>Getiri indirin</h6>
            <nav className="grid gap-y-4 md:gap-4 grid-cols-2 md:grid-cols-1">
              <a href="">
                <img
                  src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                  alt=""
                />
              </a>
            </nav>
          </section>
          {menus.length &&
            menus.map((menu, index) => <Menu key={index} {...menu}></Menu>)}
        </div>
        <div className="flex justify-between items-center border-t border-gray-20 mt-6 py-6 ">
          <div className="text-xs text-gray-700 flex gap-x-8">
            &copy:2021 Getir
            <a href="">Bilgi Toplumu Hizmetleri</a>
          </div>
          <nav className="flex gap-x-3">
            <a className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple">
              <FaFacebook size={21}></FaFacebook>
            </a>
            <a
              href=""
              className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple"
            >
              <FaTwitter size={21}></FaTwitter>
            </a>
            <a
              href=""
              className="transition-colors h-8 flex items-center justify-center gap-x-2 border border-gray-100 rounded-lg text-sm teext-gray-600 px-3 hover:bg-purple-50 hover-text-purple-700"
            >
              <BiGlobe size={21}></BiGlobe>
              Türkçe(TR)
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;
