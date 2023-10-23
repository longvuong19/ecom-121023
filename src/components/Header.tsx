"use client";

import React, { useEffect, useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import Image from "next/image";
import { IoMdCart } from "react-icons/io";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";
import { useSelector } from "react-redux";
import { Products, StateProps } from "../../type";
import FormattedPrice from "./FormattedPrice";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();
  // console.log(session);
  const { productData } = useSelector((state: StateProps) => state.shopping);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let amount = 0;
    productData.map((item: Products) => {
      amount += item.price * item.quantity;
      return;
    });
    setTotalAmount(amount);
  }, [productData]);

  return (
    <div className="bg-bodyColor h-20 top-0 sticky z-50">
      <Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start">
        <Logo />

        {/* Search Field */}
        <div className="w-full bg-white hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600">
          <FiSearch className="text-gray-500 group-focus-within:text-darkText duration-200" />
          <input
            type="text"
            placeholder="Search for products"
            className="placeholder:text-sm flex-1 outline-none"
          />
        </div>

        {/* Login/Register */}
        {!session && (
          <div className="headerDiv cursor-pointer" onClick={() => signIn()}>
            <AiOutlineUser className="text-2xl" />
            <p className="text-sm font-semibold">Login/Register</p>
          </div>
        )}

        {/* Cart Button */}
        <Link href={`/cart`}>
          <div className="cartDiv">
            <IoMdCart className="text-xl" />
            <p className="text-sm font-semibold">
              <FormattedPrice amount={totalAmount ? totalAmount : 0} />
            </p>
            <span className="bg-white text-orange-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black">
              {productData ? productData?.length : 0}
            </span>
          </div>
        </Link>

        {/* User Image */}
        {session && (
          <Image
            src={session?.user?.image as string}
            alt="user Image"
            width={44}
            height={44}
            className="rounded-full object-cover cursor-pointer"
          />
        )}

        {/* Log Out Btn */}
        {session && (
          <div
            className="headerDiv px-4 gap-x-1 cursor-pointer"
            onClick={() => signOut()}
          >
            <FiLogOut className="text-2xl" />
            <p className="text-sm font-semibold">Logout</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Header;
