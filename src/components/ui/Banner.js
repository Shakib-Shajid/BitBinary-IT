import Image from 'next/image';
import React from 'react';
import firstImage from '@/assets/first-image.png';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className = "hero">
            <div className="hero-content flex-col md:gap-5 lg:gap-20 lg:flex-row-reverse">
                <Image
                    src={firstImage} 
                    className='md:w-2/4 md:pt-12'
                    alt="Whale Loogan" />
                <div className="w-[50%] ">
                    <h1 className="text-red-600">We Are Social Media Marketing Agency</h1>
                    <p className="text-3xl md:text-5xl font-bold py-6 hidden md:flex">Make More Time <br />
                        For The Work <br />
                        That Matters <br />
                        Most</p>
                    <p className="text-2xl font-bold md:hidden">Make More Time For The Work That Matters Most</p>
                    <p className="py-6">When, while lovely valley teems with vapour around
                        meand meridian sun strikes the upper impenetrable</p>
                    <Link href="/contact">
                        <button className="btn bg-[#2C2CF2] text-white rounded-full md:py-4 md:px-10">Get Started</button>
                            
                    </Link>
                </div>
            </div>
      </div>
    );
};

export default Banner;