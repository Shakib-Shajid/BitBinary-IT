import Image from "next/image";
import loc from '@/assets/loc.png'
import sms from '@/assets/sms.png'
import call from '@/assets/call.png'
import map from '@/assets/map.png'
import Link from "next/link";

const page = () => {
    return (
        <div>
            <div className="flex justify-center items-center my-10">
                <div className="h-96 bg-[#050591] rounded-xl text-white text-center pt-8 md:pt-16 w-4/5">
                    <p className="text-xl md:text-2xl text-[#E6D5D5]">Contact With Us</p>
                    <h2 className="text-lg md:text-4xl my-4">Let's Create Progress Together <br />
                        For Great Business</h2>

                    <div className="flex my-10 flex-col md:flex-row">
                        <div className="flex gap-3 w-64 justify-center mx-auto">
                            <Image src={loc} className="w-1/5 h-[75%]" alt="" />
                            <div className="text-left ">
                                <h4 className=" text-bold">Meet Us in Office:</h4>
                                <p className="text-sm text-[#D8BDBD]">Patricia C. 4401 Waldeck Street Grapevine Nashville, Tx</p>
                            </div>
                        </div>
                        <div className="flex gap-3 w-64 justify-center mx-auto">
                            <Image src={sms} className="w-1/5 h-[75%]" alt="" />
                            <div className="text-left ">
                                <h4 className=" text-bold">Our Email Address:</h4>
                                <p className="text-sm text-[#D8BDBD]">riaz.ahmed8141@gmail.com
                                    kapalishopnospondon.com</p>
                            </div>
                        </div>
                        <div className="flex gap-3 w-64 justify-center mx-auto">
                            <Image src={call} className="w-1/5 h-[75%]" alt="" />
                            <div className="text-left ">
                                <h4 className=" text-bold">Contact Numbers:</h4>
                                <p className="text-sm text-[#D8BDBD]">+8801723456789
                                    +8801723456789</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-10 flex-col md:flex-row">
                <div>
                    <p className="text-red-600">Contact With Us</p>
                    <h3 className="text-3xl lg:text-5xl font-bold py-3">Don't Google <br />
                        Design Questions</h3>
                    <p className="md:my-2 lg:my-5">Your email address will not be published. Required fields are marked* </p>

                    <div className="my-5 md:my-10">
                        <div className="flex gap-2 md:gap-4 lg:gap-9 my-2 md:my-4 lg:my-8 flex-col lg:flex-row">
                            <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs py-5 px-10 rounded-full text-lg h-16" name="" id="" />
                            <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs py-5 px-10 rounded-full text-lg h-16" name="" id="" />
                        </div>
                        <textarea placeholder="Questions" className="textarea md:h-56 lg:h-80 w-full rounded-xl py-7 px-10 text-lg" ></textarea>
                        <Link href="/contact" className="btn bg-[#2C2CF2] text-white  md:py-4 md:px-10 rounded-full border-0">Get Started</Link>
                    </div>
                </div>
                
                <div className="mb-5">
                    <Image src={map} className=" md:my-10 md:w-full lg:w-3/4 mx-auto" alt="" />
                </div>
            </div>
        </div>
    );
};

export default page;