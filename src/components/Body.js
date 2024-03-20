import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

  // State variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.21670&lng=72.68330&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    console.log(json);
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  // Conditional Rendering

  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />
  // }

  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return (
      <h1>Look like you are offline. Check your internet connection!!</h1>
    );
  }

  return (listOfRestaurants.length === 0) ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRes = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurant(filteredRes);
            }}
          >Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterdList = listOfRestaurants.filter(res => res.info.avgRating > 4);
            setFilteredRestaurant(filterdList);
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {
          filteredRestaurant.map(restaurant => {
            return (
              <Link
                to={"/restaurants/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            );
          })
        }
      </div>
    </div>
  );
};

export default Body;

// <RestaurantCard resData = {restaurant}/>

// <Link 
// key = {restaurant.info.id} 
// to={"/restaurants/" + restaurant.info.id}
// >
// <RestaurantCard resData = {restaurant}/>
// </Link>