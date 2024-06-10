"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Imgs = () => {


    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch('./team.json')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 mx-3 p-3'>
            {
                members.map(member => (
                    <Image key={member.id} src={member.img} width={500} height={500} alt="" />

                ))
            }
        </div>
    );
};

export default Imgs;