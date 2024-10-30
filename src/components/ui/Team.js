import Image from "next/image";
import Link from "next/link";
import groupImg from '@/assets/team-group-pic.png';

const Team = () => {
    return (
        <div>
            {/* Our Team Section */}
      <div className="hero min-h-screen">
        <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
          <div className="w-[80%] lg:w-[50%] ">
            <h1 className="text-red-600">About Team</h1>
            <p className="text-5xl font-bold py-6 hidden md:flex">We Are The Leader <br />
              In Web Design</p>
            <p className="text-2xl font-bold md:hidden">We Are The Leader In Web Design</p>
            <p className="py-2 md:py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            <p className="py-2 md:py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            <Link href="/about">
              <button className="btn bg-[#2C2CF2] text-white rounded-full md:py-4 md:px-10 w-full md:w-1/3 border-none">Meet Our Team</button>

            </Link>
          </div>
          <Image
            src={groupImg} className='w-3/4 md:w-3/4 lg:w-2/4 lg:pt-6'
            alt="Whale Lagoon" />
        </div>
      </div>
        </div>
    );
};

export default Team;