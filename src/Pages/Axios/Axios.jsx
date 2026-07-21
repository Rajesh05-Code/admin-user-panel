import axios from "axios";
import "./Axios.css";
import { useEffect } from "react";
import { useState } from "react";
import { getMovies } from "../../Services/GetService";

export const Axios = () => {
  // const API = //   "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1";
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      // const response = await axios.get(API);
      const response = await getMovies()
      setData(response.data.Search);
      console.log(response.data.Search);
      // console.log(response)
    } catch (error) {
      // console.log(error);
      console.log("error message :", error.message);
      console.log("error status :", error.response.status);
      console.log("error data :", error.response.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className="red">hello</h1>

      {/* {
   <ul className="movie-list">
    {data.map((currElm)=> <li key={currElm.imdbID}>{currElm.Title}</li>)}
   </ul>
  } */}

      {
        <ul className="container grid grid-four--cols">
          {data.map((currElm) => {
            return <Card key={currElm.imdbID} movieData ={currElm} />;
          })}
        </ul>
      }
    </>
  );
};

import "./Card.css";

/* eslint-disable react/prop-types */

export const Card = ({ movieData }) => {
  const  {Poster,imdbID} =movieData
  return (
    <li className="hero-container">
      <div className="main-container">
        <div className="poster-container">
          <img
            src={Poster}
            className="poster"
            alt={imdbID}
          />
        </div>

        <div className="ticket-container">
          <div className="ticket__content">
            <a href={`/movie/${imdbID}`}>
              <button className="ticket__buy-btn">
                Watch now
              </button>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};









