import React from "react";
import { CDN_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
  
  const { resData } = props;
  console.log("resdata ===>", resData.info.avgRating)
    return (
      <div className="res-card">
        <img
          alt="biryaani img"
          className="res-logo"
          src={ CDN_URL + resData?.info?.cloudinaryImageId}
        />
        <h4>{resData?.info?.name}</h4>
        <h4>{ resData?.info?.cuisines.join(", ")}</h4>
        <h4>{resData?.info?.avgRating} ⭐</h4>
        <h4>{resData?.info?.costForTwo}</h4>
        <h4>{ resData?.info?.sla.deliveryTime} minutes</h4>
        <h4>Madni Products ❤️</h4>
      </div>
    );
  };
  