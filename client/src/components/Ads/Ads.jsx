import React from "react";
import "./Ads.css";

const Ads = ({ ad }) => {
  return (
    <div className="ad" style={{ backgroundImage: `url(${ad.imageUrl})` }}>
      <h1>{ad.primaryText}</h1>
      <h3>{ad.headline}</h3>
      <p>{ad.description}</p>
      <button>{ad.CTA}</button>
    </div>
  );
};

export default Ads;
