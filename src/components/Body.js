import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

  // State variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    console.log(json);
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  // Conditional Rendering

  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />
  // }

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
          filteredRestaurant.map(restaurant => <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>)
        }
      </div>
    </div>
  );
};

export default Body;