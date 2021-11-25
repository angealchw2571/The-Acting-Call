import React from "react";
import { GiBackup } from "react-icons/gi";
import { Link } from "react-router-dom";
import { userSessionAtom } from "./Login";
import { useAtom } from "jotai";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";




export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(true);
  const [session, setSession] = useAtom(userSessionAtom);
  const sessionData = useAtom(userSessionAtom)[0];
  console.log("atom", sessionData)
  console.log("navbar", sessionData)

  const axiosConfig = {
    baseURL: "https://actingcallbackend.herokuapp.com/",

 }
 const payload = {
   refresh: sessionData?.token?.refresh,
  }

  const notifySuccess = () =>
    toast.success("Successfully logged out!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  
  const handleLogout = async(payload) => {
    await axios.post(`/api/account/logout/`,payload, axiosConfig).then((res)=> {
      console.log("res.data", res.data);
      notifySuccess()
      setSession([])
    }).catch(function (error) {
      console.log(error);
    });
  }


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
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black mb-3 border-b-2 font-montserrat">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
                  to="/"
                  className="px-6 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
              Acting Call<GiBackup />
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-row lg:flex-row list-none lg:ml-auto ">
              <li className="nav-item">
                <Link
                  to="/people"
                  className="px-6 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">people</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/forums"
                  className="px-6 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">forums</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/gigs"
                  className="px-6 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">gigs</span>
                </Link>
              </li>
              <li className="nav-item">
                
                  <Link
                  to="/profile"
                  className="px-6 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">profile</span>
                </Link>
              </li>
              {sessionData.username === undefined ? (<li className="nav-item">
              <Link
                  to="/login"
                  className="px-6 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">login / signup</span>
                </Link>
              </li>): (<div
                  className="px-6 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 cursor-pointer" onClick={()=>handleLogout(payload)}
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">logout</span>
                </div>)}
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
