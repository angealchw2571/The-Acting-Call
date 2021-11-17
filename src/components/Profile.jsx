import React from "react";

function Profile() {
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
      <div className="grid grid-cols-6 gap-10 text-white justify-items-center font-montserrat">
        <div className="col-start-2 col-span-4 text-5xl mb-10">Angeal Cheong</div>
      </div>
      <div className="grid grid-rows-3 grid-flow-col text-white justify-items-center font-montserrat">
        <div className="row-span-3 ml-10">
          <img
            src="https://tls.lasalle.edu.sg/sites/default/files/styles/portolio_profile_pic/public/2021-03/Angeal_opt_p.jpg?itok=nwk6FBJW"
            alt="blank"
          ></img>
        </div>
        <div className="col-span-3 ml-10 mr-10 leading-relaxed text-lg">
          {data.data.personal_statement}
        </div>
        <div className="row-span-2 col-span-2 ml-10 leading-loose">
          <ul>
            <li>Height: {data.data.height} cm</li>
            {data.data.weight !== "" ? (
              <li>Weight: {data.data.weight} kg</li>
            ) : null}
            <li>
              Language:
              {data.data.language.map((e,i) => {
                return <span className="capitalize" key={i}> {e}, </span>;
              })}
            </li>
            <li>Contact: {data.data.contact}</li>
            {data.data.hair_color !== "" ? (
              <li>Hair Color: {data.data.hair_color}</li>
            ) : null}
            {data.data.eye_color !== "" ? (
              <li>Eye Color: {data.data.eye_color}</li>
            ) : null}
            {data.data.accents !== "" ? (
              <li>
                Accents:
                {data.data.accents.map((e,i) => {
                  return <span className="capitalize" key={i}> {e}, </span>;
                })}
              </li>
            ) : null}
            {data.data.skills !== "" ? (
              <li>
              Skills:
              {data.data.skills.map((e,i) => {
                return <span className="capitalize" key={i}> {e}, </span>;
              })}
            </li>
            ) : null}
            
          </ul>
        </div>
      </div>
    </>
  );
}

export default Profile;
