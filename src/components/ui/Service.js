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
            <div className='flex gap-40'>
                <div>
                    {/* card 1 */}
                    <div className="card w-64">
                        <figure className="">
                            <Image
                                src={TA}
                                alt="Picture of the author"
                                height={100}
                                width={100}
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Team Accounts</h2>
                            <p>There are many variations
                                passages of lorem ipsum
                                majority some by words which
                                do not look</p>
                        </div>
                    </div>


                    {/* card 2 */}
                    <div className="card w-64 mt-10">
                        <figure className="">
                            <Image
                                src={CS}
                                alt="Picture of the author"
                                height={100}
                                width={100}
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Customer Support</h2>
                            <p>There are many variations
                                passages of lorem ipsum
                                majority some by words which
                                do not look</p>
                        </div>
                    </div>

                </div>


                <div className='mt-20'>

                    {/* card 3 */}
                    <div className="card w-64">
                        <figure className="">
                            <Image
                                src={DA}
                                alt="Picture of the author"
                                height={100}
                                width={100}
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Digital Agency</h2>
                            <p>There are many variations
                                passages of lorem ipsum
                                majority some by words which
                                do not look</p>
                        </div>
                    </div>

                    {/* card 4 */}
                    <div className="card w-64 mt-10">
                        <figure className="">
                            <Image
                                src={AR}
                                alt="Picture of the author"
                                height={100}
                                width={100}
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">API Reference</h2>
                            <p>There are many variations
                                passages of lorem ipsum
                                majority some by words which
                                do not look</p>

                        </div>
                    </div>
                </div>

                {/* card 5 */}
                <div className="w-64 mt-48">
                    <h1 className="text-red-600">Our Service</h1>
                    <p className="text-5xl font-bold py-6">Ultimate Experiences</p>
                    <p className="py-6">In a professional context it often happens that private or corporate clients order a publication to be made and presented.</p>
                    <Link href="/about">
                        <button className="btn bg-[#2C2CF2] text-white rounded-full py-4 px-10">Read More</button>
                    </Link>
                </div>


            </div>
        </div>
    );
};

export default Service;