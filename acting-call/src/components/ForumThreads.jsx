import React from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import ForumComments from "./ForumComments";

function ForumThreads(props) {
  const navigate = useNavigate();
  const forumData = props.forumData;

  const handleClick = () => {
    navigate(`/forums/posts/${forumData.id}/new`);
  }
  return (
    <>
      {forumData !== undefined ? (
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg bg-base border-2">
            <div className="rounded-t mb-0 px-6 py-6">
              <div
                onClick={handleClick}
                className="bg-gold-light absolute right-6 text-gray-800 text-sm px-3 py-2 rounded shadow"
              >
                <button className="uppercase font-bold">Create New Post</button>
              </div>
              <div className="text-center mb-3">
                <h6 className="text-yellow-200 text-3xl font-bold">
                  {forumData.title}
                </h6>
              </div>
              <hr className=" border-b-1 mt-4 border-gray-400" />
              <div className="text-center text-gray-300">
                <small>posted by: {forumData.postedUser}</small>
              </div>
            </div>
            <div className="threadPanel">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="relative w-full mb-7 ">
                  <label className="block uppercase text-white text-sm font-bold mb-2 text-left">
                    Description
                  </label>
                  <div className="border-0 px-3 py-7 text-white bg-gray-400 rounded text-lg shadow text-left ">
                    {forumData.description}
                  </div>
                </div>
                <div className="relative w-full mb-1">
                  <label className="block uppercase text-white text-xs font-bold mb-2 text-right">
                    Date posted:{" "}
                    {format(new Date(forumData.date_created), "MMMM do, yyyy")}
                  </label>
                </div>
              </div>
            </div>

            <ForumComments forumData={forumData} />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ForumThreads;
