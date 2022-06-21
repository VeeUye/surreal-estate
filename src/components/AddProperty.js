import React, { useState } from "react";
import "../styles/add-property.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
    },
  };

  // eslint-disable-next-line no-unused-vars
  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Title
          <input
            id="title"
            type="text"
            name="title"
            value={fields.title}
            placeholder="2 bed flat"
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="city">
          City
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
        <label htmlFor="type">
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
        <label htmlFor="bedrooms">
          Beds
          <input
            id="bedrooms"
            type="number"
            name="bedrooms"
            value={fields.bedrooms}
            placeholder="1"
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="bathrooms">
          Baths
          <input
            id="bathrooms"
            type="number"
            name="bathrooms"
            value={fields.bathrooms}
            placeholder="2"
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            id="price"
            type="number"
            name="price"
            value={fields.price}
            placeholder="1485"
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="email">
          email
          <input
            id="email"
            type="email"
            name="email"
            value={fields.email}
            placeholder="zoopla.clone@rightmove.com"
            onChange={handleFieldChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
