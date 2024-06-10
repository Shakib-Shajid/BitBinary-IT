"use client";
import Image from "next/image";
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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-5 md:my-10'>
                {
                    blogs.map(blog => (

                        <div className="card w-72 mx-auto md:w-80 lg:w-96 bg-base-100 shadow-xl" key={blog.id}>
                            <figure>
                                <Image src={blog.img} key={blog.id} width="384" height="100" alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{blog.title}</h2>
                                <p>{blog.desc} </p>
                                <div className="card-actions justify-end ">
                                    <button className="btn btn-primary">Read More</button>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>

    );
};

export default Blogs;