"use client";
import "./Swiper.css";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
function Swiper() {
  return (
    <>
      <SwiperComponent
        className="mt-3"
        spaceBetween={30}
        centeredSlides={true}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="daily-banner daily-banner-2">
          <div className="w-11/12  h-[500px] mx-auto flex items-center ">
            <div className="w-96">
              <span className="bg-amber-400 font-bold px-3 rounded-md text-sm my-3">
                30% chegirma
              </span>
              <h1 className="text-5xl font-bold text-slate-900 capitalize">
                Biror narsaning title i
              </h1>
              <p className="my-3 text-slate-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, cupiditate.
              </p>
              <button className="bg-slate-900 text-white py-3 px-4 rounded-lg mt-3">
                Sotib olish
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="daily-banner daily-banner-1">
          <div className="w-11/12  h-[500px] mx-auto flex items-center ">
            <div className="w-96">
              <span className="bg-amber-400 font-bold px-3 rounded-md text-sm my-3">
                30% chegirma
              </span>
              <h1 className="text-5xl font-bold text-slate-900 capitalize">
                Biror narsaning title i
              </h1>
              <p className="my-3 text-slate-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, cupiditate.
              </p>
              <button className="bg-slate-900 text-white py-3 px-4 rounded-lg mt-3">
                Sotib olish
              </button>
            </div>
          </div>
        </SwiperSlide>
      </SwiperComponent>
    </>
  );
}
export default Swiper;
