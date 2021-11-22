import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

function GigsCarousel(props) {
  const actorData = props.props;

  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {actorData.map((e, i) => {
          return (
            <SwiperSlide key={i} className=" group text-center">
              <div className="imgDiv group-hover:opacity-20">
                <img className="" src={e.displayPicture} style={{maxHeight:350, maxWidth:250}} alt={e.name} />
              </div> 
              <div className="nameDiv text-xl opacity-0 absolute bottom-1/2 right-1/2 group-hover:opacity-100">
               <div className=""> 
                {e.name}
               </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default GigsCarousel;
