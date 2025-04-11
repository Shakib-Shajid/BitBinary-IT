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
                    className='md:w-3/4 lg:w-2/4 md:pt-12'
                    alt="BitBinary IT" />
                <div className="w-[80%] lg:w-[50%] ">
                    <h1 className="text-purple-700 text-xl font-bold">We are AI based IT Company</h1>
                    <p className="text-3xl md:text-5xl font-bold py-6 hidden md:inline-block">Less cost, Less time <br />
                        Make your <span className='text-amber-600'>effortlessly</span> website</p>
                    <p className="text-2xl font-bold md:hidden">Less cost, Less time — Make your effortlessly website.</p>
                    <p className="py-6">Appeal and engage your customers with a stunning, high-converting website designed to grow your business.</p>
                    <Link href="https://calendly.com/meeting-bitbinaryit/30min" target="_blank">
                        <button className="btn bg-[#2C2CF2] hover:bg-[#2b368e] text-white rounded-full md:py-4 md:px-10 w-full md:w-1/3 border-none">Get Started</button>

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;