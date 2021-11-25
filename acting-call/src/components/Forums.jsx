import React from "react";
import { userSessionAtom } from "./Login";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import axios from "axios";
import ForumThreads from "./ForumThreads";

function Forums() {
  const sessionData = useAtom(userSessionAtom)[0];
  const [networkStatus, setnetworkStatus] = useState("pending");
  const [forumData, setForumData] = useState();
  const [clickedThread, setClickThread] = useState();
  //   console.log("sessionData", sessionData);
  //   console.log("networkStatus", networkStatus);

  const axiosConfig = {
    baseURL: "https://actingcallbackend.herokuapp.com/",
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/api/forums/posts`, axiosConfig);
        setnetworkStatus("loading");
        // console.log("response.data", response.data)
        setForumData(response.data);
        setnetworkStatus("resolved");
      } catch (error) {
        console.log("error", error);
      }
    };
    getData();
  }, []);

  const handleClickForum = (e) => {
    setClickThread(e);
  };

  return (
    <>
      {networkStatus === "resolved" ? (
        <>
          <div className="text-center text-white grid grid-cols-3 bg-base grid-rows-3">
            <div className="col-span-1">
              {forumData.map((e) => {
                return (
                  <>
                    <div
                      className="bg-base border-2 max-w-lg p-10 col-span-2 my-8"
                      onClick={() => handleClickForum(e)}
                    >
                      <div className="rounded-t mb-0 px-6 py-6">
                        <div className="text-left mb-3">
                          <h6 className="text-yellow-200 text-3xl font-bold">
                            {e.title} 
                          </h6>
                        </div>
                        <div className="text-center"></div>
                        <hr className=" border-b-1 border-gray-400" />
                        <div className="text-right text-gray-300">
                          <medium>posted by: {e.postedUser}</medium>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="row-span-2 col-span-2 bg-base">
              <ForumThreads className="" forumData={clickedThread} />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Forums;
