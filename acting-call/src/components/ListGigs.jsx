import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import GigsCarousel from "./GigsCarousel";
import { Link } from "react-router-dom";
import LoadingBar from "./LoadingBar"



function ListGigs() {
    const [networkStatus, setnetworkStatus] = useState("pending");
    const [gigsData, setGigsData] = useState();
    // console.log("gigsData", gigsData)

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(`/api/casts/`);
            setnetworkStatus("loading");
            // console.log("response.data", response.data)
            setGigsData(response.data);
            setnetworkStatus("resolved");
          } catch (error) {
            console.log("error", error);
          }
        };
        getData();
      }, []);


  return (
    <>
      <div className="text-center">
      {networkStatus === "resolved" ? ( <div>
        <div className="firstDiv">
          <div className="mt-6">
            <div className="text-center">
              <Link to="/gigs/new" className="bg-gold-light text-gray-800 active:bg-gray-700 text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full">
                <button className="uppercase font-bold">Create new gig</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="secondDiv text-white">
        <div className="text-white">
          <GigsCarousel gigsData={gigsData} className="" />
        </div>
        </div>
      </div>): (<LoadingBar />)}
      
      </div>
    </>
  );
}

export default ListGigs;
