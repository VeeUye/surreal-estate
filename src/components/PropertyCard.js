import React from "react";
import { BiBuildingHouse } from "react-icons/bi";
// import HouseFront from "../assets/images/house-front.jpg";

// import PropTypes from "prop-types";
import "../styles/property-card.css";

const PropertyCard = () => {
  return (
    <div className="property-card">
      <div className="property-card__header">
        <BiBuildingHouse className="property-card__logo" />
      </div>
      <div className="property-card__details">
        <h2 className="property-card__details property-card__details__h">
          Title
        </h2>
        <p className="property-card__details property-card__details__p">
          Type - Location
        </p>
        <p className="property-card__details property-card__details__p">
          Baths
        </p>
        <p className="property-card__details property-card__details__p">Beds</p>
        <p className="property-card__details property-card__details__p">
          Price
        </p>
      </div>
      <button type="button" className="property-card__button">
        Email
      </button>

      {/* <img
        className="property-card property-card__img"
        src={HouseFront}
        alt="interior of bedroom 2"
      /> */}
    </div>
  );
};

export default PropertyCard;
