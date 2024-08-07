import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {  RES_CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRetaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const [isActive, setIsActive] = useState(true);

  const { resId } = useParams();

  const resInfo = useRetaurantMenu(resId)

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API_URL + resId);
  //   const json = await data.json();
  //   console.log("data api ===>", json);
  //   setResInfo(json.data);
  // };

  if (resInfo === null) {
    return <Shimmer />;
  }
  console.log(
    "card data ====>",
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card
  );
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
  console.log("itemCards ===>", itemCards);

  return (
    <>
      <div className="menu">
        <button className="accordian" onClick={() => setIsActive(!isActive)}>
          {isActive ? "+" : "-"}
        </button>

        {isActive && (
          <>
            {itemCards.map((item) => {
              return (
                <div className="main-cont">
                  <div
                    key={`resId${item.card.info.id}`}
                    className="card-container"
                  >
                    <div>
                      <h4>{item.card.info.name}</h4>
                      <p> {item.card.info.price}</p>
                      <p>{item.card.info.description}</p>
                    </div>
                    <div className="resImg-container">
                      <img
                        className="res-image"
                        src={RES_CDN_URL + item?.card?.info?.imageId}
                        alt="restaurant images"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};
export default RestaurantMenu;
