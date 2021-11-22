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
    console.log("gigSelection", gigSelection)

  const handleClick = (e) => {
    console.log("what i clicked", e);
    setGigSelection(e);
    navigate(`/gigs/${e.id}`);

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
              <div className="m-3 p-3 bg-gray-500">
                {e.type}
                <div className="">
                  {e.platform}
                  <div>{e.role}</div>
                  <div>{e.company}</div>
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
