import React, { useEffect, useState } from "react";
import Feature from "../../components/featured/Feature";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import "./home.scss";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjFjOWRjYmEwZTA5ZDNhYmFhNDFkZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjQyMzUwNywiZXhwIjoxNjQ2ODU1NTA3fQ.kwleeUu7FpkCcBCcvw_NQ8LLxql34S8k8ADSDJfKOUM",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Feature type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
