import React, { useState } from "react";
import "./App.css";
import Search from "../Search/Search";
import Ad from "../Ads/Ads";

const SEARCH_API_URL = "http://localhost:5000/api/search"; // you should replace this with yours

const App = () => {
  const [ads, setAds] = useState([]);

  //fetch data
  const search = async (searchValue) => {
    const response = await fetch(`${SEARCH_API_URL}`, {
      method: "POST",
      mode: "cors",
      body: searchValue,
    });
    setAds(await response.json());
  };

  return (
    <div className="App">
      <Search search={search} />
      <div className="ad_container">
        {ads.map((adData, index) => (
          <Ad key={index} ad={adData} />
        ))}
      </div>
    </div>
  );
};

export default App;
