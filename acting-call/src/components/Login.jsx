import React from "react";
import axios from "axios";
import { RiGoogleFill } from "react-icons/ri";
import { useState } from "react";
import { atom, useAtom } from "jotai";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


export const userSessionAtom = atom([]);

export default function Login() {
  const [session, setSession] = useAtom(userSessionAtom);
  const [networkStatus, setNetworkStatus] = useState("pending");
  let navigate = useNavigate();
  console.log("sessionData (login)", session, networkStatus);

  const notify = () =>
    toast.error("Please check your login details again!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleLogin = async (loginDetails) => {
    await axios
      .post(`/api/account/login/`, loginDetails)
      .then((res) => {
        setSession(res.data);
        setNetworkStatus("resolved");
        if (res.data) navigate("/");
      })
      .catch(function (error) {
        console.log(error);
        setNetworkStatus("error");
        notify();
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    handleLogin({ username: username, password: password });
    // navigate("/"); //! redirect to homepage
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
      <main>
        <section className="absolute w-full h-full">
          <div className="absolute top-0 w-full h-full bg-base"></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-base border-2">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-white text-sm font-bold">
                        Sign in with
                      </h6>
                    </div>
                    <div className="btn-wrapper text-center">
                      <button
                        className="bg-gold-light active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        <RiGoogleFill className="mr-2" />
                        Google
                      </button>
                    </div>
                    <hr className=" border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-gray-100 text-center mb-3 font-bold">
                      <small>Or sign in with credentials</small>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-white text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Username
                        </label>
                        <input
                          name="username"
                          className="border-0 px-3 py-3 placeholder-white text-gray-700 bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Username"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-white text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          name="password"
                          type="password"
                          className="border-0 px-3 py-3 placeholder-white text-gray-700 bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Password"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                            style={{ transition: "all .15s ease" }}
                          />
                          <span className="ml-2 text-sm font-semibold text-white">
                            Remember me
                          </span>
                        </label>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-gold-light text-gray-800 active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="submit"
                          style={{ transition: "all .15s ease" }}
                        >
                          Sign In
                        </button>
                      </div>
                      <div className="mt-6">
                        <div className="text-center">
                          <Link to="/user/new" className="text-gray-300">
                            <small>Create new account</small>
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
