const RestaurantCard = (props) => {
  const {resData} = props;

  const {name, image, cuisine, rating, cft} = resData?.info;
  const {deliveryTime} = resData?.order;

  return (
    <div className="res-card">
      <img className="res-logo" src={image.url} alt="Food image" />
      <h3>{name}</h3>
      <h4>{cuisine.map((obj => obj.name)).join(", ")}</h4>
      <h4>{rating.rating_text + " " + rating.rating_subtitle}</h4>
      <h4>{cft.text}</h4>
      <h4>{deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaurantCard;