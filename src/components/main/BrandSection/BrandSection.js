import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./BrandSection.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// image
import one from "../../../images/adventure-1850912_1920.jpg";
import two from "../../../images/aerial-view-of-green-trees-beside-body-of-water-4006534-scaled.jpg";
import three from "../../../images/aerial-view-of-people-on-beach-4253835-2-scaled.jpg";

const BrandSection = () => {
  const images = [
    { _id: 1, img: one },
    { _id: 2, img: two },
    { _id: 3, img: three },
  ];

  return (
    <>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index+100}>
            <div key={image._id}
              className="w-[100%] h-[100%]"
              style={{
                backgroundImage: `url(${image.img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat ",
                padding: "0px !important",
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BrandSection;
/*  className="w-[100%] h-[100%] border-2"
          style={{
            backgroundImage: `url(${one})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat ",
            padding: "0px !important", */
