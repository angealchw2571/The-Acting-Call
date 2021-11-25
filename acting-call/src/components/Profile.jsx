import React from "react";
import { userSessionAtom } from "./Login";
import { useAtom } from "jotai";
import { Link, useParams } from "react-router-dom";
import ProfileElements from "./ProfileElements";

function Profile(props) {
  const action = props.action
  const { username } = useParams();
  const sessionData = useAtom(userSessionAtom)[0];


  return (
    <>
      {props.action === "view" ? null : (
        <div className="text-right text-white">
          <Link
            to={
              sessionData.profiles === null
                ? "/profile/new"
                : `/profile/${sessionData.id}/edit`
            }
            className="bg-gold-light text-gray-800 active:bg-gray-700 text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
          >
            <button className="uppercase font-bold">
              {sessionData.profiles === null
                ? "Create New Profile"
                : "Edit Profile"}
            </button>
          </Link>
        </div>
      )}

      {sessionData.profiles === null ? (
        <h1 className="text-center text-white">It seems you do not have a profile. Please create one.</h1>
      ) : (<ProfileElements props={username} action={action}/>)}
      
    </>
  );
}

export default Profile;
