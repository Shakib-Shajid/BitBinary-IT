import Image from "next/image";
import cos from '@/assets/cos.png'
import fac from '@/assets/fac.png'
import bag from '@/assets/bag.png'
import Project from "@/components/ui/Project";


const page = () => {
    return (
        <div >
            <div className="text-center mt-3 md:mt-10">
                <p className="text-red-600">Portfolio</p>
                <h3 className="text-3xl lg:text-5xl font-bold py-3">Our Latest Works</h3>
            </div>
            <Project />
            <Project />
            <Project />
        </div>
    );
};

export default page;