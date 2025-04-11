
"use client";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Portfolio = () => {

  const [pics, setPics] = useState([]);

  useEffect(() => {
    fetch('/project.json')
      .then(res => res.json())
      .then(data => setPics(data))
  }, [])

  return (
    <div className='text-center' data-aos="fade-right">
      <p className="text-red-600">Portfolio</p>
      <p className='text-3xl md:text-4xl font-bold py-2 md:py-4 lg:py-7'>The Works We Are Proud Of</p>
      <Swiper
      spaceBetween={30}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      breakpoints={{
        0: {
          slidesPerView: 1,
          autoplay: {
            delay: 1000,
            disableOnInteraction: false,
          },
        },
        640: {
          slidesPerView: 2,
          autoplay: {
            delay: 1000,
            disableOnInteraction: false,
          },
        },
        1024: {
          slidesPerView: 3,
          autoplay: false,
        },
      }}
    >
        {
          pics.map(pic => (
            <SwiperSlide key={pic.id} className='h-36'>
              <div>
                <Image src={pic.img} alt="" width="4000" height="1000" className='rounded-3xl'/>
              </div>
            </SwiperSlide>
          ))}


      </Swiper>
    </div>
  );
};

export default Portfolio;