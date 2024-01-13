import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  // State variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList)

  // // Normal JS Variable
  // let newList = [
  //   {
  //     "info": {
  //       "resId": 3400005,
  //       "name": "Mama Chicken Mama Franky House",
  //       "image": {
  //         "url": "https://b.zmtcdn.com/data/pictures/5/3400005/485152a7f15ba63321d14c3911562916_o2_featured_v2.jpg"
  //       },
  //       "rating": {
  //         "rating_text": "3",
  //         "rating_subtitle": "Very Good",
  //       },
  //       "cft": {
  //         "text": "₹1,000 for two"
  //       },
  //       "cuisine": [
  //         {
  //           "name": "North Indian"
  //         },
  //         {
  //           "name": "Mughlai"
  //         },
  //         {
  //           "name": "Rolls"
  //         },
  //         {
  //           "name": "Burger"
  //         },
  //         {
  //           "name": "Momos"
  //         }
  //       ],
  //     },
  //     "order": {
  //       "deliveryTime": "19 min",
  //     },
  //   },
  //   {
  //     "info": {
  //       "resId": 3400006,
  //       "name": "KFC",
  //       "image": {
  //         "url": "https://b.zmtcdn.com/data/pictures/5/3400005/485152a7f15ba63321d14c3911562916_o2_featured_v2.jpg"
  //       },
  //       "rating": {
  //         "rating_text": "4.7",
  //         "rating_subtitle": "Very Good",
  //       },
  //       "cft": {
  //         "text": "₹1,000 for two"
  //       },
  //       "cuisine": [
  //         {
  //           "name": "North Indian"
  //         },
  //         {
  //           "name": "Mughlai"
  //         },
  //         {
  //           "name": "Rolls"
  //         },
  //         {
  //           "name": "Burger"
  //         },
  //         {
  //           "name": "Momos"
  //         }
  //       ],
  //     },
  //     "order": {
  //       "deliveryTime": "19 min",
  //     },
  //   },
  //   {
  //     "info": {
  //       "resId": 3400007,
  //       "name": "Dominos",
  //       "image": {
  //         "url": "https://b.zmtcdn.com/data/pictures/5/3400005/485152a7f15ba63321d14c3911562916_o2_featured_v2.jpg"
  //       },
  //       "rating": {
  //         "rating_text": "4.6",
  //         "rating_subtitle": "Very Good",
  //       },
  //       "cft": {
  //         "text": "₹1,000 for two"
  //       },
  //       "cuisine": [
  //         {
  //           "name": "North Indian"
  //         },
  //         {
  //           "name": "Mughlai"
  //         },
  //         {
  //           "name": "Rolls"
  //         },
  //         {
  //           "name": "Burger"
  //         },
  //         {
  //           "name": "Momos"
  //         }
  //       ],
  //     },
  //     "order": {
  //       "deliveryTime": "19 min",
  //     },
  //   },
  // ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterdList = listOfRestaurants.filter(res => res.info.rating.rating_text > 4);
            setListOfRestaurants(filterdList);
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {
          listOfRestaurants.map(restaurant => <RestaurantCard key = {restaurant.info.resId} resData = {restaurant}/>)
        }
      </div>
    </div>
  );
};

export default Body;