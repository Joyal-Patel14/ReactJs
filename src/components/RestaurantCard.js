import {IMG_URL} from "../utils/constants";

const RestaurantCard = (props) => {
  const {resData} = props;

  const {name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla} = resData?.info;

  return (
    <div className="res-card m-4 p-4 w-[250px] bg-slate-100 rounded-lg hover:bg-slate-300">
      <img className="rounded-lg" src={IMG_URL + cloudinaryImageId} alt="Food image" />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.map((name) => name).join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;