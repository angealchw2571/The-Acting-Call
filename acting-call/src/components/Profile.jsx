import React from "react";
import { userSessionAtom } from "./Login";
import { useAtom } from "jotai";
import { Link, useParams } from "react-router-dom";
import ProfileElements from "./ProfileElements";

function Profile(props) {
  const action = props.action
  const { username } = useParams();
  const sessionData = useAtom(userSessionAtom)[0];

  const data = {
    data: {
      name: "angeal cheong",
      height: 175,
      display_pic:
        "https://tls.lasalle.edu.sg/sites/default/files/styles/portolio_profile_pic/public/2021-03/Angeal_opt_p.jpg?itok=nwk6FBJW",
      language: ["english", "mandarin"],
      contact: "+65 81818181",
      personal_statement: `Angeal is a theatre practitioner based in Singapore. He started his
        journey as a stage manager and worked in various productions such as
        Sometime Moon (dir. Goh Boon Teck) by Toy Factory, A Dream Under The
        Southern Bough (dir. Goh Boon Teck) by Toy Factory and The Moon Is
        Less Bright (dir. Adeeb Fazah) by The Second Breakfast Company. In
        recent years, he has been pursuing a Bachelor’s degree in Acting at
        LASALLE College of the Arts to expand his craft. Presently, he is
        exploring the uncanny and horror genre in theatre. Angeal believes in
        pushing artistic boundaries in theatrical staging and hopes to direct
        shows in the future.`,
      weight: 100,
      hair_color: "black",
      eye_color: "black",
      accents: ["UK", "US", "Malaysian Mandarin"],
      skills: ["dragon boater", "rugby", "boxing"],
      playing_age_min: 25,
      playing_age_max: 35,
      links: ["https://youtu.be/7v1BpX4Awxk", "https://youtu.be/o0mMESjNHcE"],
      education: [
        "LASALLE College of The Arts",
        "Phillippe Gaulier Clowning School",
      ],
    },
  };

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
