import Image from "next/image";
import logo from "../../assets/logo.png"
import Link from "next/link";


const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#2A33A7] text-white md:h-96 md:pt-52">
        <aside>
          <Image 
            src={logo}
            alt="whale-loogan"
          />
          <p>Whale Loogan<br/>Providing reliable tech since 2023</p>
        </aside> 
        <nav>
          <h6 className="footer-title">Services</h6> 
          <Link href="" className="link link-hover">Design</Link>
          <Link href="" className="link link-hover">Branding</Link>
          <Link href="" className="link link-hover">Marketing</Link>
          <Link href="" className="link link-hover">Advertisement</Link>
        </nav> 
        <nav>
          <h6 className="footer-title">Company</h6> 
          <Link href="/about" className="link link-hover">About us</Link>
          <Link href="/contact" className="link link-hover">Contact</Link>
          <Link href="/career" className="link link-hover">Career</Link>
        </nav> 
        <nav>
          <h6 className="footer-title">Legal</h6> 
          <Link href="" className="link link-hover">Terms of use</Link>
          <Link href="" className="link link-hover">Privacy policy</Link>
          <Link href="" className="link link-hover">Cookie policy</Link>
        </nav>
      </footer>
    );
};

export default Footer;