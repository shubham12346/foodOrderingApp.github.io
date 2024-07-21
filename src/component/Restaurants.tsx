import React from "react";
import { useNavigate } from "react-router-dom";

const url = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/`;
const cloudId = "e0839ff574213e6f35b3899ebf1fc597";
const Restaurants = (props) => {
  const { name, rating, time, type, location, imageUrl, id } = props.restaurant;
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div className="restaurantCard" onClick={() => handleNavigate(id)}>
      <img src={imageUrl} alt="" className="cardImg" />
      <h2>{name}</h2>
      <h3>
        <span>*</span>
        {rating}
        <span>.</span>
        <span>{time}</span>
      </h3>
      <h4>{type}</h4>
      <h4>{location}</h4>
    </div>
  );
};

export default Restaurants;