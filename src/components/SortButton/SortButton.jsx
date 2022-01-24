import React from "react";
import "./sort-button.scss";

export const SortButton = (data) => {
  let stuff = data.data;

  const sortAscending = () => {
    return console.log(stuff.sort((a, b) => a.name.localeCompare(b.name)));
  };

  const sortDescending = () => {
    return console.log(stuff.sort((a, b) => b.name.localeCompare(a.name)));
  };

  //   console.log(stuff.sort((a, b) => a.name.localeCompare(b.name)));

  //   const sortData = (data) => {
  //     const stuff = data;
  //     stuff.sort((a, b) => a.name.localeCompare(b.name));

  //     return console.log(stuff);
  //   };

  return (
    <div className="btn">
      <button onClick={sortAscending}>SortAscending</button>
      <button onClick={sortDescending}>SortDescending</button>
    </div>
  );
};
