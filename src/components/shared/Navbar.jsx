"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const pathName = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Projects", path: "/projects" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
  ];

  // Function to close dropdown on click
  const closeDropdown = () => setIsDropdownOpen(false);

  // Function to check if a link is active
  const isActive = (linkPath) => {
    if (linkPath === "/") {
      return pathName === "/";
    }
    return pathName?.startsWith(linkPath);
  };

  return (
    <div className="z-50 fixed top-0 left-0 w-full bg-[#B8DCFF]">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                {navLinks.map((navLink) => (
                  <li key={navLink.path}>
                    <Link
                      href={navLink.path}
                      className={isActive(navLink.path) ? "text-blue-600 font-bold" : ""}
                      onClick={closeDropdown} // Close dropdown on click
                    >
                      {navLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Link href="/">
            <Image src={logo} width={150} height={150} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((navLink) => (
              <li key={navLink.path}>
                <Link
                  href={navLink.path}
                  className={isActive(navLink.path) ? "text-blue-600 font-bold" : ""}
                >
                  {navLink.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            href="/contact"
            className="btn bg-[#2C2CF2] text-white md:py-4 md:px-10 rounded-full border-0"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
