import React from 'react';
import Blogs from '@/components/ui/Blogs';


const page = () => {
    return (
        <div data-aos="fade-right">
            <div className="text-center pt-[4.5rem]">
                <p className="text-red-600">Blogs</p>
                <h3 className="text-3xl lg:text-5xl font-bold py-3">Our Latest Blogs</h3>
            </div>

            <div >
                <Blogs />
            </div>
        </div>
    );
};

export default page;