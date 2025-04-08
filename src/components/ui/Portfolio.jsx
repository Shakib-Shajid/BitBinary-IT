
"use client";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
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
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          pics.map(pic => (
            <SwiperSlide key={pic.id}>
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