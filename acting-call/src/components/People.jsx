import React from "react";
import axios from "axios";
import LoadingBar from "./LoadingBar";
import ActorCarousel from "./ActorCarousel";
import { useEffect, useState } from "react";
require("dotenv").config();

function People() {
  const URI = process.env.REACT_APP_URI
  const [networkStatus, setnetworkStatus] = useState("pending");
  const [actorsData, setActorsData] = useState();
  

  const axiosConfig = {
    baseURL: URI,
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/api/profiles/`, axiosConfig);
        setnetworkStatus("loading");
        // console.log("response.data", response.data)
        setActorsData(response.data);
        setnetworkStatus("resolved");
      } catch (error) {
        console.log("error", error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="text-white text-center font-montserrat">
        {networkStatus === "resolved" ? (
          <div className="text-4xl mb-6">
            <span>Singapore Actors</span>
          </div>
        ) : null}
        {networkStatus === "resolved" ? (
          <ActorCarousel props={actorsData} />
        ) : (
          <LoadingBar />
        )}
      </div>
    </>
  );
}

export default People;
