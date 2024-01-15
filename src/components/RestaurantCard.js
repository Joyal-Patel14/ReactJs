import {IMG_URL} from "../utils/constants";

const RestaurantCard = (props) => {
  const {resData} = props;

  const {name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla} = resData?.info;

  return (
    <div className="res-card">
      <img className="res-logo" src={IMG_URL + cloudinaryImageId} alt="Food image" />
      <h3>{name}</h3>
      <h4>{cuisines.map((name) => name).join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;