import React from "react";
import { userSessionAtom } from "./Login";
import { useAtom } from "jotai";
import { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
  const sessionData = useAtom(userSessionAtom)[0];
  console.log("sessionData from atom", sessionData);
  const [profileData, setProfileData] = useState([]);
  const [networkStatus, setNetworkStatus] = useState("pending");
  // console.log(networkStatus);
  console.log("api profileData", profileData)

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

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/api/profiles/`);
        setNetworkStatus("loading");
        setProfileData(response.data);
        setNetworkStatus("resolved");
      } catch (error) {
        console.log("error", error);
      }
    };
    getData();
  }, []);

  return (
    <>
    <div className="text-center text-white">click me</div>
      <div className="grid grid-cols-6 gap-10 text-white justify-items-center font-montserrat">
        <div className="col-start-2 col-span-4 text-5xl mb-10">
          Angeal Cheong
        </div>
      </div>
      <div className="grid grid-col-3 grid-flow-col text-white justify-items-center font-montserrat">
        <div className="image row-span-3 ml-10 ">
          <img
            src="https://tls.lasalle.edu.sg/sites/default/files/styles/portolio_profile_pic/public/2021-03/Angeal_opt_p.jpg?itok=nwk6FBJW"
            alt="blank"
          ></img>
        </div>
        <div className="statement col-span-3 ml-10 mr-10 leading-relaxed text-lg">
          {data.data.personal_statement}
        </div>
        <div className="grid grid-flow-col grid-col-3 space-y-36 ">
          <div className=" details row-span-2 col-span-2 ml-10 leading-loose ">
            <ul>
              <li>Height: {data.data.height} cm</li>
              {data.data.weight !== "" ? (
                <li>Weight: {data.data.weight} kg</li>
              ) : null}
              <li>
                Language:
                {data.data.language.map((e, i) => {
                  return (
                    <span className="capitalize" key={i}>
                      {" "}
                      {e},{" "}
                    </span>
                  );
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
                  {data.data.accents.map((e, i) => {
                    return (
                      <span className="capitalize" key={i}>
                        {" "}
                        {e},{" "}
                      </span>
                    );
                  })}
                </li>
              ) : null}
              {data.data.skills !== "" ? (
                <li>
                  Skills:
                  {data.data.skills.map((e, i) => {
                    return (
                      <span className="capitalize" key={i}>
                        {" "}
                        {e},{" "}
                      </span>
                    );
                  })}
                </li>
              ) : null}
            </ul>

            <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
              <a
                className="link"
                href="/facebook"
                data-tippy-content="@facebook_handle"
              >
                <svg
                  className="h-6 fill-current text-gray-600 hover:text-green-700"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Facebook</title>
                  <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
                </svg>
              </a>
              <a
                className="link"
                href="/twitter"
                data-tippy-content="@twitter_handle"
              >
                <svg
                  className="h-6 fill-current text-gray-600 hover:text-green-700"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Twitter</title>
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a
                className="link"
                href="/instagram"
                data-tippy-content="@instagram_handle"
              >
                <svg
                  className="h-6 fill-current text-gray-600 hover:text-green-700"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram</title>
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
              <a
                className="link"
                href="/youtube"
                data-tippy-content="@youtube_handle"
              >
                <svg
                  className="h-6 fill-current text-gray-600 hover:text-green-700"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <title>YouTube</title>
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                </svg>
              </a>
            </div>
            <div className="space-y-2 col-span-1 bg-center relative mx-10 mt-10 bottom-0">
              <div className="border-gold-light border-2 flex items-center p-2 rounded justify-between space-x-2">
                <div className="space-x-2 truncate">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current inline text-gray-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 5v12c0 2.757-2.243 5-5 5s-5-2.243-5-5v-12c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 .551-.449 1-1 1s-1-.449-1-1v-8h-2v8c0 1.657 1.343 3 3 3s3-1.343 3-3v-9c0-2.761-2.239-5-5-5s-5 2.239-5 5v12c0 3.866 3.134 7 7 7s7-3.134 7-7v-12h-2z" />
                  </svg>
                  <span>resume download</span>
                </div>
                <a
                  href="download/resume"
                  className="text-gold-light hover:underline"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
