import React from "react";
import "./style.scss";

export const Home = () => {
    return (
      <div className="container-div">
        <a href="/add-edit-ship"> Add a Ship</a>
        <a href="/ships-listing"> See all Ships</a>
      </div>
    );
}
