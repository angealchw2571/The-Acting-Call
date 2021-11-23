import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { atom, useAtom } from "jotai";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";


SwiperCore.use([Pagination, Navigation]);
export const arrAtom = atom([]);

function GigsCarousel(props) {
  //   console.log("props.gigsData", props.gigsData);
  const navigate = useNavigate();
  const gigsData = props.gigsData;
  const [gigSelection, setGigSelection] = useAtom(arrAtom);
  console.log("gigSelection", gigSelection);

  const handleClick = (e) => {
    // console.log("what i clicked", e);
    setGigSelection(e);
    navigate(`/gigs/list/${e.id}`);
  };

  return (
    <div className="text-white">
      <Swiper
        grid={{ rows: 3, fill: "column" }}
        slidesPerView={4}
        slidesPerColumn={3}
        slidesPerGroup={8}
        spaceBetween={0}
        slidesPerColumnFill="row"
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {gigsData.map((e) => {
          return (
            <SwiperSlide
              className="group text-center"
              key={e.id}
              onClick={() => handleClick(e)}
            >
              {/* <div className="m-3 p-3 bg-gray-500">
                {e.type}
                <div className="">
                  {e.platform}
                  <div>{e.role}</div>
                  <div>{e.company}</div>
                </div>
              </div> */}
              <div class="md:flex md:justify-center md:space-x-8 md:px-14">
                <div class="mt-8 py-4 px-12 w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                  <div class="w-sm">
                    {/* <img
                      class="w-64"
                      src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg"
                      alt=""
                    /> */}
                    <div class="mt-4 text-gold-base text-center">
                      <h1 class="text-xl font-bold">{e.role}</h1>
                      <div class="mt-4 text-gray-600 text-sm">
                      <div>{e.type}</div>
                      <div>{e.platform}</div>
                      <div>{e.company}</div>
                      <div>Contract: {e.contract ? (<span>Yes</span>) : (<span>No</span>)}</div>
                      </div>
                      <button class="mt-6 mb-4 py-2 px-10 text-sm rounded-full bg-gold-light text-white tracking-widest hover:bg-gray-400 transition duration-200">
                        MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default GigsCarousel;
