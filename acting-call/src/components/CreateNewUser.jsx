import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";


function CreateNewUser() {
  let navigate = useNavigate();
  const axiosConfig = {
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Credentials': true,
    //   'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
    //   'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
    // },
    baseURL: "https://castingcallbackend.herokuapp.com/"
 }

  const notifySuccess = () => toast.success("Success!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  const notify = () => toast.error("Your password do not match!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  const notifyError = () => toast.error("Something went wrong. Please try again.", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  const handleRegister = async (loginDetails) => {
    console.log("logindetails", loginDetails)
    await axios.post(`/api/account/register/`, loginDetails, axiosConfig).then((res) => {
      console.log("res.data", res.data);
      notifySuccess();
      navigate("/login")
    }).catch(function (error) {
      console.log(error);
      notifyError();
    });

  };
  const checkPassword = (password1, password2) => {
    if (password1 !== password2) {
      notify();
      return false;
    } else return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password1 = event.target.password1.value;
    const password2 = event.target.password2.value;
    const username = event.target.username.value;
    checkPassword(password1, password2)
    ?  handleRegister({ email: email, password: password1, username: username })
    : console.log("fail");
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
                      <h3 className="text-white text-lg font-bold uppercase">
                        Create a new account
                      </h3>
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
                          Email
                        </label>
                        <input
                          name="email"
                          type="email"
                          className="border-0 px-3 py-3 placeholder-white text-gray-700 bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
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
                          name="password1"
                          type="password"
                          className="border-0 px-3 py-3 placeholder-white text-gray-700 bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Password"
                          style={{ transition: "all .15s ease" }}
                        />
                        <input
                          name="password2"
                          type="password"
                          className="border-0 px-3 py-3 mt-6 placeholder-white text-gray-700 bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Confirm Password"
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
                          Create new account
                        </button>
                      </div>
                      <div className="mt-6">
                        <div className="text-center text-gray-300">
                          <small>
                            Already have an account?
                            <Link to="/login" className="text-gray-300">
                              {" "}
                              Log in
                            </Link>
                          </small>
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

export default CreateNewUser;
