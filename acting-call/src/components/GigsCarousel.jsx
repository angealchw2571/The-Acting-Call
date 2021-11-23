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

  const icon = (e) => {
    if (e.type === "voiceover") return "https://cdn-icons.flaticon.com/png/512/2512/premium/2512097.png?token=exp=1637678448~hmac=21c3948324ac51cd9386815bb69ca27e"
    else if (e.type  === "theatre") return "https://cdn-icons-png.flaticon.com/512/91/91024.png"
    else if (e.type === "government") return "https://cdn-icons.flaticon.com/png/512/1582/premium/1582292.png?token=exp=1637677456~hmac=8b818d8e8527d467d7b92a217123bedc"
    else if (e.type === "modelling") return "https://cdn-icons.flaticon.com/png/512/3150/premium/3150502.png?token=exp=1637678382~hmac=e1e635b55c76ccf3c7dcfaf7f693c18e"
    else if (e.type === "commercial") return "https://cdn-icons.flaticon.com/png/512/2537/premium/2537940.png?token=exp=1637677760~hmac=034eeb6d72b81233c2d8cf9bcf6fa596"
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
