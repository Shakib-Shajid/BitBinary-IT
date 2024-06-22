"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const BlogDetail = ({ id }) => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const urlId = Number(window.location.pathname.split('/')[2]); // Extract ID from URL

    // show specific blog
    fetch('../blog.json')
      .then(res => res.json())
      .then(data => {
        const foundBlog = data.find(item => item.id === urlId);
        setBlog(foundBlog);
      });
  }, []); // Run once on initial render

  // .......................................................................................................
  const [newBlog, setNewBlog] = useState([])
  useEffect(() => {
    fetch('../blog.json')
      .then(res => res.json())
      .then(data => setNewBlog(data));
  }, [])
  // .......................................................................................................



  if (!blog) {
    return <div>Loading blog post...</div>;
  }

  return (
    <div className='flex flex-col md:flex-row gap-10 border-red-600 border-2 w-full'>
      <div className='lg:w-9/12'>
        <Image src={blog.img} width="900" height="100" alt="" className='rounded-2xl ' />
        <div className='bg-slate-100 p-10 rounded-2xl mt-5'>
          <h1 className='text-3xl md:text-5xl font-semibold text-center pt-3'>{blog.title}</h1>
          <div className='flex gap-2 md:gap-5 mt-2 md:mt-5 justify-center text-sm md:text-base'>
            <div>By Admin</div>
            <div>Date: 15 June 2024 </div>
            <div className='hidden md:block'>Comment: 3</div>
          </div>
          <hr />
          <h3 className='inline-grid py-3 md:py-6'>{blog.desc}</h3>
          <h3 className='inline-grid py-3 md:py-6'>{blog.desc}</h3>
          <h3 className='inline-grid py-3 md:py-6'>{blog.desc}</h3>
          <h3 className='inline-grid py-3 md:py-6'>{blog.desc}</h3>
          <h3 className='inline-grid py-3 md:py-6'>{blog.desc}</h3>
          <h3 className='inline-grid py-3 md:py-6'>{blog.desc}</h3>
        </div>
      </div>

      <div className='bg-white p-5 rounded-xl h-2/3'>
        <p className='text-lg font-bold pl-3'>Recent Posts </p>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, aut!</p> */}
        <p>{
          newBlog.map(blogging =>
            <div key={blog.id} className='p-3'>
              <h2 className="text-sm font-bold">{blogging.title}</h2>
              <p className='text-xs'>15 June 2024</p>
            </div>
          )

        }</p>
      </div>
    </div>
  );
};

export default BlogDetail;



