import Image from "next/image";
import Link from 'next/link';
import TA from '@/assets/ta.png'
import DA from '@/assets/da.png'
import CS from '@/assets/cs.png'
import AR from '@/assets/ar.png'

const Service = () => {
    return (
        <div>
            {/* Service Section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto md:gap-10 lg:gap-30 my-2' data-aos="zoom-in">
                <div>
                    {/* card 1 */}
                    <div className="card w-72 mx-auto" data-aos="zoom-in">
                        <figure className="">
                            <Image
                                src={TA}
                                alt="Picture of the author"
                                className="w-1/5 md:w-1/3"

                            />

                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Team Accounts</h2>
                            <p>Collaborate better with secure and flexible team accounts. Whether you&apos;re a small startup or a growing tech firm, your team can work together efficiently with shared access and personalized roles.</p>
                        </div>
                    </div>


                    {/* card 2 */}
                    <div className="card w-72 mx-auto mt-2 md:mt-5 lg:mt-10" data-aos="zoom-in">
                        <figure className="">
                            <Image
                                src={CS}
                                alt="Picture of the author"
                                className="w-1/5 md:w-1/3"

                            />

                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Customer Support</h2>
                            <p>Need help? Our support team is here for you—real people who actually listen. We don&apos;t do scripts; we solve problems, fast. Because your time matters.</p>
                        </div>
                    </div>
                </div>

                <div className='mt-2 md:mt-10 lg:mt-20'>

                    {/* card 3 */}
                    <div className="card w-72 mx-auto" data-aos="zoom-in">
                        <figure className="">
                            <Image
                                src={DA}
                                alt="Picture of the author"
                                className="w-1/5 md:w-1/3"

                            />

                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Digital Agency</h2>
                            <p>We don&apos;t just build websites—we create digital experiences. From branding to backend, we partner with you to bring your ideas to life, beautifully and seamlessly.</p>
                        </div>
                    </div>

                    {/* card 4 */}
                    <div className="card w-72 mx-auto mt-2 md:mt-5 lg:mt-10" data-aos="zoom-in">
                        <figure className="">
                            <Image
                                src={AR}
                                alt="Picture of the author"
                                className="w-1/5 md:w-1/3"

                            />

                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">API Reference</h2>
                            <p>Our APIs are built for developers, by developers. Easy to read, well-documented, and reliable—so you can build faster without hitting roadblocks.</p>

                        </div>
                    </div>
                </div>

                {/* card 5 */}
                <div className="w-[80%] md:w-72 mx-auto md:mt-10 lg:mt-48 text-center" data-aos="zoom-in">
                    <h1 className="text-red-600">Our Service</h1>
                    <p className="py-3 text-3xl lg:text-5xl font-bold md:py-6">Ultimate Experiences</p>
                    <p className="py-3 md:py-6">In a professional context it often happens that private or corporate clients order a publication to be made and presented.</p>
                    <Link href="/about">
                        <button className="btn bg-[#2C2CF2] text-white rounded-full py-4 px-10 w-full md:w-2/3">Read More</button>
                    </Link>
                </div>
 

            </div>
        </div>
    );
};

export default Service;