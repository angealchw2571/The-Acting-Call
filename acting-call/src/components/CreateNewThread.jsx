import React from "react";
import axios from "axios";
import { useAtom } from "jotai";
import { userSessionAtom } from "./Login";
import { ToastContainer, toast } from "react-toastify";

require("dotenv").config();

function CreateNewThread() {
  const sessionData = useAtom(userSessionAtom)[0];
  const URI = process.env.REACT_APP_URI

  const notifySuccess = () =>
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
    baseURL: URI,
  };

  const handlePost = async (formData) => {
    await axios
      .post(`/api/forums/posts/`, formData, axiosConfig)
      .then((res) => {
        console.log("res.data", res.data);
        notifySuccess()
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      title: event.target.title.value,
      description: event.target.description.value,
      postedUser: sessionData.username,
    };
    console.log("formData", formData);
    handlePost(formData);
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
      <div className="w-full lg:w-7/12 px-4 mx-auto mt-20">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg bg-base border-2">
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center mb-3">
              <h6 className="text-white text-lg font-bold">New Thread!</h6>
            </div>
            <hr className=" border-b-1 border-gray-400" />
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={handleSubmit}>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-white text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Title
                </label>
                <input
                  name="title"
                  className="border-0 px-3 py-3 placeholder-white text-gray-700 bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Title"
                  style={{ transition: "all .15s ease" }}
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-white text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Description
                </label>
                <input
                  name="description"
                  className="border-0 px-3 py-12 placeholder-white text-gray-700 bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Description"
                  style={{ transition: "all .15s ease" }}
                />
              </div>
              <div className="text-center mt-6">
                <button
                  className="bg-gold-light text-gray-800 active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                  type="submit"
                  style={{ transition: "all .15s ease" }}
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateNewThread;
