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
    {
      _id: 1,
      img: one,
      title: "How lovely yellow is! It stands for the sun",
      tag: "sport",
    },
    {
      _id: 2,
      img: two,
      title: "Plan your work and work your plan",
      tag: "sport",
    },
    {
      _id: 4,
      img: three,
      title: "How lovely yellow is! It stands for the sun",
      tag: "sport",
    },
    {
      _id: 5,
      img: three,
      title: "How lovely yellow is! It stands for the sun",
      tag: "sport",
    },
    {
      _id: 6,
      img: three,
      title: "How lovely yellow is! It stands for the sun",
      tag: "sport",
    },
    {
      _id: 7,
      img: three,
      title: "How lovely yellow is! It stands for the sun",
      tag: "sport",
    },
    {
      _id: 8,
      img: three,
      title: "How lovely yellow is! It stands for the sun",
      tag: "sport",
    },
    {
      _id: 9,
      img: three,
      title: "How lovely yellow is! It stands for the sun",
      tag: "sport",
    },
  ];

  return (
    <>
      <Swiper
        grabCursor={true}
        // slidesPerView={4}
        spaceBetween={30}
        breakpoints={{
          // when window width is <= 1024px
          1200:{
            slidesPerView: 4,
            spaceBetweenSlides: 30,
          },
          992: {
            
            slidesPerView: 3,
            spaceBetweenSlides: 50,
          },
          // when window width is <= 768px
          768: {
           
            slidesPerView: 2,
            spaceBetweenSlides: 100,
          },
          600:{
            slidesPerView: 1,
            spaceBetweenSlides: 120,
          }
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index + 100}>
            <div className="flex flex-row items-center gap-x-5">
              <div className="relative w-[100px] h-[100px] ml-6 p-0 rounded-[50%]">
                <figure className="w-[100px] h-[100px] m-0 p-0 overflow-hidden  rounded-[50%]">
                  <img className="" src={image.img} alt="" />
                </figure>
              </div>
              <div>
                <div>
                  <p className="text-left font-bold capitalize">{image.tag}</p>
                </div>
                <div className="text-justify text-[15px] font-bold">
                  {image.title}
                </div>
              </div>
            </div>
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
