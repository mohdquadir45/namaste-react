import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";

const useRetaurantMenu = (resId) => {
      const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        setResInfo(json.data)

    }
    return resInfo;
}
export default useRetaurantMenu;


// useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     const data = await fetch(MENU_API_URL + resId);
//     const json = await data.json();
//     console.log("data api ===>", json);
//     setResInfo(json.data);
//   };