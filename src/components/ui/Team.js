import Image from "next/image";
import Link from "next/link";
import groupImg from '@/assets/team-group-pic.png';

const Team = () => {
    return (
        <div>
            {/* Our Team Section */}
      <div className="hero min-h-screen">
        <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
          <div className="w-[50%] ">
            <h1 className="text-red-600">About Team</h1>
            <p className="text-5xl font-bold py-6">We Are The Leader <br />
              In Web Design</p>
            <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            <Link href="/about">
              <button className="btn bg-[#2C2CF2] text-white rounded-full py-4 px-10">Meet Our Team</button>
            </Link>
          </div>
          <Image
            src={groupImg} className='w-2/5  pt-12'
            alt="Whale Loogan" />
        </div>
      </div>
        </div>
    );
};

export default Team;