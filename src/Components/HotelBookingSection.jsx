import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ImageSlider = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-[#5f5f47] bg-[url('bg.jpg')] bg-cover bg-center">
      <div className="w-full md:w-4/5 p-4">
        <Swiper
          spaceBetween={20}
          slidesPerView={1} // Default: 1 slide per view
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="rounded-xl h-[450px] md:h-[500px]"
        >
          {["/img1.jpg", "/img2.jpg", "/img3.jpg"].map((img, index) => (
            <SwiperSlide
              key={index}
              className="relative overflow-hidden rounded-t-full rounded-b-none bg-cover bg-center h-[450px] md:h-[500px] flex flex-col justify-end text-white p-4 md:p-6 shadow-xl before:absolute before:inset-0 before:bg-black/40 before:rounded-t-[50px] "
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="relative top-80 z-10 text-center md:text-left">
                <h3 className="text-lg md:text-xl font-bold">{["Luxury Suite", "Eco Cabin", "Lakeside Retreat"][index]}</h3>
                <p className="text-sm">Starting at ${[200, 150, 180][index]}/night</p>
                <button className="mt-3 md:mt-4 bg-white text-black py-2 px-4 rounded-full text-sm md:text-base">Book Now</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;
