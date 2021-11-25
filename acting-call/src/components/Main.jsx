import React from "react";
import Item from "./Item";
import axios from "axios";
import LoadingBar from "./LoadingBar";
import Carousel from "react-elastic-carousel";
import { useEffect, useState } from "react";
require("dotenv").config();

function Main() {
  const [networkStatus, setnetworkStatus] = useState("pending");
  const [gigsData, setGigsData] = useState();
  const URI = process.env.REACT_APP_URI

  const axiosConfig = {
    baseURL: URI,
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/api/casts/`, axiosConfig);
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
      {networkStatus === "resolved" ? (
        <div>
          <div className="grid grid-cols-2 gap-20 justify-items-center">
            <div className="text-white text-3xl font-montserrat mt-16">
              Welcome to the{" "}
              <span className="text-yellow-200 font-montserrat">
                {" "}
                Acting Call{" "}
              </span>
              <div className="h-70 grid grid-rows-1 grid-flex-col gap-4 mt-4">
                <div className="text-sm py-5 text-white max-w-sm leading-loose ">
                  Here you will find a variety of casting calls all over
                  Singapore.
                  <p>
                    {" "}
                    We aim to provide you the most up to date listings from
                    respected production companies based in Singapore. You may visit the forums to socialise with our members.
                  </p>{" "}
                  Find your next gig here
                </div>
                <div>
                  <a href="/about">
                    <button className="text-xs text-white bg-transparent border-2 rounded-full py-2 px-4 cursor-default hover:bg-gray-600 transition duration-500 ease-in-out flex items-center animate-pulse">
                      Find out more
                    </button>
                  </a>
                </div>
                <div className="">
                  <Carousel enableAutoPlay={true} autoPlaySpeed={5000}>
                    {gigsData.map((e) => (
                      <Item key={e.type}>
                        <div className="capitalize text-center">{e.role}<span className="flex capitalize text-center">{e.platform}</span></div>
                      </Item>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://i.pinimg.com/originals/b8/8b/ee/b88beeca66aaf99e2126a9bf76799634.jpg"
                alt="blank"
              />
            </div>
          </div>
        </div>
      ) : (<LoadingBar/>)}
    </>
  );
}

export default Main;
