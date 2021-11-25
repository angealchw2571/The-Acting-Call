import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

function ActorCarousel(props) {
  const actorData = props.props;
  const navigate = useNavigate();
  const handleClick = (e, username) => {
    console.log("handleClick", username)
    navigate(`/profile/${username}`);
  };
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={2}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {actorData.map((e, i) => {
          return (
            <SwiperSlide key={i} className=" group text-center" onClick={() => handleClick(e, e.username)}
            >
              <div className="imgDiv group-hover:opacity-20 mx-2">
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

export default ActorCarousel;
