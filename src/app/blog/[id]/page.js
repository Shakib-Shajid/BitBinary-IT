"use client"



import Image from 'next/image';
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
        <div>
            <Image src={blogs.img} width="1000" height="100" alt="" />
            <h1 className='text-3xl md:text-5xl font-semibold text-center pt-3 md:pt-5'>{blogs.title}</h1>
            <h3 className='py-3 md:py-6'>{blogs.desc}</h3>
            <h3 className='py-3 md:py-6'>{blogs.desc}</h3>
            <h3 className='py-3 md:py-6'>{blogs.desc}</h3>
            <h3 className='py-3 md:py-6'>{blogs.desc}</h3>
            <h3 className='py-3 md:py-6'>{blogs.desc}</h3>
            <h3 className='py-3 md:py-6'>{blogs.desc}</h3>
            <h3 className='py-3 md:py-6'>{blogs.desc}</h3>
            <h3 className='py-3 md:py-6'>{blogs.desc}</h3>

            
        </div>
    );
};

export default page;
