import React from "react";
import { Header } from "./components/Header/Header";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [fetchData, setFetchData] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then((response) => response.json())
      .then((data) => setFetchData(data));
  }, []);

  return <div className="App">{fetchData && <Header data={fetchData} />}</div>;
}

export default App;
