import RestaurantCard, {withOpenedlabel} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

  // State variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardOpened = withOpenedlabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.21670&lng=72.68330&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

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

  const { loggedInUser, setUserName } = useContext(UserContext);

  return (listOfRestaurants.length === 0) ? <Shimmer /> : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-2 m-4 bg-green-100 rounded-lg"
            onClick={() => {
              const filteredRes = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurant(filteredRes);
            }}
          >Search</button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filterdList = listOfRestaurants.filter(res => res.info.avgRating > 4);
              setFilteredRestaurant(filterdList);
            }}>
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label className="px-2">Username : </label>
          <input
            className="border border-black pl-1"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}/>
        </div>
      </div>
      <div className="flex flex-wrap">
        {
          filteredRestaurant.map(restaurant => {
            return (
              <Link
                to={"/restaurants/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                {/** If restaurant is open we have to add open lable to it */
                  restaurant.info.isOpen ? <RestaurantCardOpened resData={restaurant} /> : <RestaurantCard resData={restaurant} />
                }
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