
const NewsLetter = () => {
    return (

        <div className="flex justify-center">

            <div className="h-96 bg-black rounded-xl text-white text-center pt-16 z-10 relative -mb-40 w-4/5">
                <p className="text-2xl text-[#E6D5D5]">Join Our Community</p>
                <h2 className="text-5xl my-4">Subscribe To Our Newsletter</h2>
                <p className="mb-4 text-[#E6D5D5]">But I must explain to you how all this mistaken idea of denouncing <br />
                    pleasure and praising pain was born</p>
                <div>

                    <div className="flex justify-center items-center">
                        <input className="input bg-black w-2/4 py-7 px-10 border-white rounded-full text-[#E6D5D5]" placeholder="Enter Your Email Address" />
                        <button className="btn -ml-36 py-2 px-9 rounded-full text-white border-0 m-4 bg-[#2C2CF2]">Subscribe</button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewsLetter;