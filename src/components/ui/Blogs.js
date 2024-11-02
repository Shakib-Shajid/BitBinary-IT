"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("./blog.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <div className='grid grid-cols-z1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-5 md:my-10 w-full md:w-[90%] mx-auto lg:w-full'>
                {
                    blogs.map(blog => (

                        <div className="card w-80 mx-auto md:w-80 lg:w-96 bg-base-100 shadow-xl" key={blog.id}>
                            <figure>
                                <Image src={blog.img} key={blog.id} width="384" height="100" alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{blog.title}</h2>
                                {/* <p>{blog.desc}</p> */}
                                <p>
                                    {blog.desc.length > 100
                                        ? (
                                            <>
                                                {blog.desc.slice(0, 100)}
                                                <Link href={`/blog/${blog.id}`}>
                                                .......<span className="text-blue-500 font-bold"> Read More</span>
                                                </Link>
                                            </>
                                        )
                                        : blog.desc}
                                </p>
                               
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Blogs;