"use client";

import {
  BsYoutube,
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsReddit,
} from "react-icons/bs";
import Container from "./Container";
import Logo from "./Logo";
import Image from "next/image";
import Link from "next/link";
import payment from "../images/payment.png";

const Footer = () => {
  return (
    <div className="w-full bg-darkText text-slate-100">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-y-4">
          <Logo />
          <p>
            Great review as always. Sounds like the mini-games and collectibles
            have not been that frustrating for Jake. Other reviews I read all
            say they are blah and that the open world doesn't have meaningful
            activities to do.
          </p>
          <div className="flex items-center gap-x-4">
            <span className="socialLink">
              <BsYoutube />
            </span>
            <span className="socialLink">
              <BsGithub />
            </span>
            <span className="socialLink">
              <BsLinkedin />
            </span>
            <span className="socialLink">
              <BsFacebook />
            </span>
            <span className="socialLink">
              <BsReddit />
            </span>
          </div>
        </div>

        <div>
          <p className="text-lg">Latest posts</p>
          <ul className="text-sm font-light mt-2 flex flex-col gap-y-2">
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-500 cursor-pointer duration-200">
                Where Music is headed next
              </span>{" "}
              <span className="text-orange-600">December 19, 2023</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-500 cursor-pointer duration-200">
                Where Music is headed next
              </span>{" "}
              <span className="text-orange-600">December 19, 2023</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-500 cursor-pointer duration-200">
                Where Music is headed next
              </span>{" "}
              <span className="text-orange-600">December 19, 2023</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-500 cursor-pointer duration-200">
                Where Music is headed next
              </span>{" "}
              <span className="text-orange-600">December 19, 2023</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-lg">Links</p>
          <ul className="text-base font-medium mt-2 flex flex-col gap-y-2">
            <Link href={"/"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                Home
              </li>
            </Link>
            <Link href={"/about"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                About
              </li>
            </Link>
            <Link href={"/cart"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                Cart
              </li>
            </Link>
            <Link href={"/news"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                News
              </li>
            </Link>
            <Link href={"/terms"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                Terms
              </li>
            </Link>
          </ul>
        </div>

        <div>
          <p className="text-lg mb-2">Pay us with your trusted services</p>
          <Image
            src={payment}
            alt="payment banner"
            className="w-full h-10 object-cover"
          />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
