import React from "react";
import "./header.scss";
import { CountryContainer } from "../CountryContainer/CountryContainer";
import { useState } from "react";

export const Header = (data) => {
  const [value, setValue] = useState(null);

  const filterOceania = data?.data.filter(
    (object) => object.region === "Oceania"
  );
  const filterAreaByLT = data?.data.filter((object) => object.area < 65300.0);

  const sortAscending = () => {
    let stuff = data?.data;
    return setValue(stuff.sort((a, b) => a.name.localeCompare(b.name)));
  };

  const sortDescending = () => {
    let stuff = data?.data;
    return setValue(stuff.sort((a, b) => b.name.localeCompare(a.name)));
  };

  return (
    <div className="menu">
      <div className="menu-header">
        <h1>Number of results: {value?.length}</h1>
      </div>
      <button onClick={() => setValue(filterOceania)}>Oceania</button>
      <button onClick={() => setValue(filterAreaByLT)}>SmallerThanLT</button>
      <div>
        <button onClick={() => setValue(sortAscending)}>SortAscending</button>
        <button onClick={() => setValue(sortDescending)}>SortDescending</button>
      </div>
      {value && <CountryContainer data={value} />}
    </div>
  );
};
