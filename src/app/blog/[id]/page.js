"use client"



import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
// blog/[id].js (dynamic route)
// import Link from 'next/link';
// import { useParams } from 'next/navigation';
// import { useState, useEffect } from 'react';

// const BlogPost = () => {
//   const { id } = useParams(); // Get the ID from the URL query

//   const [blogData, setBlogData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {


//       const response = await fetch(`/blog.json`);
//       const data = await response.json();
//       console.log(data);

//       const post = data.find((item) => item.id === id);

//       setBlogData(post || null); // Set blogData to post if found, otherwise null

//     };

//   }, [id]);


//   return (
//     <div>
//       {/* <h1>{blogData.title}</h1>
//       <p>{blogData.content}</p> */}
//       <h3>Lorem ipsum dolor sit amet.</h3>
//       {/* Add other details as needed */}
//     </div>
//   );
// };

// export default BlogPost;



// In public folder there has a json file name "blog.json". In the app directory there has a folder name blog. in blog there has one folder and one page.js file.
// in folder that name is [id] and in [id] there has a file name page.js. 
// In this page.js file I use params to receive the id from URL. Now I want to show the id's details in this page. Now write a code so that I can show there info. use fetch here. 



import React, { useEffect, useState } from 'react';

const page = () => {

    const { id } = useParams();

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("../blog.json")
            .then(res => res.json())
            .then(data => {
                const post = data.find((item) => item.id === Number(id));
                setBlogs(post)
                console.log(post);

            })
    }, [])
    return (
        <div className='lg:w-9/12'>
            <Image src={blogs.img} width="900" height="100" alt="" className='rounded-2xl lg:w-9/12' />
            <div className='bg-slate-100 p-10 rounded-2xl mt-5 lg:w-9/12'>
                <h1 className='text-3xl md:text-5xl font-semibold text-center pt-3'>{blogs.title}</h1>
                <div className='flex gap-2 md:gap-5 mt-2 md:mt-5 justify-center text-sm md:text-base'>
                    <div>By Admin</div>
                    <div>Date: 15 June 2024 </div>
                    <div className='hidden md:block'>Comment: 3</div>
                </div>
                <hr />
                <h3 className='inline-grid py-3 md:py-6'>{blogs.desc}</h3>
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequuntur voluptatem laudantium nulla eum fugiat asperiores quod assumenda, qui a. Amet aperiam perspiciatis tenetur quidem expedita, in hic, impedit omnis sit maiores error recusandae id temporibus quae voluptatem maxime! Temporibus, officiis laborum! Impedit velit dolores, officia, sunt cumque totam adipisci quasi expedita doloremque accusantium, officiis nisi temporibus. Error dignissimos asperiores quos sapiente maxime temporibus quo maiores ratione! Cumque placeat, et eligendi, quo ipsam saepe cupiditate maiores quos praesentium sequi laudantium vel suscipit voluptate eius autem velit quis doloribus provident amet accusamus error voluptatem est odit iure. Dolore, quidem excepturi! Quisquam!</p>
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequuntur voluptatem laudantium nulla eum fugiat asperiores quod assumenda, qui a. Amet aperiam perspiciatis tenetur quidem expedita, in hic, impedit omnis sit maiores error recusandae id temporibus quae voluptatem maxime! Temporibus, officiis laborum! Impedit velit dolores, officia, sunt cumque totam adipisci quasi expedita doloremque accusantium, officiis nisi temporibus. Error dignissimos asperiores quos sapiente maxime temporibus quo maiores ratione! Cumque placeat, et eligendi, quo ipsam saepe cupiditate maiores quos praesentium sequi laudantium vel suscipit voluptate eius autem velit quis doloribus provident amet accusamus error voluptatem est odit iure. Dolore, quidem excepturi! Quisquam!</p>
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequuntur voluptatem laudantium nulla eum fugiat asperiores quod assumenda, qui a. Amet aperiam perspiciatis tenetur quidem expedita, in hic, impedit omnis sit maiores error recusandae id temporibus quae voluptatem maxime! Temporibus, officiis laborum! Impedit velit dolores, officia, sunt cumque totam adipisci quasi expedita doloremque accusantium, officiis nisi temporibus. Error dignissimos asperiores quos sapiente maxime temporibus quo maiores ratione! Cumque placeat, et eligendi, quo ipsam saepe cupiditate maiores quos praesentium sequi laudantium vel suscipit voluptate eius autem velit quis doloribus provident amet accusamus error voluptatem est odit iure. Dolore, quidem excepturi! Quisquam!</p>
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequuntur voluptatem laudantium nulla eum fugiat asperiores quod assumenda, qui a. Amet aperiam perspiciatis tenetur quidem expedita, in hic, impedit omnis sit maiores error recusandae id temporibus quae voluptatem maxime! Temporibus, officiis laborum! Impedit velit dolores, officia, sunt cumque totam adipisci quasi expedita doloremque accusantium, officiis nisi temporibus. Error dignissimos asperiores quos sapiente maxime temporibus quo maiores ratione! Cumque placeat, et eligendi, quo ipsam saepe cupiditate maiores quos praesentium sequi laudantium vel suscipit voluptate eius autem velit quis doloribus provident amet accusamus error voluptatem est odit iure. Dolore, quidem excepturi! Quisquam!</p>

            </div>

            <div>
                    <h3 className="text-xl lg:text-2xl font-bold mt-5 py-3 text-center md:text-start">Leave a Reply</h3>
                    <p className="my-2">Your email address will not be published. Required fields are marked* </p>

                    <div className="my-5 md:my-10 lg:w-9/12">
                    <textarea placeholder="Comment*" className="textarea h-32 w-full rounded-xl py-3 px-6 text-sm mb-2" ></textarea>
                        <div className="flex flex-col gap-5">
                            <input type="text" placeholder="Your Name*" className="input input-bordered  py-3 px-6 rounded-2xl text-sm h-16" required name="" id="" />
                            <input type="email" placeholder="Your Email*" className="input input-bordered  py-3 px-6 rounded-2xl text-sm h-16" required name="" id="" />
                        </div>
                        <div className="flex justify-end mt-3">
                            <Link href="/contact" className="btn bg-[#2C2CF2] text-white  md:py-4 md:px-10 rounded-full border-0">Post Comment</Link>
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default page;
