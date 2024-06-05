import Image from 'next/image';
import firstImage from '../assets/first-image.png';
import groupImg from '../assets/team-group-pic.png';
import Link from 'next/link';
import TA from '@/assets/ta.png'
import DA from '@/assets/da.png'
import CS from '@/assets/cs.png'
import AR from '@/assets/ar.png'
import CR from '@/assets/client-review.png'

const page = () => {
  return (
    <div>

      {/* Introduction Section */}
      <div className="hero min-h-screen">
        <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
          <Image
            src={firstImage} className='w-2/4 pt-12'
            alt="Whale Loogan" />
          <div className="w-[50%] ">
            <h1 className="text-red-600">We Are Social Media Marketing Agency</h1>
            <p className="text-5xl font-bold py-6">Make More Time <br />
              For The Work <br />
              That Matters <br />
              Most</p>
            <p className="py-6">When, while lovely valley teems with vapour around
              meand meridian sun strikes the upper impenetrable</p>
            <Link href="/contact">
              <button className="btn bg-[#2C2CF2] text-white rounded-full py-4 px-10">Get Started</button>
            </Link>
          </div>
        </div>
      </div>

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


      {/* Client Review Section */}
      <div className="hero min-h-screen">
        <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
          <div className="w-[50%] ">
            <h1 className="text-red-600">Client Review</h1>
            <p className="text-4xl font-bold py-6">Excellent Services and Obviously <br/>
             The Most Reliable One.</p>
            <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            <Link href="/about">
              <button className="btn bg-[#2C2CF2] text-white rounded-full py-4 px-10">Meet Our Team</button>
            </Link>
          </div>
          <Image
            src={CR} className='w-2/5  pt-12'
            alt="Whale Loogan" />
        </div>
      </div>

    </div>

  );
};

export default page;