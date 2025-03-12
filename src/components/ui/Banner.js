"use client"
import Image from 'next/image';
import React, { useEffect } from 'react';
import firstImage from '@/assets/first-image.png';
import Link from 'next/link';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Banner = () => {
    
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="hero" data-aos="fade-up">
            <div className="hero-content flex-col md:gap-5 lg:gap-20 lg:flex-row-reverse mt-14 md:mt-6">
                <Image
                    src={firstImage}
                    // src="../../assets/first-image.png"
                    className='md:w-3/4 lg:mt-2/4 md:pt-12'
                    alt="BitBinary IT" />
                <div className="w-[80%] lg:w-[50%] ">
                    <h1 className="text-red-600 font-semibold">We are IT agency with Social Media</h1>
                    <p className="text-3xl md:text-5xl font-bold py-6 hidden md:flex">Make More Time <br />
                        For The Work <br />
                        That Matters <br />
                        Most</p>
                    <p className="text-2xl font-bold md:hidden">Make More Time For The Work That Matters Most</p>
                    <p className="py-6">When, while lovely valley teems with vapour around
                        meand meridian sun strikes the upper impenetrable</p>
                    <Link href="/contact">
                        <button className="btn bg-[#2C2CF2] text-white rounded-full md:py-4 md:px-10 w-full md:w-1/3 border-none">Get Started</button>

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;