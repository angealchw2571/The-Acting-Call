import React from "react";
import axios from "axios";
import { userSessionAtom } from "./Login";
import { useAtom } from "jotai";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
require("dotenv").config();

function EditProfile() {
  const sessionData = useAtom(userSessionAtom)[0];
  const URI = process.env.REACT_APP_URI;
  const [profileData, setProfileData] = useState([]);
  const [networkStatus, setNetworkStatus] = useState("pending");

  const notify = () =>
    toast.success("Success!!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const axiosConfig = {
    headers: {
      Authorization: "Bearer " + sessionData.token.access,
    },
    baseURL: URI,
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `/api/profiles/${sessionData.username}/`,
          axiosConfig
        );
        setNetworkStatus("loading");
        setProfileData(response.data);
        setNetworkStatus("resolved");
      } catch (error) {
        console.log("error", error);
      }
    };
    getData();
  }, []);

  const handleApi = async (newData) => {
    await axios
      .put(`/api/profiles/${sessionData.username}/`, newData, axiosConfig)
      .then((res) => {
        console.log("res.data", res.data);
        notify();
      })
      .catch(function (error) {
        console.log(error);
        setNetworkStatus("error");
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      height: event.target.height.value,
      weight: event.target.weight.value,
      displayPicture: event.target.displayPicture.value,
      language: [event.target.language.value],
      gender: event.target.gender.value,
      contact: event.target.contact.value,
      personalStatement: event.target.personalStatement.value,
      hairColor: event.target.hairColor.value,
      eyeColor: event.target.eyeColor.value,
      accents: [event.target.accents.value],
      skills: [event.target.skills.value],
      playAgeMin: event.target.playAgeMin.value,
      playAgeMax: event.target.playAgeMax.value,
      links: event.target.links.value,
      education: event.target.education.value,
      username: sessionData.username,
      email: sessionData.email,
      accountLinked: sessionData.id,
    };
    handleApi(formData);
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="grid grid-cols-1  text-white justify-items-center">
        <form
          className="grid-cols-12 col-span-1 flex gap-4 text-white max-w-lg"
          onSubmit={handleSubmit}
        >
          <div className="firstDiv col-span-4 ">
            <div className="flex flex-wrap max-w-md">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-white text-xs font-bold mb-2">
                  Name
                </label>
                <input
                  name="name"
                  className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Full Name"
                  defaultValue={profileData.name}
                />
              </div>
              <div className="relative w-full mb-3">
                <label className="block uppercase text-white text-xs font-bold mb-2">
                  Height (cm)
                </label>
                <input
                  name="height"
                  type="number"
                  min="1"
                  className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Height"
                  defaultValue={profileData.height}
                />
              </div>
              <div className="relative w-full mb-3">
                <label className="block uppercase text-white text-xs font-bold mb-2">
                  Weight (kg) (optional)
                </label>
                <input
                  name="weight"
                  type="number"
                  min="1"
                  className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Weight"
                  defaultValue={profileData.weight}
                />
              </div>
              <div className="relative w-full mb-3">
                <label className="block uppercase text-white text-xs font-bold mb-2">
                  Display Picture
                </label>
                <input
                  name="displayPicture"
                  className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Display Picture (url)"
                  defaultValue={profileData.displayPicture}
                />
              </div>
              <div className="relative w-full mb-3">
                <label className="block uppercase text-white text-xs font-bold mb-2">
                  Language
                </label>
                <select
                  name="language"
                  className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                  defaultValue={profileData.language}
                >
                  <option value="English">English</option>
                  <option value="Mandarin">Mandarin</option>
                  <option value="Malay">Malay</option>
                  <option value="Tamil">Tamil</option>
                </select>
              </div>
              <div className="relative w-full mb-3">
                <label className="block uppercase text-white text-xs font-bold mb-2">
                  Gender
                </label>
                <select
                  name="gender"
                  className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                  defaultValue={profileData.gender}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="relative w-full mb-3">
                <label className="block uppercase text-white text-xs font-bold mb-2">
                  Contact Email
                </label>
                <input
                  name="contact"
                  className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Contact Email"
                  defaultValue={profileData.contact}
                />
              </div>
              <div className="relative w-full mb-3">
                <label className="block uppercase text-white text-xs font-bold mb-2">
                  Personal Statement
                </label>
                <input
                  name="personalStatement"
                  className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Personal Statement"
                  defaultValue={profileData.personalStatement}
                />
              </div>

              <div className="text-center mt-6">
                <button
                  className="bg-gold-light text-gray-800 active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                  type="submit"
                  style={{ transition: "all .15s ease" }}
                >
                  Update your profile
                </button>
              </div>
            </div>
          </div>
          <div className="secondDiv col-span-4">
            <div className="flex flex-wrap max-w-md">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-white text-xs font-bold mb-2">
                  Hair Color
                </label>
                <input
                  name="hairColor"
                  className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Hair Color"
                  defaultValue={profileData.hairColor}
                />
              </div>
              <div className="relative w-full mb-3">
                <label className="block uppercase text-white text-xs font-bold mb-2">
                  Eye Color
                </label>
                <input
                  name="eyeColor"
                  className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Eye Color"
                  defaultValue={profileData.eyeColor}
                />
              </div>
              <div className="relative w-full mb-3">
                <label className="block uppercase text-white text-xs font-bold mb-2">
                  Accents
                </label>
                <input
                  name="accents"
                  className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Accents"
                  defaultValue={profileData.accents}
                />
              </div>
              <div className="relative w-full mb-3">
                <label className="block uppercase text-white text-xs font-bold mb-2">
                  Skills
                </label>
                <input
                  name="skills"
                  className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Skills"
                  defaultValue={profileData.skills}
                />
              </div>
              <div className="relative w-full mb-3">
                <label className="block uppercase text-white text-xs font-bold mb-2">
                  Playing Age Min
                </label>
                <input
                  name="playAgeMin"
                  type="number"
                  min="1"
                  className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Playing Age Minimum"
                  defaultValue={profileData.playAgeMin}
                />
              </div>
              <div className="relative w-full mb-3">
                <label className="block uppercase text-white text-xs font-bold mb-2">
                  Playing Age Max
                </label>
                <input
                  name="playAgeMax"
                  type="number"
                  max="120"
                  className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Playing Age Maximum"
                  defaultValue={profileData.playAgeMax}
                />
              </div>
            </div>
            <div className="flex flex-wrap max-w-md">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-white text-xs font-bold mb-2">
                  Showreel
                </label>
                <input
                  name="links"
                  className="border-0 px-3 py-3 placeholder-white text-gray-100 bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Showreel Link"
                  defaultValue={profileData.links}
                />
              </div>
            </div>
            <div className="flex flex-wrap max-w-md">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-white text-xs font-bold mb-2">
                  Education
                </label>
                <input
                  name="education"
                  className="border-0 px-3 py-3 placeholder-white text-gray-100 bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Education"
                  defaultValue={profileData.education}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditProfile;
