import Image from "next/image";
import cos from '@/assets/cos.png'
import fac from '@/assets/fac.png'
import bag from '@/assets/bag.png'


const page = () => {
    return (
        <div >
            <div className="text-center mt-3 md:mt-10">
                <p className="text-red-600">Portfolio</p>
                <h3 className="text-3xl lg:text-5xl font-bold py-3">Our Latest Works</h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
                <div>
                    <Image src={cos} className="w-[75%] block mx-auto" alt="" />
                    <div className="w-[75%] text-center block mx-auto">
                        <p className="font-bold">Loreal Beauty and Shampoo</p>
                        <p className="text-[#84868A] text-sm">Facebook Marketing  .  Website SEO</p>
                    </div>
                </div>
                <div>
                    <Image src={bag} className="w-[75%] block mx-auto " alt="" />
                    <div className="w-[75%] text-center block mx-auto">
                        <p className="font-bold">Luxury Meck Up LTD</p>
                        <p className="text-[#84868A] text-sm">Facebook Marketing  .  Website SEO</p>
                    </div>
                </div>
                <div>
                    <Image src={fac} className="w-[75%] block mx-auto" alt="" />
                    <div className="w-[75%] text-center block mx-auto">
                        <p className="font-bold">Health Tracker</p>
                        <p className="text-[#84868A] text-sm">Facebook Marketing  .  Website SEO</p>
                    </div>
                </div>
                <div>
                    <Image src={bag} className="w-[75%] block mx-auto " alt="" />
                    <div className="w-[75%] text-center block mx-auto">
                        <p className="font-bold">Luxury Meck Up LTD</p>
                        <p className="text-[#84868A] text-sm">Facebook Marketing  .  Website SEO</p>
                    </div>
                </div>
                <div>
                    <Image src={fac} className="w-[75%] block mx-auto" alt="" />
                    <div className="w-[75%] text-center block mx-auto">
                        <p className="font-bold">Health Tracker</p>
                        <p className="text-[#84868A] text-sm">Facebook Marketing  .  Website SEO</p>
                    </div>
                </div>

                <div>
                    <Image src={cos} className="w-[75%] block mx-auto" alt="" />
                    <div className="w-[75%] text-center block mx-auto">
                        <p className="font-bold">Loreal Beauty and Shampoo</p>
                        <p className="text-[#84868A] text-sm">Facebook Marketing  .  Website SEO</p>
                    </div>
                </div>
                <div>
                    <Image src={fac} className="w-[75%] block mx-auto" alt="" />
                    <div className="w-[75%] text-center block mx-auto">
                        <p className="font-bold">Health Tracker</p>
                        <p className="text-[#84868A] text-sm">Facebook Marketing  .  Website SEO</p>
                    </div>
                </div>
                <div>
                    <Image src={cos} className="w-[75%] block mx-auto" alt="" />
                    <div className="w-[75%] text-center block mx-auto">
                        <p className="font-bold">Loreal Beauty and Shampoo</p>
                        <p className="text-[#84868A] text-sm">Facebook Marketing  .  Website SEO</p>
                    </div>
                </div>
                <div>
                    <Image src={bag} className="w-[75%] block mx-auto " alt="" />
                    <div className="w-[75%] text-center block mx-auto">
                        <p className="font-bold">Luxury Meck Up LTD</p>
                        <p className="text-[#84868A] text-sm">Facebook Marketing  .  Website SEO</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default page;