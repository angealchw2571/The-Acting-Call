import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import GigsCarousel from "./GigsCarousel";


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
              <a href="/gigs/new" className="text-black bg-gray-200">
                <button>Create new gig</button>
              </a>
            </div>
          </div>
        </div>
        <div className="secondDiv text-white">
            <h1>networkStatus: {networkStatus}</h1>
        </div>
        <div className="thirdDiv text-white">
        <div className="text-white">
            {/* <ul>
            {networkStatus === "resolved" ? (gigsData.map((e,i)=> {
                return (
                <>
                <li>{e.platform}</li>
                </>
                )
            })): null}
            </ul> */}
            <GigsCarousel />
        </div>
        </div>
      </div>
    </>
  );
}

export default ListGigs;
