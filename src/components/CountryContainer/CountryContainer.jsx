import React from "react";
import "./country-container.scss";

export const CountryContainer = (data) => {
  const countries = data?.data;
  return (
    <div className="country">
      {countries.map((object, i) => (
        <div key={i} className="country-wrapper">
          <span className="country-name">COUNTRY: {object.name}</span>
          <span>Region: {object.region}</span>
          <span>Area: {object.area}km&sup2;</span>
        </div>
      ))}
    </div>
  );
};
