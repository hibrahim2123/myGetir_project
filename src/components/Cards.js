import React, { useState, useEffect } from "react";
import cards from "../api/cards.json";

function Cards() {
  const [myCards, setCards] = useState([]);

  useEffect(() => setCards(cards), []);
  return (
    <div className=" container mx-auto m-2 grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 gap-y-2 px-2 md:px-0 ">
      {myCards.length &&
        myCards.map((card) => (
          <div className="bg-white p-14 rounded-lg shadow-lg flex flex-col items-center justify-center ">
            <img src={card.image} className="w-[150px] h-[150px] mb-6" />
            <h6 className="font-semibold text-lg ">{card.title}</h6>
            <p className="mt-2 text-sm">{card.descript}</p>
          </div>
        ))}
    </div>
  );
}

export default Cards;
