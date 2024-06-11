import Image from "next/image";
import loc from '@/assets/loc.png'
import sms from '@/assets/sms.png'
import call from '@/assets/call.png'
import map from '@/assets/map.png'
import Link from "next/link";

const page = () => {
    return (
        <div>
           

            <div className="flex gap-5 md:gap-20 flex-col md:flex-row">
                <div className="h-full bg-[#050591] rounded-xl text-white p-5 mt-5 md:mt-20">
                    <h2 className="text-lg md:text-4xl my-4 text-center">Let us Create Progress Together <br />
                        For Great Business</h2>

                    <div className="my-5">
                        <div className="flex gap-5 w-64 p-5 leading-loose items-center">
                            <Image src={loc} className="w-1/5 h-[75%]" alt="" />
                            <div className="text-left ">
                                <h4 className=" text-bold">Meet Us in Office:</h4>
                                <p className="text-sm text-[#D8BDBD]">Patricia C. 4401 Waldeck Street Grapevine Nashville, Tx</p>
                            </div>
                        </div>
                        <div className="flex gap-5 w-64 p-5 leading-loose items-center">
                            <Image src={sms} className="w-1/5 h-[75%]" alt="" />
                            <div className="text-left ">
                                <h4 className=" text-bold">Our Email Address:</h4>
                                <p className="text-sm text-[#D8BDBD]">abc123@gmail.com
                                    kapalishopnospondon.com</p>
                            </div>
                        </div>
                        <div className="flex gap-5 w-64 p-5 leading-loose items-center">
                            <Image src={call} className="w-1/5 h-[75%]" alt="" />
                            <div className="text-left ">
                                <h4 className=" text-bold">Contact Numbers:</h4>
                                <p className="text-sm text-[#D8BDBD]">+8801723456789
                                    +8801723456789</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-red-600  text-center md:text-start">Contact With Us</p>
                    <h3 className="text-3xl lg:text-5xl font-bold py-3 text-center md:text-start">Do not Google <br />
                        Design Questions</h3>
                    <p className="md:my-2 lg:my-5">Your email address will not be published. Required fields are marked* </p>

                    <div className="my-5 md:my-10">
                        <div className="flex gap-2 md:gap-4 lg:gap-9 my-2 md:my-4 lg:my-8 flex-col lg:flex-row">
                            <input type="text" placeholder="Your Name*" className="input input-bordered w-full max-w-xs py-3 px-6 rounded-full text-sm h-16" required name="" id="" />
                            <input type="email" placeholder="Your Email*" className="input input-bordered w-full max-w-xs py-3 px-6 rounded-full text-sm h-16" required name="" id="" />
                        </div>
                        <textarea placeholder="Questions" className="textarea md:h-56 lg:h-80 w-full rounded-xl py-3 px-6 text-sm" ></textarea>
                        <div className="flex justify-end">
                            <Link href="/contact" className="btn bg-[#2C2CF2] text-white  md:py-4 md:px-10 rounded-full border-0">Send Message</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;