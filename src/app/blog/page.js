import Image from 'next/image';
import React from 'react';
import blog1 from '@/assets/blog-1.png'
import blog2 from '@/assets/blog-2.png'
import blog3 from '@/assets/blog-3.png'
import blog4 from '@/assets/blog-4.png'


const page = () => {
    return (
        <div>
            <div className="text-center mt-3 md:mt-10">
                <p className="text-red-600">Blogs</p>
                <h3 className="text-3xl lg:text-5xl font-bold py-3">Our Latest Blogs</h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-5 md:my-20'>

                <div className="card w-72 mx-auto md:w-80 lg:w-96 bg-base-100 shadow-xl">
                    <figure>
                        <Image src={blog1} alt=""/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">6 Examples of Brilliant Email Marketing</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley  </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>

                <div className="card w-72 mx-auto md:w-80 lg:w-96 bg-base-100 shadow-xl">
                    <figure>
                        <Image src={blog2} alt=""/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">How to measure the success of Social Media Marketing</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley  </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>

                <div className="card w-72 mx-auto md:w-80 lg:w-96 bg-base-100 shadow-xl">
                    <figure>
                        <Image src={blog3} alt=""/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Web Development: A Powerful Tool For Business</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley  </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>

                <div className="card w-72 mx-auto md:w-80 lg:w-96 bg-base-100 shadow-xl">
                    <figure>
                        <Image src={blog4} alt=""/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">How to Handle Competition in Business</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley  </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-72 mx-auto md:w-80 lg:w-96 bg-base-100 shadow-xl">
                    <figure>
                        <Image src={blog3} alt=""/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Web Development: A Powerful Tool For Business</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley  </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>

                <div className="card w-72 mx-auto md:w-80 lg:w-96 bg-base-100 shadow-xl">
                    <figure>
                        <Image src={blog4} alt=""/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">How to Handle Competition in Business</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley  </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default page;