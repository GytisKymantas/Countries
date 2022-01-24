import React from "react";
import "./header.scss";
import { CountryContainer } from "../CountryContainer/CountryContainer";
import { Pagination } from "../Pagination/Pagination";
import { useState } from "react";

export const Header = (data) => {
  const [value, setValue] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  // const [posts, setPosts] = useState([]);

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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = value?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="menu">
      <div className="menu-header">
        <h1>Number of results: {value?.length}</h1>
      </div>
      <div className="Pagination">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={value?.length}
          paginate={paginate}
        />
      </div>
      <div className="btns">
        <div className="ascending">
          <button onClick={() => setValue(sortAscending)}>SortAscending</button>
          <button onClick={() => setValue(sortDescending)}>
            SortDescending
          </button>
        </div>
        <div className="filtering">
          <button onClick={() => setValue(filterOceania)}>Oceania</button>
          <button onClick={() => setValue(filterAreaByLT)}>
            SmallerThanLT
          </button>
        </div>
      </div>
      {value && <CountryContainer data={currentPosts} />}
    </div>
  );
};
