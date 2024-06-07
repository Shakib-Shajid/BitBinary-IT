import Image from 'next/image';
import React from 'react';
import team1 from '@/assets/team-1.png';
import team2 from '@/assets/team-2.png';
import MD from '@/assets/md.png'
import BM from '@/assets/bm.png'
import CEO from '@/assets/ceo.png'

const page = () => {
    return (
        <div>
            <div className="hero mt-3 md:mt-10">
                <div className="hero-content flex-col  lg:flex-row-reverse">
                    <div>
                        <Image
                            src={team1}
                            className='md:pt-12'
                            alt="Whale Loogan" />
                        <Image
                            src={team2}
                            className='md:pt-12'
                            alt="Whale Loogan" />
                    </div>
                    <div>
                        <div className="w-[75%] ">
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
                            <div className="card w-64">
                                <figure className="">
                                    <Image
                                        src={MD}
                                        alt="Picture of the author"
                                        className="w-1/5 md:w-2/5"

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
                            <div className="card w-64 ">
                                <figure className="">
                                    <Image
                                        src={BM}
                                        alt="Picture of the author"
                                        className="w-1/5 md:w-2/5"

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

            <div className='text-center mb-3 '>
                <h3 className='text-red-600'>Our Team</h3>
                <p className=" text-2xl md:text-5xl font-bold pt-3 pb-10">Meet The Minds Shaping <br />
                    An Industry</p>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 mx-3'>
                            <Image src={CEO} alt=""/>
                            <Image src={CEO} alt=""/>
                            <Image src={CEO} alt=""/>
                            <Image src={CEO} alt=""/>
                            <Image src={CEO} alt=""/>
                            <Image src={CEO} alt=""/>
                            <Image src={CEO} alt=""/>
                            <Image src={CEO} alt=""/>
                </div>
            </div>



        </div>
    );
};

export default page;