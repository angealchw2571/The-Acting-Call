import React from "react";
import { format } from "date-fns";

function ForumComments(props) {
  const forumData = props.forumData;

  return (
    <>
      {forumData.comments[0] !== undefined ? (
        <>
          <div>
            <div className="text-center mb-3">
              <h6 className="text-white text-2xl font-bold">Comments</h6> 
            </div>
            <div className="text-center mb-7">
              <hr className=" border-b-1 border-gray-400" />
            </div>
            
            {forumData.comments.map((e, i) => {
              return (
                <div key={i} className="threadPanel">
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="relative w-full mb-7 ">
                      <label className="block uppercase text-white text-sm font-bold mb-2 text-left">
                        {e.commentTitle}
                      </label>
                      <div className="border-0 px-3 py-7 text-white bg-gray-400 rounded text-lg shadow text-left ">
                        {e.comments}
                      </div>
                    </div>

                    <div className="relative w-full mb-7">
                      <label className="block uppercase text-white text-xs font-bold mb-2 text-right">
                        Posted by: {e.commentUser}
                      </label>
                      <label className="block uppercase text-white text-xs font-bold mb-2 text-right">
                        Date posted:{" "}
                        {format(new Date(e.date_created), "MMMM do, yyyy")}
                      </label>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : null}
    </>
  );
}

export default ForumComments;
