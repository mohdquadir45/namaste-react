import React, { useState, useEffect } from "react";
// import { restaurantList } from "../utils/mockData";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
export const Body = () => {
  const [restList, setRestList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setRestList(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  if (restList.length === 0) {
    return <Shimmer/>
  }
  return (
    <div>
      <div className="filter">
        
        <button
          className="filter-ctn"
          onClick={() => {
            const filteredList = restList.filter((res) => res.info.avgRating > 4);
            setRestList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
     
        {restList.map((restaurant) => (
          
          
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          
        ))}
      </div>
    </div>
  );
};
