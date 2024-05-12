import Image from "next/image";
import Link from "next/link";
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black bg-pattern py-16">
      <div className="container mx-auto">
        {/* logo */}
        <div className="text-white flex flex-col items-center gap-y-6 justify-center">
        <Link href={"#"} className="">
          <div className="text-white text-3xl font-extrabold">
            <h1>AMeLINA<span className="text-secondary font-quicksand">PIZZA</span></h1>
          </div>
        </Link>
          <div className="flex gap-x-6 text-xl text-white">
            <Link href="#">
              <FaYoutube />
            </Link>
            <Link href="#">
              <FaFacebook />
            </Link>
            <Link href="#">
              <FaInstagram />
            </Link>
            <Link href="#">
              <FaPinterest />
            </Link>
          </div>
          <div className="text-white font-medium">
            Copyright &copy; Amelinapizza 2023. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
