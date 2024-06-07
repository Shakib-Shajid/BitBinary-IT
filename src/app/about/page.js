import Image from 'next/image';
import React from 'react';
import team1 from '@/assets/team-1.png';
import team2 from '@/assets/team-2.png';

const page = () => {
    return (
        <div className="hero mt-3 md:mt-10">
            <div className="hero-content flex-col md:gap-5 lg:gap-20 lg:flex-row-reverse">
                <div>
                    <Image
                        src={team1}
                        className='md:w-3/4 '
                        alt="Whale Loogan" />
                    <Image
                        src={team2}
                        className='md:w-3/4 md:pt-4'
                        alt="Whale Loogan" />
                </div>
                <div className="w-[50%] ">
                    <h1 className="text-red-600">Why Choose Us</h1>
                    <p className="text-3xl md:text-5xl font-bold py-6 hidden md:flex">An Exceptionally <br />
                        Unique Experience <br />
                        Tailored To You</p>
                    <p className="text-2xl font-bold md:hidden">An Exceptionally Unique Experience Tailored To You</p>
                    <p className="py-6">We are idea generators, goal seekers, challenge-thirsty
                        professionals, creators of unique internet projects, We
                        deliver unconventation solutions.</p>

                </div>
            </div>
        </div>
    );
};

export default page;