import Image from "next/image";
import Link from "next/link";
import groupImg from '@/assets/team-group-pic.png';

const Team = () => {
  return (
    <div>
      {/* Our Team Section */}
      <div className="hero min-h-screen md:mt-16 lg:mt-0" data-aos="fade-up">
        <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
          <div className="w-[80%] lg:w-[50%] ">
            <h1 className="text-red-600">About Team</h1>
            <p className="text-5xl font-bold py-6 hidden md:flex">We Are The Leader <br />
              In Web Development</p>
            <p className="text-2xl font-bold md:hidden">We Are The Leader In Web Design</p>
            <p className="py-2 md:py-6">We&apos;re a team of experienced developers who live and breathe code—and we&apos;re passionate about using AI to build smarter, faster, and better websites. Over the years, we&apos;ve helped businesses of all sizes turn ideas into powerful digital experiences. <br /><br /> From automation to performance, we focus on what really matters; results that help you grow. We&apos;re not here to follow trends—we’re here to set them.</p>
            <Link href="/about">
              <button className="btn bg-[#2C2CF2] text-white rounded-full md:py-4 md:px-10 w-full md:w-1/3 border-none">Meet Our Team</button>

            </Link>
          </div>
          <Image
            src={groupImg} className='w-3/4 md:w-3/4 lg:w-2/4 lg:pt-6'
            alt="BitBinary IT" />
        </div>
      </div>
    </div>
  );
};

export default Team;