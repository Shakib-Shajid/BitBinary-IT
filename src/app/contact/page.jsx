import Image from "next/image";
import loc from '@/assets/loc.png'
import sms from '@/assets/sms.png'
import call from '@/assets/call.png'
import map from '@/assets/map.png'
import Link from "next/link";

const page = () => {
    return (
        <div>
           
            <div className="flex gap-5 md:gap-10 lg:gap-20 flex-col lg:flex-row items-center py-12 md:py-16">
                <div className="h-full bg-[#050591] rounded-xl text-white p-5 mt-5">
                    <h2 className="text-2xl md:text-4xl my-4 text-center lg:p-5">Let us Create Progress Together <br />
                        For Great Business</h2>

                    <div className="my-5 flex flex-wrap lg:flex-col">
                        <div className="flex gap-5 w-80 p-5 leading-loose items-center mx-auto lg:mx-0">
                            <Image src={loc} className="w-1/5 h-[75%]" alt="" />
                            <div className="text-left ">
                                <h4 className=" text-bold">Meet Us in Office:</h4>
                                <p className="text-sm text-[#D8BDBD]">Patricia C. 4401 Waldeck Street Grapevine Nashville, Tx</p>
                            </div>
                        </div>
                        <div className="flex gap-5 w-80 p-5 leading-loose items-center mx-auto lg:mx-0">
                            <Image src={sms} className="w-1/5 h-[75%]" alt="" />
                            <div className="text-left ">
                                <h4 className=" text-bold">Our Email Address:</h4>
                                <p className="text-sm text-[#D8BDBD]">abc123@gmail.com
                                    kapalishopnospondon.com</p>
                            </div>
                        </div>
                        <div className="flex gap-5 w-80 p-5 leading-loose items-center mx-auto lg:mx-0">
                            <Image src={call} className="w-1/5 h-[75%]" alt="" />
                            <div className="text-left ">
                                <h4 className=" text-bold">Contact Numbers:</h4>
                                <p className="text-sm text-[#D8BDBD]">+8801723456789
                                    +8801723456789</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:pt-10">
                    <p className="text-red-600 text-center">Contact With Us</p>
                    <h3 className="text-3xl lg:text-5xl font-bold py-3 text-center">Have any questions??</h3>

                    <div className="my-5 md:my-5 w-[80%] md:w-[80%] lg:w-full mx-auto space-y-2 md:space-y-0">
                        <div className="flex gap-2 md:gap-4 lg:gap-9 flex-col lg:flex-row space-y-2 md:space-y-0 mb-3">
                            <input type="text" placeholder="Your Name*" className="input input-bordered w-full py-3 px-6 rounded-full text-sm h-12" required name="" id="" />
                            <input type="email" placeholder="Your Email*" className="input input-bordered w-full py-3 px-6 rounded-full text-sm h-12" required name="" id="" />
                        </div>
                        <textarea placeholder="Questions" className="textarea md:h-56 lg:h-40 w-full rounded-xl py-3 px-6 text-sm" ></textarea>
                    <small className="md:my-2 lg:my-3 w-[90%] mx-auto text-red-600">Your email address will not be published. Required fields are marked* </small>
                        <div className="flex justify-end">
                            <Link href="/contact" className="btn bg-[#2C2CF2] text-white mt-3 md:py-4 md:px-10 rounded-full border-0 w-full">Send Message</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;