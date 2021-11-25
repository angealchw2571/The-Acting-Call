import React from "react";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import { atom, useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";


SwiperCore.use([Pagination, Navigation]);
export const arrAtom = atom([]);

function GigsCarousel(props) {
  const navigate = useNavigate();
  const gigsData = props.gigsData;
  const [gigSelection, setGigSelection] = useAtom(arrAtom);

  const handleClick = (e) => {
    setGigSelection(e);
    navigate(`/gigs/list/${e.id}`);
  };

  const icon = (e) => {
    if (e.type === "voiceover") return "./pics/microphone.png"
    else if (e.type  === "theatre") return "./pics/mask.png"
    else if (e.type === "government") return "./pics/government.png"
    else if (e.type === "modelling") return "./pics/camera.png"
    else if (e.type === "commercial") return "./pics/loudspeaker.png"
  } 

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
              <div className="md:flex md:justify-center md:space-x-8 md:px-14">
                <div className="mt-8 py-4 px-12 w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                  <div className="w-md">
                    <img
                      className="w-20 mx-auto "
                      src={icon(e)}
                      alt="blank"
                    />
                    <div className="mt-4 text-gold-base text-center capitalize">
                      <h1 className="text-xl font-bold">{e.role}</h1>
                      <div className="mt-4 text-gray-600 text-md">
                      <div>{e.type}</div>
                      <div>{e.platform}</div>
                      <div>{e.company}</div>
                      <div>Contract: {e.contract ? (<span>Yes</span>) : (<span>No</span>)}</div>
                      </div>
                      <button className="mt-6 mb-4 py-2 px-10 text-sm rounded-full bg-gold-light text-white tracking-widest hover:bg-gray-400 transition duration-200">
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
