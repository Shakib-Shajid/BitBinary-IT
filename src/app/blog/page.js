import React from 'react';
import Blogs from '@/components/ui/Blogs';


const page = () => {
    return (
        <div>
            <div className="text-center mt-3 md:mt-10">
                <p className="text-red-600">Blogs</p>
                <h3 className="text-3xl lg:text-5xl font-bold py-3">Our Latest Blogs</h3>
            </div>

            <div>
                <Blogs/>
            </div>
        </div>
    );
};

export default page;