import React from "react";

function Main() {
  return (
    <>
      <div>
        <div className="grid grid-cols-2 gap-20 justify-items-center">
          <div className="text-white text-3xl font-montserrat mt-16">
            {" "}
            Welcome to the <span className="text-yellow-200 font-montserrat">  Acting Call </span>
            <div className="h-70 grid grid-rows-3 grid-flow-col gap-4 mt-4">
              <div className="text-sm py-5 text-white max-w-sm leading-loose">Here you will find a variety of casting calls all over Singapore.<p> We aim to provide you the most up to date listings from respected production companies based in Singapore. </p> Find your next gig here</div>
              <div><button className="text-xs text-white bg-transparent border-2 rounded-full py-2 px-4 cursor-default hover:bg-gray-600 transition duration-500 ease-in-out flex items-center animate-pulse">Find out more</button></div>
            </div>
            <div className="text-yellow-200">list out jobs here</div>
          </div>
          <div>
            <img
              src="https://i.pinimg.com/originals/b8/8b/ee/b88beeca66aaf99e2126a9bf76799634.jpg"
              alt="blank"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
