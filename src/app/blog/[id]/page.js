// "use client"

// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';

// const page = ({id}) => {


//     const [blog, setBlog] = useState(null);

//     useEffect(() => {

//     const urlId = Number(window.location.pathname.split('/')[2]); // Extract ID from URL

//         fetch("../blog.json")
//             .then(res => res.json())
//             .then(data => {
//                 const foundBlog = data.find((item) => item.id === urlId);
//                 setBlog(foundBlog);
//             });
//     }, []);

//     if (!blog) {
//         return <div>Loading blog post...</div>;
//       }

      
//     return (
//         <div className='lg:w-9/12'>
//             <Image src={blog.img} width="900" height="100" alt="" className='rounded-2xl lg:w-9/12' />
//             <div className='bg-slate-100 p-10 rounded-2xl mt-5 lg:w-9/12'>
//                 <h1 className='text-3xl md:text-5xl font-semibold text-center pt-3'>{blog.title}</h1>
//                 <div className='flex gap-2 md:gap-5 mt-2 md:mt-5 justify-center text-sm md:text-base'>
//                     <div>By Admin</div>
//                     <div>Date: 15 June 2024 </div>
//                     <div className='hidden md:block'>Comment: 3</div>
//                 </div>
//                 <hr />
//                 <h3 className='inline-grid py-3 md:py-6'>{blog.desc}</h3>
//                 <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequuntur voluptatem laudantium nulla eum fugiat asperiores quod assumenda, qui a. Amet aperiam perspiciatis tenetur quidem expedita, in hic, impedit omnis sit maiores error recusandae id temporibus quae voluptatem maxime! Temporibus, officiis laborum! Impedit velit dolores, officia, sunt cumque totam adipisci quasi expedita doloremque accusantium, officiis nisi temporibus. Error dignissimos asperiores quos sapiente maxime temporibus quo maiores ratione! Cumque placeat, et eligendi, quo ipsam saepe cupiditate maiores quos praesentium sequi laudantium vel suscipit voluptate eius autem velit quis doloribus provident amet accusamus error voluptatem est odit iure. Dolore, quidem excepturi! Quisquam!</p>
//                 <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequuntur voluptatem laudantium nulla eum fugiat asperiores quod assumenda, qui a. Amet aperiam perspiciatis tenetur quidem expedita, in hic, impedit omnis sit maiores error recusandae id temporibus quae voluptatem maxime! Temporibus, officiis laborum! Impedit velit dolores, officia, sunt cumque totam adipisci quasi expedita doloremque accusantium, officiis nisi temporibus. Error dignissimos asperiores quos sapiente maxime temporibus quo maiores ratione! Cumque placeat, et eligendi, quo ipsam saepe cupiditate maiores quos praesentium sequi laudantium vel suscipit voluptate eius autem velit quis doloribus provident amet accusamus error voluptatem est odit iure. Dolore, quidem excepturi! Quisquam!</p>
//                 <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequuntur voluptatem laudantium nulla eum fugiat asperiores quod assumenda, qui a. Amet aperiam perspiciatis tenetur quidem expedita, in hic, impedit omnis sit maiores error recusandae id temporibus quae voluptatem maxime! Temporibus, officiis laborum! Impedit velit dolores, officia, sunt cumque totam adipisci quasi expedita doloremque accusantium, officiis nisi temporibus. Error dignissimos asperiores quos sapiente maxime temporibus quo maiores ratione! Cumque placeat, et eligendi, quo ipsam saepe cupiditate maiores quos praesentium sequi laudantium vel suscipit voluptate eius autem velit quis doloribus provident amet accusamus error voluptatem est odit iure. Dolore, quidem excepturi! Quisquam!</p>
//                 <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequuntur voluptatem laudantium nulla eum fugiat asperiores quod assumenda, qui a. Amet aperiam perspiciatis tenetur quidem expedita, in hic, impedit omnis sit maiores error recusandae id temporibus quae voluptatem maxime! Temporibus, officiis laborum! Impedit velit dolores, officia, sunt cumque totam adipisci quasi expedita doloremque accusantium, officiis nisi temporibus. Error dignissimos asperiores quos sapiente maxime temporibus quo maiores ratione! Cumque placeat, et eligendi, quo ipsam saepe cupiditate maiores quos praesentium sequi laudantium vel suscipit voluptate eius autem velit quis doloribus provident amet accusamus error voluptatem est odit iure. Dolore, quidem excepturi! Quisquam!</p>

//             </div>

//             <div>
//                     <h3 className="text-xl lg:text-2xl font-bold mt-5 py-3 text-center md:text-start">Leave a Reply</h3>
//                     <p className="my-2">Your email address will not be published. Required fields are marked* </p>

//                     <div className="my-5 md:my-10 lg:w-9/12">
//                     <textarea placeholder="Comment*" className="textarea h-32 w-full rounded-xl py-3 px-6 text-sm mb-2" ></textarea>
//                         <div className="flex flex-col gap-5">
//                             <input type="text" placeholder="Your Name*" className="input input-bordered  py-3 px-6 rounded-2xl text-sm h-16" required name="" id="" />
//                             <input type="email" placeholder="Your Email*" className="input input-bordered  py-3 px-6 rounded-2xl text-sm h-16" required name="" id="" />
//                         </div>
//                         <div className="flex justify-end mt-3">
//                             <Link href="/contact" className="btn bg-[#2C2CF2] text-white  md:py-4 md:px-10 rounded-full border-0">Post Comment</Link>
//                         </div>
//                     </div>
//                 </div>

//         </div>
//     );
// };

// export default page;



"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const BlogDetail = ({ id }) => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const urlId = Number(window.location.pathname.split('/')[2]); // Extract ID from URL

    fetch('../blog.json')
      .then(res => res.json())
      .then(data => {
        const foundBlog = data.find(item => item.id === urlId);
        setBlog(foundBlog);
      });
  }, []); // Run once on initial render

  if (!blog) {
    return <div>Loading blog post...</div>;
  }

  return (
    <div className='lg:w-9/12'>
      <Image src={blog.img} width="900" height="100" alt="" className='rounded-2xl lg:w-9/12' />
      <div className='bg-slate-100 p-10 rounded-2xl mt-5 lg:w-9/12'>
        <h1 className='text-3xl md:text-5xl font-semibold text-center pt-3'>{blog.title}</h1>
        <div className='flex gap-2 md:gap-5 mt-2 md:mt-5 justify-center text-sm md:text-base'>
          <div>By Admin</div>
          <div>Date: 15 June 2024 </div>
          <div className='hidden md:block'>Comment: 3</div>
        </div>
        <hr />
        <h3 className='inline-grid py-3 md:py-6'>{blog.desc}</h3>
      </div>
    </div>
  );
};

export default BlogDetail;
