import React, { useState, useEffect } from "react";
// import { restaurantList } from "../utils/mockData";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchRestaurant from "../utils/useFetchRestaurant";
export const Body = () => {
  // const [restList, setRestList] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const [filteredRestList, setFilteredRestList] = useState([]);
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );

  //   const json = await data.json();
  //   setRestList(
  //     json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   setFilteredRestList(
  //     json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };

  const onlineStatus = useOnlineStatus();
  const { restList, filteredRestList, setFilteredRestList } = useFetchRestaurant() 
  console.log("restList ====>", restList, filteredRestList )

  if (onlineStatus === false) {
    return <h1>Looks Like You Are Offline!! Please check your internet connection please.</h1>
  }

  if (restList.length === 0) {
    return <Shimmer />;
  }
  const searchItem = () => {
    console.log("first =====>", restList);
    const filteredList = restList.filter((item) =>
      item.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestList(filteredList);
  };

  return (
    <div>
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-input"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
          <button onClick={searchItem}>Search</button>
        </div>
        <button
          className="filter-ctn"
          onClick={() => {
            const filteredList = restList.filter(
              (res) => res.info.avgRating < 4
            );
            setFilteredRestList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestList.map((restaurant) => (
          <Link key={restaurant.info.id}  to={"/restaurants/" + restaurant.info.id}>
          <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
