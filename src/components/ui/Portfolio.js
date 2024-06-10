
"use client";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import Client from './Client';
import Image from 'next/image';
import bag from '@/assets/bag.png'
import fac from '@/assets/fac.png'
import cos from '@/assets/cos.png'

const Portfolio = () => {

  return (
    <div className='text-center'>
      <p className="text-red-600">Portfolio</p>
      <p className='text-3xl md:text-4xl font-bold py-2 md:py-4 lg:py-7'>The Works We Are Proud Of</p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <Image src={bag} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image src={fac} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image src={cos} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image src={bag} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image src={fac} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image src={cos} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image src={bag} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image src={fac} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image src={cos} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;