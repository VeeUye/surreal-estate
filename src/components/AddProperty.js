import React, { useState } from "react";
// import axios from "axios";
import postProperty from "../requests/postProperty";
import "../styles/add-property.css";
import Alert from "./Alert";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [alert, setAlert] = useState(initialState.alert);

  // eslint-disable-next-line no-unused-vars
  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    postProperty(fields, setAlert);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="background" />
      <div className="add-property">
        <Alert message={alert.message} success={alert.isSuccess} />
        <h3 className="page-header">Add Property Details</h3>
        <form onSubmit={handleAddProperty}>
          {" "}
          <div className="outer-input">
            <label htmlFor="title">
              TITLE
              <input
                id="title"
                type="text"
                name="title"
                value={fields.title}
                placeholder="2 bed flat"
                onChange={handleFieldChange}
              />
            </label>
          </div>
          <div className="split-outer-input">
            <div className="city-dropdown">
              <label htmlFor="city">
                CITY
                <select
                  id="city"
                  type="text"
                  name="city"
                  value={fields.city}
                  onChange={handleFieldChange}
                >
                  <option value="Manchester">Manchester</option>
                  <option value="Leeds">Leeds</option>
                  <option value="Sheffield">Sheffield</option>
                  <option value="Liverpool">Liverpool</option>
                </select>
              </label>
            </div>
            <span className="span-divider" />

            <div className="type-dropdown">
              <label htmlFor="type">
                TYPE
                <select
                  id="type"
                  type="text"
                  name="type"
                  value={fields.type}
                  onChange={handleFieldChange}
                >
                  <option value="Flat">Flat</option>
                  <option value="Detached">Detached</option>
                  <option value="Semi-Detached">Semi-Detached</option>
                  <option value="Terraced">Terraced</option>
                  <option value="End of Terrace">End of Terrace</option>
                  <option value="Cottage">Cottage</option>
                  <option value="Bungalow">Bungalow</option>
                </select>
              </label>
            </div>
          </div>
          <div className="split-outer-input">
            <label htmlFor="bedrooms">
              BEDS
              <input
                id="bedrooms"
                type="number"
                name="bedrooms"
                value={fields.bedrooms}
                placeholder="1"
                onChange={handleFieldChange}
              />
            </label>
            <span className="divider" />
            <label htmlFor="bathrooms">
              BATHS
              <input
                id="bathrooms"
                type="number"
                name="bathrooms"
                value={fields.bathrooms}
                placeholder="2"
                onChange={handleFieldChange}
              />
            </label>
            <span className="divider" />
            <label htmlFor="price">
              PRICE
              <input
                id="price"
                type="number"
                name="price"
                value={fields.price}
                placeholder="£1485"
                onChange={handleFieldChange}
              />
            </label>
          </div>
          <div className="outer-input">
            <label htmlFor="email">
              EMAIL
              <input
                id="email"
                type="email"
                name="email"
                value={fields.email}
                placeholder="zoopla.clone@rightmove.com"
                onChange={handleFieldChange}
              />
            </label>
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default AddProperty;
