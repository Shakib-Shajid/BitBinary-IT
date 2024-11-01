import Project from "@/components/ui/Project";

const page = () => {
    return (
        <div  data-aos="zoom-in">
            <div className="text-center mt-3 md:mt-10" >
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