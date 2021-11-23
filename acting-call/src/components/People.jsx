import React from 'react'
import ActorCarousel from "./ActorCarousel"
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingBar from "./LoadingBar"





function People() {
    // console.log("actorData", ActorData)
    const [networkStatus, setnetworkStatus] = useState("pending");
    const [actorsData, setActorsData] = useState();

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(`/api/profiles/`);
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
        {networkStatus === "resolved" ? (<div className="text-4xl mb-6">
                <span>Singapore Actors</span>
            </div>) : null }
            {networkStatus === "resolved" ? (<ActorCarousel props={actorsData} />) : (<LoadingBar />) }
        </div>
        </>
    )
}

export default People
