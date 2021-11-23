import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import GigsCarousel from "./GigsCarousel";
import { Link } from "react-router-dom";


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
        <div className="firstDiv">
          <div className="mt-6">
            <div className="text-center">
              <Link to="/gigs/new" className="bg-gold-light text-gray-800 active:bg-gray-700 text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full">
                <button className="uppercase font-bold">Create new gig</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="secondDiv text-white my-6">

        </div>
        <div className="thirdDiv text-white">
        <div className="text-white">
            {networkStatus === "resolved" ? ( <GigsCarousel gigsData={gigsData} className="" />): (<h1>loading</h1>)}
        </div>
        </div>
      </div>
    </>
  );
}

export default ListGigs;
