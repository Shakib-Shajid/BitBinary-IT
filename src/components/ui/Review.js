"use client";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Client from './Client';


const Review = () => {
    return (
        <div>
            <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Client />
        </SwiperSlide>
        <SwiperSlide>
          <Client />
        </SwiperSlide>
        <SwiperSlide>
          <Client />
        </SwiperSlide>
        <SwiperSlide>
          <Client />
        </SwiperSlide>
        <SwiperSlide>
          <Client />
        </SwiperSlide>
        <SwiperSlide>
          <Client />
        </SwiperSlide>
        <SwiperSlide>
          <Client />
        </SwiperSlide>
        <SwiperSlide>
          <Client />
        </SwiperSlide>
        <SwiperSlide>
          <Client />
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Review;