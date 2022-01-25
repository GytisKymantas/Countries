import React from "react";
import "./country-container.scss";

interface Props {
  data: any
}

export const CountryContainer:React.FC<Props> = (data) => {
  const countries = data?.data;
  return (
    <div className="country">
      {countries.map((country:any, i:any) => (
        <div key={i} className="country-wrapper">
          <span className="country-name">COUNTRY: {country.name}</span>
          <span>Region: {country.region}</span>
          <span>Area: {country.area}km&sup2;</span>
        </div>
      ))}
    </div>
  );
};
