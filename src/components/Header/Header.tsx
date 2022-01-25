import React from "react";
import "./header.scss";
import { CountryContainer } from "../CountryContainer/CountryContainer";
import { Pagination } from "../Pagination/Pagination";
import { useState,useEffect } from "react";

interface Props {
  data: any, 
}

export const Header:React.FC<Props> = (data) => {
  const countries = data?.data;
  const [value, setValue] = useState([] as any);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
 
  //buttons
  const filterOceania = countries.filter(
    (object:any) => object.region === "Oceania"
  );
  const filterAreaByLT = countries.filter((region:any) => region.area < 65300.0);

  const sortAscending = () => {
    return setValue(countries.sort((a:any, b:any) => a.name.localeCompare(b.name)));
  };

  const sortDescending = () => {
    return setValue(countries.sort((a:any, b:any) => b.name.localeCompare(a.name)));
  };

  /// pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = value?.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber:number) => setCurrentPage(pageNumber);

 useEffect(() =>{
   setValue(sortAscending)
      // eslint-disable-next-line react-hooks/exhaustive-deps
 },[])

 useEffect(() =>{
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  value.length < 120 ? setCurrentPage(1) : null;
     // eslint-disable-next-line react-hooks/exhaustive-deps
},[value])

  return (
    <div className="menu">
      <div className="menu__wrapper">
        <h1 className="menu__name">Number of results: {value?.length}</h1>
        <span>You are currently on #{currentPage} page</span>
      </div>
      <div className="Pagination">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={value?.length}
          paginate={paginate}
        />
      </div>
      <div className="btns">
        <div className="btns__alphabetical">
          {countries[0].name[0] === "Z" ? (
            <button onClick={() => setValue(sortAscending)}>from A to Z</button>
          ) : (
            <button onClick={() => setValue(sortDescending)}>from Z to A</button>
          )}
        </div>
        <div className="btns__filtering">
          <button onClick={() => setValue(filterOceania)}>Oceania</button>
          <button onClick={() => setValue(filterAreaByLT)}>
            lessThanLithuania
          </button>
        </div>
      </div>
      <CountryContainer data={currentPosts} />
    </div>
  );
};
