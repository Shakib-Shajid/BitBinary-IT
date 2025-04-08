
const NewsLetter = () => {
    return (

        <div className="flex justify-center mt-16 mb-5" data-aos="zoom-in">

            <div className="h-[22.5rem] md:h-96 bg-black rounded-xl text-white text-center pt-8 md:pt-10 lg:pt-16 md:z-10 md:relative md:-mb-40 w-5/6 lg:w-4/5">
                <p className="text-xl md:text-2xl text-[#E6D5D5]">Join Our Community</p>
                <h2 className="text-2xl md:text-4xl lg:text-5xl my-4">Subscribe To Our Newsletter</h2>
                <p className="mb-4 text-[#E6D5D5] w-[80%] mx-auto">Subscribe to our newsletter for the latest updates, tips, and tech insights  <br />-  delivered straight to your inbox. No spam, just the good stuff.</p>
                <div>            
                    {/* for small device */}
                    <div className="md:hidden inline-block">
                        <input className="input bg-black py-3 px-5 border-white rounded-full text-[#E6D5D5] w-[80%]" placeholder="Enter Your Email Address" />
                        <button className="btn py-2 px-9 rounded-full text-white border-0 m-2 bg-[#2C2CF2] w-[80%]">Subscribe</button>
                    </div>

                    {/* for medium device */}
                    <div className="hidden lg:hidden md:inline-block space-y-5">
                        <input className="input bg-black py-7 px-10 border-white rounded-full text-[#E6D5D5] w-full" placeholder="Enter Your Email Address" />
                        <button className="btn px-9 py-4 rounded-full text-white border-0 bg-[#2C2CF2] w-full">Subscribe</button>
                    </div>

                    {/* for large device */}
                    <div className="hidden lg:flex justify-center items-center">
                        <input className="input bg-black w-2/4 py-7 px-10 border-white rounded-full text-[#E6D5D5]" placeholder="Enter Your Email Address" />
                        <button className="btn -ml-[8.6rem] py-2 px-9 rounded-full text-white border-0 m-4 bg-[#2C2CF2]">Subscribe</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewsLetter;