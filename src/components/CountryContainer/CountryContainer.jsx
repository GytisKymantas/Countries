import React from "react";
import "./country-container.scss";

export const CountryContainer = (data) => {
  const countries = data?.data;
  // console.log(countries);
  return (
    <div className="country">
      {countries.map((object, i) => (
        <div key={i} className="country-wrapper">
          <span>{object.name}</span>
          <span>{object.region}</span>
          <span>{object.area}</span>
          <span>#{i + 1}</span>
        </div>
      ))}
    </div>
  );
};
