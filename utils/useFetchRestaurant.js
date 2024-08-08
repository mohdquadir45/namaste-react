import { useEffect, useState } from "react";

const useFetchRestaurant = () => {
    const [restList, setRestList] = useState([]);
  const [filteredRestList, setFilteredRestList] = useState([]);

    useEffect(() => {
    fetchData()
    }, [])
    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        setRestList(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );
          setFilteredRestList(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );

    }
    return { restList, filteredRestList, setRestList, setFilteredRestList }

}
export default useFetchRestaurant;