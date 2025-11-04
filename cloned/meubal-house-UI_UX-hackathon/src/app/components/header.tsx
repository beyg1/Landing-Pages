"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import MenuModel from "./MenuModel";
import CategoryModel from "./CategoryModel";
import SearchModel from "./SearchModel";

const Header = (props: { bgcolor: string }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <div
      className={`lg:h-[100px] md:h-[80px] xs:h-[60px] w-full bg-[${props.bgcolor}] flex items-center lg:justify-around md:justify-around xs:justify-between lg:px-0 md:px-0 xs:px-6`}
    >
      <div className="flex items-center md:justify-normal md:w-auto xs:justify-between xs:w-full">
        <div className="flex items-center md:hidden gap-4">
          <div>
            <MenuModel />
          </div>
        </div>
        <div className="flex md:flex-row xs:flex-col md:mt-0 xs:-mt-4 items-center">
          <div className="lg:h-[75px] lg:w-[75px] md:h-[70px] md:w-[70px] xs:h-[60px] xs:w-[60px]">
            <Link href={"/"}>
              <Image
                src={"/Logo.png"}
                height={75}
                width={75}
                alt="Logo"
              ></Image>
            </Link>
          </div>
          <div className=" font-bold md:mt-0 xs:-mt-3 lg:text-xl md:text-lg xs:text-sm cursor-default">
            <p>Meubel House</p>
          </div>
        </div>
        {/* Mobile navbar */}
        <div className="relative cursor-pointer md:hidden xs:flex items-center gap-5">
          <div className="relative">
            <div>
              <SearchModel />
            </div>
          </div>
          <div className="relative">
            <div>
              <AiOutlineShoppingCart size={25} cursor={"pointer"} />
            </div>
          </div>
          <div>
            <button>Sign In</button>
          </div>
        </div>
      </div>
      <div className="md:flex xs:hidden">
        <ul className="flex items-center lg:gap-12 md:gap-6 font-medium lg:text-base md:text-sm navlinks">
          <li className="relative">
            <Link href={"/"}>Home</Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setIsCategoryOpen(true)}
            onMouseLeave={() => setIsCategoryOpen(false)}
          >
            <Link href={"/shop"}>Shop</Link>
            {isCategoryOpen && <CategoryModel />}
          </li>
          <li className="relative">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="relative">
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>

      <div className="md:flex xs:hidden items-center justify-between lg:gap-8 md:gap-4 relative">
        <div>
          <SearchModel />
        </div>
        <div className="relative">
          <div>
            <AiOutlineShoppingCart size={25} cursor={"pointer"} />
          </div>
        </div>
        <div>
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
