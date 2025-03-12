"use client";
import Image from 'next/image';
import React from 'react';
import team1 from '@/assets/team-1.png';
import team2 from '@/assets/team-2.png';
import md from '@/assets/md.png'
import bm from '@/assets/bm.png'
import Imgs from '@/components/ui/Imgs';

const page = () => {

    return (
        <div >
      
            <div className="hero pt-16 md:pt-6 lg:pt-20">
                <div className="hero-content flex-col lg:flex-row-reverse"  data-aos="fade-up" data-aos-duration="1500" >
                    <div>
                        <Image
                            src={team1}
                            className='md:pt-12'
                            alt="BitBinary IT" />
                        <Image
                            src={team2}
                            className='md:pt-12'
                            alt="BitBinary IT" />
                    </div>
                    <div>
                        <div className="w-[80%] lg:w-[75%] mx-auto lg:mx-0">
                            <h1 className="text-red-600">Why Choose Us</h1>
                            <p className="text-3xl md:text-5xl font-bold py-6 hidden md:flex">An Exceptionally <br />
                                Unique Experience <br />
                                Tailored To You</p>
                            <p className="text-2xl font-bold md:hidden">An Exceptionally Unique Experience Tailored To You</p>
                            <p className="text-xl py-6">We are idea generators, goal seekers, challenge-thirsty
                                professionals, creators of unique internet projects, We
                                deliver unconventation solutions.</p>
                        </div>
                        {/* <div className='flex flex-col md:flex-row'> */}
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            {/* card 1 */}
                            <div className="card w-64 mx-auto">
                                <figure className="">
                                    <Image
                                        src={md}
                                        alt="Picture of the author"
                                        className="w-1/5 md:w-1/3"

                                    />

                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Team Accounts</h2>
                                    <p>There are many variations
                                        passages of lorem ipsum
                                        majority some by words which
                                        do not look</p>
                                </div>
                            </div>


                            {/* card 2 */}
                            <div className="card w-64 mx-auto ">
                                <figure className="">
                                    <Image
                                        src={bm}
                                        alt="Picture of the author"
                                        className="w-1/5 md:w-1/3"

                                    />

                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Customer Support</h2>
                                    <p>There are many variations
                                        passages of lorem ipsum
                                        majority some by words which
                                        do not look</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center mb-5 md:mb-10 lg:mb-20 ' data-aos="flip-left">
                <h3 className='text-red-600'>Our Team</h3>
                <p className=" text-2xl md:text-5xl font-bold pt-3 pb-10">Meet The Minds Shaping <br />
                    An Industry</p>
                <div>
                    <Imgs />
                    <Imgs />
                </div>

            </div>



        </div>
    );
};

export default page;