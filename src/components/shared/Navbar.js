"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png"

const Navbar = () => {

    const navItems = <>
        <li><Link href="/">Home</Link> </li>
        <li><Link href="/about">About</Link> </li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/blog">Blog </Link></li>
        <li><Link href="/contact">Contact </Link></li>
    </>

    return (
        <div className="navbar bg-[bg-base-100]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-base-100">
                    {navItems}
                    </ul>
                </div>
                <Link href="/">
                    <Image 
                    src={logo}
                    width={100}
                    height={100}
                    alt="Picture of the author"
                    />
                    </Link>
                    
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link href="/contact" className="btn bg-[#2C2CF2] text-white  md:py-4 md:px-10 rounded-full border-0">Get Started</Link>
            </div>
        </div>
    );
};
  
export default Navbar;