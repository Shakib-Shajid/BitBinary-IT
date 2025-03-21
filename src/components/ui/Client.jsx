import Image from 'next/image';
import Link from 'next/link';
import CR from '@/assets/client-review.png'

const Client = () => {

    return (
        <div>
            {/* Client Review Section */}
            <div className="hero mb-10">
                <div className="hero-content flex-col md:gap-10 lg:gap-20 lg:flex-row-reverse">
                    <div className="w-[80%] md:w-[70%] lg:w-[50%] ">
                        <h1 className="text-red-600">Client Review</h1>
                        <p className="text-4xl font-bold py-6 hidden md:flex">Excellent Services and Obviously <br />
                            The Most Reliable One.</p>
                        <p className="text-2xl font-bold md:hidden">Excellent Services and Obviously The Most Reliable One.</p>
                        <p className="md:py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        <Link href="/about">
                            <button className="btn bg-[#2C2CF2] text-white rounded-full md:py-4 md:px-10 my-5 w-full md:w-2/5 lg:w-1/3 border-none">Meet Our Team</button>
                        </Link>
                    </div>
                        <Image
                            src={CR} className='w-[80%] md:w-3/5 lg:w-2/5 lg:pt-6 mx-auto'
                            alt="BitBinary IT" />
                </div>
            </div>
        </div>
    );
};

export default Client;