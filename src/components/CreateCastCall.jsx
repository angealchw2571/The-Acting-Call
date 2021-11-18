import React from "react";

function CreateCastCall() {

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
      posted_by: event.target.posted_by.value,
      company: event.target.company.value,
      remnueration: event.target.remnueration.value,
      loading_scale: event.target.loading_scale.value,
      contract: (event.target.contract.value) === "true" ? (true) : (false),
      
      
    };
    console.log("result", formData);
  };

  return (
    <div className="grid grid-cols-6 text-white justify-items-center">
      <div className="secondDiv col-span-4">
        <form className="flex flex-wrap max-w-md text-black" onSubmit={handleSubmit}>
          <div className="relative w-full mb-3">
            <label className="block uppercase text-white text-xs font-bold mb-2">
              Casting Type
            </label>
            <select name= "type"  className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full">
            <option value="commercial">Commercial</option>
            <option value="government">Government</option>
            <option value="theatre">Theatre</option>
            <option value="modelling">Modelling</option>
          </select>
          </div>
          <div className="relative w-full mb-3">
            <label className="block uppercase text-white text-xs font-bold mb-2">
              Platform
            </label>
            <select name= "platform"  className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full">
            <option value="tv">TV</option>
            <option value="radio">Radio</option>
            <option value="print">Print/Magazine/Poster</option>
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
              className="border-0 px-3 py-3 placeholder-white text-gray-700 bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="Role"
            />
          </div>
          <div className="relative w-full mb-3">
            <label className="block uppercase text-white text-xs font-bold mb-2">
              Gender
            </label>
            <select name= "gender"  className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full">
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
              className="border-0 px-3 py-3 placeholder-white text-gray-700 bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="Contact"
            />
          </div>
          <div className="relative w-full mb-3">
            <label className="block uppercase text-white text-xs font-bold mb-2">
              Location
            </label>
            <input
              name="location"
              className="border-0 px-3 py-3 placeholder-white text-gray-700 bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="Location"
            />
          </div>
          <div className="relative w-full mb-3">
            <label className="block uppercase text-white text-xs font-bold mb-2">
              Posted by
            </label>
            <input
              name="posted_by"
              className="border-0 px-3 py-3 placeholder-white text-gray-700 bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="Posted By"
            />
          </div>
          <div className="relative w-full mb-3">
            <label className="block uppercase text-white text-xs font-bold mb-2">
              Company
            </label>
            <input
              name="company"
              className="border-0 px-3 py-3 placeholder-white text-gray-700 bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="Company"
            />
          </div>
          <div className="relative w-full mb-3">
            <label className="block uppercase text-white text-xs font-bold mb-2">
              Remnueration (SGD)
            </label>
            <input
              name="remnueration"
              className="border-0 px-3 py-3 placeholder-white text-gray-700 bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="Remnueration"
            />
          </div>
          <div className="relative w-full mb-3">
            <label className="block uppercase text-white text-xs font-bold mb-2">
              Loading scale
            </label>
            <select name= "loading_scale"  className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full">
            <option value="local">Local</option>
            <option value="global">Global</option>
          </select>
          </div>
          <div className="relative w-full mb-3">
            <label className="block uppercase text-white text-xs font-bold mb-2">
              Contract
            </label>
            <select name= "contract"  className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          </div>
          <div className="relative w-full mb-3">
            <label className="block uppercase text-white text-xs font-bold mb-2">
              Details
            </label>
            <input
              name="details"
              className="border-0 px-3 py-3 placeholder-white text-gray-700 bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="Details"
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
        </form>
      </div>
    </div>
  );
}

export default CreateCastCall;
