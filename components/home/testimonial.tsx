import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
export interface TestimonialProps {}
const Testimonial: React.FC<TestimonialProps> = () => {
  function Slide() {
    return (
      <div className="min-h-[60vh] flex flex-col gap-4  pt-2 md:pt-4">
        <div className="flex gap-4 items-center">
        <div className="h-10 w-10 lg:h-14 lg:w-14 rounded-full  shadow">
          <img src="/assets/images/testimonial-avatar.png" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="text-lg md:text-xl lora-bold text-white">
          Mr.Client Name
        </div>
        </div>
        <div className="lora-regular md:text-lg lg:text-2xl xl:text-3xl text-white lora-bold  flex-1 quote-before">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsum
          dolore a reprehenderit ducimus architecto consequatur debitis quam
          voluptate dolores molestias at iste, deserunt eius consectetur fugiat
          pariatur et. Necessitatibus.
        </div>
      </div>
    );
  }
  return (
    <div className=" py-10">
      <div className="grid grid-cols-1 md:grid-cols-2  pr-4 lg:pr-10 xl:pr-20 bg-gradient-to-r from-[#14C3D9] to-[#A1D38D]">
        <div className="hidden md:block">
          <img src="/assets/images/testimonial_cover.jpg" alt="" className="h-full" />
        </div>
        <div className="px-4 md:px-6 lg:px-10 pt-4 md:pt-6 lg:pt-10">
          <div className="text-primary text-[24px] md:text-[30px] lg:text-[38px]  pb-4 lora-semibold">Our Testimonials</div>
          <div className="text-3xl md:text-4xl text-white lg:text-5xl pb-4 lora-bold">What Our Patients Say</div>
          <Swiper
           spaceBetween={30}
           centeredSlides={true}
           autoplay={{
             delay: 4500,
             disableOnInteraction: false,
           }}
           pagination={{
             clickable: true,
           }}
           loop={true}
           navigation={true}
           modules={[ Pagination]}
 className="mySwiper">
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
