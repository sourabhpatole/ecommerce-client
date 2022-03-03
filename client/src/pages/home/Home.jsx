import React from "react";
import Feature from "../../components/featured/Feature";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Feature type="series" />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
