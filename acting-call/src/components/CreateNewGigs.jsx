import React from "react";
import axios from "axios";
import { userSessionAtom } from "./Login";
import { useAtom } from "jotai";
import { ToastContainer, toast } from "react-toastify";


function CreateNewGigs() {
  const sessionData = useAtom(userSessionAtom)[0];
  console.log("sessionData from atom", sessionData);

  const notify = () =>
    toast.success("Success!", {
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
      baseURL: "https://actingcallbackend.herokuapp.com/"
 }
  const handleApi = async (newData) => {
    await axios.post(`/api/casts/`, newData, axiosConfig).then((res)=> {
      console.log("res.data", res.data)
      notify();
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      type: event.target.type.value,
      platform: event.target.platform.value,
      period: event.target.period.value,
      role: event.target.role.value,
      gender: event.target.gender.value,
      details: event.target.details.value,
      contact: event.target.contact.value,
      location: event.target.location.value,
      company: event.target.company.value,
      remnueration: event.target.remnueration.value,
      loadingScale: event.target.loading_scale.value,
      contract: event.target.contract.value === "true" ? true : false,
      username: sessionData.username,
      email: sessionData.email,
      postedBy: sessionData.profiles,
    };
    handleApi(formData)
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
    <div className="grid grid-cols-1  text-white justify-items-center mx-36">
      <form
        className="grid-cols-12 col-span-1 flex gap-4 text-white w-full"
        onSubmit={handleSubmit}
      >
        <div className="firstDiv col-span-4 w-full">
          <div className="">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-white text-xs font-bold mb-2">
                Casting Type
              </label>
              <select
                name="type"
                className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
              >
                <option value="commercial">Commercial</option>
                <option value="government">Government</option>
                <option value="theatre">Theatre</option>
                <option value="modelling">Modelling</option>
                <option value="voiceover">Voiceover</option>
              </select>
            </div>
            <div className="relative w-full mb-3">
              <label className="block uppercase text-white text-xs font-bold mb-2">
                Platform
              </label>
              <select
                name="platform"
                className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
              >
                <option value="TV">TV</option>
                <option value="radio">Radio</option>
                <option value="print">Print/Magazine/Poster</option>
                <option value="stage">Stage</option>
              </select>
            </div>
            <div className="relative w-full mb-3">
              <label className="block uppercase text-white text-xs font-bold mb-2">
                Period in months
              </label>
              <input
                name="period"
                type="number"
                min="1"
                className="border-0 px-3 py-3 placeholder-white text-gray-700 bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="Period in months"
              />
            </div>
            <div className="relative w-full mb-3">
              <label className="block uppercase text-white text-xs font-bold mb-2">
                Role
              </label>
              <input
                name="role"
                className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="Role"
              />
            </div>
            <div className="relative w-full mb-3">
              <label className="block uppercase text-white text-xs font-bold mb-2">
                Gender
              </label>
              <select
                name="gender"
                className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="relative w-full mb-3">
              <label className="block uppercase text-white text-xs font-bold mb-2">
                Contact
              </label>
              <input
                name="contact"
                className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="Contact"
              />
            </div>
            <div className="relative w-full mb-3">
              <label className="block uppercase text-white text-xs font-bold mb-2">
                Location
              </label>
              <input
                name="location"
                className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="Location"
              />
            </div>

            <div className="text-center mt-6">
              <button
                className="bg-gold-light text-gray-800 active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                type="submit"
                style={{ transition: "all .15s ease" }}
              >
                Post gig
              </button>
            </div>
          </div>
        </div>
        <div className="secondDiv col-span-4 w-full ">
          <div className=" max-w-md">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-white text-xs font-bold mb-2">
                Company
              </label>
              <input
                name="company"
                className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="Company"
              />
            </div>
            <div className="relative w-full mb-3">
              <label className="block uppercase text-white text-xs font-bold mb-2">
                Remnueration (SGD)
              </label>
              <input
                name="remnueration"
                className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="Remnueration"
              />
            </div>
            <div className="relative w-full mb-3">
              <label className="block uppercase text-white text-xs font-bold mb-2">
                Loading scale
              </label>
              <select
                name="loading_scale"
                className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
              >
                <option value="local">Local</option>
                <option value="global">Global</option>
              </select>
            </div>
            <div className="relative w-full mb-3">
              <label className="block uppercase text-white text-xs font-bold mb-2">
                Contract
              </label>
              <select
                name="contract"
                className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>
        </div>
        <div className="thirdDiv col-span-4 w-full">
        <div className="">
          <div className="relative w-full mb-3">
            <label className="block uppercase text-white text-xs font-bold mb-2">
              Details
            </label>
            <input
              name="details"
              className="border-0 px-6 py-36 placeholder-white text-gray-100 bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="Details"
            />
          </div>
          </div>
        </div>
      </form>
    </div>
    </>
  );
}

export default CreateNewGigs;
