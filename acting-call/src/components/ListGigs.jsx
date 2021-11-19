import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";


function ListGigs() {
    const [status, setStatus] = useState("pending");
    const [gigsData, setGigsData] = useState();
    console.log("status")
    console.log("gigsData", gigsData)

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(`/api/casts/`);
            setStatus("loading");
            console.log("response.data", response.data)
            setGigsData(response.data);
            setStatus("resolved");
          } catch (error) {
            console.log("error", error);
          }
        };
        getData();
      }, []);


  return (
    <>
      <div>
        <div className="firstDiv">
          <div className="mt-6">
            <div className="text-center">
              <a href="/gigs/new" className="text-black bg-gray-200">
                <medium>Create new gig</medium>
              </a>
            </div>
          </div>
        </div>
        <div className="secondDiv text-white">
            <h1>{status}</h1>
        </div>
      </div>
    </>
  );
}

export default ListGigs;
