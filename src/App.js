import React from "react";
import { CountryContainer } from "./components/CountryContainer/CountryContainer";
import { SortButton } from "./components/SortButton/SortButton";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [fetchData, setFetchData] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then((response) => response.json())
      .then((data) => setFetchData(data));
  }, []);

  return (
    <div className="App">
      {fetchData && <SortButton data={fetchData} />}
      {fetchData && <CountryContainer data={fetchData} />}
    </div>
  );
}

export default App;
